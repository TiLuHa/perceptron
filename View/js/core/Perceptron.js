function Perceptron(config){

    var self = this;
    self.id = config.id;

    // DOM
    self.dom = document.createElement("div");
    self.dom.className = "object";
    var dom = self.dom;

    var network = new Network(config.size, config.activationFun, config.activationFunOutput);
    if(config.params) network.changeParams(config.params);
    console.log(network.getLayerWeights(0));
    console.log(network.getLayerWeights(1));
    console.log(network.getOutputFast([5, 5]));

    network.nodes.concat(network.links).forEach(x => listen(network, "update/"+x.id, function (value, expected) {
        network.getById(x.id).param = value;
        network.forwardUpdate();
        publish("newOutput", [network, expected]);
    }));

    network.nodes.concat(network.links).forEach(x => listen(network, "change/"+x.id, function (value, expected) {
        network.getById(x.id).param = value;
    }));

    self.network = network;

    // Add & Remove
    self.add = function(){ _add(self); };
    self.remove = function(){
        unlisten(network);
        _remove(self);
    };
}