SLIDES.push(
    {
        id: "komplex",
        onjump: function (self) {

        },
        onstart: function (self) {
            _.allBirnen = addBirnenGrid(self)
            _.allNetwork = addNetwork221small(self)

            _.nextMiddle = "nextMiddle";
            self.add({
                id: _.nextMiddle, type: "Button",
                x: 383, y: 463,
                text_id: "01_button_next", uppercase: false,
                onclick: () => publish("slides^how/scratch")
            });

            _.learningRate = 1;

            _.wrong = "wrong";
            self.add({
                id: _.wrong, type: "Button",
                x: 100, y: 463,
                text: "falsch", uppercase: false,
                onclick: () => {
                    let network = _.network
                    let firstOutput = network.getFirstOutput();
                    let target = firstOutput > 0.5 ? 0.01 : 0.99;
                    let input = network.getInput();
                    let simpleNN = network.asSimpleNN();
                    backProp(simpleNN, input, [target], Loss.errorL2, _.learningRate)
                    network.updateFromSimpleNN(simpleNN);

                    publish("update/0-2", [_.network.links[0].weight]);
                    publish("update/0-3", [_.network.links[1].weight]);
                    publish("update/1-2", [_.network.links[2].weight]);
                    publish("update/1-3", [_.network.links[3].weight]);
                    publish("update/2-4", [_.network.links[4].weight]);
                    publish("update/3-4", [_.network.links[5].weight]);
                    publish("update/2", [_.network.getNodes()[2].bias]);
                    publish("update/3", [_.network.getNodes()[3].bias]);
                    publish("update/4", [_.network.getNodes()[4].bias]);
                }
            });
        },
        onstart2: function (self) {
            let o = self.objects;
            _.slideCounter = "slideCounter";
            self.add({
                id: _.slideCounter, type: "TextBox",
                x: 0, y: 0, width: 50, height: 50,
                align: "center", color: "#aaa", size: 17,
                text: ""
            });
            o[_.slideCounter].setText("5-1")

            _.topWords = "topWords";
            self.add({
                id: _.topWords, type: "TextBox", text_id: "05_title",
                x: 130, y: 10, width: 700, height: 100, align: "center"
            });

            _.jochen = "jochenBild";
            self.add({
                id: _.jochen, type: "ImageBox",
                src: JochenFaces.erstaunt,
                x: 200, y: 60, width: 380 / 2, height: 545 / 2,
            });

            _.tablet = "tablet";
            self.add({
                id: _.tablet, type: "ImageBox",
                src: "assets/birnen/tablet1.jpg",
                x: 600, y: 170, width: 438 / 3, height: 689 / 3,
            });

            _.tochter = "tochterBild";
            self.add({
                id: _.tochter, type: "ImageBox",
                src: "assets/Jochen/Tochter.PNG",
                x: 600, y: 60, width: 380 / 2.1, height: 545 / 2.1,
            });

            _.btmWords = "btmWords";
            self.add({
                id: _.btmWords, type: "TextBox", text_id: "05_text1",
                x: 130, y: 347, width: 700, height: 100, align: "center"
            })

            _.nextMiddle = "nextMiddle";
            self.add({
                id: _.nextMiddle, type: "Button",
                x: 383, y: 463,
                text_id: "01_button_next", uppercase: false,
                onclick: () => publish("slideshow/scratch")
            });

            _moveX(o[_.tablet], -200, 1200)

        },
        onend: function (self) {
            let o = self.objects;
            self.remove(_.topWords)
            _hide(o[_.jochen])
            _hide(o[_.btmWords])
            _hide(o[_.nextMiddle])
            _hide(o[_.tochter])
            _hide(o[_.tablet])
        }
    },
    {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("5-2")
            o[_.btmWords].setTextID("05_text2")

            let allInterface = buildTabletInterface(self)

            _fadeIn(o[_.btmWords], 500);
            _fadeIn(o[_.nextMiddle], 1000);
        },
        onend: function (self) {
            let o = self.objects;
            _hide(o[_.fotoBtm]);
            _hide(o[_.marmeladeBtm]);
            _hide(o[_.kuchenBtm]);
            _hide(o[_.bierBtm]);
            _hide(o[_.btmWords]);
            _hide(o[_.birnenScanner]);
            _hide(o[_.birnenScannerText]);

        }
    },
    {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("5-3");

            _.tablet2 = "tablet2";
            self.add({
                id: _.tablet2, type: "ImageBox",
                src: "assets/birnen/tablet2.jpg",
                x: 350, y: 170, width: 438 / 4.5, height: 689 / 4.5,
            });

            _.flashlight = "flashlight";
            self.add({
                id: _.flashlight, type: "ImageBox",
                src: "assets/Jochen/blitzlicht.jpg",
                x: 350, y: 170, width: 208 / 2.5, height: 222 / 2.5,
            });

            _.exampleBirneSrc = "assets/birnen/b1.jpg";
            _.birne0 = "birne0"
            self.add({
                id: _.birne0, type: "ImageBox",
                src: _.exampleBirneSrc,
                x: 554,//+ _.moveX,
                y: 254,//+ _.moveY,
                width: 40,//_.birnen_width * _.scale0,
                rotation: 0
            });

            o[_.jochen].changeImage(JochenFaces.verduzt)
            _hide(o[_.flashlight])
            _show(o[_.jochen]);
            _show(o[_.tablet2]);
            _fadeIn(o[_.birne0], 1000);
            _show(o[_.flashlight], 1500);
            _hide(o[_.flashlight], 2000)
            setTimeout(() => o[_.jochen].changeImage(JochenFaces.zufrieden), 2000);
            setTimeout(() => publish("slideshow/scratch"), 3000);

        },
        onend: function (self) {
            let o = self.objects;
            _hide(o[_.jochen]);
            _hide(o[_.tablet2]);
            _hide(o[_.birne0]);
        }
    },
    {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("5-4")
            o[_.btmWords].setTextID("05_text4")

            o[_.nextMiddle].changeOnClick(() => publish("slideshow/next"));

            [o[_.fotoBtm], o[_.marmeladeBtm], o[_.kuchenBtm], o[_.bierBtm],
                o[_.btmWords],]
                .reduce((time, obj) => {
                    _fadeIn(obj, time)
                    return time + 300;
                }, 500)

            _show(o[_.birnenScanner])
            _fadeIn(o[_.btmWords], 1000);
            _fadeIn(o[_.nextMiddle], 1500);
        },
        onend: function (self) {
            let o = self.objects;
            _hide(o[_.nextMiddle])
            _hide(o[_.btmWords])
        }
    },
    {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("4-3")
            o[_.btmWords].setTextID("04_text3")

            _fadeIn(o[_.btmWords], 500);
            _fadeIn(o[_.nextMiddle], 1000);
        },
        onend: function (self) {
            let o = self.objects;
            _hide(o[_.btmWords])
            _hide(o[_.nextMiddle])

            _.allBirnen.concat(_.allNetwork).forEach(obj => _hide(obj))

        }
    },
    {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("4-4")
            o[_.btmWords].setTextID("04_text4")

            _fadeIn(o[_.jochen],0);
            _fadeIn(o[_.btmWords], 500);
            _fadeIn(o[_.nextMiddle], 1000);
        },
        onend: function (self) {
            let o = self.objects;
            _hide(o[_.btmWords])
            _hide(o[_.nextMiddle])
        }
    },
    {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("4-5")
            o[_.btmWords].setTextID("04_text5")

            _fadeIn(o[_.btmWords], 500);
            _fadeIn(o[_.nextMiddle], 1000);
        },
        onend: function (self) {
            let o = self.objects;
            _hide(o[_.btmWords])
            _hide(o[_.nextMiddle])
        }
    },
    {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("4-6")
            o[_.btmWords].setTextID("04_text6")

            _fadeIn(o[_.btmWords], 500);
            _fadeIn(o[_.nextMiddle], 1000);
        },
        onend: function (self) {
            let o = self.objects;
            _hide(o[_.btmWords])
            _hide(o[_.nextMiddle])
            self.clear()
        }
    },
);

