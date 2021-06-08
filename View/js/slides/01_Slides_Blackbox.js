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
	onstart(self) {
		//Words Top
		self.add({
			id:"topWords", type:"TextBox", text_id:"01_birnenlegen",
			x:130, y:10, width:700, height:100, align:"center"
		});

		//Birnen hinzufügen
		let x = 50;
		let y = 150;
		let abs = 60;
		let b0 = {x: 5, y: 2, expected: true};
		let b1 = {x: 9, y: 4, expected: true};
		let b2 = {x: 5, y: 5, expected: false};
		let b3 = {x: 3, y: 5, expected: false};

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

		// Image
		// self.add({
		// 	id:"img", type:"ImageBox",
		// 	src: "assets/Jochen/JochenMitBox.PNG",
		// 	x:200, y:60, width:560, height:170,
		// });

		// Buttons
		self.add({
			id:"btnNext", type:"Button", x:275, y:463, text_id:"01_button_next", uppercase:true,
			onclick:function(){
				publish("slideshow/next");
			}
		});
	},
	onend: function (self) {
		self.remove("topWords");
		self.remove("birne1");
		self.remove("btnNext");
		_.birnen.forEach((b, i) => self.remove("birne" + i));
	}
});

