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
        x:0, y:0, width:300, height:300
    });
    dom.appendChild(bg.dom);

    var slider = new Slider({

    })

    // Add & Remove
    self.add = function(){ _add(self); };
    self.remove = function(){ _remove(self); };
}