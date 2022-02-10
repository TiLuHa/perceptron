let Activations =
    {
        TANH: {
            output: x => Math.tanh(x),
            der: x => 1 - Math.pow(TANH.output(x), 2)
        },
        RELU: {
            output: x => Math.max(0, x),
            der: x => x <= 0 ? 0 : 1
        },
        SIGMOID: {
            output: x => 1 / (1 + Math.exp(-x)),
            der: x => {
                let output = SIGMOID.output(x);
                return output * (1 - output);
            }
        },
        LINEAR: {
            output: x => x,
            der: x => 1
        },
        STEP: {
            output: (x, alpha = 0) => x <= alpha ? 0 : 1,
            der: x => 0
        }
    };

let Loss ={
    errorL2 : {
        output: (output, target) => .5 * Math.pow(output - target, 2),
        der: (output, target) => output - target,
    },
    errorL1 : {
        output: (output, target) => Math.abs(output - target),
        der: () => 1
    },
    logLikelihood: {
        output: (output, target) => -target * Math.log(output + 1 - target) * Math.log(1 - output),
        der: (output, target) => (target*Math.log(1+output+target)/(1-output))-(target*Math.log(1-output)/(1+output-target))
    }
}
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

function Node(id) {
    this.id = id;
    this.bias = Math.round((Math.random() - 0.5) * 10);
    this.result = 0;
    this.output = 0;
    this.inputLinks = [];
    this.outputLinks = [];
    this.activationFun = Activations.STEP;
    this.needsUpdate = true;

    this.updateOutput = function () {
        if (this.needsUpdate) {
            this.result = this.inputLinks.reduce((sum, link) => sum + link.getValue(), this.bias);
            this.output = this.activationFun.output(this.result);
        }
    }

    this.setNeedsUpdate = function () {
        this.needsUpdate = true;
    }

    this.getResultCalcString = function () {
        return this.inputLinks.reduce((sum, link) => sum + " + " + link.getCalcString(), "" + this.bias) + " = " + this.result;
    }

    this.getResultCalcStringWithBrWithoutFinalResult = function () {
        return this.inputLinks.reduce((sum, link) => sum + link.getCalcString() + "<br>+ ", "") + this.bias;
    }

    this.getOutputCalcString = function () {
        return "f(" + this.result + ") = " + this.output;
    }

    this.getOutputCalcStringBig = function () {
        return "f(" + this.getResultCalcString() + ") = " + this.output;
    }

    this.getOutputNodes = function () {
        return this.outputLinks.map(link => link.destination);
    }

    this.setOutput = function (value) {
        this.output = value;
        this.getOutputNodes().forEach(node => node.setNeedsUpdate());
        this.needsUpdate = false;
    }

    this.setBias = function (value) {
        this.bias = value;
        this.needsUpdate = true;
    }

    this.getParam = function () {
        return this.bias;
    }

    this.setParam = function (value) {
        this.bias = value;
    }
}

function Link(source, destination) {
    this.source = source;
    this.destination = destination;
    this.weight = Math.round((Math.random() - 0.5) * 10);
    this.id = this.source.id + "-" + this.destination.id;

    this.getValue = function () {
        return this.source.output * this.weight;
    }

    this.setWeight = function (value) {
        this.weight = value;
        this.destination.setNeedsUpdate();
    }

    this.getParam = function () {
        return this.param;
    }

    this.setParam = function (value) {
        this.weight = value;
    }

    this.getCalcString = function () {
        return bracketsIfNeg(this.source.output) + "*" + bracketsIfNeg(this.weight);
    }
}

