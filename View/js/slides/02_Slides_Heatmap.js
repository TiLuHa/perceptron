SLIDES.push({
	id: "heatmap",

	onstart: function (self) {
		//Words Top
		self.add({
			id: "topWords", type: "TextBox", text_id: "02_text",
			x: 130, y: 10, width: 700, height: 100, align: "center"
		});

		// Perceptron
		self.add({
			id: "perceptron", type: "Perceptron", x: 300, y: 0,
			size: [2, 1],
			activationFun: Activations.RELU,
			activationFunOutput: Activations.STEP,
			params:{"0":0, "1":0, "2":1, "0-2":1, "1-2":-1}
		});
		publish("newOutput",self.objects.perceptron.network)

		self.add({
			id:"heatmap", type: "Heatmap",
			x:0, y:0,
			xfirst: 0, xcount:4, xstepsize:1,
			yfirst: 0, ycount:4, ystepsize:1,
			xsize: 20, ysize:20,
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
		self.remove("btnNext");
		self.remove("perceptron");
		unlisten(_.misc);
		_.clear();
	}
});

