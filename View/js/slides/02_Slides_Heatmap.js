SLIDES.push(
    {
        id: "blackbox",
        onjump: function (self) {
            _.slideCounter = "slideCounter";
            self.add({
                id: _.slideCounter, type: "TextBox",
                x: 0, y: 0, width: 50, height: 50,
                align: "center", color: "#aaa", size: 17,
                text: ""
            });
        },
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("2-1")

            _.topWords = "topWords";
            self.add({
                id: _.topWords, type: "TextBox", text_id: "02_title",
                x: 130, y: 10, width: 700, height: 100, align: "center"
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

            _.jochen = "jochenBild";
            self.add({
                id: _.jochen, type: "ImageBox",
                src: JochenFaces.erstaunt,
                x: 200, y: 60, width: 380 / 2, height: 545 / 2,
            });

            _.btmWords = "btmWords";
            self.add({
                id: _.btmWords, type: "TextBox", text_id: "02_text1",
                x: 130, y: 347, width: 700, height: 100, align: "center"
            })

            _.nextMiddle = "nextMiddle";
            self.add({
                id: _.nextMiddle, type: "Button",
                x: 383, y: 463,
                text_id: "01_button_next", uppercase: false,
                onclick: () => publish("slideshow/scratch")
            });

            _hide(o[_.tablet]);
            _hide(o[_.jochen]);
            _hide(o[_.tochter]);
            _hide(o[_.btmWords]);
            _hide(o[_.nextMiddle]);
            _show(o[_.jochen]);
            _fadeIn(o[_.tochter], 400);
            _fadeIn(o[_.btmWords], 800)
            _show(o[_.tablet], 1000)
            _moveX(o[_.tablet], -200, 1200)
            _fadeIn(o[_.nextMiddle], 1600)
        },
        onend: function (self) {
            let o = self.objects;
            self.remove(_.topWords)
            _hide(o[_.tablet])
            _hide(o[_.jochen])
            _hide(o[_.btmWords])
            _hide(o[_.nextMiddle])
            _hide(o[_.tochter])

        }
    },
    {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("2-2")

            _.yPosTopBtm = 100;
            _.yStepToNextBtm = 60;
            _.fotoBtm = "fotoBtm";
            let i = 0;
            self.add({
                id: _.fotoBtm, type: "Button",
                size: "long", x: 304, y: _.yPosTopBtm + (i++) * _.yStepToNextBtm,
                text_id: "02_button_foto_machen", uppercase: false,
                //active: false,
                onclick: () => publish("slideshow/scratch")
            });
            _.marmeladeBtm = "marmeladeBtm";
            self.add({
                id: _.marmeladeBtm, type: "Button",
                size: "long", x: 304, y: _.yPosTopBtm + (i++) * _.yStepToNextBtm,
                text_id: "02_button_birnenmarmelade", uppercase: false,
                active: false
                //onclick: () => publish("slideshow/next")
            });
            _.kuchenBtm = "kuchenBtm";
            self.add({
                id: _.kuchenBtm, type: "Button",
                size: "long", x: 304, y: _.yPosTopBtm + (i++) * _.yStepToNextBtm,
                text_id: "02_button_birnenkuchen", uppercase: false,
                active: false,
                //onclick: () => publish("slideshow/next")
            });
            _.bierBtm = "bierBtm";
            self.add({
                id: _.bierBtm, type: "Button",
                size: "long", x: 304, y: _.yPosTopBtm + (i++) * _.yStepToNextBtm,
                text_id: "02_button_birnenbier", uppercase: false,
                active: false,
                //onclick: () => publish("slideshow/next")
            });
        },
        onend: function (self) {
            let o = self.objects;
            _hide(o[_.fotoBtm])
            _hide(o[_.marmeladeBtm])
            _hide(o[_.kuchenBtm])
            _hide(o[_.bierBtm])
        }
    }, {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("2-3");
        },
        onend: function (self) {
            let o = self.objects;
        }
    },
    {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("2-4")

            _.conection1 = "conection1";
            _.conection2 = "connection2";
            _.weigth2 = "weigth2";
            _.weigth1 = "weigth1";
            _.biasOutput = "biasOutput";
            _.sliderInput1 = "sliderInput1";
            _.sliderInput2 = "sliderInput2";
            _.sliderWeight1 = "sliderWeight1";
            _.sliderWeight2 = "sliderWeight2";
            _.sliderBiasOutput = "sliderBiasOutput";
            _.group1 = [_.sliderWeight1, _.weigth1, _.conection1]
            _.group2 = [_.sliderWeight2, _.weigth2, _.conection2]
            self.add({
                id: _.conection1, type: "NWP", part: parts.connection,
                x: 194, y: 188, rotation: 30, size: {height: 17, width: 150},
                friends: _.group1,
            })
            self.add({
                id: _.conection2, type: "NWP", part: parts.connection,
                x: 190, y: 304, rotation: 330, size: {height: 17, width: 150},
                friends: _.group2,
            });
            self.add({
                id: _.weigth2, type: "NWP", part: parts.weigth,
                x: 230, y: 272,
                friends: _.group2,
            });

            self.add({
                id: _.weigth1, type: "NWP", part: parts.weigth,
                x: 230, y: 161,
                friends: _.group1,
            });
            self.add({
                id: _.biasOutput, type: "NWP", part: parts.weigth,
                x: 346, y: 271,
                friends: [_.sliderBiasOutput]
            });
            _.outputValue = "outputValue";
            self.add({
                id: _.outputValue, type: "NWP", part: parts.right,
                x: 400, y: 215,
                alwaysOn: true,
            });

            _.outputName = "outputName";
            self.add({
                id: _.outputName, type: "NWP", part: parts.left,
                x: 320, y: 215,
                alwaysOn: true,
            });
            _.input1Value = "input1Value";
            self.add({
                id: _.input1Value, type: "NWP", part: parts.right,
                x: 115, y: 115,
                alwaysOn: true,
            });

            _.input1Name = "input1Name";
            self.add({
                id: _.input1Name, type: "NWP", part: parts.left,
                x: 35, y: 115,
                alwaysOn: true,
            });
            _.input2Value = "input2Value";
            self.add({
                id: _.input2Value, type: "NWP", part: parts.right,
                x: 115, y: 315,
                alwaysOn: true,
            });

            _.input2Name = "input2Name";
            self.add({
                id: _.input2Name, type: "NWP", part: parts.left,
                x: 35, y: 315,
                alwaysOn: true,
            });

            _.sliderX = 50;
            _.sliderY = 400;
            _.sliderWidth = 300;
            self.add({
                id: _.sliderInput1, type: "Slider",
                x: _.sliderX, y: _.sliderY + 50,
                width: _.sliderWidth,
                min: -10, max: 10, step: 1,
                message: "update/0",
                alwaysOn: true
            });
            self.add({
                id: _.sliderInput2, type: "Slider",
                x: _.sliderX, y: _.sliderY + 100,
                width: _.sliderWidth,
                min: -10, max: 10, step: 1,
                message: "update/1",
                alwaysOn: true,
            });
            self.add({
                id: _.sliderWeight1, type: "Slider",
                x: _.sliderX, y: _.sliderY,
                width: _.sliderWidth,
                min: -10, max: 10, step: 1,
                message: "update/0-2"
            });
            self.add({
                id: _.sliderWeight2, type: "Slider",
                x: _.sliderX, y: _.sliderY,
                width: _.sliderWidth,
                min: -10, max: 10, step: 1,
                message: "update/1-2"
            });
            self.add({
                id: _.sliderBiasOutput, type: "Slider",
                x: _.sliderX, y: _.sliderY,
                width: _.sliderWidth,
                min: -10, max: 10, step: 1,
                message: "update/2"
            });

            _.sliders = [o[_.sliderWeight1], o[_.sliderWeight2], o[_.sliderBiasOutput]]
            //_.sliders.forEach(slider => _hide(slider));

            // Perceptron
            self.add({
                id: "perceptron", type: "Perceptron",
                size: [2, 1],
                activationFun: Activations.RELU,
                activationFunOutput: Activations.RELU,
            });

            _.weight1Text = "weight1Text";
            self.add({id: _.weight1Text, type: "TextBox", connectedWith: o[_.weigth1], text: "W1"})
            _.weight2Text = "weight2Text";
            self.add({id: _.weight2Text, type: "TextBox", connectedWith: o[_.weigth2], text: "W2"})
            _.biasOutputText = "biasOutputText";
            self.add({id: _.biasOutputText, type: "TextBox", connectedWith: o[_.biasOutput], text: "b"})
            _.input1Text = "input1Text";
            self.add({id: _.input1Text, type: "TextBox", connectedWith: o[_.input1Value], text: "i1"})
            _.input2Text = "input2Text";
            self.add({id: _.input2Text, type: "TextBox", connectedWith: o[_.input2Value], text: "i2"})
            _.outputNameText = "outputNameText";
            self.add({id: _.outputNameText, type: "TextBox", connectedWith: o[_.outputName], text: "sum"})
            _.outputValueText = "outputValueText";
            self.add({id: _.outputValueText, type: "TextBox", connectedWith: o[_.outputValue], text: "out"})

            listen(_.misc, "newOutput", function (network) {
                o[_.weight1Text].setText(network.links[0].weight);
                o[_.weight2Text].setText(network.links[1].weight);
                o[_.biasOutputText].setText(network.getNodes()[2].bias);
                o[_.input1Text].setText(network.getNodes()[0].bias);
                o[_.input2Text].setText(network.getNodes()[1].bias);
                o[_.outputNameText].setText(network.getNodes()[2].result);
                o[_.outputValueText].setText(network.getNodes()[2].output);
            });
        },

        onend: function (self) {

        }
    },
    {

        onstart: function (self) {
            let o = self.objects;

            //Überschrift
            _.title = "title"
            self.add({
                id: _.title, type: "TextBox", text_id: "02_title",
                x: 130, y: 10, width: 700, height: 100, align: "center"
            });

            // Bild Jochen
            _.jochen = "img";
            self.add({
                id: _.jochen, type: "ImageBox",
                src: "assets/Jochen/Jochen_verduzt.jpg",
                x: 0, y: 60, width: 380 / 2, height: 545 / 2,
            });

            //Text Jochen
            _.jochenText = "jochenText";
            self.add({
                id: _.jochenText, type: "TextBox",
                x: 210, y: 85, width: 70, height: 50,
                align: "center", color: "#aaa", size: 17,
                text_id: "02_jochen_verwundert"
            });

            //Maschine
            _.maschine = "maschine";
            self.add({
                id: _.maschine, type: "ImageBox",
                src: "assets/Jochen/maschine_leer.jpg",
                x: 315, y: 65, width: 874 * 0.52, height: 441 * 0.52,
            })
            _.maschinefront = "maschinefront";
            self.add({
                id: _.maschinefront, type: "ImageBox",
                src: "assets/Jochen/maschine_front.png",
                x: 442, y: 138, width: 358 * 0.52, height: 250 * 0.52,
            })

            // Box
            _.box = "box";
            self.add({
                id: _.box, type: "ImageBox",
                src: "assets/Jochen/boxbig.png",
                x: 300, y: 60, width: 690 * 0.7, height: 350 * 0.7,
            });

            //Text Box
            _.boxtext = "boxText";
            self.add({
                id: _.boxtext, type: "TextBox",
                x: 400, y: 192, width: 200, height: 50,
                align: "center", color: "#aba", size: 17,
                text_id: "02_text_box"
            });

            _.btmWords = "btmWords";
            self.add({
                id: _.btmWords, type: "TextBox", text_id: "02_text_1",
                x: 130, y: 347, width: 700, height: 100, align: "center"
            })

            _.buttonOpenBox = "openbox";
            self.add({
                id: _.buttonOpenBox, type: "Button", x: 275, y: 463,
                text_id: "02_openbox", uppercase: true,
                onclick: function () {
                    o[_.box].dom.style.top = -200;
                    o[_.boxtext].dom.style.top = 192 - 260;
                    _fadeOut(o[_.box], 500, 0);
                    _fadeOut(o[_.boxtext], 500, 0);
                    publish("slideshow/next");
                }
            });
        },
        onend: function (self) {
            self.remove(_.title);
            self.remove(_.btmWords);
            self.remove(_.buttonOpenBox);
        }
    },
    {
        onstart: function (self) {
            let o = self.objects;
            o[_.jochen].dom.src = "assets/Jochen/Jochen_fragend.jpg";

            _.btmWords = "btmWords";
            self.add({
                id: _.btmWords, type: "TextBox", text_id: "02_text_2",
                x: 130, y: 347, width: 700, height: 100, align: "center"
            })

            // Perceptron
            _.perceptron = "perceptron"
            self.add({
                id: _.perceptron, type: "Perceptron", x: 300, y: 0,
                size: [2, 1],
                activationFun: Activations.RELU,
                activationFunOutput: Activations.STEP,
                params: {"0": 0, "1": 0, "2": 1, "0-2": 1, "1-2": -1}
            });
            publish("newOutput", self.objects.perceptron.network)


            // Buttons
            _.birnetestengut = "birnetestengut";
            self.add({
                id: _.birnetestengut, type: "Button", x: 225, y: 463,
                text_id: "02_buttom_birnetestengut", uppercase: false,
                active: true,
                onclick: function () {
                    o[_.birnetestengut].deactivate();
                    //o[_.birnetestenbad].activate();
                    publish("nextBirne", [o[_.birnetestenbad]]);
                }
            });
            _.birnetestenbad = "birnetestenbad";
            self.add({
                id: _.birnetestenbad, type: "Button", x: 425, y: 463,
                text_id: "02_buttom_birnetestenbad", uppercase: false,
                active: false,
                onclick: function () {
                    o[_.birnetestenbad].deactivate();
                    //o[_.birnetestengut].activate();
                    publish("nextBirne", [o[_.birnetestengut]]);
                }
            });
            _hide(o[_.birnetestengut]);
            _fadeIn(o[_.birnetestengut], 500);
            _hide(o[_.birnetestenbad]);
            _fadeIn(o[_.birnetestenbad], 700);

            //MaschineOutput
            _.maschineoutput = "maschineoutput";
            self.add({
                id: _.maschineoutput, type: "ImageBox",
                src: "assets/Jochen/dollar.png",
                x: 692, y: 76, width: 110 * 0.45, height: 139 * 0.45,
            });
            _hide(o[_.maschineoutput]);

            //Birne
            _.birne = "birne";
            self.add({
                id: _.birne, type: "ImageBox",
                src: "assets/Jochen/birne_gut.png",
                x: 357, y: 100, width: 350 * 0.1, height: 560 * 0.1,
            });
            _hide(o[_.birne]);

            _.birnen = [
                {
                    good: true, widthplus: 3, hightplus: 0, face: "assets/Jochen/Jochen_lacheln.jpg",
                    wordsJochen: "02_happy1", showgood: true
                },
                {
                    good: false, widthplus: 10, hightplus: 0, face: "assets/Jochen/Jochen_zufrieden.jpg",
                    wordsJochen: "02_happy2", showgood: false
                },
                {
                    good: true, widthplus: 0, hightplus: 3, face: "assets/Jochen/Jochen_stars.jpg",
                    wordsJochen: "02_happy3", showgood: true
                },
                {
                    good: false, widthplus: 0, hightplus: -20, face: "assets/Jochen/Jochen_wuetend.jpg",
                    wordsJochen: "02_unhappy", showgood: true
                }
            ];

            let nextBirne = function (nextButtom) {
                [b, ...r] = _.birnen;
                _.birnen = r;
                _fadeOut(o[_.birne], 100, 0);
                o[_.birne].dom.src = b.good ? "assets/Jochen/birne_gut.png" : "assets/Jochen/birne_schlecht.png";
                _fadeIn(o[_.birne], 100);
                setTimeout(() => {
                    _show(o[_.maschineoutput]);
                    o[_.maschineoutput].dom.src = b.showgood ? "assets/Jochen/dollar.png" : "assets/Jochen/dollar_no.png";
                    o[_.jochen].dom.src = b.face;
                    o[_.jochenText].setTextID(b.wordsJochen);
                }, 200);
                if (r.size === 0) { //Letze Birne
                    o[_.next].activate();
                    nextButtom.deactivate();
                } else {
                    nextButtom.activate();
                }
            };

            listen(_, "nextBirne", nextBirne);

            _.next = "nextSlide";
            self.add({
                id: _.next, type: "Button", x: 775, y: 463,
                text_id: "nextSlide", uppercase: true,
                onclick: function () {
                    publish("slideshow/next");
                }
            });
            //_hide(o[_.next]);
        },
        onend: function (self) {
            self.remove(_.btmWords);
            self.remove(_.birnetestengut);
            self.remove(_.birnetestenbad);
            self.remove(_.perceptron);
            self.remove(_.boxtext);
            self.remove(_.box);
            self.remove(_.next);

            unlisten(_);
        }
    },
    {
        onstart: function (self) {
            let o = self.objects;

            // Buttons
            _.birnetesten = "birnetesten";
            self.add({
                id: _.birnetesten, type: "Button", x: 375, y: 463,
                text_id: "nextSlide", uppercase: true,
                onclick: function () {
                    publish("slideshow/next");
                }
            });
        },
        onend: function (self) {
            self.remove(_.birnetesten);
            self.remove(_.maschine);
            self.remove(_.maschinefront);
            self.remove(_.jochen);
            _.clear();
        }
    },);

