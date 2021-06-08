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

		//Slider Input1
		self.add({id:"slider_input1", type:"Slider",
			x:300, y:0,
			width:450,
			min:1, max:20, step:1,
			message: "update/node/0"});
		self.add({id:"input1", type:"TextBox", x:290, y:0})
		self.objects.input1.setText("x:");
		_.misc = {};
		listen(_.misc, "update/node/0", function (value) {
			self.objects.input1.setText("x:"+value);
		});

		//Slider Input2
		self.add({id:"slider_input2", type:"Slider",
			x:300, y:50,
			width:450,
			min:1, max:20, step:1,
			message: "update/node/1"});
		self.add({id:"input2", type:"TextBox", x:290, y:50})
		self.objects.input2.setText("y:");
		listen(_.misc, "update/node/1", function (value) {
			self.objects.input2.setText("y:"+value);
		});

		//Anzeige Output
		self.add({id:"nnoutput", type:"TextBox", x:600, y:150})
		self.objects.nnoutput.setText("output:");
		listen(_.misc, "newOutput", function (network) {
			self.objects.nnoutput.setText("output:"+network.getFirstOutput());
		});
		//Slider Weight1
		self.add({id:"slider_weight1", type:"Slider",
			x:150, y:75,
			width:100,
			min:-10, max:10, step:1,
			message: "update/link/0-2"});
		//Anzeige weight1
		self.add({id:"weight1", type:"TextBox", x:150, y:50})
		self.objects.weight1.setText("weight1:");
		listen(_.misc, "newOutput", function (network) {
			self.objects.weight1.setText("weight1:"+network.links[0].weight);
		});

		//Slider Weight2
		self.add({id:"slider_weight2", type:"Slider",
			x:150, y:325,
			width:100,
			min:-10, max:10, step:1,
			message: "update/link/1-2"});
		//Anzeige weight2
		self.add({id:"weight2", type:"TextBox", x:150, y:300})
		self.objects.weight2.setText("weight2:");
		listen(_.misc, "newOutput", function (network) {
			self.objects.weight2.setText("weight2:"+network.links[1].weight);
		});

		//Slider bias
		self.add({id:"slider_bias", type:"Slider",
			x:400, y:100,
			width:100,
			min:-10, max:10, step:1,
			message: "update/node/2"});
		//Anzeige bias
		self.add({id:"bias", type:"TextBox", x:400, y:75})
		self.objects.bias.setText("bias:");
		listen(_.misc, "newOutput", function (network) {
			self.objects.bias.setText("bias:"+network.nodes[2].bias);
		});

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
		self.remove("perceptron");
		self.remove("slider_input1");
		self.remove("slider_input2");
		self.remove("slider_weight1");
		self.remove("slider_weight2");
		self.remove("input1");
		self.remove("input2");
		self.remove("nnoutput");
		self.remove("weight1");
		self.remove("weight2");
		self.remove("bias");

	}


});

