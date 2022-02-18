let matrixProd = (A, B) => A.map((row, i) => B[0].map((_, j) => row.reduce((acc, _, n) => acc + A[i][n] * B[n][j], 0)));
let matrixSubtract = (A, B) => A.map((row, i) => row.map((a_ij, j) => a_ij - B[i][j]));
let vectorToMatrix = vec => vec.map(v_i => [v_i]);
let transpose = m => m[0].map((x, i) => m.map(x => x[i]));
let VectorProdToMatrix = (left, right) => matrixProd(vectorToMatrix(left), transpose(vectorToMatrix(right)));
let scaleMatrix = (a, m) => m.map(row => row.map(m_ij => a * m_ij))
let applyOnMatrix = (func, m) => m.map(row => row.map(v => func(v)))
let hadamardProductVec = (vec1, vec2) => vec1.map((v1_i, i) => v1_i * vec2[i])
let hadamardProductMatricies = (m1, m2) => m1.map((row, i) => row.map((_, j) => m1[i][j] * m2[i][j]))

let einheitsMatrix = (size) => Array.apply(null, new Array(size)).map((_, i, xs) => xs.map((_, k) => i === k ? 1 : 0));
let diagonalisiere = vec => vec.map((v_i, i, v) => v.map((_, k) => i === k ? v_i[0] : 0))

const TANH = {
    output: x => Math.tanh(x),
    der: x => 1 - Math.pow(TANH.output(x), 2)
};
const RELU = {
    output: x => Math.max(0, x),
    der: x => x <= 0 ? 0 : 1
};
const SIGMOID = {
    output: x => 1 / (1 + Math.exp(-x)),
    der: x => {
        let output = SIGMOID.output(x);
        return output * (1 - output);
    }
};
const LINEAR = {
    output: x => x,
    der: x => 1
};

let errorL2 = {
    output: (output, target) => .5 * Math.pow(output - target, 2),
    der: (output, target) => output - target,
};

let A1 = [
    [.15, .2, .35],
    [.25, .3, .35]
];
let A2 = [
    [.4, .45, .6],
    [.5, .55, .6]
];
let input = vectorToMatrix([.05, .1]);
input.push([1])

let target = vectorToMatrix([.01, .99]);

//Forward
let net_1 = matrixProd(A1, input);
console.log("net_1:")
console.table(net_1)

let out_1 = applyOnMatrix(SIGMOID.output, net_1)
console.log("out_1:")
console.table(out_1)

out_1.push([1])
let net_2 = matrixProd(A2, out_1)
console.log("net_2:")
console.table(net_2)

let out_2 = applyOnMatrix(SIGMOID.output, net_2)
console.log("out_2:")
console.table(out_2)

const getError = (output, target, errorFkt) => vectorToMatrix(output.map((o_i, i) => errorFkt.output(o_i, target[i])));
console.log("error:")
console.table(getError(out_2, target, errorL2))

//Backward
let derivativeLast = applyOnMatrix(SIGMOID.der, out_2)
console.log("derivativeLast:")
console.table(derivativeLast)

const getNabla = (output, target, errorFkt) => vectorToMatrix(output.map((o_i, i) => errorFkt.der(o_i, target[i])));
let nabla = getNabla(out_2, target, errorL2);
console.log("nabla:")
console.table(nabla)

let delta2 = (hadamardProductMatricies(nabla, applyOnMatrix(SIGMOID.der, net_2)));
console.log("delta2:")
console.table(delta2)

let getDelta = (w_l_plus_1, delta_l_plus_1, net_l, actFunc) => {
    net_l.push([1]);
    return hadamardProductMatricies(
        matrixProd(transpose(w_l_plus_1), delta_l_plus_1),
        applyOnMatrix(actFunc.der, net_l));
}

let delta1 = getDelta(A2, delta2, net_1, SIGMOID)
console.log("delta1:")
console.table(delta1)

let delta0 = getDelta(A1, delta1, input, SIGMOID)
console.log("delta0:")
console.table(delta0)

//update
let learningRate = 0.5

function Update(weightMatrix, leargingRate, delta, out) {
    return matrixSubtract(weightMatrix, scaleMatrix(leargingRate, matrixProd(delta, transpose(out))));
}

let A1_new = Update(A1, learningRate, delta1, input);
console.log("A1_new")
console.table(A1_new)

out_2.push([1])
let A2_new = Update(A2, learningRate, delta2, out_1)
console.log("A2_new");
console.table(A2_new)

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
const backProp = (nn, input, target, lossFunc, learingRate) => {
    const getNabla = (a_L, target, lossFunc) =>
        vectorToMatrix(a_L.map((o_i, i) => lossFunc.der(o_i, target[i])));

    let getDelta = (weights_l_plus_1, delta_l_plus_1, z_l, actFunc) => {
        z_l.push([1]);
        return hadamardProductMatricies(
            matrixProd(transpose(weights_l_plus_1), delta_l_plus_1),
            applyOnMatrix(actFunc.der, z_l));
    }

    const Update = (weightMatrix, leargingRate, delta_l, a_l_minus_1) =>
        matrixSubtract(weightMatrix, scaleMatrix(leargingRate, matrixProd(delta_l, transpose(a_l_minus_1))))

    forwardPropagate(nn, input);
    let deltas = [];
    let nabla = getNabla(nn.a.slice(-1).pop().slice(0,-1), target, lossFunc)
    deltas.unshift(hadamardProductMatricies(nabla, applyOnMatrix(SIGMOID.der, nn.z.slice(-1).pop())))
    let newWeights = []
    for (let i = nn.weights.length -1; i >= 0; i--) {
        newWeights.unshift(Update(nn.weights[i], learingRate, deltas[0], nn.a[i]));
        if(i !== 0) deltas.unshift(getDelta(nn.weights[i], deltas[0], nn.z[i - 1], nn.actFunc[i]));
    }
    nn.weights = newWeights;
    nn.deltas = deltas;
};

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
    actFunc: [SIGMOID, SIGMOID]
}
let NN = createNN([2, 2, 2], [SIGMOID, SIGMOID]);
forwardPropagate(NN2, [.05, .1])
console.log(NN2.weights);
backProp(NN2, [.05,.1],[.01, .99],errorL2, .5)
console.table(NN2.weights[1])
console.log(NN2.weights);
console.log(NN2.deltas)


// let der_net_h = applyOnMatrix(SIGMOID.der, net_1)
// console.table(der_net_h)
//
// let deltTimesOut = VectorProdToMatrix(nabla, out_1)
// console.table(deltTimesOut)
//
// let r1 = matrixProd(der_net_h, Transpose(der_net_h));
// console.table(diagonalisiere(der_net_h))
//
// console.table(matrixProd(r1, deltTimesOut))
// console.table(mResult);
// console.table(Transpose((mResult)));
// console.table(VectorProdToMatrix(vec1, vec1))
// console.table(scaleMatrix(5, m1))
