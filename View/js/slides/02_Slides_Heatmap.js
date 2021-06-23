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
},{
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
		_.birnetesten = "birnetesten";
		self.add({
			id: _.birnetesten, type: "Button", x: 375, y: 463,
			text_id: "02_buttom_birnetesten", uppercase: true,
			onclick: function () {
				publish("slideshow/next");
			}
		});
	},
	onend: function (self) {
		self.remove(_.btmWords);
		self.remove(_.birnetesten);
		self.remove(_.perceptron);
		self.remove(_.boxtext);
		self.remove(_.box);

		unlisten(_);
		_.clear();
	}
});

