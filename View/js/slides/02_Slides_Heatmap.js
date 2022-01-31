SLIDES.push({
	id: "blackbox",

	onstart: function (self) {
		let o = self.objects;

		//Überschrift
		_.title = "title"
		self.add({
			id: _.title, type: "TextBox", text_id: "02_title",
			x: 130, y: 10, width: 700, height: 100, align: "center"
		});

		// Bild Jochen
		_.jochen = "img";
		self.add({
			id: _.jochen, type: "ImageBox",
			src: "assets/Jochen/Jochen_verduzt.jpg",
			x: 0, y: 60, width: 380 / 2, height: 545 / 2,
		});

		//Text Jochen
		_.jochenText = "jochenText";
		self.add({
			id: _.jochenText, type: "TextBox",
			x: 210, y: 85, width: 70, height: 50,
			align: "center", color: "#aaa", size: 17,
			text_id: "02_jochen_verwundert"
		});

		//Maschine
		_.maschine = "maschine";
		self.add({
			id:_.maschine, type: "ImageBox",
			src:"assets/Jochen/maschine_leer.jpg",
			x: 315, y: 65, width: 874 * 0.52, height: 441 * 0.52,
		})
		_.maschinefront = "maschinefront";
		self.add({
			id:_.maschinefront, type: "ImageBox",
			src:"assets/Jochen/maschine_front.png",
			x: 442, y: 138, width: 358 * 0.52, height: 250 * 0.52,
		})

		// Box
		_.box = "box";
		self.add({
			id: _.box, type: "ImageBox",
			src: "assets/Jochen/boxbig.png",
			x: 300, y: 60, width: 690 * 0.7, height: 350 * 0.7,
		});

		//Text Box
		_.boxtext = "boxText";
		self.add({
			id: _.boxtext, type: "TextBox",
			x: 400, y: 192, width: 200, height: 50,
			align: "center", color: "#aba", size: 17,
			text_id: "02_text_box"
		});

		_.btmWords = "btmWords";
		self.add({
			id: _.btmWords, type: "TextBox", text_id: "02_text_1",
			x: 130, y: 347, width: 700, height: 100, align: "center"
		})

		_.buttonOpenBox = "openbox";
		self.add({
			id: _.buttonOpenBox, type: "Button", x: 275, y: 463,
			text_id: "02_openbox", uppercase: true,
			onclick: function () {
				o[_.box].dom.style.top = -200;
				o[_.boxtext].dom.style.top = 192 - 260;
				_fadeOut(o[_.box], 500);
				_fadeOut(o[_.boxtext], 500);
				publish("slideshow/next");
			}
		});
	},
	onend: function (self) {
		self.remove(_.title);
		self.remove(_.btmWords);
		self.remove(_.buttonOpenBox);
	}
},
	{
	onstart: function (self) {
		let o = self.objects;
		o[_.jochen].dom.src = "assets/Jochen/Jochen_fragend.jpg";

		_.btmWords = "btmWords";
		self.add({
			id: _.btmWords, type: "TextBox", text_id: "02_text_2",
			x: 130, y: 347, width: 700, height: 100, align: "center"
		})

		// Perceptron
		_.perceptron = "perceptron"
		self.add({
			id: _.perceptron, type: "Perceptron", x: 300, y: 0,
			size: [2, 1],
			activationFun: Activations.RELU,
			activationFunOutput: Activations.STEP,
			params:{"0":0, "1":0, "2":1, "0-2":1, "1-2":-1}
		});
		publish("newOutput",self.objects.perceptron.network)


		// Buttons
		_.birnetestengut = "birnetestengut";
		self.add({
			id: _.birnetestengut, type: "Button", x: 225, y: 463,
			text_id: "02_buttom_birnetestengut", uppercase: false,
			active: true,
			onclick: function () {
				o[_.birnetestengut].deactivate();
				//o[_.birnetestenbad].activate();
				publish("nextBirne",[o[_.birnetestenbad]]);
			}
		});
		_.birnetestenbad = "birnetestenbad";
		self.add({
			id: _.birnetestenbad, type: "Button", x: 425, y: 463,
			text_id: "02_buttom_birnetestenbad", uppercase: false,
			active:false,
			onclick: function () {
				o[_.birnetestenbad].deactivate();
				//o[_.birnetestengut].activate();
				publish("nextBirne",[o[_.birnetestengut]]);
			}
		});
		_hide(o[_.birnetestengut]);
		_fadeIn(o[_.birnetestengut], 500);
		_hide(o[_.birnetestenbad]);
		_fadeIn(o[_.birnetestenbad], 700);

		//MaschineOutput
		_.maschineoutput = "maschineoutput";
		self.add({
			id: _.maschineoutput, type: "ImageBox",
			src: "assets/Jochen/dollar.png",
			x: 692, y: 76, width: 110 * 0.45, height: 139 * 0.45,
		});
		_hide(o[_.maschineoutput]);

		//Birne
		_.birne = "birne";
		self.add({
			id: _.birne, type: "ImageBox",
			src: "assets/Jochen/birne_gut.png",
			x: 357, y: 100, width: 350 * 0.1, height: 560 * 0.1,
		});
		_hide(o[_.birne]);

		_.birnen = [
			{good:true, widthplus:3, hightplus:0, face: "assets/Jochen/Jochen_lacheln.jpg",
				wordsJochen: "02_happy1", showgood:true},
			{good:false, widthplus:10, hightplus:0, face: "assets/Jochen/Jochen_zufrieden.jpg",
				wordsJochen: "02_happy2", showgood: false},
			{good:true, widthplus:0, hightplus:3, face: "assets/Jochen/Jochen_stars.jpg",
				wordsJochen: "02_happy3", showgood: true},
			{good:false, widthplus:0, hightplus:-20, face: "assets/Jochen/Jochen_wuetend.jpg",
				wordsJochen: "02_unhappy", showgood: true}
		];

		let nextBirne = function (nextButtom) {
			[b, ...r] = _.birnen;
			_.birnen = r;
			_fadeOut(o[_.birne], 100);
			o[_.birne].dom.src = b.good ? "assets/Jochen/birne_gut.png" : "assets/Jochen/birne_schlecht.png";
			_fadeIn(o[_.birne], 100);
			setTimeout(() => {
				_show(o[_.maschineoutput]);
				o[_.maschineoutput].dom.src = b.showgood ? "assets/Jochen/dollar.png" : "assets/Jochen/dollar_no.png";
				o[_.jochen].dom.src = b.face;
				o[_.jochenText].setTextID(b.wordsJochen);
			}, 200);
			if (r.size === 0) { //Letze Birne
				o[_.next].activate();
				nextButtom.deactivate();
			} else {
				nextButtom.activate();
			}
		};

		listen(_, "nextBirne", nextBirne);

		_.next = "nextSlide";
		self.add({
			id: _.next, type: "Button", x: 775, y: 463,
			text_id: "nextSlide", uppercase: true,
			onclick: function () {
				publish("slideshow/next");
			}
		});
		//_hide(o[_.next]);
	},
	onend: function (self) {
		self.remove(_.btmWords);
		self.remove(_.birnetestengut);
		self.remove(_.birnetestenbad);
		self.remove(_.perceptron);
		self.remove(_.boxtext);
		self.remove(_.box);
		self.remove(_.next);

		unlisten(_);
	}
},
	{
	onstart:function (self) {
		let o = self.objects;

		// Buttons
		_.birnetesten = "birnetesten";
		self.add({
			id: _.birnetesten, type: "Button", x: 375, y: 463,
			text_id: "nextSlide", uppercase: true,
			onclick: function () {
				publish("slideshow/next");
			}
		});
	},
	onend: function (self) {
		self.remove(_.birnetesten);
		self.remove(_.maschine);
		self.remove(_.maschinefront);
		self.remove(_.jochen);
		_.clear();
	}
},);

