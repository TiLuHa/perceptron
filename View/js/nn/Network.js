class Node {
    id;
    result = 0; //Value of sum of weights*input + bias
    output = 0; //Value of activationfunction(result)
    inputLinks = [];
    outputLinks = [];
    bias = Math.round((Math.random() - 0.5) * 10);
    activationFun = Activations.STEP;
    #needsUpdate = true;

    constructor(id) {
        this.id = id;
    }

    updateOutput() {
        if (this.#needsUpdate) {
            this.result = this.inputLinks.reduce((sum, link) => sum + link.value, this.bias);
            this.output = this.activationFun(this.result);
        }
    }

    setNeedsUpdate() {
        this.#needsUpdate = true;
    }

    set output(value) {
        this.output = value;
        this.outputLinks.forEach(link => link.destination.setNeedsUpdate());
        this.#needsUpdate = false;
    }

    set bias(bias) {
        this.bias = bias;
        this.setNeedsUpdate();
    }

}

class Link {
    source;
    destination;
    weight = Math.round((Math.random() - 0.5) * 10);

    constructor(source, destination) {
        this.source = source;
        this.destination = destination;
    }

    get id() {
        return this.source.id + "-" + this.destination.id;
    }

    get value() {
        return this.source.output * this.weight;
    }

    set weight(weight) {
        this.weight = weight;
        this.destination.setNeedsUpdate();
    }
}

class Network {
    layers = [];
    links = [];
    constructor(networkShape, activation, outputActivation, inputActivation = Activations.LINEAR, inputBias = 0) {
        let numLayers = networkShape.length;

        for (let layerIdx = 0; layerIdx < numLayers; ++layerIdx) {
            let isOutputLayer = layerIdx === numLayers - 1;
            let isInputLayer = layerIdx === 0;
            let currentLayer = [];
            this.layers.push(currentLayer);
            let numNodes = networkShape[layerIdx];

            for (let i = 0; i < numNodes; ++i) {
                let node = new Node(this.generateNodeId());
                if (isOutputLayer) {
                    node.activationFun = outputActivation;
                } else if (isInputLayer) {
                    node.activationFun = inputActivation;
                    node.bias = inputBias;
                } else {
                    node.activationFun = activation;
                }
                currentLayer.push(node);

                if (layerIdx >= 1) {
                    for (let j = 0; j < this.layers[layerIdx - 1].length; ++j) {
                        let prevNode = this.layers[layerIdx - 1][j];
                        let link = new Link(prevNode, node);
                        prevNode.outputLinks.push(link);
                        node.inputLinks.push(link);
                        this.links.push(link);
                    }
                }
            }
        }
    }

    #idCounter = 0;
    generateNodeId() {
        return this.#idCounter++;
    }

    set input(input) {
        if (this.input.length !== input.length)
            throw new Error("input must match the number of nodes in the input layer");

        input.forEach((value, i) => this.input[i].output = value);
    }

    get input() {
        return this.layers[0];
    }

    get output() {
        return this.layers[this.layers.length - 1];
    }

    forwardUpdate() {
        this.layers.forEach(layer => layer.forEach(node => node.updateOutput()));
        return this;
    }

    setInputAndUpdate(input) {
        this.input = input;
        this.forwardUpdate();
        return this;
    }

    get nodes() {
        return [].concat(...this.layers);
    }

    getById(id) {
        return Number.isInteger(id) ?
              this.nodes.find(node => node.id === id)
            : this.links.find(link => link.id === id);
    }

    addIncomingLinks(layerIndex, currentNode) {
        if (layerIndex <= 0 || layerIndex >= this.layers.length)
            return;

        this.layers[layerIndex - 1].forEach(node => {
            let link = new Link(node, currentNode);
            node.outputLinks.push(link);
            currentNode.inputLinks.push(link);
        });
    }

    addOutgoingLinks(layerIndex, currentNode) {
        if (layerIndex < 0 || layerIndex >= (this.layers.length - 1))
            return;

        this.layers[layerIndex + 1].forEach(node => {
            let link = new Link(node, currentNode);
            node.inputLinks.push(link);
            currentNode.outputLinks.push(link);
        });
    }

    // Currently unused
    addNode(layerIndex, threshhold = 0, activationFun) {
        let actFun = activationFun || layerIndex === (this.layers.length - 1) ? this.outputActivation : this.activation;
        let node = new Node(this.generateNodeId(), actFun);
        let layer = this.layers[layerIndex];
        layer.push(node);
        this.addIncomingLinks(layerIndex, node);
        this.addOutgoingLinks(layerIndex, node);
    }

    getFirstOutput() {
        return this.output[0].output;
    }

}

let Activations =
    {
        TANH: x => Math.tanh(x),
        RELU: x => Math.max(0, x),
        SIGMOID: x => 1 / (1 + Math.exp(-x)),
        LINEAR: (x, alpha = 1) => x * alpha ,
        STEP: (x,alpha = 0) => x <= alpha ? 0 : 1
    };

// let network = new Network([2, 1], Activations.LINEAR, Activations.LINEAR);
// network.input = [2, 4];
// network.nodes.forEach(node => node.bias = node.id);
// network.links[0].weight = -2;
// network.links[1].weight = 3;
// network.output[0].bias = 1;
// network.forwardUpdate();
// console.log(network);
// console.log(network.getFirstOutput());