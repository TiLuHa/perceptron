SLIDES.push(
    {
        id: "learning",
        onjump: function (self) {
        },
        onstart: function (self) {
            let o = self.objects;

            let stage = addJochenStage(self)
            let birnenGrid = addBirnenGrid(self, 0, 0, true)//,-1,1,-1,2/7)
            _.allNetwork = addNetwork221small(self, 0, 0, -2, 2, .2, 10,
                params = {
                    "0": 0, //Input1
                    "1": 0,  //Input2
                    "2": 0.2, //Hidden Bias
                    "3": 0.3, //Hidden Bias
                    "4": -0.5, //Output Bias
                    "0-2": -0.0,
                    "1-2": 0.9,
                    "0-3": 1,
                    "1-3": 0.4,
                    "2-4": 0.5,
                    "3-4": 0.6,
                })

            _.learningRate = 0.7;

            _.wrong = "wrong";
            self.add({
                id: _.wrong, type: "Button",
                x: 10, y: 463,
                text_id: "06_wrongButton", uppercase: false,
                size: "long",
                onclick: () => {
                    let network = _.network;
                    let input = network.getInput();
                    let i = 0;
                    let firstOutput = network.getFirstOutput();
                    let firstIsPositive = firstOutput > 0.5;
                    let target = firstIsPositive ? 0.01 : 0.99;

                    while ((firstIsPositive === (firstOutput > 0.5)) && i < 1) {
                        publish("clickMade")
                        i++;

                        let simpleNN = network.asSimpleNN();
                        backProp(simpleNN, input, [target], Loss.errorL2, _.learningRate)
                        network.updateFromSimpleNN(simpleNN);

                        publish("change/0-2", [_.network.links[0].weight]);
                        publish("change/0-3", [_.network.links[1].weight]);
                        publish("change/1-2", [_.network.links[2].weight]);
                        publish("change/1-3", [_.network.links[3].weight]);
                        publish("change/2-4", [_.network.links[4].weight]);
                        publish("change/3-4", [_.network.links[5].weight]);
                        publish("change/2", [_.network.getNodes()[2].bias]);
                        publish("change/3", [_.network.getNodes()[3].bias]);
                        publish("update/4", [_.network.getNodes()[4].bias]);

                        firstOutput = network.getFirstOutput();
                    }
                }
            });
            _.all = [].concat(stage, birnenGrid, _.allNetwork,[o[_.wrong]])
            actionOnAllObjects(_.all, _hide)
            o[_.itemPicture].changeImage(Loader.manifest.birnenbier)

            _.birneWasClicked = false;

            _.misc = {}
            listen(_.misc, "BirneClicked", () => {
                _.birneWasClicked = true;
            })

            //_.allNetwork.forEach(obj => _moveX(obj, 300));
            if(SHOW_SLIDE_NUMBER) _show(o[_.slideCounter]);

            o[_.slideCounter].setText("6-1")
            o[_.btmWords].setTextID("06_text1")
            o[_.topWords].setTextID("06_title")

            actionOnAllObjects([
                o[_.topWords],
                o[_.tochter],
                o[_.jochen],
                o[_.btmWords],
                o[_.nextMiddle],
                //o[_.tablet],
            ], _fadeIn, 500, 500);
            o[_.jochen].changeImage(Loader.manifest.jochen_erschoepft)

        },
        onend: function (self) {
            let o = self.objects;

            actionOnAllObjects([
                o[_.topWords],
                o[_.nextMiddle],
                o[_.btmWords],
                o[_.tablet]
            ], _hide)

        }
    }, {
        onstart: function (self) {
            let o = self.objects;

            o[_.slideCounter].setText("6-2")
            o[_.btmWords].setTextID("06_text2")
            o[_.jochen].changeImage(Loader.manifest.jochen_verduzt)


            actionOnAllObjects([
                o[_.btmWords],
                o[_.nextMiddle],
            ], _fadeIn, 500, 500);
        },
        onend: function (self) {
            let o = self.objects;

            actionOnAllObjects([
                o[_.nextMiddle],
                o[_.btmWords],
            ], _hide);
        }
    }, {
        onstart: function (self) {
            let o = self.objects;

            o[_.slideCounter].setText("6-3")
            o[_.btmWords].setTextID("06_text3")
            o[_.jochen].changeImage(Loader.manifest.jochen_fragend)
            o[_.nextMiddle].changeOnClick(() => publish("slideshow/scratch"));

            actionOnAllObjects([
                o[_.btmWords],
                o[_.nextMiddle],
            ], _fadeIn, 500, 500);
        },
        onend: function (self) {
            let o = self.objects;

            actionOnAllObjects([
                o[_.jochen],
                o[_.tochter],
                o[_.nextMiddle],
                o[_.btmWords],
            ], _hide);

            actionOnAllObjects(_.allNetwork, _fadeIn)

            actionOnAllObjects(_.all_birnen,
                (b) => {
                    if (_.birnenForItem2.includes(b)) _fadeIn(b)
                    else {
                        _fadeOut(b, 0, 0.2, false);
                        b.dom.classList.remove("unclickable");
                    }
                }, 500, 200)
        }
    },
    {
        onstart: function (self) {
            let o = self.objects;

            o[_.slideCounter].setText("6-4")
            _.rigthWords = "rigthWords";
            self.add({
                id: _.rigthWords, type: "TextBox", text_id: "06_text5",
                x: 264, y: 337, width: 700, height: 100, align: "center"
            });
            o[_.rigthWords].setTextID("06_text4")
            _.all.push(o[_.rigthWords]);

            actionOnAllObjects([
                //o[_.rigthWords],
                o[_.nextRight],
            ], _fadeIn, 500, 500)

            publish("newOutput", [_.network]);
        },
        onend: function (self) {
            let o = self.objects;

            actionOnAllObjects([
                o[_.jochen],
                o[_.tochter],
                o[_.nextRight],
                o[_.btmLeftWords]
            ], _hide)
        }
    }, {
        onstart: function (self) {
            let o = self.objects;

            o[_.slideCounter].setText("6-5")
            o[_.rigthWords].setTextID("06_text5")


            let inputColMin = -3,
                inputColStep = 6 / 2,
                inputRowMin = -5,
                inputRowStep = 10 / 7;

            _.autoTrainOn = false
            _.autoTrain = "autoTrain";
            self.add({
                id: _.autoTrain, type: "Button",
                x: 372, y: 463,
                text_id: "06_autoLearnOFF", uppercase: false,
                size: "long",
                onclick: () => {
                    _.autoTrainOn = !_.autoTrainOn
                    if (_.autoTrainOn) {
                        o[_.autoTrain].setText("06_autoLearnON");
                        o[_.wrong].deactivate()
                        publish("startNextTraining");
                    } else {
                        o[_.autoTrain].setText("06_autoLearnOFF");
                        o[_.wrong].activate()
                    }
                }
            });
            _.all.push(o[_.autoTrain]);

            _.learningPaste = 100;
            listen(_, "startNextTraining", () => {
                if (equal2dBooleanArray(_.birnenForItem2okList, _.okList)) {
                    _.autoTrainOn = false
                    o[_.autoTrain].setText("06_autoLearnOFF");
                    o[_.wrong].activate()
                    return;
                }

                let network = _.network;

                let i = Math.floor(Math.random() * 3);
                let j = Math.floor(Math.random() * 8);

                let scannerString = ("s" + i) + j
                _.all_scanner.forEach(sc => {
                    if (sc.dom.id === scannerString) _show(sc);
                    else _hide(sc);
                });

                let x = inputRowMin + j * inputRowStep;
                let y = inputColMin + i * inputColStep;
                let input = [x, y];
                let target = _.birnenForItem2okList[i][j] ? 0.99 : 0.01;

                let simpleNN = network.asSimpleNN();
                backProp(simpleNN, input, [target], Loss.errorL2, _.learningRate)
                network.updateFromSimpleNN(simpleNN);

                publish("change/0-2", [_.network.links[0].weight]);
                publish("change/0-3", [_.network.links[1].weight]);
                publish("change/1-2", [_.network.links[2].weight]);
                publish("change/1-3", [_.network.links[3].weight]);
                publish("change/2-4", [_.network.links[4].weight]);
                publish("change/3-4", [_.network.links[5].weight]);
                publish("change/2", [_.network.getNodes()[2].bias]);
                publish("change/3", [_.network.getNodes()[3].bias]);
                publish("update/4", [_.network.getNodes()[4].bias]);

                let result = _.network.getOutputFast([x, y])[0]
                if (result > 0.5) {
                    o[_.resultPerceptron].changeImage(Loader.manifest.right);
                } else {
                    o[_.resultPerceptron].changeImage(Loader.manifest.wrong);
                }
                o[_.input1Text].setText(x.toFixed(1))
                o[_.input2Text].setText(y.toFixed(1))

                if (_.autoTrainOn) setTimeout(() => publish("startNextTraining"), _.learningPaste);
            });

            [
                o[_.nextRight], o[_.autoTrain],
            ].forEach(button => button.deactivate());

            _fadeIn(o[_.nextRight])
            _fadeIn(o[_.wrong])

            if(! _.birneWasClicked) o[_.wrong].deactivate();
            listen(_.misc, "BirneClicked", () => {
                o[_.wrong].activate();
            })

            listen(_.misc, "clickMade", () => {
                o[_.nextRight].activate()
            })

        },
        onend: function (self) {
            let o = self.objects;

            unlisten(_.misc)
            o[_.nextRight].deactivate()
        }
    },
    {
        onstart: function (self) {
            let o = self.objects;

            _fadeIn(o[_.nextRight])
            o[_.nextRight].deactivate();
            o[_.nextRight].changeOnClick(() => publish("slideshow/scratch"));
            listen(_, "OutputFinished", () => {
                if (equal2dBooleanArray(_.birnenForItem2okList, _.okList)) {
                    o[_.nextRight].activate();
                } else {
                    o[_.nextRight].deactivate();
                }
            });
            publish("OutputFinished");
            o[_.slideCounter].setText("6-6")
            o[_.rigthWords].setTextID("06_text6")
            o[_.autoTrain].activate()

        },
        onend: function (self) {
            let o = self.objects;
            unlisten(_)
            unlisten(_.network)
            self.clear()
        }
    },
);