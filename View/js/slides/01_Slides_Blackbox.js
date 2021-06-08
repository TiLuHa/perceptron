// THE TRUST GAME - COOPERATE, YA NO?
SLIDES.push({

	id: "blackbox",

	onstart: function(self){

		// Image
		self.add({
			id:"img", type:"ImageBox",
			src: "assets/Jochen/JochenMitBox.PNG",
			x:200, y:60, width:560, height:170,
		});

		// Words on top & bottom
		self.add({
			id:"topWords", type:"TextBox", text_id:"01_title",
			x:130, y:10, width:700, height:100, align:"center"
		});
		self.add({
			id:"btmWords", type:"TextBox", text_id:"01_text",
			x:130, y:397, width:700, height:100, align:"center"
		})

		// Buttons
		self.add({
			id:"btnNext", type:"Button", x:275, y:463, text_id:"01_button_next", uppercase:true,
			onclick:function(){
				publish("slideshow/next");
			}
		});


	},
	onend: function(self){
		self.remove("img");
		self.remove("topWords");
		self.remove("btmWords");
		self.remove("btnNext");
	}
},{
	onstart: function (self) {
		//Words Top
		self.add({
			id: "topWords", type: "TextBox", text_id: "01_birnenlegen",
			x: 130, y: 10, width: 700, height: 100, align: "center"
		});

		//Birnen hinzufügen
		let x = 50;
		let y = 150;
		let abs = 60;
		let b0 = {x: 5, y: 2, expected: true};
		let b1 = {x: 9, y: 4, expected: true};
		let b2 = {x: 3, y: 5, expected: false};
		let b3 = {x: 5, y: 5, expected: false};

		_.birnen = [b0, b1, b2, b3];
		_.birnen.forEach((birne, i) => {
			self.add({
				id: "birne" + i, type: "Button", x: x, y: y + i * abs,
				onclick: function () {
					publish("update/0", [birne.x, birne.expected]);
					publish("update/1", [birne.y, birne.expected]);
				}
			});
			self.objects["birne" + i].setText2("x:" + birne.x + " y:" + birne.y);
		});

		// Perceptron
		self.add({
			id: "perceptron", type: "Perceptron", x: 300, y: 0,
			size: [2, 1],
			activationFun: Activations.RELU,
			activationFunOutput: Activations.STEP,
			params:{"0":0, "1":0, "2":1, "0-2":1, "1-2":-1}
		});

		// Image
		let x1 = 500;
		let y1 = 300;
		self.add({
			id: "outputSell", type: "ImageBox",
			src: "assets/Jochen/dollar.PNG",
			x: x1, y: y1, width: 50, height: 50,
		});
		_hide(self.objects.outputSell);
		self.add({
			id: "outputSellNo", type: "ImageBox",
			src: "assets/Jochen/dollarNo.PNG",
			x: x1, y: y1, width: 50, height: 50,
		});
		_hide(self.objects.outputSellNo);
		listen(_.misc, "newOutput", (network, expected) => {
			console.log(network.getFirstOutput())
			if (network.getFirstOutput() === 1) {
				_hide(self.objects.outputSellNo);
				_show(self.objects.outputSell, 0);
			} else {
				_hide(self.objects.outputSell);
				_show(self.objects.outputSellNo, 0);
			}
		});


		// Buttons
		self.add({
			id: "btnNext", type: "Button", x: 275, y: 463, text_id: "01_button_next", uppercase: true,
			onclick: function () {
				publish("slideshow/next");
			}
		});
	},
	onend: function (self) {
		self.remove("topWords");
		_.birnen.forEach((b, i) => {
			self.remove("birne" + i);
		});
		self.remove("btnNext");
		self.remove("outputSell");
		self.remove("outputSellNo");
		self.remove("perceptron");
		unlisten(_.misc);
		_.clear();
	}
});

