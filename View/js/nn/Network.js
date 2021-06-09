class Node {
    id;
    bias = Math.round((Math.random() - 0.5) * 10);
    result = 0; //Value of sum of weights*input + bias
    output = 0; //Value of activationfunction(result)
    inputLinks = [];
    outputLinks = [];
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

    get param() {
        return this.bias;
    }

    set param(value) {
        this.bias = value;
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

    get param() {
        return this.weight;
    }

    set param(value) {
        this.weight = value;
    }
}

class Network {
    layers = [];
    links = [];
    constructor(networkShape, activation, outputActivation, inputActivation = Activations.LINEAR) {
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
                    node.bias = 0;
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

    changeParams(params) {
        Object.entries(params).forEach(([id, value]) => this.getById(id).param = value);
    }

    #idCounter = 0;
    generateNodeId() {
        return this.#idCounter++;
    }

    set input(newInput) {
        if (this.inputLayer.length !== newInput.length)
            throw new Error("input must match the number of nodes in the input layer");

        newInput.forEach((value, i) => this.inputLayer[i].output = value);
    }

    get input() {
        return this.inputLayer.map(node => node.output);
    }

    get inputLayer() {
        return this.layers[0];
    }

    get outputLayer() {
        return this.layers[this.layers.length - 1];
    }

    get output() {
        return this.outputLayer.map(node => node.output);
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
        return this.nodes.concat(this.links).find(x => x.id.toString() === id.toString());
    }

    getFirstOutput() {
        return this.output[0];
    }

}

/**
 * Matrixmultiplication
 * @param a left Matrix
 * @param b right Matrix
 * @returns {any[]}
 */
function multiply(a, b) {
    var aNumRows = a.length, aNumCols = a[0].length,
        bNumRows = b.length, bNumCols = b[0].length,
        m = new Array(aNumRows);  // initialize array of rows
    for (var r = 0; r < aNumRows; ++r) {
        m[r] = new Array(bNumCols); // initialize the current row
        for (var c = 0; c < bNumCols; ++c) {
            m[r][c] = 0;             // initialize the current cell
            for (var i = 0; i < aNumCols; ++i) {
                m[r][c] += a[r][i] * b[i][c];
            }
        }
    }
    return m;
}

// var a = [[8, 3], [2, 4], [3, 6]],
//     b = [[1, 2, 3], [4, 6, 8]];
// console.log(a);
// console.log(b);
// console.log(multiply(a, b));

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