SLIDES.push({
    id: "perceptron_debug",
    onstart: function (self) {


        // Perceptron
        self.add({
            id: "perceptron", type: "Perceptron",
            size: [2, 1],
            activationFun: Activations.RELU,
            activationFunOutput: Activations.RELU,
        });

        //Image
        self.add({
            id:"img", type:"ImageBox",
            x:0, y:0, width:640, height:400,
            src: "assets/Jochen/Perceptron.PNG",
        })

        let network = self.objects.perceptron.network;

        //Slider Input1
        self.add({id:"slider_input1", type:"Slider",
            x:300, y:0,
            width:450,
            min:1, max:20, step:1,
            message: "update/0"});
        self.add({id:"input1", type:"TextBox", x:290, y:0})
        self.objects.input1.setText("x:");
        _.misc = {};
        listen(_.misc, "update/0", function (value) {
            self.objects.input1.setText("x:"+value);
        });
        publish("update/0", [6]);

        //Slider Input2
        self.add({id:"slider_input2", type:"Slider",
            x:300, y:50,
            width:450,
            min:1, max:20, step:1,
            message: "update/1"});
        self.add({id:"input2", type:"TextBox", x:290, y:50})
        self.objects.input2.setText("y:");
        listen(_.misc, "update/1", function (value) {
            self.objects.input2.setText("y:"+value);
        });
        publish("update/1", [5]);

        //Anzeige Output
        self.add({id:"nnoutput", type:"TextBox", x:600, y:150})
        self.objects.nnoutput.setText("output:");
        listen(_.misc, "newOutput", function (network) {
            self.objects.nnoutput.setText(
                "output:"+network.getFirstOutput() + " Rechnung:result = "+ network.getNodes()[2].getResultCalcString() + "\noutput = " + network.getNodes()[2].getOutputCalcString());
        });

        // Slider Weight1
        self.add({id:"slider_weight1", type:"Slider",
            x:150, y:75,
            width:100,
            min:-10, max:10, step:1,
            message: "update/0-2"});
        //Anzeige weight1
        self.add({id:"weight1", type:"TextBox", x:150, y:50})
        self.objects.weight1.setText("weight1:");
        listen(_.misc, "newOutput", function (network) {
            self.objects.weight1.setText("weight1:"+network.links[0].weight);
        });
        publish("update/0-2", [network.links[0].weight]);
        //Slider Weight2

        self.add({id:"slider_weight2", type:"Slider",
            x:150, y:325,
            width:100,
            min:-10, max:10, step:1,
            message: "update/1-2"});
        //Anzeige weight2
        self.add({id:"weight2", type:"TextBox", x:150, y:300})
        self.objects.weight2.setText("weight2:");
        listen(_.misc, "newOutput", function (network) {
            self.objects.weight2.setText("weight2:"+network.links[1].weight);
        });
        publish("update/1-2", [network.links[1].weight]);
        //Slider bias

        self.add({id:"slider_bias", type:"Slider",
            x:400, y:100,
            width:100,
            min:-10, max:10, step:1,
            message: "update/2"});
        //Anzeige bias
        self.add({id:"bias", type:"TextBox", x:400, y:75})
        self.objects.bias.setText("bias:");
        listen(_.misc, "newOutput", function (network) {
            self.objects.bias.setText("bias:"+network.getNodes()[2].bias);
        });

        // Spezialwert1
        self.add({
            id: "spezial1", type: "Button", x: 400, y: 370, text_id: "spezial1",
            onclick: function () {
                publish("update/0", [0]);
                publish("update/1", [0]);
            }
        });
        // Spezialwert2
        self.add({
            id:"spezial2", type:"Button", x:600, y:370, text_id:"spezial2",
            onclick:function(){
                publish("update/0",[5]);
                publish("update/1",[7]);
            }
        });

        self.add({
            id:"heatmap", type: "Heatmap",
            x:700, y:120,
            xfirst: 0, xcount:10, xstepsize:1,
            yfirst: 0, ycount:10, ystepsize:1,
            xsize: 20, ysize:20,
        });

        self.add({
            id: "flipFlopImg", type: "ImageBoxFlipFlop",
            x: 0, y: 0, width: 50, height: 50,
            src: "assets/Jochen/dollar.PNG",

            altsrc: "assets/Jochen/dollarNo.PNG",
            xinput: 5, yinput: 7,
            hoverZoom: true, tooltip: true,
            network: network,
        });

        // Buttons
        self.add({
            id:"btnNext", type:"Button", x:275, y:463, text_id:"01_button_next", uppercase:true,
            onclick:function(){
                publish("slideshow/next");
            }
        });


        self.add({
            id: "hallo", type: "SVGBox",
            x:0, y:0,
        });
    },

    onend: function(self){
        unlisten(_.misc);

        self.remove("btnNext");
        self.remove("flipFlopImg");
        self.remove("img");
        self.remove("perceptron");
        self.remove("slider_input1");
        self.remove("slider_input2");
        self.remove("slider_weight1");
        self.remove("slider_weight2");
        self.remove("slider_bias");
        self.remove("input1");
        self.remove("input2");
        self.remove("nnoutput");
        self.remove("weight1");
        self.remove("weight2");
        self.remove("spezial1");
        self.remove("spezial2");
        self.remove("bias");
        self.remove("heatmap");
    }


});
