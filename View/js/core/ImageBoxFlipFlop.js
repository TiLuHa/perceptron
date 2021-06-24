function ImageBoxFlipFlop(config){

	var self = this;
	self.id = config.id;

	// Create DOM
	self.dom = document.createElement("div");
	self.dom.id = self.id;
	let img = config.tooltip ? new Image(config.width, config.height) : new Image();
	img.className = "object";
	img.classList.add("img");
	img.src = config.src;
	self.dom.appendChild(img);

	if (config.hoverZoom) self.dom.setAttribute("zoom",true);

	// Flipflop
	if (config.altsrc) {
		let b = true;
		self.flipFunction = function () {
			b = !b;
			return b;
		};
		let flipmessage = config.flipmessage ? config.flipmessage : "newOutput";
		listen(self, flipmessage, function () {
			img.src = self.flipFunction() ? config.src : config.altsrc;
		});
	}

	// Flipflop based on Networkinput
	if (config.network && config.xinput && config.yinput) {
		self.network = config.network;
		self.flipFunction = function () {
			let nnoutput = self.network.getOutputFast([config.xinput,config.yinput])[0];
			return nnoutput > 0;
		};
	}

	if (config.tooltip) {
		let text = config.tooltiptext ? config.tooltiptext : "";
		let pos = config.tooltippos || "up";
 		self.dom.setAttribute("data-balloon", text);
		self.dom.setAttribute("data-balloon-pos", pos);

		if (config.network && config.xinput && config.yinput) {
			let updateTooltip = function () {
				//In NN wird der Wert des Pixels eingesetzt, ausgerechnet und
				//der alte Wert wieder eingesetzt.
				let oldinput = self.network.getInput();
				self.network.setInputAndUpdate([config.xinput, config.yinput]);
				self.dom.setAttribute("data-balloon",
                self.network.getFirstOutputNode().getOutputCalcStringBig());
				self.network.setInputAndUpdate(oldinput);
			};
			listen(self, "newOutput", updateTooltip);
			updateTooltip();
		}
	}

	// Customize
	_configText(config, self.dom);

	// Add & Remove
	self.add = function(){ _add(self); };
	self.remove = function(){
		unlisten(self);
		_remove(self);
	};

}