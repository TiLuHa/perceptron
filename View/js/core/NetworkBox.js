function NetworkBox(config) {

    var self = this;

    self.id = config.id;
    // Create DOM
    self.doms = []

    if (config.type === "2-1") {
        let input1 = {};
        input1.dom = new Image();
        input1.dom.src = inputPictures.default

    } else if (config.type === "2-2-1") {

    }

    self.dom = new Image();
    self.dom.className = "object";
    self.dom.src = config.src;
    // Customize

    _configText(config, self.dom);
    self.changeImage = function (newSrc) {

        self.dom.src = newSrc;
    };

    // Add & Remove
    self.add = function () {
        _add(self);
    };
    self.remove = function () {
        _remove(self);
    };
}
