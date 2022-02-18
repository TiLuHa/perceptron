SLIDES.push(
    {
        id: "blackbox",
        onjump: function (self) {

        },
        onstart: function (self) {
            let o = self.objects;

            let all = addJochenStage(self);
            //let birnenStuff = addBirnenGrid(self, 220, 50);

            _.inputStuff = addInputs(self, 180, 0, 3, 1)
            _.scannerStuff = addScanner(self, 180, 0)
            _.perceptronStuff = addSinglePerceptron(self, 180, 0, 3, 1)
            let scalas = addScalas(self, 120, 0,3 ,1)

            all = [].concat(all, scalas, _.inputStuff, _.scannerStuff, _.perceptronStuff);
            actionOnAllObjects(all, _hide);

            o[_.slideCounter].setText("2-1");

            o[_.topWords].setTextID("02_title");
            o[_.btmWords].setTextID("02_text1");

            o[_.jochen].changeImage(Loader.manifest.jochen_erstaunt)

            o[_.nextMiddle].changeOnClick(() => publish("slideshow/scratch"))

            if(SHOW_SLIDE_NUMBER) _show(o[_.slideCounter], 0);

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
                o[_.tablet],
                o[_.jochen],
                o[_.topWords],
                o[_.btmWords],
                o[_.nextMiddle],
                o[_.tochter],
            ], _hide)
        }
    },
    {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("2-2")
            o[_.btmWords].setTextID("02_text2")

            o[_.resultPerceptron].changeImage(Loader.manifest.questionmark)

            actionOnAllObjects([
                o[_.birnenScanner],
                o[_.birnenScannerText],
                o[_.geeignetText],
                o[_.resultPerceptron],
                o[_.btmWords],
                o[_.nextMiddle],
            ], _fadeIn, 500, 700)

        },
        onend: function (self) {
            let o = self.objects;
            actionOnAllObjects([
                o[_.birnenScanner],
                o[_.birnenScannerText],
                o[_.geeignetText],
                o[_.resultPerceptron],
                o[_.btmWords],
                o[_.nextMiddle],
            ], _hide)

            //_moveX(o[_.birnenScanner], 400)
            //_moveX(o[_.birneBig], 400)
        }
    },
    addFotoSlide(),
    {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("2-4")
            o[_.btmWords].setTextID("02_text4")

            o[_.nextMiddle].changeOnClick(() => publish("slideshow/next"));

            actionOnAllObjects([
                o[_.birnenScanner],
                o[_.birneBig],
                //o[_.geeignetText],
                //o[_.resultPerceptron],
            ], _show)

            _fadeIn(o[_.btmWords], 1000);
            _fadeIn(o[_.nextMiddle], 2000);
        },
        onend: function (self) {
            let o = self.objects;
            actionOnAllObjects([
                o[_.geeignetText],
                o[_.resultPerceptron],
                o[_.btmWords],
                o[_.nextMiddle],
            ], _hide)
        }
    },
    {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("2-5")
            o[_.btmWords].setTextID("02_text5")

            actionOnAllObjects([
                o[_.input1], o[_.input1Text], o[_.input1Description]
            ], _fadeIn, 1000, 0)
            actionOnAllObjects(_.topScala, _fadeIn, 1500)

            _fadeIn(o[_.btmWords], 2500);
            _fadeIn(o[_.nextMiddle], 3000);
        },
        onend: function (self) {
            let o = self.objects;
            actionOnAllObjects([
                o[_.btmWords],
                o[_.nextMiddle],
            ], _hide)
        }
    },
    {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("2-6")
            o[_.btmWords].setTextID("02_text6")

            actionOnAllObjects([
                o[_.input2], o[_.input2Text], o[_.input2Description]
            ], _fadeIn, 1000, 0)
            actionOnAllObjects(_.bottomScala, _fadeIn, 1500)

            _fadeIn(o[_.btmWords], 2500);
            _fadeIn(o[_.nextMiddle], 3000);
        },
        onend: function (self) {
            let o = self.objects;
            actionOnAllObjects([
                o[_.btmWords],
                o[_.nextMiddle],
            ], _hide)
            _.topScala.concat(_.bottomScala).forEach(obj => self.remove(obj.id))
        }
    },
    {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("2-7");
            o[_.btmWords].setTextID("02_text7");

            actionOnAllObjects([
                o[_.geeignetText],
                o[_.resultPerceptron],
                o[_.btmWords],
                o[_.nextMiddle],
            ], _fadeIn, 1000, 500)


        },
        onend: function (self) {
            let o = self.objects;
            actionOnAllObjects([
                o[_.btmWords],
                o[_.nextMiddle],
            ], _hide)
        }
    },
    {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("2-8");
            o[_.btmWords].setTextID("02_text8");

            o[_.resultPerceptron].changeImage(Loader.manifest.wrong)

            actionOnAllObjects([
                o[_.btmWords],
                o[_.nextMiddle],
            ], _fadeIn, 1000, 500)

        },
        onend: function (self) {
            let o = self.objects;
            actionOnAllObjects([
                o[_.btmWords],
                o[_.nextMiddle],
            ], _hide)
        }
    },
    {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("2-9")
            o[_.btmWords].setTextID("02_text9");

            actionOnAllObjects([
                o[_.sliderWeight1],
                o[_.sliderWeight2],
                o[_.perceptronLinks],
                o[_.perceptronRechts],
                o[_.sliderBias],
                o[_.biasDot],
                o[_.sumText],
                o[_.perceptronLabel],
                o[_.btmWords],
                o[_.nextMiddle],
            ], _fadeIn, 1000, 0)

            listen(_, "newOutput", function (network) {
                let sum = network.getNodes()[2].result;
                let bias = network.getNodes()[2].bias;
                let potenzial = sum - bias;
                o[_.sumText].setText(potenzial);
                if (sum > 0) {
                    o[_.resultPerceptron].changeImage(Loader.manifest.right);
                } else {
                    o[_.resultPerceptron].changeImage(Loader.manifest.wrong);
                }
                o[_.sumExplainText].setText(network.getNodes()[2].getResultCalcStringWithBrWithoutFinalResult());
                o[_.resultExplainText].setText(
                    "<span class=\"potenzialText\">"+potenzial
                    + "</span> > <span class=\"biasText\">"+ bracketsIfNeg(-bias) +"</span><br> ?");
            });
            publish("newOutput", [_.network])

            publish("update/0-2", [_.network.links[0].weight]);
            publish("update/1-2", [_.network.links[1].weight]);
            publish("update/2", [_.network.getNodes()[2].bias]);


            //_fadeIn(o[_.btmWords], 2000);
            //_fadeIn(o[_.nextMiddle], 2500);
        },
        onend: function (self) {
            let o = self.objects;
            actionOnAllObjects([
                o[_.btmWords],
                o[_.nextMiddle],
            ], _hide)
        }
    }, {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("2-10")
            o[_.btmWords].setTextID("02_text10");

            actionOnAllObjects([
                o[_.gewichteLabelTop],
                o[_.gewichteLabelButtom],
                o[_.biasLabel],
                o[_.btmWords],
                o[_.nextMiddle],
            ], _fadeIn, 1000, 500)

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


            listen(_, "newOutput", function (network) {
                let potenzial = network.getNodes()[2].result;
                if (potenzial > 0) {
                    o[_.nextMiddle].activate()
                } else {
                    o[_.nextMiddle].deactivate();
                }
            });
            publish("newOutput", [_.network])

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
            o[_.slideCounter].setText("2-12");
            o[_.btmWords].setTextID("02_text12");

            actionOnAllObjects([
                o[_.btmWords],
                o[_.nextMiddle],
            ], _fadeIn, 1000, 500)
        },
        onend: function (self) {
            let o = self.objects;

            actionOnAllObjects([
                o[_.btmWords],
                o[_.nextMiddle],
            ], _hide);
        }
    }, {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("2-13");
            o[_.btmLeftWords].setTextID("02_text13");
            _moveY(o[_.btmLeftWords], -100);

            _.sliderAufruf = "sliderAufruf";
            self.add({
                id: _.sliderAufruf, type: "TextBox",
                x: 700, y: 375, width: 250, height: 50,
                align: "center", color: "#aaa", size: 17,
                text_id: "02_sliderAufruf0"
            });
            _hide(o[_.sliderAufruf]);
            _fadeOut(o[_.geeignetText])
            actionOnAllObjects([
                o[_.explainLinks],
                o[_.sumExplainText],
                o[_.btmLeftWords],
                o[_.potenzialLabel],
                o[_.sliderAufruf],
                o[_.nextRight],
            ], _fadeIn, 1000, 500)
        },
        onend: function (self) {
            let o = self.objects;

            actionOnAllObjects([
                o[_.nextRight],
            ], _hide);
        }
    }, {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("2-14");
            o[_.btmLeftWords].setTextID("02_text14");

            o[_.nextRight].changeOnClick(() => publish("slideshow/scratch"))
            o[_.nextRight].setText("02_nextLast")

            o[_.sliderAufruf].setTextID("02_sliderAufruf1")

            actionOnAllObjects([
                o[_.ergebnisLabel],
                o[_.explainRechts],
                o[_.resultExplainText],
                o[_.nextRight],
            ], _fadeIn, 1000, 500)
        },
        onend: function (self) {
            let o = self.objects;
            unlisten(_);
            unlisten(_.network);
            self.clear();
        }
    },
);

