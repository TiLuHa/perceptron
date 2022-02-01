let ACTIVATIONS =
    {
        TANH: x => Math.tanh(x),
        RELU: x => Math.max(0, x),
        SIGMOID: x => 1 / (1 + Math.exp(-x)),
        LINEAR: (x, alpha = 1) => x * alpha ,
        STEP: (x,alpha = 0) => x <= alpha ? 0 : 1
    };

let Node = function (){

    function Node(id){
        this.id = id;
        this.bias = Math.round((Math.random() - 0.5) * 10);
        this.result = 0; //Value of sum of weights*input + bias
        this.output = 0; //Value of activationfunction(result)
        this.inputLinks = [];
        this.outputLinks = [];
        this.activationFun = ACTIVATIONS.STEP;
        this.needsUpdate = true;
    }

    Node.updateOutput = function() {
        if (this.needsUpdate) {
            this.result = this.inputLinks.reduce((sum, link) => sum + link.value, bias);
            this.output = this.activationFun(this.result);
        }
    }

    Node.setNeedsUpdate = function() {
        this.needsUpdate = true;
    }

    Node.getResultCalcString = function() {
        return this.inputLinks.reduce((sum, link) => sum + " + " + link.calcString, "" + bias) + " = " + result;
    }

    Node.getOutputCalcString = function() {
        return "f(" + this.result + ") = " + output;
    }

    Node.getOutputCalcStringBig = function() {
        return "f(" + this.getResultCalcString() + ") = " + output;
    }

    Node.setOutput = function(value) {
        this.output = value;
        this.getOutputNodes.forEach(node => node.setNeedsUpdate());
        this.needsUpdate = false;
    }

    Node.setBias = function(bias) {
        this.bias = bias;
        this.setNeedsUpdate();
    }

    Node.getOutputNodes = function() {
        return this.outputLinks.map(link => link.destination);
    }

    Node.getParam = function() {
        return this.bias;
    }

    Node.setParam = function(value) {
        this.bias = value;
    }
}

let Link = function (){
    function Link(source, destination){
        this.source = source;
        this.destination = destination;
        this.weight = Math.round((Math.random() - 0.5) * 10);
    }

    Link.getId = function() {
        return this.source.id + "-" + this.destination.id;
    }

    Link.getValue = function() {
        return this.source.output * weight;
    }

    Link.setWeight = function(weight) {
        this.weight = weight;
        this.destination.setNeedsUpdate();
    }

    Link.getParam = function() {
        return this.weight;
    }

    Link.setParam = function(value) {
        this.weight = value;
    }

    Link.getCalcString = function() {
        return bracketsIfNeg(this.source.output) + "*" + bracketsIfNeg(this.weight);
    }
}