function Network(networkShape, activation, outputActivation, inputActivation = Activations.LINEAR) {
    this.layers = [];
    this.links = [];
    this.idCounter = 0;

    this.generateNodeId = function () {
        return this.idCounter++;
    }

    this.construct = function (networkShape, activation, outputActivation, inputActivation) {
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

    this.getNodes = function () {
        return [].concat(...this.layers);
    }

    this.getById = function (id) {
        return this.getNodes().concat(this.links).find(x => x.id.toString() === id.toString());
    }

    this.changeParams = function (params) {
        Object.entries(params).forEach(([id, value]) => this.getById(id).setParam(value));
    }

    this.getInputLayer = function () {
        return this.layers[0];
    }

    this.setInput = function (newInput) {
        let inputLayer = this.getInputLayer();

        if (inputLayer.length !== newInput.length)
            throw new Error("input must match the number of nodes in the input layer");

        newInput.forEach((value, i) => inputLayer[i].bias = value);
    }

    this.getInput = function () {
        return this.getInputLayer().map(node => node.bias);
    }

    this.getOutputLayer = function () {
        return this.layers[this.layers.length - 1];
    }

    this.getOutput = function () {
        return this.getOutputLayer().map(node => node.output);
    }

    this.getWeightsOfLayer = function (index) {
        if (index >= this.layers.length)
            return [[]];

        return this.layers[index].map(inputNode => inputNode.outputLinks.map(link => link.weight));
    }

    this.getOutputFast = function (input) {
        let iterate = function (inp, layerid, network) {
            let weights = network.getWeightsOfLayer(layerid);
            let biases = network.layers[layerid + 1].map(node => node.bias);
            let actFuns = network.layers[layerid + 1].map(node => node.activationFun);

            let m = [].concat(...multiplyMatrix([inp], weights));  // m = Input * Weights
            let result = addVector(m, biases);                       // result = m + biases
            return result.map((x, i) => actFuns[i].output(x)); // Act(result) punktweise
        };

        return this.layers.slice(0, -1).reduce((lastResult, layer, i) => iterate(lastResult, i, this), input);
    }

    this.forwardUpdate = function () {
        this.layers.forEach(layer => layer.forEach(node => node.updateOutput()));
    }

    this.setInputAndUpdate = function (input) {
        this.setInput(input);
        this.forwardUpdate();
    }

    this.getFirstOutput = function () {
        return this.getOutput()[0];
    }

    this.getFirstOutputNode = function () {
        return this.getOutputLayer()[0];
    }

    this.asSimpleNN = function () {
        return {
            weights:
                this.layers.slice(1).map(layer => layer.map(node =>
                    node.inputLinks.map(link => link.weight).concat(node.bias))),

            ids:
                this.layers.slice(1).map(layer => layer.map(node =>
                    node.inputLinks.map(link => "" + link.id).concat("" + node.id))),

            actFunc:
                this.layers.slice(1).map(layer => layer[0].activationFun)
        };
    };
}

//let network = new Network([2, 1], Activations.LINEAR, Activations.LINEAR);
let network = new Network([2, 2, 2], Activations.RELU, Activations.RELU);

let NN2 = {
    weights: [
        [
            [.15, .2, .35],
            [.25, .3, .35]
        ],
        [
            [.4, .45, .6],
            [.5, .55, .6]
        ]
    ],
    actFunc: [Activations.RELU, Activations.RELU]
}
// network.setInput([2, 4]);
// network.getNodes().forEach(node => node.bias = node.id);
network.changeParams({
    "0-2": .15,
    "0-3": .25,
    "0": 0,
    "1-2": .2,
    "1-3": .3,
    "1": 0,
    "2": .35,
    "2-4": .4,
    "2-5": .5,
    "3": .35,
    "3-4": .45,
    "3-5": .55,
    "4": .6,
    "5": .6,
});
console.log(network.asSimpleNN())
// network.links[0].weight = -2;
// network.links[1].weight = 3;
// network.getOutput()[0].bias = 1;
// network.forwardUpdate();
//console.log(network);
// console.log(network.getFirstOutput());
// console.log(network.getOutputFast([7, 8]));
// console.log(network.getNodes()[2].getOutputCalcStringBig());