SLIDES.push(
    {
        id: "blackbox",
        onjump: function (self) {

        },
        onstart: function (self) {
            let o = self.objects;

            let all = setUpAll(self);
            let birnenStuff = addBirnenGrid(self, 220, 50);
            _.tabletInterface = buildTabletInterface(self)
            let scalas = addScalas(self)
            all = [].concat(all, birnenStuff, _.tabletInterface, scalas);
            actionOnAllObjects(all, _hide);

            o[_.slideCounter].setText("2-1");

            o[_.topWords].setTextID("02_title");
            o[_.btmWords].setTextID("02_text1");

            o[_.jochen].changeImage(JochenFaces.erstaunt)

            o[_.nextMiddle].changeOnClick(() => publish("slideshow/scratch"))

            _show(o[_.slideCounter], 0);

            _show(o[_.topWords])
            _show(o[_.tablet], 1000)
            _show(o[_.jochen], 0);
            _fadeIn(o[_.tochter], 400);
            _fadeIn(o[_.btmWords], 800)
            _moveX(o[_.tablet], -200, 1200)
            _fadeIn(o[_.nextMiddle], 1600)
        },
        onend: function (self) {
            let o = self.objects;
            actionOnAllObjects([
                o[_.tablet], o[_.jochen], o[_.topWords], o[_.btmWords],
                o[_.nextMiddle], o[_.tochter]
            ], _hide)
        }
    },
    {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("2-2")
            o[_.btmWords].setTextID("02_text2")

            actionOnAllObjects([
                o[_.birnenScanner],
                o[_.birnenScannerText],
                o[_.fotoBtm],
                o[_.marmeladeBtm],
                o[_.kuchenBtm],
                o[_.bierBtm],
                o[_.btmWords]
            ], _fadeIn, 500, 500)
            o[_.fotoBtm].activate();

        },
        onend: function (self) {
            let o = self.objects;
            actionOnAllObjects([
                o[_.birnenScanner],
                o[_.birnenScannerText],
                o[_.fotoBtm],
                o[_.marmeladeBtm],
                o[_.kuchenBtm],
                o[_.bierBtm],
                o[_.btmWords]
            ], _hide)
            o[_.fotoBtm].deactivate();

            _moveX(o[_.birnenScanner], 400)
            _moveX(o[_.birneBig], 400)
        }
    },
    addFotoSlide(),
    {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("2-4")
            o[_.btmWords].setTextID("02_text4")

            o[_.nextMiddle].changeOnClick(() => publish("slideshow/next"));

            _show(o[_.birnenScanner], );
            _show(o[_.birneBig], );
            _fadeIn(o[_.btmWords], 1000);
            _fadeIn(o[_.nextMiddle], 2000);
        },
        onend: function (self) {
            let o = self.objects;
            _hide(o[_.nextMiddle]);
            _hide(o[_.btmWords]);
            [
                o[_.birneBig], o[_.birnenScanner],
            ].forEach(obj => _moveX(obj, -400));
        }
    },
    {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("2-5")
            o[_.btmWords].setTextID("02_text5")

            actionOnAllObjects([
                o[_.input1], o[_.input1Text], o[_.input1Description]
            ], _fadeIn,1000, 0)
            actionOnAllObjects(_.topScala, _fadeIn, 1500)

            _fadeIn(o[_.btmWords], 2500);
            _fadeIn(o[_.nextMiddle], 3000);
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

            actionOnAllObjects([
                o[_.input2], o[_.input2Text], o[_.input2Description]
            ], _fadeIn,1000, 0)
            actionOnAllObjects(_.bottomScala, _fadeIn, 1500)

            _fadeIn(o[_.btmWords], 2500);
            _fadeIn(o[_.nextMiddle], 3000);
        },
        onend: function (self) {
            let o = self.objects;
            _hide(o[_.nextMiddle]);
            _hide(o[_.btmWords]);
            actionOnAllObjects(_.topScala, _hide)
            actionOnAllObjects(_.bottomScala, _hide)
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

            /*
            listen(_, "wrongOutput", (network) => {
                let network = _.network
                console.log(network)
                let firstOutput = network.getFirstOutput();
                let target = firstOutput > 0.5 ? 0.01 : 0.99;
                let simpleNN = network.asSimpleNN();
                let input = network.getInput();
                console.log(simpleNN)
                backProp(simpleNN, input, [target],Loss.logLikelihood, 0.2)
                console.log(simpleNN)
                network.updateFromSimpleNN(simpleNN);

                network.getNodes().concat(network.links).forEach(x => publish("update/"+x))
            })*/

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

            listen(_, "newOutput", function (network) {
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

            self.clear()

        }
    },
);

