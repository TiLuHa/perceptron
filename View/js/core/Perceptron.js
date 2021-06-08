function Perceptron(config){

    var self = this;
    self.id = config.id;

    // DOM
    self.dom = document.createElement("div");
    self.dom.className = "object";
    var dom = self.dom;

    // Add Image Background
    var bg = new ImageBox({
        src: "assets/Jochen/Perceptron.PNG",
        x:0, y:0, width:640, height:400
    });
    dom.appendChild(bg.dom);

    var network = new Network([2, 1], Activations.RELU, Activations.RELU);
    console.log(network);

    network.nodes.concat(network.links).forEach(x => listen(network, "update/"+x.id, function (value) {
        network.getById(x.id).param = value;
        network.forwardUpdate();
        publish("newOutput", [network]);
    }));

    self.network = network;

    // Add & Remove
    self.add = function(){ _add(self); };
    self.remove = function(){
        unlisten(network);
        _remove(self);
    };
}