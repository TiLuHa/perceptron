function TextBox(config){
	var self = this;
	self.id = config.id;

	// Create DOM
	self.dom = document.createElement("div");
	self.dom.className = "object";
	self.dom.classList.add("textbox");
	if(config.class !== undefined) self.dom.classList.add(config.class);
	self.dom.id = self.id;

	// Customize
	if(config.connectedWith!==undefined){
		let c = config.connectedWith
		config.x = c.x + c.part.xOffsetText;
		config.y = c.y + c.part.yOffsetText;
		self.dom.classList.add("unclickable")
	}

	_configText(config, self.dom);
	self.hide = config.hide !== undefined && config.hide

	// Set Text!
	self.setText = function(words){
		if (!self.hide)
			self.dom.innerHTML = words;
	};
	self.setTextID = function(id){
		self.text_id = id;
		self.setText(Words.get(self.text_id));
	};

	if(config.text_id) 
		self.setTextID(config.text_id);
	else if(config.text) 
		self.setText(config.text);

	// Add & Remove
	self.add = function(){ _add(self); };
	self.remove = function(){ _remove(self); };

}

function CharacterTextBox(config){

	var self = this;
	self.id = config.id;

	// Create DOM
	self.dom = document.createElement("div");
	self.dom.className = "object";
	self.dom.classList.add("textbox");
	self.dom.classList.add("character");
	self.dom.classList.add(config.character);

	// Customize
	_configText(config, self.dom);

	// Peep
	var peep = document.createElement("div");
	peep.id = "peep";
	peep.setAttribute("char", config.character);
	self.dom.appendChild(peep);

	// Description
	var desc = document.createElement("div");
	desc.id = "desc";
	desc.innerHTML = Words.get("character_"+config.character);
	self.dom.appendChild(desc);

	// Add & Remove
	self.add = function(){ _add(self); };
	self.remove = function(){ _remove(self); };

}