function Perceptron(config){

    var self = this;
    self.id = config.id;

    // DOM
    self.dom = document.createElement("div");
    self.dom.className = "object";



    // Add & Remove
    self.add = function(){ _add(self); };
    self.remove = function(){ _remove(self); };
}