function buildTabletInterface(self) {
    let o = self.objects;
    let all = []

    _.birnenscannerX = 0
    _.birnenscannerY = 100
    _.birnenScanner = "birnenScanner";
    self.add({
        id: _.birnenScanner, type: "ImageBox",
        src: "assets/birnen/birnenScanner.jpg",
        x: _.birnenscannerX, y: _.birnenscannerY, width: 639 / 4, height: 782 / 4,
    });
    all.push(o[_.birnenScanner])

    _.birnenScannerText = "birnenScannerText";
    self.add({
        id: _.birnenScannerText, type: "TextBox",
        x: _.birnenscannerX + 17, y: _.birnenscannerY + 75, width: 130, height: 50,
        align: "center", color: "#aaa", size: 17,
        text_id: "02_scannerText"
    });
    all.push(o[_.birnenScannerText])


    _.yPosTopBtm = 100;
    _.yStepToNextBtm = 60;
    _.fotoBtm = "fotoBtm";
    let i = 0;
    self.add({
        id: _.fotoBtm, type: "Button",
        size: "long", x: 304, y: _.yPosTopBtm + (i++) * _.yStepToNextBtm,
        text_id: "02_button_foto_machen", uppercase: false,
        active: false,
        onclick: () => publish("slideshow/scratch")
    });
    all.push(o[_.fotoBtm])


    _.marmeladeBtm = "marmeladeBtm";
    self.add({
        id: _.marmeladeBtm, type: "Button",
        size: "long", x: 304, y: _.yPosTopBtm + (i++) * _.yStepToNextBtm,
        text_id: "02_button_birnenmarmelade", uppercase: false,
        active: false,
        onclick: () => publish("slideshow/next")
    });
    all.push(o[_.marmeladeBtm])


    _.kuchenBtm = "kuchenBtm";
    self.add({
        id: _.kuchenBtm, type: "Button",
        size: "long", x: 304, y: _.yPosTopBtm + (i++) * _.yStepToNextBtm,
        text_id: "02_button_birnenkuchen", uppercase: false,
        active: false,
        onclick: () => publish("slideshow/next")
    });
    all.push(o[_.kuchenBtm])


    _.bierBtm = "bierBtm";
    self.add({
        id: _.bierBtm, type: "Button",
        size: "long", x: 304, y: _.yPosTopBtm + (i++) * _.yStepToNextBtm,
        text_id: "02_button_birnenbier", uppercase: false,
        active: false,
        onclick: () => publish("slideshow/next")
    });
    all.push(o[_.bierBtm])


    _.birne1 = "birne1"
    self.add({
        id: _.birne1, type: "ImageBox",
        src: _.exampleBirneSrc,
        x: 40,//+ _.moveX,
        y: 130,//+ _.moveY,
        width: 80,//_.birnen_width * _.scale0,
        rotation: 0
    });
    all.push(o[_.birne1])


    _.anchorInput1X = 160;
    _.anchorInput1Y = 70;
    _.xPlusInputText = 40;
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
    all.push(o[_.input1])


    _.input1Text = "input1Text"
    self.add({
        id: _.input1Text, type: "TextBox",
        x: _.anchorInput1X + _.xPlusInputText,
        y: _.anchorInput1Y + _.yPlusInputText,
        text: "7"
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
    all.push(o[_.input1Description])


    _.anchorInput2X = _.anchorInput1X + 0;
    _.anchorInput2Y = _.anchorInput1Y + 170;
    _.input2 = "input2"
    self.add({
        id: _.input2, type: "ImageBox",
        src: "assets/birnen/blau/pfeilrechtsblau.png",
        x: _.anchorInput2X,
        y: _.anchorInput2Y,
    })
    all.push(o[_.input2])


    _.input2Text = "input2Text"
    self.add({
        id: _.input2Text, type: "TextBox",
        x: _.anchorInput2X + _.xPlusInputText,
        y: _.anchorInput2Y + _.yPlusInputText,
        text: "3"
    });
    all.push(o[_.input2Text])


    _.input2Description = "input2Description";
    self.add({
        id: _.input2Description, type: "TextBox",
        x: _.anchorInput2X + _.xPlusInputDescription,
        y: _.anchorInput2Y + _.yPlusInputDescription,
        width: 130, height: 50,
        align: "center", color: "blue", size: 17,
        rotation: 270, text_id: "input2_description"
    })
    all.push(o[_.input2Description])

    return all
}

function addNetwork221small(self, shiftx = 0, shifty = 0,
                            slidermin = -10, slidermax = 10, sliderstep = 1) {
    let o = self.objects;
    all = []

    _.perceptron = "perceptron"
    self.add({
        id: _.perceptron, type: "Perceptron",
        size: [2,2, 1],
        activationFun: Activations.SIGMOID,
        activationFunOutput: Activations.SIGMOID,
        activationFunInput: Activations.SIGMOID,
        params: {
            "0": 1, //Input1
            "1": 1,  //Input2
            "2": (-3), //Hidden Bias
            "3": (-2), //Hidden Bias
            "4": (-4), //Output Bias
            "0-2": -4,
            "1-2": 2,
            "0-3": -4,
            "1-3": 2,
            "2-4": -4,
            "3-4": 2,

        }
    });
    _.network = o[_.perceptron].network;
    all.push(o[_.perceptron])

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
        message: "update/0-2"
    });
    all.push(o[_.sliderWeight02]);

    _.sliderWeight12 = "sliderWeight12"
    self.add({
        id: _.sliderWeight12, type: "Slider",
        x: 54 + shiftx, y: 265+shifty,
        width: 165, rotation: 300,
        min: slidermin, max: slidermax, step: sliderstep,
        message: "update/1-2"
    });
    all.push(o[_.sliderWeight12]);

    _.sliderWeight03 = "sliderWeight03"
    self.add({
        id: _.sliderWeight03, type: "Slider",
        x: 100 + shiftx, y: 100 + shifty,
        width: 165, rotation: 60,
        min: slidermin, max: slidermax, step: sliderstep,
        message: "update/0-3"
    });
    all.push(o[_.sliderWeight03]);

    _.sliderWeight13 = "sliderWeight13"
    self.add({
        id: _.sliderWeight13, type: "Slider",
        x: 71 + shiftx, y: 265+shifty,
        width: 100, rotation: 0,
        min: slidermin, max: slidermax, step: sliderstep,
        message: "update/1-3"
    });
    all.push(o[_.sliderWeight13]);

    _.sliderWeight24 = "sliderWeight24"
    self.add({
        id: _.sliderWeight24, type: "Slider",
        x: 245 + shiftx, y: 93 + shifty,
        width: 100, rotation: 40,
        min: slidermin, max: slidermax, step: sliderstep,
        message: "update/2-4"
    });
    all.push(o[_.sliderWeight24]);

    _.sliderWeight34 = "sliderWeight34"
    self.add({
        id: _.sliderWeight34, type: "Slider",
        x: 213 + shiftx, y: 265+shifty,
        width: 100, rotation: 324,
        min: slidermin, max: slidermax, step: sliderstep,
        message: "update/3-4"
    });
    all.push(o[_.sliderWeight34]);

    _.sliderBias2 = "slider_bias2";
    self.add({
        id: _.sliderBias2, type: "Slider",
        x: 140+shiftx, y: 13+shifty,
        width: 100,
        min: slidermin, max: slidermax, step: sliderstep,
        message: "update/2"
    });
    all.push(o[_.sliderBias2]);

    _.sliderBias3 = "slider_bias3";
    self.add({
        id: _.sliderBias3, type: "Slider",
        x: 140+shiftx, y: 329+shifty,
        width: 100,
        min: slidermin, max: slidermax, step: sliderstep,
        message: "update/3"
    });
    all.push(o[_.sliderBias3]);

    _.sliderBias4 = "slider_bias4";
    self.add({
        id: _.sliderBias4, type: "Slider",
        x: 289+shiftx, y: 255+shifty,
        width: 100,
        min: slidermin, max: slidermax, step: sliderstep,
        message: "update/4"
    });
    all.push(o[_.sliderBias4]);


    _.anchorInput1X = 0+shiftx;
    _.anchorInput1Y = 70+shifty;
    _.xPlusInputText = 40;
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

    _.perceptron2Links = "perceptron2Links"
    self.add({
        id: _.perceptron2Links, type: "ImageBox",
        src: "assets/birnen/blau/linksteil.png",
        x: 155+shiftx,
        y: 82+shifty,
    })
    all.push(o[_.perceptron2Links]);

    _.perceptron2Rechts = "perceptron2Rechts"
    self.add({
        id: _.perceptron2Rechts, type: "ImageBox",
        src: "assets/birnen/blau/teilrechts.png",
        x: 188+shiftx,
        y: 82+shifty,
    })
    all.push(o[_.perceptron2Rechts]);

    _.perceptron3Links = "perceptron3Links"
    self.add({
        id: _.perceptron3Links, type: "ImageBox",
        src: "assets/birnen/blau/linksteil.png",
        x: 155+shiftx,
        y: 243+shifty,
    })
    all.push(o[_.perceptron3Links]);

    _.perceptron3Rechts = "perceptron3Rechts"
    self.add({
        id: _.perceptron3Rechts, type: "ImageBox",
        src: "assets/birnen/blau/teilrechts.png",
        x: 188+shiftx,
        y: 243+shifty,
    })
    all.push(o[_.perceptron3Rechts]);

    _.perceptron4Links = "perceptron4Links"
    self.add({
        id: _.perceptron4Links, type: "ImageBox",
        src: "assets/birnen/blau/linksteil.png",
        x: 300+shiftx,
        y: 170+shifty,
    })
    all.push(o[_.perceptron4Links]);

    _.perceptron4Rechts = "perceptron4Rechts"
    self.add({
        id: _.perceptron4Rechts, type: "ImageBox",
        src: "assets/birnen/blau/teilrechts.png",
        x: 333+shiftx,
        y: 171+shifty,
    })
    all.push(o[_.perceptron4Rechts]);


    publish("update/0-2", [_.network.links[0].weight]);
    publish("update/0-3", [_.network.links[1].weight]);
    publish("update/1-2", [_.network.links[2].weight]);
    publish("update/1-3", [_.network.links[3].weight]);
    publish("update/2-4", [_.network.links[4].weight]);
    publish("update/3-4", [_.network.links[5].weight]);
    publish("update/2", [_.network.getNodes()[2].bias]);
    publish("update/3", [_.network.getNodes()[3].bias]);
    publish("update/4", [_.network.getNodes()[4].bias]);

    return all
}