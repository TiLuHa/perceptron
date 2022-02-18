SLIDES.push(
    {
        id: "komplex",
        onjump: function (self) {
        },
        onstart: function (self) {
            let o = self.objects;

            let stage = addJochenStage(self)

            _.allNetwork = addNetwork221small(self, 300)
            _.all = [].concat(stage, _.allNetwork)

            _.loesungAnzeigen = "loesungAnzeigen"
            self.add({
                id: _.loesungAnzeigen, type: "Button", x: 730, y: 390,
                text_id: "05_loesungAnzeigen",
                onclick: ()=>{
                    publish("change/0-2", [0]);
                    publish("change/0-3", [0]);
                    publish("change/1-2", [-10]);
                    publish("change/1-3", [-10]);
                    publish("change/2-4", [10]);
                    publish("change/3-4", [-10]);
                    publish("change/2", [-10]);
                    publish("change/3", [10]);
                    publish("update/4", [5]);
                    publish("OutputFinished")
                }
            });
            _.all.push(o[_.loesungAnzeigen])

            actionOnAllObjects(_.all, _hide)

            publish("newOutput", _.network)

            //_.allNetwork.forEach(obj => _moveX(obj, 300));
            if (SHOW_SLIDE_NUMBER) _show(o[_.slideCounter]);

            o[_.slideCounter].setText("5-1")
            o[_.btmWords].setTextID("05_text1")
            o[_.topWords].setTextID("05_title")

            actionOnAllObjects([
                o[_.topWords],
                o[_.jochen],
                o[_.tochter],
                o[_.btmWords],
                o[_.tablet],
                o[_.nextMiddle],
            ], _fadeIn, 500, 700);

            _moveX(o[_.tablet], -200, 4000)
            o[_.jochen].changeImage(Loader.manifest.jochen_laecheln)

        },
        onend: function (self) {
            let o = self.objects;

            actionOnAllObjects([
                o[_.topWords],
                o[_.nextMiddle],
                o[_.btmWords],
                o[_.tablet]
            ], _hide)
            _moveX(o[_.jochen], -100)
            _moveX(o[_.tochter], 100)

        }
    }, {
        onstart: function (self) {
            let o = self.objects;

            o[_.slideCounter].setText("5-2")
            o[_.btmLeftWords].setTextID("05_text2")

            actionOnAllObjects(_.allNetwork, _fadeIn)
            _hide(o[_.resultPerceptron])
            _hide(o[_.itemPicture])

            o[_.jochen].changeImage(Loader.manifest.jochen_erschrocken)
            o[_.nextRight].changeOnClick(() => publish("slideshow/scratch"));

            actionOnAllObjects([
                o[_.btmLeftWords],
                o[_.nextRight],
            ], _fadeIn, 500, 500)
        },
        onend: function (self) {
            let o = self.objects;

            actionOnAllObjects([
                o[_.jochen],
                o[_.tochter],
                o[_.nextRight],
                o[_.btmLeftWords]
            ], _hide)

            _moveX(o[_.jochen], 100)
            _moveX(o[_.tochter], -100)

            unlisten(_)
            unlisten(_.network)
            _.allNetwork.forEach(obj => self.remove(obj.id));
        }
    }, {
        onstart: function (self) {
            let o = self.objects;

            o[_.slideCounter].setText("5-3")
            o[_.btmLeftWords].setTextID("05_text3")
            o[_.nextRight].changeOnClick(() => publish("slideshow/scratch"))

            _.allNetwork = addNetwork221small(self)
            _hide(o[_.resultPerceptron])

            let birnenGrid = addBirnenGrid(self)
            actionOnAllObjects(birnenGrid, _hide, 0, 0)

            let countDownTime = 35
            let countDown = Array.from(Array(countDownTime).keys())

            countDown.forEach(i => {
                setTimeout(() => o[_.loesungAnzeigen].setText2("Lösung (" + (countDownTime - i) + ")"), 999 * i);
            })

            o[_.loesungAnzeigen].deactivate()
            setTimeout(() => o[_.loesungAnzeigen].activate(), countDownTime * 1000);
            setTimeout(() => o[_.loesungAnzeigen].setText("05_loesungAnzeigen"), countDownTime * 1000);


            actionOnAllObjects([
                o[_.itemPicture],
                o[_.btmLeftWords],
                o[_.loesungAnzeigen],
                o[_.nextRight],
            ], _fadeIn, 1000, 1000);

            actionOnAllObjects(_.all_birnen,
                (b) => {
                    if (_.birnenForItem1.includes(b)) _fadeIn(b)
                    else _fadeOut(b, 0, 0.2)
                }, 100, 0)

            _.countIterations = 0;
            o[_.nextRight].deactivate();
            listen(_, "OutputFinished", () => {
                _.countIterations = _.countIterations + 1;
                if (equal2dBooleanArray(_.birnenForItem1okList, _.okList) //|| _.countIterations > 1000
                ) {
                    o[_.nextRight].activate();
                    o[_.jochen].changeImage(Loader.manifest.jochen_stars)
                } else {
                    o[_.nextRight].deactivate();
                    o[_.jochen].changeImage(Loader.manifest.jochen_fragend)
                }
            });
            publish("OutputFinished")
            publish("newOutput", [_.network])

        },
        onend: function (self) {
            unlisten(_)
            unlisten(_.network)
            self.clear()
        }
    },
);


