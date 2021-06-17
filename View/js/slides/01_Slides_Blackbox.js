SLIDES.push({

	id: "blackbox",

	onstart: function(self){

		_.xpush = 380;
		let o = self.objects;

		// Image
		_.jochenImage = "img";
		self.add({
			id: _.jochenImage, type:"ImageBox",
			src: "assets/Jochen/Jochen_kamera.jpg",
			x:_.xpush, y:60, width:380/2, height:545/2,
		});

		self.add({
			id:"jochenhello", type:"TextBox",
			x:210+_.xpush, y:85, width:50, height:50,
			align:"center", color:"#aaa", size:17,
			text_id:"jochen_hello"
		});

		// Words on top & bottom

		self.add({
			id:"topWords", type:"TextBox", text_id:"01_title",
			x:130, y:10, width:700, height:100, align:"center"
		});
		self.add({
			id:"btmWords", type:"TextBox", text_id:"01_text",
			x:130, y:347, width:700, height:100, align:"center"
		})
		// Buttons

		self.add({
			id:"btnNext", type:"Button", x:383, y:463, text_id:"01_button_next", uppercase:true,
			onclick:function(){
				publish("slideshow/next");
			}
		});

		_hide(o.topWords); _fadeIn(o.topWords, 100);
		_hide(o.img); _fadeIn(o.img, 200);
		_hide(o.jochenhello); _fadeIn(o.jochenhello, 200);
		_hide(o.btmWords); _fadeIn(o.btmWords, 400);
		_hide(o.btnNext); _fadeIn(o.btnNext, 700);


	},
	onend: function(self){
		// self.remove("img");
		self.remove("topWords");
		self.remove("jochenhello");
		self.remove("btmWords");
		self.remove("btnNext");
	}
},{
	onstart: function (self) {
		let o = self.objects;

		o.img.dom.style.left = 0;

		let leftwords = "topWords";
		self.add({
			id: leftwords, type:"TextBox", text_id:"01_title",
			x:130, y:10, width:700, height:100, align:"center"
		});
		_hide(o[leftwords]); _fadeIn(o[leftwords], 200);
		// Image

		o[_.jochenImage].dom.src = "assets/Jochen/Jochen_laecheln.jpg";



		let widthstd = 35,
			hightstd = 50;

		_.birnen = [
			{good:true, widthplus:3, hightplus:0},
			{good:false, widthplus:10, hightplus:0},
			{good:true, widthplus:0, hightplus:3},
			{good:false, widthplus:0, hightplus:-20}];

		let birne = "birne";
		let x_birne_entrance = 400, y_birne_entrance = 200;
		_.birnen.forEach((b, i) => {
			self.add({
				id: birne + i, type: "ImageBox",
				src: "assets/Jochen/birne_gut.png",
				x: x_birne_entrance+i*20, y: y_birne_entrance,
				width: widthstd + b.widthplus,
				hight: hightstd + b.hightplus,
			});

			//_hide(o[birne+i]);
		});

		let boxgood = "boxgood", xboxgood = 200, yboxgood = 400,
			boxbad = "boxbad", xboxbad = 450, yboxbad = 400,
			widthbox = 200, heightbox = 75;
		self.add({
			id: boxgood, type: "ImageBox",
			src: "assets/Jochen/box.png",
			x: xboxgood, y: yboxgood,
			width: widthbox,
			hight: heightbox,
		});
		self.add({
			id: boxbad, type: "ImageBox",
			src: "assets/Jochen/box2.png",
			x: xboxbad, y: yboxbad,
			width: widthbox,
			hight: heightbox,
		});

		let pinsel = "pinsel";
		self.add({
			id: pinsel, type: "ImageBox",
			src: "assets/Jochen/pinsel.png",
			x: x_birne_entrance+100, y: y_birne_entrance+100,
			width: 75,
			hight: 60,
		});

		let i = 0;
		let timer = setInterval(function () {
			if(i===_.birnen.length) clearInterval(timer);
			_fadeIn(o[birne+i], 0);
			//o[birne + i].dom.style.left = x_birne_entrance-30;
			let b = _.birnen[i];
			setTimeout(function () {
				o[_.jochenImage].dom.src = "assets/Jochen/Jochen_fragend.jpg";
				setTimeout(function () {
					o[_.jochenImage].dom.src = b.good ? "assets/Jochen/Jochen_zufrieden.jpg":"assets/Jochen/Jochen_wuetend.jpg";
					o[birne + i].dom.style.left = (b.good ? xboxgood : xboxbad) + i*30 + 20;
					o[birne + i].dom.style.top = b.good ? yboxgood : yboxbad;
					setTimeout(function () {
						if(!b.good) o[birne + i].dom.src = "assets/Jochen/birne_schlecht.png";
						i++;
					},200);

				},1000);
			},500);
			o[_.jochenImage].dom.src = "assets/Jochen/Jochen_laecheln.jpg";

		}, 3000);

		// setTimeout(() => clearInterval(timer), 3000*_.birnen.length);

		// _.birnen.forEach((b, i) => {
		// 	o[_.jochenImage].dom.src = "assets/Jochen/Jochen_laecheln.jpg";
		// 	_fadeIn(o[birne+i], 250);
		// 	o[birne + i].dom.style.left = x_birne_entrance-20;
		//
		// 	setTimeout(function () {
		// 		o[_.jochenImage].dom.src = "assets/Jochen/Jochen_fragend.jpg";
		// 	},1000);
		//
		// });

	},

	onend: function (self) {


	}

},{
	onstart: function (self) {
		let o = self.objects;
		o.img.dom.style.left = 0;
		self.objects.topWords.dom.style.top = 500;
		self.objects.topWords.dom.style.left = 500;
		self.objects.topWords.dom.style.transform = "scale(0.5)";

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
});

