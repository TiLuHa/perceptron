function Iterated(config){

    var self = this;
    self.id = config.id;

    // DOM
    self.dom = document.createElement("div");
    self.dom.className = "object";
    self.dom.style.left = config.x+"px";
    self.dom.style.top = config.y+"px";


    // Add & Remove
    self.add = function(){ _add(self); };
    self.remove = function(){
        unlisten(self);
        _remove(self);
    };
}