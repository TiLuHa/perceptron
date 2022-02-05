
function NWP(config){

	var self = this;
	self.id = config.id;

	// Create DOM
	self.dom = document.createElement("div");
	self.dom.id = self.id;
	let part = config.size === undefined ? new Image() : new Image(config.size.width, config.size.height);
	part.className = "object";
	part.classList.add("nwp");
	part.src = config.src;
	self.dom.appendChild(part);
	self.friends = [self.id].concat(config.friends)

	if (config.hoverZoom) self.dom.setAttribute("zoom",true);

	var text = document.createElement("div");
	text.id = "text";

	// Customize DOM
	part.style.left = config.x+"px";
	part.style.top = config.y+"px";

    if (config.rotation !== undefined)
        part.style.transform = "rotate("+config.rotation+"deg)";

	// On hover...
	part.onmouseover = function(){
		if(self.active) part.setAttribute("hover","yes");
	};
	part.onmouseout = function(){
		if(self.active) part.removeAttribute("hover");
	};

	// On click...
	part.onclick = function(){
        //alert("clicked");
		publish("activeNWP",[self.friends])
		//if(config.onclick) config.onclick();
	};

	// Activate/Deactivate
	self.active = true;
	self.activate = function(activeNWPs){
		self.dom.style.opacity = activeNWPs.includes(self.id) ? 1.0 : 0.3;
		//self.dom.style.opacity = 0.5;
		//self.active = true;
		//part.removeAttribute("deactivated");
	};
	self.deactivate = function(){
		self.active = false;
		part.setAttribute("deactivated","yes");
		part.removeAttribute("hover");
	};
	if(config.active===undefined) config.active=true;
	if(!config.active) self.deactivate();

	// Listeners!
	listen(self, "activeNWP", self.activate)
	if(self.id){
		//listen(self, "/deactivate", self.deactivate);
		//listen(self, self.id+"/activate", self.activate);
	}

	// Add & Remove
	self.add = function(){ _add(self); };
	self.remove = function(){
		unlisten(self);
		_remove(self);
	};

}