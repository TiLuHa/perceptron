var Activations = /** @class */ (function () {
    function Activations() {
    }
    Activations.TANH = {
        output: function (x) { return Math.tanh(x); },
        der: function (x) {
            var output = Activations.TANH.output(x);
            return 1 - output * output;
        }
    };
    Activations.RELU = {
        output: function (x) { return Math.max(0, x); },
        der: function (x) { return x <= 0 ? 0 : 1; }
    };
    Activations.SIGMOID = {
        output: function (x) { return 1 / (1 + Math.exp(-x)); },
        der: function (x) {
            var output = Activations.SIGMOID.output(x);
            return output * (1 - output);
        }
    };
    Activations.LINEAR = {
        output: function (x) { return x; },
        der: function (x) { return 1; }
    };
    return Activations;
}());

var Node = /** @class */ (function () {
    /**
     * Creates a new node with the provided id and activation function.
     */
    function Node(id, activation, initZero) {
        /** List of input links. */
        this.inputLinks = [];
        this.bias = 0.1;
        /** List of output links. */
        this.outputs = [];
        /** Error derivative with respect to this node's output. */
        this.outputDer = 0;
        /** Error derivative with respect to this node's total input. */
        this.inputDer = 0;
        /**
         * Accumulated error derivative with respect to this node's total input since
         * the last update. This derivative equals dE/db where b is the node's
         * bias term.
         */
        this.accInputDer = 0;
        /**
         * Number of accumulated err. derivatives with respect to the total input
         * since the last update.
         */
        this.numAccumulatedDers = 0;
        this.id = id;
        this.activation = activation;
        if (initZero) {
            this.bias = 0;
        }
    }
    /** Recomputes the node's output and returns it. */
    Node.prototype.updateOutput = function () {
        // Stores total input into the node.
        this.totalInput = this.bias;
        for (var j = 0; j < this.inputLinks.length; j++) {
            var link = this.inputLinks[j];
            this.totalInput += link.weight * link.source.output;
        }
        this.output = this.activation.output(this.totalInput);
        return this.output;
    };
    return Node;
}());

var Link = /** @class */ (function () {
    /**
     * Constructs a link in the neural network initialized with random weight.
     *
     * @param source The source node.
     * @param dest The destination node.
     * @param regularization The regularization function that computes the
     *     penalty for this weight. If null, there will be no regularization.
     */
    function Link(source, dest, regularization, initZero) {
        this.weight = Math.random() - 0.5;
        this.isDead = false;
        /** Error derivative with respect to this weight. */
        this.errorDer = 0;
        /** Accumulated error derivative since the last update. */
        this.accErrorDer = 0;
        /** Number of accumulated derivatives since the last update. */
        this.numAccumulatedDers = 0;
        this.id = source.id + "-" + dest.id;
        this.source = source;
        this.dest = dest;
        this.regularization = regularization;
        if (initZero) {
            this.weight = 0;
        }
    }
    return Link;
}());