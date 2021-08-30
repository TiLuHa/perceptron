SLIDES.push({

	id: "sortieren",

	onstart: function(self){

		let o = self.objects;

		// Bild Jochen
		_.jochen = "img";
		_.xpush = 380;
		self.add({
			id: _.jochen, type:"ImageBox",
			src: "assets/Jochen/Jochen_kamera.jpg",
			x:_.xpush, y:60, width:380/2, height:545/2,
		});

		//Begrüßung Jochen
		_.jochenHello = "jochenhello";
		self.add({
			id:_.jochenHello, type:"TextBox",
			x:210+_.xpush, y:85, width:50, height:50,
			align:"center", color:"#aaa", size:17,
			text_id:"jochen_hello"
		});

		// Words
		_.topWords = "topWords";
		self.add({
			id: _.topWords, type:"TextBox", text_id:"01_title",
			x:130, y:10, width:700, height:100, align:"center"
		});
		_.btmWords = "btmWords";
		self.add({
			id:_.btmWords, type:"TextBox", text_id:"01_text",
			x:130, y:347, width:700, height:100, align:"center"
		})

		// Buttons
		_.next = "next";
		self.add({
			id:_.next, type:"Button",
			x:304, y:466, //long size
			// x:383, y:463, //normal size
			text_id:"01_button_next", uppercase:false,
			size: "long",
			onclick:function(){
				publish("slideshow/next");
			}
		});

		_hide(o[_.topWords]); _fadeIn(o[_.topWords], 100);
		_hide(o[_.jochen]); _fadeIn(o[_.jochen], 200);
		_hide(o[_.jochenHello]); _fadeIn(o[_.jochenHello], 200);
		_hide(o[_.btmWords]); _fadeIn(o[_.btmWords], 400);
		_hide(o[_.next]); _fadeIn(o[_.next], 700);


	},
	onend: function(self){
		self.remove(_.topWords);
		self.remove(_.jochenHello);
		self.remove(_.btmWords);
		self.remove(_.next);
	}
},{
	onstart: function (self) {
		let o = self.objects;

		// Jochen zum Rand bewegen.
		o[_.jochen].dom.style.left = 0;
		o[_.jochen].dom.src = "assets/Jochen/Jochen_laecheln.jpg";

		// Erklärungstext
		_.leftwords = "leftWords";
		self.add({
			id: _.leftwords, type:"TextBox", text_id:"01_birnenlegen",
			x:530, y:50, width:350, height:400, align:"center"
		});
		_hide(o[_.leftwords]); _fadeIn(o[_.leftwords], 200);

		//Birnen
		_.birne = "birne";

		//Standardgröße Birnen
		let widthstd = 35,
			hightstd = 50;

		//Auflistung der Birnen mit Variation
		_.birnen = [
			{good:true, widthplus:3, hightplus:0},
			{good:false, widthplus:10, hightplus:0},
			{good:true, widthplus:0, hightplus:3},
			{good:false, widthplus:0, hightplus:-20}
		];

		//Birnen einfügen.
		let x_birne_entrance = 400, y_birne_entrance = 200;
		_.birnen.forEach((b, i) => {
			self.add({
				id: _.birne + i, type: "ImageBox",
				src: "assets/Jochen/birne_gut.png",
				x: x_birne_entrance+i*20, y: y_birne_entrance,
				width: widthstd + b.widthplus,
				hight: hightstd + b.hightplus,
			});

			_hide(o[_.birne+i]);
		});

		// Sortierboxen einfügen
		_.boxgood = "boxgood";
		_.boxbad = "boxbad";
		let xboxgood = 200, yboxgood = 400,
			xboxbad = 450, yboxbad = 400,
			widthbox = 200, heightbox = 75;
		self.add({
			id: _.boxgood, type: "ImageBox",
			src: "assets/Jochen/box.png",
			x: xboxgood, y: yboxgood,
			width: widthbox,
			hight: heightbox,
		});
		self.add({
			id: _.boxbad, type: "ImageBox",
			src: "assets/Jochen/box2.png",
			x: xboxbad, y: yboxbad,
			width: widthbox,
			hight: heightbox,
		});

		// Pinsel hinzufügen
		_.pinsel = "pinsel";
		self.add({
			id: _.pinsel, type: "ImageBox",
			src: "assets/Jochen/pinsel.png",
			x: x_birne_entrance+100, y: y_birne_entrance+100,
			width: 75,
			hight: 60,
		});

		// Weiter-Button
		_.next = "next";
		self.add({
			id:_.next, type:"Button",
			x:680, y:496, //long size
			// x:383, y:463, //normal size
			text_id:"01_button_next2", uppercase:false,
			// size: "long",
			onclick:function(){
				publish("slideshow/next");
			}
		});
		_hide(o[_.next]); _fadeIn(o[_.next], 400);

		//Animation Birnen
		let i = 0;
		_.timer = setInterval(function () {
			if(i===_.birnen.length) clearInterval(_.timer);
			_fadeIn(o[_.birne+i], 0);
			o[_.birne + i].dom.style.left = x_birne_entrance-30;
			let b = _.birnen[i];
			setTimeout(function () {
				o[_.jochen].dom.src = "assets/Jochen/Jochen_fragend.jpg";
				setTimeout(function () {
					o[_.jochen].dom.src = b.good ? "assets/Jochen/Jochen_zufrieden.jpg":"assets/Jochen/Jochen_wuetend.jpg";
					o[_.birne + i].dom.style.left = (b.good ? xboxgood : xboxbad) + i*30 + 20;
					o[_.birne + i].dom.style.top = b.good ? yboxgood : yboxbad;
					setTimeout(function () {
						if(!b.good) o[_.birne + i].dom.src = "assets/Jochen/birne_schlecht.png";
						i++;
					},200);

				},1000);
			},500);
			o[_.jochen].dom.src = "assets/Jochen/Jochen_laecheln.jpg";

		}, 3000);

		//Text nach sortieren
		_.sortiert = "sortiertText"
		self.add({
			id:_.sortiert, type:"TextBox", text_id:"01_richtig_gelegt",
			x:70, y:647, width:700, height:100, align:"center"
		})
		_hide(o[_.sortiert]); _fadeIn(o[_.sortiert], 13000);

	},
	onend: function (self) {
		clearInterval(_.timer);
		self.remove(_.leftwords);
		self.remove(_.sortiert);
		self.remove(_.next);
		self.remove(_.boxgood);
		self.remove(_.boxbad);
		self.remove(_.pinsel);
		_.birnen.forEach((b, i) => {
			self.remove(_.birne + i);
		});

	}

},{
	onstart: function (self) {
		let o = self.objects;

		// Jochen normal machen.
		o[_.jochen].dom.src = "assets/Jochen/Jochen_laecheln.jpg";

		// Erklärungstext
		_.leftwords = "leftWords";
		self.add({
			id: _.leftwords, type:"TextBox", text_id:"01_problem",
			x:230, y:50, width:650, height:400,
			//align:"center"
		});
		_hide(o[_.leftwords]); _fadeIn(o[_.leftwords], 200);

		// Weiter-Button
		_.next = "next";
		self.add({
			id:_.next, type:"Button",
			x:680, y:496,
			text_id:"01_button_next3", uppercase:false,
			onclick:function(){
				publish("slideshow/next");
			}
		});
		_hide(o[_.next]); _fadeIn(o[_.next], 400);
	},
	onend: function (self) {
		self.remove(_.jochen);
		self.remove(_.leftwords);
		self.remove(_.next);
	}
},
	/*
	{
	// Birnen manuell sortieren
	onstart: function (self) {
		let o = self.objects;

		//Position Jochen anpassen.
		o.img.dom.style.left = 0;

		// self.objects.topWords.dom.style.top = 500;
		// self.objects.topWords.dom.style.left = 500;
		// self.objects.topWords.dom.style.transform = "scale(0.5)";

		//Words Top
		_.rightWords = "rightWords";
		self.add({
			id: _.rightWords, type: "TextBox", text_id: "01_birnenlegen",
			x: 500, y: 10, width: 300, height: 500, align: "center"
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
					publish("change/0", [birne.x, birne.expected]);
					publish("update/1", [birne.y, birne.expected]);
				}
			});
			self.objects["birne" + i].setText2("x:" + birne.x + " y:" + birne.y);
			self.add({
				id: "birneExp"+i, type: "ImageBox",
				x: x-65, y: y+i*abs,
				width: 50, height: 50,
				src:"assets/Jochen/frowny.PNG",
			})
			_hide(self.objects["birneExp"+i])
			listen(_.misc, "newOutput", (network) => {
				//Prüfe ob der Output NICHT übereinstimmt und dann
				//ob der Input zu dem Frowny gehört.
				// noinspection EqualityComparisonWithCoercionJS
				if ((network.getFirstOutput() != birne.expected)
					&& (network.input[0] === birne.x)
					&& (network.input[1] === birne.y)){
					_show(self.objects["birneExp"+i]);
				}
			});
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
			self.remove("birneExp" + i);
		});
		self.remove("btnNext");
		self.remove("outputSell");
		self.remove("outputSellNo");
		self.remove("perceptron");
		unlisten(_.misc);
		_.clear();
	}
}
*/
);