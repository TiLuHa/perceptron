SLIDES.push(
    {
        id: "blackbox",
        onjump: function (self) {

        },
        onstart: function (self) {
            let o = self.objects;
            _.slideCounter = "slideCounter";
            self.add({
                id: _.slideCounter, type: "TextBox",
                x: 0, y: 0, width: 50, height: 50,
                align: "center", color: "#aaa", size: 17,
                text: ""
            });
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
                    "0-2": (-7),
                    "1-2": (-5),
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
);

