let Activations =
    {
        TANH: x => Math.tanh(x),
        RELU: x => Math.max(0, x),
        SIGMOID: x => 1 / (1 + Math.exp(-x)),
        LINEAR: (x, alpha = 1) => x * alpha ,
        STEP: (x,alpha = 0) => x <= alpha ? 0 : 1
    };

/**
 * Matrixmultiplikation
 * @param a left Matrix
 * @param b right Matrix
 * @returns [[]]
 */
function multiplyMatrix(a, b) {
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

function Node(id){
    this.id = id;
    this.bias = Math.round((Math.random() - 0.5) * 10);
    this.result = 0;
    this.output = 0;
    this.inputLinks = [];
    this.outputLinks = [];
    this.activationFun = Activations.STEP;
    this.needsUpdate = true;

    this.updateOutput = function(){
        if (this.needsUpdate){
            this.result = this.inputLinks.reduce((sum, link) => sum + link.getValue(), this.bias);
            this.output = this.activationFun(this.result);
        }
    }

    this.setNeedsUpdate = function(){
        this.needsUpdate = true;
    }

    this.getResultCalcString = function(){
        return this.inputLinks.reduce((sum, link) => sum + " + " + link.getCalcString(), "" + this.bias) + " = " + this.result;
    }

    this.getOutputCalcString = function(){
        return "f(" + this.result + ") = " + this.output;
    }

    this.getOutputCalcStringBig = function(){
        return "f(" + this.getResultCalcString() + ") = " + this.output;
    }

    this.getOutputNodes = function(){
        return this.outputLinks.map(link => link.destination);
    }

    this.setOutput = function(value){
        this.output = value;
        this.getOutputNodes().forEach(node => node.setNeedsUpdate());
        this.needsUpdate = false;
    }

    this.setBias = function(value){
        this.bias = value;
        this.needsUpdate = true;
    }

    this.getParam = function(){
        return this.param;
    }

    this.setParam = function(value){
        this.bias = value;
    }
}

function Link(source, destination){
    this.source = source;
    this.destination = destination;
    this.weight = Math.round((Math.random() - 0.5) * 10);
    this.id = this.source.id + "-" + this.destination.id;

    this.getValue = function(){
        return this.source.output * this.weight;
    }

    this.setWeight = function(value){
        this.weight = value;
        this.destination.setNeedsUpdate();
    }

    this.getParam = function(){
        return this.param;
    }

    this.setParam = function(value){
        this.weight = value;
    }

    this.getCalcString = function(){
        return bracketsIfNeg(this.source.output) + "*" + bracketsIfNeg(this.weight);
    }
}

function Network(networkShape, activation, outputActivation, inputActivation = Activations.LINEAR){
    this.layers = [];
    this.links = [];
    this.idCounter = 0;

    this.generateNodeId = function(){
        return this.idCounter++;
    }

    this.construct = function(networkShape, activation, outputActivation, inputActivation){
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

    this.construct(networkShape, activation, outputActivation, inputActivation)
    //End of construction

    this.getNodes = function(){
        return [].concat(...this.layers);
    }

    this.getById = function(id){
        return this.getNodes().concat(this.links).find(x => x.id.toString() === id.toString());
    }

    this.changeParams = function(params){
        console.log(params);
        Object.entries(params).forEach(([id, value]) => this.getById(id).setParam(value));
    }

    this.getInputLayer = function(){
        return this.layers[0];
    }

    this.setInput = function(newInput){
        let inputLayer = this.getInputLayer();

        if (inputLayer.length !== newInput.length)
            throw new Error("input must match the number of nodes in the input layer");

        newInput.forEach((value, i) => inputLayer[i].bias = value);
    }

    this.getInput = function(){
        return this.getInputLayer().map(node => node.bias);
    }

    this.getOutputLayer = function(){
        return this.layers[this.layers.length - 1];
    }

    this.getOutput = function(){
        return this.getOutputLayer().map(node => node.output);
    }

    this.getWeightsOfLayer = function(index){
        if (index >= this.layers.length)
            return [[]];

        return this.layers[index].map(inputNode => inputNode.outputLinks.map(link => link. weight));
    }

    this.getOutputFast = function(input){
        let iterate = function (inp, layerid, network) {
            let weights = network.getWeightsOfLayer(layerid);
            let biases = network.layers[layerid + 1].map(node => node.bias);
            let actFuns = network.layers[layerid + 1].map(node => node.activationFun);

            let m = [].concat(...multiplyMatrix([inp], weights));  // m = Input * Weights
            let result = addVector(m, biases);                       // result = m + biases
            return result.map((x, i) => actFuns[i](x)); // Act(result) punktweise
        };

        return this.layers.slice(0, -1).reduce((lastResult, layer, i) => iterate(lastResult, i, this), input);
    }

    this.forwardUpdate = function(){
        this.layers.forEach(layer => layer.forEach(node => node.updateOutput()));
    }

    this.setInputAndUpdate = function(input){
        console.log(input);
        this.setInput(input);
        this.forwardUpdate();
    }

    this.getFirstOutput = function(){
        return this.getOutput()[0];
    }

    this.getFirstOutputNode = function(){
        return this.getOutputLayer()[0];
    }
}

// let network = new Network([2, 1], Activations.LINEAR, Activations.LINEAR);
// network.setInput([2, 4]);
// network.getNodes().forEach(node => node.bias = node.id);
// network.changeParams({"0":0, "1":0, "2":1, "0-2":1, "1-2":-1});
// network.links[0].weight = -2;
// network.links[1].weight = 3;
// network.getOutput()[0].bias = 1;
// network.forwardUpdate();
// console.log(network);
// console.log(network.getFirstOutput());
// console.log(network.getOutputFast([7, 8]));
// console.log(network.getNodes()[2].getOutputCalcStringBig());