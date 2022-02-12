function Perceptron(config) {

    var self = this;
    self.id = config.id;

    // DOM
    self.dom = document.createElement("div");
    self.dom.className = "object";

    let network = new Network(config.size, config.activationFun, config.activationFunOutput, config.activationFunInput);

    if (config.params) network.changeParams(config.params);

    network.getNodes().concat(network.links).forEach(x =>
        listen(network, "update/" + x.id,
            function (value, expected) {
                network.getById(x.id).setParam(value);
                network.forwardUpdate();
                publish("newOutput", [network, expected]);
            }));

    network.getNodes().concat(network.links).forEach(x =>
        listen(network, "change/" + x.id, function (value, expected) {
            network.getById(x.id).setParam(value);
        }));

    self.network = network;



    // Add & Remove
    self.add = function () {
        _add(self);
    };
    self.remove = function () {
        unlisten(network);
        _remove(self);
    };
}