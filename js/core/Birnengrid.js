function Birnengrid(config){

	var self = this;
	self.id = config.id;

	// Create DOM

	self.birnen_shrinkfactor = config.birnen_shrinkfactor || .15;
	self.birnen_width = 303 * self.birnen_shrinkfactor
	self.birnen_height = 514 * self.birnen_shrinkfactor
	self.appart = config.appart || 20;
	self.start_x = config.start_x || 300
	self.start_y = config.start_y || 0
	self.get_x = (pos) => self.start_x + pos * (self.birnen_width + self.appart)
	self.get_y = (pos) => self.start_y + pos * (self.birnen_height + self.appart)


	self.dom.className = "object";
	self.dom.src = config.src;

	// Customize
	_configText(config, self.dom);

	// Add & Remove
	self.add = function(){ _add(self); };
	self.remove = function(){ _remove(self); };

}