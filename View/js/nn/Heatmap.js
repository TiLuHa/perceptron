function Heatmap(config) {
    var self = this;
    self.id = config.id;


    self.dom = document.createElement("div");
    self.dom.className = "object";
    self.dom.id = self.id;

    let pixels = [];

    for (let i = config.xfirst; i < config.xcount; i++) {
        for (let j = config.yfirst; j < config.ycount; j++) {
            let pixel = document.createElement("div");
            let x = config.xfirst + config.xstepsize * i,
                y = config.yfirst + config.ystepsize * j;
            pixel.id = "pixel-" + x + "-" + y;
            pixel.style.left = (config.xsize * i + config.x) + "px";
            pixel.style.bottom = (config.ysize * j + config.y) + "px";
            pixel.className = "object";
            pixel.classList.add("heatmap_pixel");
            pixel.setAttribute("output", false);
            listen(self, "newOutput", function (network) {
                let nnoutput = network.getOutputFast([x,y])[0];
                pixel.setAttribute("output", nnoutput > 0);
                pixel.setAttribute("outputvalue", nnoutput);
            });
            self.dom.appendChild(pixel);
            pixels.push(pixel);
        }
    }

    self.add = function(){ _add(self); };
    self.remove = function(){
        unlisten(self);
        _remove(self);
    };

}