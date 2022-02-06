import {activations} from "../sims/state";

let matrixProd = (A, B) => A.map((row, i) => B[0].map((_, j) => row.reduce((acc, _, n) => acc + A[i][n] * B[n][j], 0)));
let combineMatriciesPointwise = (A, B, operation) => A.map((row, i) => row.map((_, j) => operation(A[i][j], B[i][j])));
let hadamardProductMatricies = (A, B) => combineMatriciesPointwise(A,B,((a,b) => a * b))
let matrixSubtract = (A, B) => combineMatriciesPointwise(A,B,((a,b) => a - b))
let vectorToMatrix = vec => vec.map(v_i => [v_i]);
let transpose = m => m[0].map((x, i) => m.map(x => x[i]));
let applyOnMatrix = (func, m) => m.map(row => row.map(v => func(v)))
let scaleMatrix = (a, m) => applyOnMatrix((x => a * x), m)

const errorL2 = {
    output: (output, target) => .5 * Math.pow(output - target, 2),
    der: (output, target) => output - target,
};
const errorL1 = {
    output: (output, target) => math.abs(output - target),
    der: () => 1
}

const createNN = (layers, actFunc) => {
    let result = {weights: [], z: [], a: [], actFunc: []};
    const createMatrix = (rows, columns, filling = 1) => Array(rows).fill(Array(columns).fill(filling));

    for (let i = 0; i < layers.length - 1; i++) {
        result.actFunc[i] = actFunc[i];
        result.weights[i] = createMatrix(layers[i + 1], layers[i] + 1);
    }
    return result;
};

const forwardPropagate = (nn, input) => {
    nn.z = [];
    if (input) {
        nn.a = [];
        nn.a[0] = vectorToMatrix([...input]);
        nn.a[0].push([1]);
    } else {
        let save = [...nn.a[0]]
        nn.a = [];
        nn.a[0] = save;
    }

    for (let i = 0; i < nn.weights.length; i++) {
        nn.z[i] = matrixProd(nn.weights[i], nn.a[i]);
        nn.a[i + 1] = applyOnMatrix(nn.actFunc[i].output, nn.z[i]);
        nn.a[i + 1].push([1]);
    }
};

const backProp = (nn, input, target, lossFunc, learningRate) => {
    const getNabla = (a_L, target, lossFunc) =>
        vectorToMatrix(a_L.map((o_i, i) => lossFunc.der(o_i, target[i])));

    let getDelta = (weights_l_plus_1, delta_l_plus_1, z_l, actFunc) => {
        z_l.push([1]);
        return hadamardProductMatricies(
            matrixProd(transpose(weights_l_plus_1), delta_l_plus_1),
            applyOnMatrix(actFunc.der, z_l));
    }

    const Update = (weightMatrix, learningRate, delta_l, a_l_minus_1) =>
        matrixSubtract(weightMatrix, scaleMatrix(learningRate, matrixProd(delta_l, transpose(a_l_minus_1))))

    forwardPropagate(nn, input);
    let deltas = [];
    let nabla = getNabla(nn.a.slice(-1).pop().slice(0,-1), target, lossFunc)
    deltas.unshift(hadamardProductMatricies(nabla, applyOnMatrix(SIGMOID.der, nn.z.slice(-1).pop())))
    let newWeights = []
    for (let i = nn.weights.length - 1; i >= 0; i--) {
        newWeights.unshift(Update(nn.weights[i], learningRate, deltas[0], nn.a[i]));
        if(i !== 0) deltas.unshift(getDelta(nn.weights[i], deltas[0], nn.z[i - 1], nn.actFunc[i]));
    }
    nn.weights = newWeights;
    nn.deltas = deltas;
};

/*Example**************************************************************************************/
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

forwardPropagate(NN2, [.05, .1])
console.log(NN2.weights);
backProp(NN2, [.05,.1],[.01, .99],errorL1, .5)
console.table(NN2.weights[1])
console.log(NN2.weights);
console.log(NN2.deltas)