function addNetwork221small(self, shiftx = 0, shifty = 0,
                            slidermin = -10, slidermax = 10, sliderstep = 1,
                            factor = 1,
                            params = {
                                "0": 1, //Input1
                                "1": 1,  //Input2
                                "2": (-3), //Hidden Bias
                                "3": (10), //Hidden Bias
                                "4": (-3), //Output Bias
                                "0-2": -5,
                                "1-2": -7,
                                "0-3": -6,
                                "1-3": -2,
                                "2-4": -4,
                                "3-4": 6,

                            }) {
    let o = self.objects;
    all = []

    _.perceptron = "perceptron"
    self.add({
        id: _.perceptron, type: "Perceptron",
        size: [2, 2, 1],
        activationFun: Activations.SIGMOID,
        activationFunOutput: Activations.SIGMOID,
        activationFunInput: Activations.LINEAR,
        params: params,
    });
    _.network = o[_.perceptron].network;
    //all.push(o[_.perceptron])

    _.itemPicture = "itemPicture"
    self.add({
        id: _.itemPicture, type: "ImageBox",
        src: Loader.manifest.birnenkuchen,
        x: 293 + shiftx,
        y: 53 + shifty,
        width: 100
    })
    all.push(o[_.itemPicture]);

    _.bias2Dot = "bias2Dot"
    self.add({
        id: _.bias2Dot, type: "ImageBox",
        src: "assets/birnen/blau/bias.png",
        x: 132 + shiftx,
        y: 10 + shifty,
        rotation: 180,
    })
    all.push(o[_.bias2Dot]);

    _.bias3Dot = "bias3Dot"
    self.add({
        id: _.bias3Dot, type: "ImageBox",
        src: "assets/birnen/blau/bias.png",
        x: 132 + shiftx,
        y: 300 + shifty,
    })
    all.push(o[_.bias3Dot]);

    _.bias4Dot = "bias4Dot"
    self.add({
        id: _.bias4Dot, type: "ImageBox",
        src: "assets/birnen/blau/bias.png",
        x: 280 + shiftx,
        y: 226 + shifty,
    })
    all.push(o[_.bias4Dot]);

    _.sliderWeight02 = "sliderWeight02"
    self.add({
        id: _.sliderWeight02, type: "Slider",
        x: 71 + shiftx, y: 80 + shifty,
        width: 100, rotation: 0,
        min: slidermin, max: slidermax, step: sliderstep,
        message: "0-2",
        factor: factor,
    });
    all.push(o[_.sliderWeight02]);

    _.sliderWeight12 = "sliderWeight12"
    self.add({
        id: _.sliderWeight12, type: "Slider",
        x: 54 + shiftx, y: 265 + shifty,
        width: 165, rotation: 300,
        min: slidermin, max: slidermax, step: sliderstep,
        message: "1-2",
        factor: factor,

    });
    all.push(o[_.sliderWeight12]);

    _.sliderWeight03 = "sliderWeight03"
    self.add({
        id: _.sliderWeight03, type: "Slider",
        x: 100 + shiftx, y: 100 + shifty,
        width: 165, rotation: 60,
        min: slidermin, max: slidermax, step: sliderstep,
        message: "0-3",
        factor: factor,
    });
    all.push(o[_.sliderWeight03]);

    _.sliderWeight13 = "sliderWeight13"
    self.add({
        id: _.sliderWeight13, type: "Slider",
        x: 71 + shiftx, y: 265 + shifty,
        width: 100, rotation: 0,
        min: slidermin, max: slidermax, step: sliderstep,
        message: "1-3",
        factor: factor,
    });
    all.push(o[_.sliderWeight13]);

    _.sliderWeight24 = "sliderWeight24"
    self.add({
        id: _.sliderWeight24, type: "Slider",
        x: 245 + shiftx, y: 93 + shifty,
        width: 100, rotation: 40,
        min: slidermin, max: slidermax, step: sliderstep,
        message: "2-4",
        factor: factor,
    });
    all.push(o[_.sliderWeight24]);

    _.sliderWeight34 = "sliderWeight34"
    self.add({
        id: _.sliderWeight34, type: "Slider",
        x: 213 + shiftx, y: 265 + shifty,
        width: 100, rotation: 324,
        min: slidermin, max: slidermax, step: sliderstep,
        message: "3-4",
        factor: factor,
    });
    all.push(o[_.sliderWeight34]);

    _.sliderBias2 = "slider_bias2";
    self.add({
        id: _.sliderBias2, type: "Slider",
        x: 140 + shiftx, y: 13 + shifty,
        width: 100,
        min: slidermin, max: slidermax, step: sliderstep,
        message: "2",
        factor: factor,
    });
    all.push(o[_.sliderBias2]);

    _.sliderBias3 = "slider_bias3";
    self.add({
        id: _.sliderBias3, type: "Slider",
        x: 140 + shiftx, y: 329 + shifty,
        width: 100,
        min: slidermin, max: slidermax, step: sliderstep,
        message: "3",
        factor: factor,
    });
    all.push(o[_.sliderBias3]);

    _.sliderBias4 = "slider_bias4";
    self.add({
        id: _.sliderBias4, type: "Slider",
        x: 289 + shiftx, y: 255 + shifty,
        width: 100,
        min: slidermin, max: slidermax, step: sliderstep,
        message: "4",
        factor: factor,
    });
    all.push(o[_.sliderBias4]);


    _.anchorInput1X = 0 + shiftx;
    _.anchorInput1Y = 70 + shifty;
    _.xPlusInputText = 29;
    _.yPlusInputText = 30;
    _.xPlusInputDescription = -47;
    _.yPlusInputDescription = 35;

    _.input1 = "input1"
    self.add({
        id: _.input1, type: "ImageBox",
        src: "assets/birnen/blau/pfeilrechtsblau.png",
        x: _.anchorInput1X,
        y: _.anchorInput1Y,
    })
    all.push(o[_.input1]);

    _.input1Text = "input1Text"
    self.add({
        id: _.input1Text, type: "TextBox",
        x: _.anchorInput1X + _.xPlusInputText,
        y: _.anchorInput1Y + _.yPlusInputText,
        text: "",
        class: "inputText"
    });
    all.push(o[_.input1Text])

    _.input1Description = "input1Description";
    self.add({
        id: _.input1Description, type: "TextBox",
        x: _.anchorInput1X + _.xPlusInputDescription,
        y: _.anchorInput1Y + _.yPlusInputDescription,
        width: 130, height: 50,
        align: "center", color: "blue", size: 17,
        rotation: 270,
        text_id: "input1_description"
    })
    all.push(o[_.input1Description]);


    _.anchorInput2X = _.anchorInput1X + 0;
    _.anchorInput2Y = _.anchorInput1Y + 170;
    _.input2 = "input2"
    self.add({
        id: _.input2, type: "ImageBox",
        src: "assets/birnen/blau/pfeilrechtsblau.png",
        x: _.anchorInput2X,
        y: _.anchorInput2Y,
    })
    all.push(o[_.input2]);

    _.input2Description = "input2Description";
    self.add({
        id: _.input2Description, type: "TextBox",
        x: _.anchorInput2X + _.xPlusInputDescription,
        y: _.anchorInput2Y + _.yPlusInputDescription,
        width: 130, height: 50,
        align: "center", color: "blue", size: 17,
        rotation: 270, text_id: "input2_description"
    })
    all.push(o[_.input2Description]);

    _.input2Text = "input2Text"
    self.add({
        id: _.input2Text, type: "TextBox",
        x: _.anchorInput2X + _.xPlusInputText,
        y: _.anchorInput2Y + _.yPlusInputText,
        text: "",
        class: "inputText"
    });
    all.push(o[_.input2Text])

    _.perceptron2Links = "perceptron2Links"
    self.add({
        id: _.perceptron2Links, type: "ImageBox",
        src: "assets/birnen/blau/linksteil.png",
        x: 155 + shiftx,
        y: 82 + shifty,
    })
    all.push(o[_.perceptron2Links]);

    _.perceptron2Rechts = "perceptron2Rechts"
    self.add({
        id: _.perceptron2Rechts, type: "ImageBox",
        src: "assets/birnen/blau/teilrechts.png",
        x: 188 + shiftx,
        y: 82 + shifty,
    })
    all.push(o[_.perceptron2Rechts]);

    _.perceptron3Links = "perceptron3Links"
    self.add({
        id: _.perceptron3Links, type: "ImageBox",
        src: "assets/birnen/blau/linksteil.png",
        x: 155 + shiftx,
        y: 243 + shifty,
    })
    all.push(o[_.perceptron3Links]);

    _.perceptron3Rechts = "perceptron3Rechts"
    self.add({
        id: _.perceptron3Rechts, type: "ImageBox",
        src: "assets/birnen/blau/teilrechts.png",
        x: 188 + shiftx,
        y: 243 + shifty,
    })
    all.push(o[_.perceptron3Rechts]);

    _.perceptron4Links = "perceptron4Links"
    self.add({
        id: _.perceptron4Links, type: "ImageBox",
        src: "assets/birnen/blau/linksteil.png",
        x: 300 + shiftx,
        y: 170 + shifty,
    })
    all.push(o[_.perceptron4Links]);

    _.perceptron4Rechts = "perceptron4Rechts"
    self.add({
        id: _.perceptron4Rechts, type: "ImageBox",
        src: "assets/birnen/blau/teilrechts.png",
        x: 333 + shiftx,
        y: 171 + shifty,
    })
    all.push(o[_.perceptron4Rechts]);

    _.resultPerceptron = "resultPerceptron"
    self.add({
        id: _.resultPerceptron, type: "ImageBox",
        x: 332 + shiftx, y: 182 + shifty, width: 42, height: 42,
        //x: 325 + shiftx, y: 170 + shifty, width: 60, height: 60,
        src: "assets/birnen/Wrong.png"
    });
    all.push(o[_.resultPerceptron])


    publish("update/0-2", [_.network.links[0].weight]);
    publish("update/0-3", [_.network.links[1].weight]);
    publish("update/1-2", [_.network.links[2].weight]);
    publish("update/1-3", [_.network.links[3].weight]);
    publish("update/2-4", [_.network.links[4].weight]);
    publish("update/3-4", [_.network.links[5].weight]);
    publish("update/2", [_.network.getNodes()[2].bias]);
    publish("update/3", [_.network.getNodes()[3].bias]);
    publish("update/4", [_.network.getNodes()[4].bias]);

    return all;
}