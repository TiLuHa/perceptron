function SVGBox(config){

	var self = this;

	self.id = config.id;
	// Create DOM

	//self.dom = new SVGElement()
	self.dom = document.createElement("svg");
	self.dom.className = "object";
	self.dom.classList.add("perceptronLeft");
	self.dom.style.transform = "translate(" + config.x + "px, " + config.y + "px)";
	self.dom.setAttribute("height","210")
	self.dom.setAttribute("width","400")

	self.path = document.createElement("path");
	self.path.setAttribute("d", "M145.5 133.5C160.13 129.585 175.013 133.824 185.5 133.5 209.139 134.366 227.26 146.235 225.5 161 220.138 175.321 208.442 189.196 185.5 188.5 171.055 192.492 163.043 186.365 145.5 188.5 139.134 171.941 146.608 146.619 145.5 133.5Z")
	self.path.setAttribute("stroke", "blue");
	self.path.setAttribute("stroke-width", "5");
	self.path.setAttribute("stroke-miterlimit", "4");
	self.path.setAttribute("fill", "white");
	self.path.setAttribute("fill-rule", "evenodd");
	self.dom.appendChild(self.path)
	// Customize

	//_configText(config, self.dom);
	// Add & Remove
	self.add = function(){ _add(self); };
	self.remove = function(){ _remove(self); };
}