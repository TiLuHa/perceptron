function ImageBox(config){

	var self = this;
	self.id = config.id;

	// Create DOM
	self.dom = new Image();
	self.dom.className = "object";
	self.dom.classList.add("img");
	self.dom.src = config.src;
	self.dom.id = self.id;

	self.flipFunction = function (network) {
		let nnoutput = network.getOutputFast([config.xinput,config.yinput])[0];
		self.dom.src = nnoutput > 0 ? config.src : config.altsrc;
	};
	if (config.altsrc) listen(self, "newOutput", self.flipFunction);
	if (config.hoverZoom) self.dom.setAttribute("zoom",true);

	// Customize
	_configText(config, self.dom);

	// Add & Remove
	self.add = function(){ _add(self); };
	self.remove = function(){
		unlisten(self);
		_remove(self);
	};

}