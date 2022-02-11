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
            o[_.btmWords].setTextID("02_text2")


            _.birnenscannerX = 0
            _.birnenscannerY = 100
            _.birnenScanner = "birnenScanner";
            self.add({
                id: _.birnenScanner, type: "ImageBox",
                src: "assets/birnen/birnenScanner.jpg",
                x: _.birnenscannerX, y: _.birnenscannerY, width: 639 / 4, height: 782 / 4,
            });
            //Begrüßung Jochen
            _.birnenScannerText = "birnenScannerText";
            self.add({
                id: _.birnenScannerText, type: "TextBox",
                x: _.birnenscannerX + 17, y: _.birnenscannerY + 75, width: 130, height: 50,
                align: "center", color: "#aaa", size: 17,
                text_id: "02_scannerText"
            });

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
                active: false,
                onclick: () => publish("slideshow/next")
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

            _fadeIn(o[_.btmWords], 800)
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
            _moveX(o[_.birnenScanner], 400)
        }
    },
    {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("2-3");

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

            // TODO: Text für Jochen hinzufügen
            // TODO: Ton bei Kameraklick hinzufügen
            // TODO: ggf. ein oder zwei Button "Klick" und "Weiter" hinzufügen
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
            o[_.slideCounter].setText("2-4")
            o[_.btmWords].setTextID("02_text4")
            _.birne1 = "birne1"
            self.add({
                id: _.birne1, type: "ImageBox",
                src: _.exampleBirneSrc,
                x: 440,//+ _.moveX,
                y: 130,//+ _.moveY,
                width: 80,//_.birnen_width * _.scale0,
                rotation: 0
            });

            o[_.nextMiddle].changeOnClick(() => publish("slideshow/next"));

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
            o[_.slideCounter].setText("2-5")
            o[_.btmWords].setTextID("02_text5")

            _.anchorInput1X = 560;
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
            _.input1Text = "input1Text"
            self.add({
                id: _.input1Text, type: "TextBox",
                x: _.anchorInput1X + _.xPlusInputText,
                y: _.anchorInput1Y + _.yPlusInputText,
                text: "7"
            });

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


            _fadeIn(o[_.btmWords], 500);
            _fadeIn(o[_.nextMiddle], 1000);
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
            o[_.slideCounter].setText("2-6")
            o[_.btmWords].setTextID("02_text6")

            _.anchorInput2X = _.anchorInput1X + 0;
            _.anchorInput2Y = _.anchorInput1Y + 170;

            _.input2 = "input2"
            self.add({
                id: _.input2, type: "ImageBox",
                src: "assets/birnen/blau/pfeilrechtsblau.png",
                x: _.anchorInput2X,
                y: _.anchorInput2Y,
            })
            _.input2Text = "input2Text"
            self.add({
                id: _.input2Text, type: "TextBox",
                x: _.anchorInput2X + _.xPlusInputText,
                y: _.anchorInput2Y + _.yPlusInputText,
                text: "3"
            });

            _.input2Description = "input2Description";
            self.add({
                id: _.input2Description, type: "TextBox",
                x: _.anchorInput2X + _.xPlusInputDescription,
                y: _.anchorInput2Y + _.yPlusInputDescription,
                width: 130, height: 50,
                align: "center", color: "blue", size: 17,
                rotation: 270, text_id: "input2_description"
            })

            _fadeIn(o[_.btmWords], 500);
            _fadeIn(o[_.nextMiddle], 1000);
        },
        onend: function (self) {
            let o = self.objects;
            _hide(o[_.nextMiddle]);
            _hide(o[_.btmWords]);
            [
                o[_.birne1], o[_.birnenScanner],
                o[_.input1Text], o[_.input1Description],
                o[_.input2Text], o[_.input2Description],
                o[_.input1], o[_.input2]
            ].forEach(obj => _moveX(obj, -400));
        }
    },
    {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("2-7");
            o[_.btmWords].setTextID("02_text7");

            o[_.fotoBtm].deactivate();
            o[_.marmeladeBtm].activate();

            [o[_.fotoBtm], o[_.marmeladeBtm], o[_.kuchenBtm], o[_.bierBtm],
                o[_.btmWords],]
                .reduce((time, obj) => {
                    _fadeIn(obj, time)
                    return time + 300;
                }, 500)


        },
        onend: function (self) {
            let o = self.objects;
            _hide(o[_.nextMiddle])
            _hide(o[_.btmWords])
            o[_.marmeladeBtm].deactivate();
        }
    },
    {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("2-8");
            o[_.btmWords].setTextID("02_text8");


            _.configBtm = "configBtm";
            self.add({
                id: _.configBtm, type: "Button",
                x: 663, y: 160,
                text_id: "02_button_bearbeiten", uppercase: false,
                onclick: () => publish("slideshow/next")
            });

            _.result = "result"
            self.add({
                id: _.result, type: "ImageBox",
                x: 70, y: 205, width: 80, height: 80,
                src: "assets/birnen/Wrong.png"
            });

            _fadeIn(o[_.btmWords], 500);
            //_fadeIn(o[_.nextMiddle], 1000);

        },
        onend: function (self) {
            let o = self.objects;
            _hide(o[_.fotoBtm]);
            _hide(o[_.marmeladeBtm]);
            _hide(o[_.kuchenBtm]);
            _hide(o[_.bierBtm]);
            _hide(o[_.configBtm]);
            _hide(o[_.nextMiddle]);
            _hide(o[_.btmWords]);
        }
    },
    {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("2-9")
            o[_.btmWords].setTextID("02_text9");


            _.perceptron = "perceptron"
            self.add({
                id: _.perceptron, type: "Perceptron",
                size: [2, 1],
                activationFun: Activations.RELU,
                activationFunOutput: Activations.SIGMOID,
                activationFunInput: Activations.LINEAR,
                params: {
                    "0": 7, //Input1
                    "1": 3,  //Input2
                    "2": (-3), //Bias
                    "0-2": 4,
                    "1-2": 6,
                }
            });
            _.network = o[_.perceptron].network;


            _.explainLinks = "explainLinks"
            self.add({
                id: _.explainLinks, type: "ImageBox",
                src: "assets/birnen/schwarz/explainTall.png",
                x: 420,
                y: 60,
            })
            _.explainRechts = "explainRechts"
            self.add({
                id: _.explainRechts, type: "ImageBox",
                src: "assets/birnen/schwarz/explainTall.png",
                x: 499,
                y: 60,
            })

            _.sliderWeight1 = "sliderWeight1"
            self.add({
                id: _.sliderWeight1, type: "Slider",
                x: 258, y: 93,
                width: 200, rotation: 25,
                min: -10, max: 10, step: 1,
                message: "update/0-2"
            });

            _.sliderWeight2 = "sliderWeight2"
            self.add({
                id: _.sliderWeight2, type: "Slider",
                x: 238, y: 260,
                width: 200, rotation: 340,
                min: -10, max: 10, step: 1,
                message: "update/1-2"
            });


            _.biasDot = "biasDot"
            self.add({
                id: _.biasDot, type: "ImageBox",
                src: "assets/birnen/blau/bias.png",
                x: 413,
                y: 235,
            })
            _.sliderBias = "slider_bias";
            self.add({
                id: _.sliderBias, type: "Slider",
                x: 422, y: 264,
                width: 100,
                min: -10, max: 10, step: 1,
                message: "update/2"
            });


            _.perceptronLinks = "perceptronLinks"
            self.add({
                id: _.perceptronLinks, type: "ImageBox",
                src: "assets/birnen/blau/dingslinks.png",
                x: 420,
                y: 178,
            })
            _.perceptronRechts = "perceptronRechts"
            self.add({
                id: _.perceptronRechts, type: "ImageBox",
                src: "assets/birnen/blau/dingsrechts.png",
                x: 499,
                y: 179,
            })

            _.result2 = "result2"
            self.add({
                id: _.result2, type: "ImageBox",
                x: 515, y: 170, width: 80, height: 80,
                src: "assets/birnen/Wrong.png"
            });

            _.sumText = "sumText"
            self.add({
                id: _.sumText, type: "TextBox",
                x: 456,
                y: 197,
                text: "3"
            });
            _.sumExplainText = "sumExplainText"
            self.add({
                id: _.sumExplainText, type: "TextBox",
                x: 424,
                y: 71,
                width: 80, align: "center",
                text: "(-3)*4<br>+(-2)*8<br>+10"
            });
            _.resultExplainText = "resultExplainText"
            self.add({
                id: _.resultExplainText, type: "TextBox",
                x: 506,
                y: 71,
                width: 80, align: "center",
                text: "14 > 0 ?"
            });

            _hide(o[_.resultExplainText])
            _hide(o[_.sumExplainText])
            _hide(o[_.explainLinks])
            _hide(o[_.explainRechts])
            _hide(o[_.sliderWeight1])
            _hide(o[_.sliderWeight2])
            _hide(o[_.sliderBias])
            _hide(o[_.biasDot])

            _fadeIn(o[_.btmWords], 500);
            _fadeIn(o[_.nextMiddle], 1000);
        },
        onend: function (self) {
            let o = self.objects;
            _hide(o[_.nextMiddle]);
            _hide(o[_.btmWords]);

        }
    }, {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("2-10")
            o[_.btmWords].setTextID("02_text10");

            _.biasLabel = "biasLabel";
            self.add({
                id: _.biasLabel, type: "TextBox",
                x: 431, y: 249, width: 80, height: 50,
                align: "center", color: "#aaa", size: 17,
                text_id: "02_biaslabel"
            });
            _.potenzialLabel = "potenzialLabel";
            self.add({
                id: _.potenzialLabel, type: "TextBox",
                x: 427, y: 39, width: 80, height: 50,
                align: "center", color: "#aaa", size: 17,
                text_id: "02_potenziallabel"
            });
            _.gewichteLabel = "gewichteLabel";
            self.add({
                id: _.gewichteLabel, type: "TextBox",
                x: 285, y: 39, width: 80, height: 50,
                align: "center", color: "#aaa", size: 17,
                text_id: "02_gewichtelabel"
            });
            _.ergebnisLabel = "ergebnisLabel";
            self.add({
                id: _.ergebnisLabel, type: "TextBox",
                x: 506, y: 39, width: 80, height: 50,
                align: "center", color: "#aaa", size: 17,
                text_id: "02_Ergebnislabel"
            });

            publish("update/0-2", [_.network.links[0].weight]);
            publish("update/1-2", [_.network.links[1].weight]);
            publish("update/2", [_.network.getNodes()[2].bias]);

            _show(o[_.resultExplainText])
            _show(o[_.sumExplainText])
            _show(o[_.explainLinks])
            _show(o[_.explainRechts])
            _show(o[_.sliderWeight1])
            _show(o[_.sliderWeight2])
            _show(o[_.sliderBias])
            _show(o[_.biasDot])

            _fadeIn(o[_.btmWords], 500);
            _show(o[_.nextMiddle]);
            o[_.nextMiddle].changeOnClick(() => publish("slideshow/scratch"))

            _.networklistener = "networklistener";
            listen(_.networklistener, "newOutput", function (network) {
                let sum = network.getNodes()[2].result;
                o[_.sumText].setText(sum);
                o[_.sumExplainText].setText(network.getNodes()[2].getResultCalcStringWithBrWithoutFinalResult());
                o[_.resultExplainText].setText(sum + " > 0 ?");
                let newImage = sum > 0 ? "assets/birnen/Right.png" : "assets/birnen/Wrong.png";
                o[_.result].changeImage(newImage);
                o[_.result2].changeImage(newImage);
                if (sum > 0) o[_.nextMiddle].activate();
                else o[_.nextMiddle].deactivate();
            });
            publish("newOutput", [_.network])
        },
        onend: function (self) {
            let o = self.objects;
            _hide(o[_.nextMiddle]);
            _hide(o[_.btmWords]);

        }
    }, {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("2-11");
            o[_.btmWords].setTextID("02_text11");
            _fadeIn(o[_.btmWords], 500);
            _fadeIn(o[_.nextMiddle], 1000);

        },
        onend: function (self) {
            let o = self.objects;
            _hide(o[_.nextMiddle]);
            _hide(o[_.btmWords]);

            _hide(o[_.input1])
            _hide(o[_.input2])
            _hide(o[_.input1Text])
            _hide(o[_.input2Text])
            _hide(o[_.input1Description])
            _hide(o[_.input2Description])
            _hide(o[_.result]);
            _hide(o[_.result2]);
            _hide(o[_.birnenScanner]);
            _hide(o[_.birne1]);

            _hide(o[_.sliderWeight1]);
            _hide(o[_.sliderWeight2]);
            _hide(o[_.sliderBias]);
            _hide(o[_.explainRechts]);
            _hide(o[_.explainLinks]);
            _hide(o[_.biasLabel]);
            _hide(o[_.gewichteLabel]);
            _hide(o[_.potenzialLabel]);
            _hide(o[_.ergebnisLabel]);
            _hide(o[_.perceptronLinks]);
            _hide(o[_.perceptronRechts]);
            _hide(o[_.biasDot]);
            _hide(o[_.sumExplainText]);
            _hide(o[_.resultExplainText]);
            _hide(o[_.sumText]);

        }
    },
/*
    {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("2-12")

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
                id: _.input1Value, type: "NWP", part: parts.input,
                x: 115, y: 115,
                alwaysOn: true,
            });

            _.input1Name = "input1Name";
            /!*self.add({
                id: _.input1Name, type: "NWP", part: parts.left,
                x: 35, y: 115,
                alwaysOn: true,
            });*!/
            _.input2Value = "input2Value";
            self.add({
                id: _.input2Value, type: "NWP", part: parts.input,
                x: 115, y: 315,
                alwaysOn: true,
            });

            // _.input2Name = "input2Name";
            // self.add({
            //     id: _.input2Name, type: "NWP", part: parts.left,
            //     x: 35, y: 315,
            //     alwaysOn: true,
            // });

            _.sliderX = 50;
            _.sliderY = 400;
            _.sliderWidth = 300;
            self.add({
                id: _.sliderInput1, type: "Slider",
                x: _.sliderX, y: _.sliderY + 50,
                width: _.sliderWidth,
                rotation: 45,
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
                o[_.sumText].setText(network.getNodes()[2].result);


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
    },
*/
);

