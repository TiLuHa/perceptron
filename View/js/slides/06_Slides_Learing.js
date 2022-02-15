SLIDES.push(
    {
        id: "learning",
        onjump: function (self) {
        },
        onstart: function (self) {
            let o = self.objects;

            let stage = addJochenStage(self)
            let birnenGrid = addBirnenGrid(self)
            _.allNetwork = addNetwork221small(self)
            _.all = [].concat(stage, birnenGrid, _.allNetwork)
            actionOnAllObjects(_.all, _hide)

            //_.allNetwork.forEach(obj => _moveX(obj, 300));
            _show(o[_.slideCounter])

            o[_.slideCounter].setText("6-1")
            o[_.btmWords].setTextID("06_text1")
            o[_.topWords].setTextID("06_title")

            actionOnAllObjects([
                o[_.topWords],
                o[_.tochter],
                o[_.jochen],
                o[_.nextMiddle],
                o[_.btmWords],
                //o[_.tablet],
            ], _fadeIn, 500, 500);
            o[_.jochen].changeImage(JochenFaces.aua)

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
    },{
        onstart: function (self) {
            let o = self.objects;

            o[_.slideCounter].setText("6-2")
            o[_.btmWords].setTextID("06_text2")
            o[_.jochen].changeImage(JochenFaces.verduzt)


            actionOnAllObjects([
                o[_.nextMiddle],
                o[_.btmWords],
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
            o[_.jochen].changeImage(JochenFaces.fragend)
            o[_.nextMiddle].changeOnClick(() => publish("slideshow/scratch"));

            actionOnAllObjects([
                o[_.nextMiddle],
                o[_.btmWords],
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
                    else _fadeOut(b, 0, 0.2)
                }, 500, 200)
        }
    },
    {
        onstart: function (self) {
            let o = self.objects;

            o[_.slideCounter].setText("6-4")
            o[_.btmLeftWords].setTextID("06_text4")



            actionOnAllObjects([
                o[_.btmLeftWords],
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



        },
        onend: function (self) {

        }
    },
    {
        onstart: function (self) {
            let o = self.objects;
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

            _fadeIn(o[_.jochen], 0);
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