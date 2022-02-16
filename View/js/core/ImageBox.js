function ImageBox(config){

	var self = this;

	self.id = config.id;
	// Create DOM

	self.dom = new Image();
	self.dom.className = "object";
	self.dom.src = config.src;
	self.dom.id = self.id;
	if(config.class !== undefined) self.dom.classList.add(config.class);

	if(config.onclick) self.dom.onclick = config.onclick;
	// Customize

	_configText(config, self.dom);

	self.changeImage = function (newSrc) {
		self.dom.src = newSrc;
	};
	// Add & Remove

	self.add = function(){ _add(self); };
	self.remove = function(){ _remove(self); };
}