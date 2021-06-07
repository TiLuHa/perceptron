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

    network.links.forEach(link => listen(network, "update/link/"+link.id, function (value) {
        link.weight = value;
        network.forwardUpdate();
        publish("newOutput", [network]);
        console.log(network.getFirstOutput());
    }));

    network.nodes.forEach(node => listen(network, "update/node/" + node.id, function (value) {
        node.bias = value;
        network.forwardUpdate();
        publish("newOutput", [network]);
        console.log(network.getFirstOutput());
    }));




    // Add & Remove
    self.add = function(){ _add(self); };
    self.remove = function(){ _remove(self); };
}