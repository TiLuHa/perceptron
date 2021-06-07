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

		// Perceptron
		self.add({id:"perceptron", type:"Perceptron", x:300, y:0});

		self.add({id:"slider_input1", type:"Slider",
			x:300, y:0,
			width:450,
			min:1, max:20, step:1,
			message: "update/node/1"});

		self.add({id:"slider_input2", type:"Slider",
			x:300, y:50,
			width:450,
			min:1, max:20, step:1,
			message: "update/node/2"});

		// Buttons
		self.add({
			id:"btnNext", type:"Button", x:275, y:463, text_id:"01_button_next", uppercase:true,
			onclick:function(){
				publish("slideshow/next");
			}
		});
	},

	onend: function(self){
		self.remove("btnNext");
	}


});

