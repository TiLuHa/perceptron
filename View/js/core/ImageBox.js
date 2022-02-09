function ImageBox(config){

	var self = this;

	self.id = config.id;
	// Create DOM

	self.dom = new Image();
	self.dom.className = "object";
	self.dom.src = config.src;
	// Customize

	_configText(config, self.dom);

	self.changeImage = function (newSrc) {
		self.dom.src = newSrc;
	};
	// Add & Remove

	self.add = function(){ _add(self); };
	self.remove = function(){ _remove(self); };
}

const JochenFaces = {
	fragend: "assets/Jochen/Jochen_fragend.jpg",
	aua: "assets/Jochen/Jochen_aua.jpg",
	erstaunt: "assets/Jochen/Jochen_erstaunt.jpg",
	kamera: "assets/Jochen/Jochen_kamera.jpg",
	laecheln: "assets/Jochen/Jochen_lacheln.jpg",
	stars: "assets/Jochen/Jochen_stars.jpg",
	verduzt: "assets/Jochen/Jochen_verduzt.jpg",
	wuetend: "assets/Jochen/Jochen_wuetend.jpg",
	zufrieden: "assets/Jochen/Jochen_zufrieden.jpg",
}

const items = {
	marmelade: "assets/birnen/Birnenmarmelade.png",
	kuchen: "assets/birnen/Brinenkuchen.png",
	bier: "assets/birnen/Birnensaft.png",
};