let Network = function(){

    let idCounter = 0;
    Network.generateNodeId = function() {
        return idCounter++;
    }

    function Network(networkShape, activation, outputActivation, inputActivation = ACTIVATIONS.LINEAR) {
        this.layers = [];
        this.links = [];

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
                        console.log(prevNode);
                        let link = new Link(prevNode, node);
                        prevNode.outputLinks.push(link);
                        node.inputLinks.push(link);
                        this.links.push(link);
                    }
                }
            }
        }
    }

    /**
     * Setzt gezielt die weights und biases des NN.
     * @param params z.B. {"0-2":4, "2":5, 4:-2}
     */
    Network.changeParams = function(params) {
        Object.entries(params).forEach(([id, value]) => this.getById(id).param = value);
    }

    /**
     * Setzt die Werte des Inputlayers des NN.
     * @param newInput
     */
    Network.setInput = function(newInput) {
        if (this.getInputLayer.length !== newInput.length)
            throw new Error("input must match the number of nodes in the input layer");

        //Der Input ist im Bias der Inputnotes gespeichert.
        newInput.forEach((value, i) => this.getInputLayer[i].bias = value);
    }

    /**
     * Gibt den Input des NN als Array von Zahlen zurück.
     * @returns []
     */
    Network.getInput = function() {
        return this.getInputLayer.map(node => node.bias);
    }

    /**
     * Gibt den InputLAYER des NN zurück.
     * @returns []
     */
    Network.getInputLayer = function() {
        return this.layers[0];
    }

    /**
     * Gibt den OutputLAYER des NN zurück.
     * @returns []
     */
    Network.getOutputLayer = function() {
        return this.layers[this.layers.length - 1];
    }

    /**
     * Gibt den Output des NN als Array von Zahlen zurück.
     * @returns []
     */
    Network.getOutput = function() {
        return this.getOutputLayer.map(node => node.output);
    }

    /**
     * Gibt die Gewichte eines Layer in Matrixform zurück.
     * @param i 0<i<this.layers.length
     * @returns [[]]
     */
    Network.getLayerWeights = function(i) {
        if (i >= this.layers.length) return [[]];
        return this.layers[i].map(inputnode => inputnode.outputLinks.map(link => link.weight));
    }

    /**
     * Liefert für einen gegebenen Input den Output des NN zurück, ohne dieses zu verändern.
     * @param input
     * @returns []
     */
    Network.getOutputFast = function(input) {
        let iterate = function (inp, layerid) {
            let weights = this.getLayerWeights(layerid);
            let biases = this.layers[layerid+1].map(node => node.bias);
            let actFuns = this.layers[layerid + 1].map(node => node.activationFun);

            let m = [].concat(...multiplyMatrix([inp], weights));  // m = Input * Weights
            let result = addVector(m, biases);                       // result = m + biases
            return result.map((x, i) => actFuns[i](x)); // Act(result) punktweise
        };
        return this.layers.slice(0, -1).reduce((lastResult, layer, i) => iterate(lastResult, i), input);
    }

    /**
     * Die Outputs aller Nodes werde neu berechnet.
     * @returns Network
     */
    Network.forwardUpdate = function() {
        this.layers.forEach(layer => layer.forEach(node => node.updateOutput()));
    }

    Network.setInputAndUpdate = function(input) {
        this.setInput(input);
        this.forwardUpdate();
    }

    /**
     * Liefert alle Nodes des NN
     * @returns []
     */
    Network.getNodes = function() {
        return [].concat(...this.layers);
    }

    /**
     * Liefert den Link oder Node mit der passenden Id.
     * @param id
     * @returns {*}
     */
    Network.getById = function(id) {
        return this.getNodes.concat(this.links).find(x => x.id.toString() === id.toString());
    }

    Network.getFirstOutput = function() {
        return this.getOutput()[0];
    }

    Network.getFirstOutputNode = function() {
        return this.getOutputLayer()[0];
    }

}

/**
 * Matrixmultiplikation
 * @param a left Matrix
 * @param b right Matrix
 * @returns [[]]
 */
function multiplyMatrix(a, b) {
    let aNumRows = a.length, aNumCols = a[0].length,
        bNumRows = b.length, bNumCols = b[0].length,
        m = new Array(aNumRows);  // initialize array of rows
    for (let r = 0; r < aNumRows; ++r) {
        m[r] = new Array(bNumCols); // initialize the current row
        for (let c = 0; c < bNumCols; ++c) {
            m[r][c] = 0;             // initialize the current cell
            for (let i = 0; i < aNumCols; ++i) {
                m[r][c] += a[r][i] * b[i][c];
            }
        }
    }
    return m;
}

/**
 * Vektoraddition
 * @param a linkes Array
 * @param b rechtes Array
 * @returns []
 */
function addVector(a, b) {
    return a.map((a_i, i) => a_i + b[i]);
}

function bracketsIfNeg(x) {
    return x < 0 ? "(" + x + ")" : "" + x;
}

let network = new Network([2, 1], ACTIVATIONS.LINEAR, ACTIVATIONS.LINEAR);
console.log(network);
network.setInput([2, 4]);
network.getNodes().forEach(node => node.bias = node.id);
network.links[0].weight = -2;
network.links[1].weight = 3;
network.output[0].bias = 1;
network.forwardUpdate();
console.log(network);
console.log(network.getFirstOutput());