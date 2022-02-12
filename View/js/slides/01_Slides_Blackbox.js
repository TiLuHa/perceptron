const actionOnAllObjects = function (arrayOfObjects, action, startTime = 0, intervall = 0) {
    arrayOfObjects.reduce((time, obj) => {
        action(obj, time);
        return time + intervall;
    }, startTime);
}

const setUpAll = function (self, config) {
    let all = []

    let o = self.objects;

    _.slideCounter = "slideCounter";
    self.add({
        id: _.slideCounter, type: "TextBox",
        x: 0, y: 0, width: 50, height: 50,
        align: "center", color: "#aaa", size: 17,
        text: "1-1"
    });
    all.push(o[_.slideCounter])

    // Bild Jochen
    _.jochen = "jochenBild";
    self.add({
        id: _.jochen, type: "ImageBox",
        src: "assets/Jochen/Jochen_kamera.jpg",
        x: 380, y: 60, width: 380 / 2, height: 545 / 2,
    });
    all.push(o[_.jochen])

    //Text an Jochen
    _.jochenHello = "jochenhello";
    self.add({
        id: _.jochenHello, type: "TextBox",
        x: 210 + 380, y: 85, width: 50, height: 50,
        align: "center", color: "#aaa", size: 17,
        text_id: "jochen_hello"
    });
    all.push(o[_.jochenHello])
    _.jochenHelloLeft = "jochenhelloleft";
    self.add({
        id: _.jochenHelloLeft, type: "TextBox",
        x: 210, y: 85, width: 50, height: 50,
        align: "center", color: "#aaa", size: 17,
        text_id: "jochen_hello"
    });
    all.push(o[_.jochenHelloLeft])

    // Kapitelüberschrift
    _.topWords = "topWords";
    self.add({
        id: _.topWords, type: "TextBox", text_id: "01_title",
        x: 130, y: 10, width: 700, height: 100, align: "center"
    });
    all.push(o[_.topWords])

    //Texte
    _.btmWords = "btmWords";
    self.add({
        id: _.btmWords, type: "TextBox", text_id: "01_text1",
        x: 130, y: 347, width: 700, height: 100, align: "center"
    })
    all.push(o[_.btmWords])

    _.btmLeftWords = "btmLeftWords";
    self.add({
        id: _.btmLeftWords, type: "TextBox", text_id: "01_text3",
        x: 10, y: 450,
        width: 700, height: 100, align: "center"
    })
    all.push(o[_.btmLeftWords])

    // Buttons
    _.nextMiddle = "nextMiddle";
    self.add({
        id: _.nextMiddle, type: "Button",
        x: 383, y: 463, //normal size
        //size: "long", x:304, y:466,
        text_id: "01_button_next", uppercase: false,
        onclick: () => publish("slideshow/next")
    });
    all.push(o[_.nextMiddle])

    _.nextRight = "nextRight";
    self.add({
        id: _.nextRight, type: "Button",
        x: 730, y: 463, //normal size
        //size: "long", x:304, y:466,
        text_id: "01_button_next", uppercase: false,
        onclick: () => publish("slideshow/next")
    });
    all.push(o[_.nextRight])

    _.item_x = 750;
    _.item_y = 100;
    _.item_scale = 0.3
    _.item_width = 570 * _.item_scale
    _.item_height = 554 * _.item_scale
    _.itemRight = "itemRight";
    self.add({
        id: _.itemRight, type: "ImageBox",
        src: "assets/birnen/Birnenmarmelade.jpg",
        x: _.item_x, y: _.item_y,
        width: _.item_width, height: _.item_height,
    });
    all.push(o[_.itemRight])

    return all;
};

SLIDES.push(
    {
        id: "sortieren",
        onjump: function (self) {

        },

        // Slide 1
        onstart: function (self) {

            let o = self.objects;

            _.all = setUpAll(self);
            let birnenStuff = addBirnenGrid(self, 220, 50);
            _.all = _.all.concat(birnenStuff);
            actionOnAllObjects(_.all, _hide)

            _show(o[_.slideCounter]);

            o[_.slideCounter].setText("1-1")
            o[_.btmWords].setTextID("01_text1");

            actionOnAllObjects([
                o[_.topWords],
                o[_.jochen],
                o[_.jochenHello],
                o[_.btmWords],
                o[_.nextMiddle],
            ], _fadeIn, 500, 500)

        },
        onend: function (self) {
            let o = self.objects;
            actionOnAllObjects([
                o[_.topWords],
                o[_.btmWords],
                o[_.nextMiddle],
                o[_.jochenHello],

            ], _hide)
        }
    }, {
        // Slide 2
        onstart: function (self) {
            let o = self.objects;

            o[_.slideCounter].setText("1-2")
            o[_.btmWords].setTextID("01_text2");

            actionOnAllObjects([
                o[_.btmWords],
                o[_.nextMiddle],
            ], _fadeIn, 500, 500)
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
        //Slide 3
        onstart: function (self) {
            let o = self.objects;

            o[_.slideCounter].setText("1-3")
            o[_.btmLeftWords].setTextID("01_text3")

            _moveX(o[_.jochen], -380)
            o[_.jochen].changeImage(JochenFaces.laecheln)

            actionOnAllObjects([
                o[_.btmLeftWords],
                o[_.nextRight],
            ], _fadeIn, 500, 500)

            actionOnAllObjects([
                o[_.b10], o[_.b11], o[_.b12], o[_.b13],
                o[_.b14], o[_.b15], o[_.b16], o[_.b17],
            ], _fadeIn, 1000, 100)

        },
        onend: function (self) {
            let o = self.objects;
            actionOnAllObjects([
                o[_.btmLeftWords],
                o[_.nextRight],
            ], _hide)

        }
    },
    {
        //Slide 4
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("1-4")
            o[_.btmLeftWords].setTextID("01_text4");

            actionOnAllObjects([
                o[_.b00], o[_.b01], o[_.b02], o[_.b03],
                o[_.b04], o[_.b05], o[_.b06], o[_.b07],
                o[_.b20], o[_.b21], o[_.b22], o[_.b23],
                o[_.b24], o[_.b25], o[_.b26], o[_.b27],
            ], _fadeIn, 1000, 100)

            actionOnAllObjects([
                o[_.btmLeftWords],
                o[_.nextRight],
            ], _fadeIn, 500, 500)

        },
        onend: function (self) {
            let o = self.objects;
            actionOnAllObjects([
                o[_.btmLeftWords],
                o[_.nextRight],
            ], _hide)
            _.all_birnen.forEach(obj => _fadeOut(obj, 0, 0.2))
        }
    },
    {
        //Slide 5
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("1-5");
            o[_.btmLeftWords].setTextID("01_text5");

            _.birnenForItem0 = [
                o[_.b00], o[_.b01], o[_.b02], o[_.b03], o[_.b04], o[_.b05], //o[_.b06],o[_.b07]
                o[_.b10], o[_.b11], o[_.b12], o[_.b13], o[_.b14], //o[_.b15],o[_.b16],o[_.b17]
                o[_.b20], o[_.b21], o[_.b22], o[_.b23], //o[_.b24],o[_.b25],o[_.b26],o[_.b27]
            ];
            actionOnAllObjects(_.birnenForItem0, _fadeIn, 500)

            actionOnAllObjects([
                o[_.itemRight],
                o[_.btmLeftWords],
                o[_.nextRight],
            ], _fadeIn, 500, 500)


        },
        onend: function (self) {
            let o = self.objects;
            actionOnAllObjects([
                o[_.btmLeftWords],
                o[_.nextRight],
                o[_.itemRight]
            ], _hide)
            _.all_birnen.forEach(obj => _fadeOut(obj, 0, 0.2))

        }
    },
    {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("1-6")
            o[_.btmLeftWords].setTextID("01_text6");
            o[_.itemRight].changeImage("assets/birnen/Birnenkuchen.jpg");

            _.birnenForItem1 = [
                o[_.b00], o[_.b01], o[_.b02], o[_.b03], o[_.b04], o[_.b05], o[_.b06], o[_.b07],
                //o[_.b10],o[_.b11],o[_.b12],o[_.b13],o[_.b14],o[_.b15],o[_.b16],o[_.b17],
                o[_.b20], o[_.b21], o[_.b22], o[_.b23], o[_.b24], o[_.b25], o[_.b26], o[_.b27],
            ];
            actionOnAllObjects(_.birnenForItem1, _fadeIn, 500)

            actionOnAllObjects([
                o[_.itemRight],
                o[_.btmLeftWords],
                o[_.nextRight],
            ], _fadeIn, 500, 500)


        },
        onend: function (self) {
            let o = self.objects;
            actionOnAllObjects([
                o[_.btmLeftWords],
                o[_.nextRight],
                o[_.itemRight]
            ], _hide)
            _.all_birnen.forEach(obj => _fadeOut(obj, 0, 0.2))

        }
    },
    {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("1-7")
            o[_.btmLeftWords].setTextID("01_text7");
            o[_.itemRight].changeImage(Loader.manifest.birnenbier);

            _.all_birnen.forEach(b => _fadeOut(b, 200, 0.2))
            _.birnenForItem2 = [
                o[_.b00], o[_.b01], //o[_.b02], o[_.b03], o[_.b04], o[_.b05], o[_.b06], o[_.b07]
                o[_.b10], o[_.b11], o[_.b12], o[_.b13], o[_.b14], o[_.b15],// o[_.b16],o[_.b17],
                o[_.b20], o[_.b21], o[_.b22], o[_.b23], //o[_.b24], o[_.b25], o[_.b26], o[_.b27]
            ];
            actionOnAllObjects(_.birnenForItem2, _fadeIn, 500)

            actionOnAllObjects([
                o[_.itemRight],
                o[_.btmLeftWords],
                o[_.nextRight],
            ], _fadeIn, 500, 500)
        },
        onend: function (self) {
            let o = self.objects;
            actionOnAllObjects([
                o[_.btmLeftWords],
                o[_.nextRight],
                o[_.itemRight]
            ], _hide);

            actionOnAllObjects(_.all_birnen, _hide);

        }
    },
    {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("1-8");

            o[_.nextRight].changeOnClick(() => {
                publish("startStep0");
                _show(o[_.jochenHello])
                _hide(o[_.nextRight]);
                _fadeIn(o[_.nextRight], 2000);
                o[_.nextRight].changeOnClick(() => publish("slideshow/next"))
            });

            _.moveX = -100;
            _.moveY = 0;
            _.birne0 = "birne0"
            self.add({
                id: _.birne0, type: "ImageBox",
                src: "assets/birnen/b1.jpg",
                x: 454 + _.moveX, y: 154 + _.moveY,
                width: _.birnen_width * _.scale0,
                rotation: 0
            });

            _.arrow0 = "arrow0";
            self.add({
                id: _.arrow0, type: "ImageBox",
                src: "assets/Jochen/arrow.PNG",
                x: 500 + _.moveX, y: 100 + _.moveY,
                width: 40,
                rotation: 315
            });
            _.item0 = "item0";
            self.add({
                id: _.item0, type: "ImageBox",
                src: "assets/birnen/Birnenmarmelade.png",
                x: 523 + _.moveX,//_.item_x,
                y: -13 + _.moveY,//_.item_y,
                width: _.item_width, height: _.item_height,
            });

            _.arrow1 = "arrow1"
            self.add({
                id: _.arrow1, type: "ImageBox",
                src: "assets/Jochen/arrow.PNG",
                x: 526 + _.moveX, y: 176 + _.moveY,
                width: 40,
                rotation: 0
            });

            _.item1 = "item1";
            self.add({
                id: _.item1, type: "ImageBox",
                src: "assets/birnen/Birnenkuchen.png",
                x: 587 + _.moveX,//_.item_x,
                y: 100 + _.moveY,//_.item_y,
                width: _.item_width, height: _.item_height,
            });

            _.arrow2 = "arrow2"
            self.add({
                id: _.arrow2, type: "ImageBox",
                src: "assets/Jochen/arrow.PNG",
                x: 500 + _.moveX, y: 248 + _.moveY,
                width: 40,
                rotation: 45
            });
            _.item2 = "item2";
            self.add({
                id: _.item2, type: "ImageBox",
                src: "assets/birnen/Birnensaft.png",
                x: 542 + _.moveX,//_.item_x,
                y: 213 + _.moveY,//_.item_y,
                width: _.item_width, height: _.item_height,
            });

            o[_.btmLeftWords].setTextID("01_text8");


            _.newItems = [o[_.birne0], o[_.arrow0], o[_.item0],
                o[_.arrow1], o[_.item1], o[_.arrow2], o[_.item2], o[_.btmLeftWords], o[_.nextRight]]
            _.newItems.forEach(obj => _hide(obj))
            _.newItems.reduce((time, obj) => {
                _fadeIn(obj, time)
                return time + 300;
            }, 0)

            _.birne1 = "birne1"
            self.add({
                id: _.birne1, type: "ImageBox",
                src: "assets/birnen/b4.jpg",
                x: 454 + _.moveX, y: 154 + _.moveY,
                width: _.birnen_width * _.scale2,
                rotation: 0
            });

            _.birne2 = "birne2"
            self.add({
                id: _.birne2, type: "ImageBox",
                src: "assets/birnen/b7.jpg",
                x: 454 + _.moveX, y: 154 + _.moveY,
                width: _.birnen_width * _.scale1,
                rotation: 0
            });
            //_hide(o[_.birne0])
            _hide(o[_.birne1])
            _hide(o[_.birne2])

            _.hacken0 = "hacken0"
            self.add({
                id: _.hacken0, type: "ImageBox",
                src: "assets/birnen/Right.png",
                x: 523 + 100 + _.moveX,//_.item_x,
                y: -13 + 100 + _.moveY,//_.item_y,
                width: 40,
                rotation: 0
            });
            _.hacken1 = "hacken1"
            self.add({
                id: _.hacken1, type: "ImageBox",
                src: "assets/birnen/Right.png",
                x: 587 + 100 + _.moveX,//_.item_x,
                y: 100 + 100 + _.moveY,//_.item_y,
                width: 40,
                rotation: 0
            });
            _.hacken2 = "hacken2"
            self.add({
                id: _.hacken2, type: "ImageBox",
                src: "assets/birnen/Right.png",
                x: 650 + _.moveX,//_.item_x,
                y: 330 + _.moveY,//_.item_y,
                width: 40,
                rotation: 0
            });
            _hide(o[_.hacken0])
            _hide(o[_.hacken1])
            _hide(o[_.hacken2])

            _.face0 = JochenFaces.verduzt;
            _.face1 = JochenFaces.erstaunt;
            _.findingTime = 750;
            _.nextStepTime = 2000;

            _.step0 = function () {
                console.log("start Step 0")

                o[_.jochenHello].setTextID("01_ehm");
                o[_.jochen].changeImage(_.face0);
                _fadeIn(o[_.birne0], 0);
                _hide(o[_.birne1])
                _hide(o[_.birne2])
                _hide(o[_.hacken0])
                _hide(o[_.hacken1])
                _hide(o[_.hacken2])
                _.itemOpacity = 0.3;
                _fadeOut(o[_.item0], 0, _.itemOpacity)
                _fadeOut(o[_.item1], 0, _.itemOpacity)
                _fadeOut(o[_.item2], 0, _.itemOpacity)

                setTimeout(function () {
                    o[_.jochenHello].setTextID("01_step0");
                    o[_.jochen].changeImage(_.face1);
                    _fadeIn(o[_.hacken0], 0);
                    _fadeIn(o[_.hacken2], 0);
                    _fadeIn(o[_.item0], 0);
                    _fadeIn(o[_.item2], 0);
                }, _.findingTime)

                setTimeout(function () {
                    publish("startStep1")
                }, _.nextStepTime);
            };

            _.step1 = function () {
                console.log("start Step 1")

                o[_.jochenHello].setTextID("01_ehm");
                o[_.jochen].changeImage(_.face0);
                _fadeIn(o[_.birne1], 0);
                _hide(o[_.birne0])
                _hide(o[_.birne2])
                _hide(o[_.hacken0])
                _hide(o[_.hacken1])
                _hide(o[_.hacken2])
                _fadeOut(o[_.item0], 0, _.itemOpacity)
                _fadeOut(o[_.item1], 0, _.itemOpacity)
                _fadeOut(o[_.item2], 0, _.itemOpacity)


                setTimeout(function () {
                    o[_.jochenHello].setTextID("01_step1");
                    o[_.jochen].changeImage(_.face1);
                    _fadeIn(o[_.hacken1], 0);
                    _fadeIn(o[_.hacken2], 0);
                    _fadeIn(o[_.item1], 0);
                    _fadeIn(o[_.item2], 0);
                }, _.findingTime)

                setTimeout(function () {
                    publish("startStep2")
                }, _.nextStepTime);
            };

            _.step2 = function () {
                console.log("start Step 1");
                o[_.jochenHello].setTextID("01_ehm");
                o[_.jochen].changeImage(_.face0);
                _fadeIn(o[_.birne2], 0);
                _hide(o[_.birne0])
                _hide(o[_.birne1])
                _hide(o[_.hacken0])
                _hide(o[_.hacken1])
                _hide(o[_.hacken2])
                _fadeOut(o[_.item0], 0, _.itemOpacity)
                _fadeOut(o[_.item1], 0, _.itemOpacity)
                _fadeOut(o[_.item2], 0, _.itemOpacity)

                setTimeout(function () {
                    o[_.jochenHello].setTextID("01_step2");
                    o[_.jochen].changeImage(_.face1);
                    _fadeIn(o[_.hacken1], 0);
                    _fadeIn(o[_.item1], 0);
                }, _.findingTime);

                setTimeout(function () {
                    publish("startStep0")
                }, _.nextStepTime);
            }

            listen(self, "startStep0", _.step0)
            listen(self, "startStep1", _.step1)
            listen(self, "startStep2", _.step2)

        },
        onend: function (self) {
            let o = self.objects;
            _hide(o[_.btmLeftWords]);
            _hide(o[_.jochenHello]);
            o[_.jochenHello].setText("");

            self.remove(_.btmLeftWords);

            o[_.jochen].changeImage(JochenFaces.aua);
            _.face0 = JochenFaces.aua;
            _.face1 = JochenFaces.aua;
            unlisten(self);
            self.remove(_.nextRight);
            _hide(o[_.hacken0]);
            _hide(o[_.hacken1]);
            _hide(o[_.hacken2]);
            _show(o[_.item0]);
            _show(o[_.item1]);
            _show(o[_.item2]);
            _hide(o[_.birne1]);
            _hide(o[_.birne2]);
            self.remove(_.birne0);
            self.remove(_.birne1);
            self.remove(_.birne2);
            self.remove(_.arrow0);
            self.remove(_.arrow1);
            self.remove(_.arrow2);
            self.remove(_.item0);
            self.remove(_.item1);
            self.remove(_.item2);
            self.remove(_.hacken0);
            self.remove(_.hacken1);
            self.remove(_.hacken2);

        }
    },
    {
        //Slide 9
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("1-9")

            _moveX(o[_.jochenHello], 200);
            _moveX(o[_.jochen], 200);
            o[_.jochenHello].setTextID("01_platt");
            o[_.btmWords].setTextID("01_text9");


            //BEWEGEN DER PFEILE
            //_.moveX = 60
            //_.moveRight = [o[_.item0], o[_.item1], o[_.item2], o[_.arrow0], o[_.arrow1], o[_.arrow2]];
            //_.moveRight.forEach(obj => _moveX(obj, _.moveX))
            //_moveX(o[_.birne], (-1) * _.moveX)

            _fadeIn(o[_.btmWords], 200)
            _fadeIn(o[_.nextMiddle], 400)
            _fadeIn(o[_.jochenHello], 600)

        },
        onend: function (self) {
            let o = self.objects;
            _hide(o[_.jochenHello])
            _hide(o[_.btmWords]);
            _hide(o[_.nextMiddle]);
        }

    },
    {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("1-10")

            _.tochter = "tochterBild";
            self.add({
                id: _.tochter, type: "ImageBox",
                src: "assets/Jochen/Tochter.PNG",
                x: 600, y: 60, width: 380 / 2.1, height: 545 / 2.1,
            });

            o[_.btmWords].setTextID("01_text10");

            _hide(o[_.tochter])
            _fadeIn(o[_.tochter])

            _fadeIn(o[_.btmWords], 200)
            _fadeIn(o[_.nextMiddle], 400)
        },
        onend: function (self) {
            let o = self.objects;
            _hide(o[_.btmWords]);
            _hide(o[_.nextMiddle]);
        }
    },
    {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("1-11")

            o[_.btmWords].setTextID("01_text11");

            o[_.jochen].changeImage(JochenFaces.fragend);

            _fadeIn(o[_.btmWords], 200)
            _fadeIn(o[_.nextMiddle], 400)
        },
        onend: function (self) {
            let o = self.objects;
            _hide(o[_.btmWords]);
            _hide(o[_.nextMiddle]);

        }
    }, {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("1-12")
            //_moveX(o[_.tochter],100)
            o[_.btmWords].setTextID("01_text12");

            o[_.jochen].changeImage(JochenFaces.zufrieden);
            o[_.jochenHello].setTextID("01_tschau")

            _fadeOut(o[_.tochter], 600);
            _fadeIn(o[_.btmWords], 200)
            _fadeIn(o[_.nextMiddle], 400)
            _fadeIn(o[_.jochenHello], 600)
        },
        onend: function (self) {
            let o = self.objects;
            _hide(o[_.btmWords]);
            _hide(o[_.nextMiddle]);
            _hide(o[_.jochenHello])
        }
    },
    {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("1-13")
            o[_.btmWords].setTextID("01_text13");


            _.wrongImg0 = "wrong1"
            self.add({
                id: _.wrongImg0, type: "ImageBox",
                src: "assets/Jochen/wrong1.PNG",
                x: 497, y: 60, width: 520 / 3, height: 810 / 3,
            });
            _.wrongImg1 = "wrong2"
            self.add({
                id: _.wrongImg1, type: "ImageBox",
                src: "assets/Jochen/wrong2.PNG",
                x: 493, y: 60, width: 714 / 3.4, height: 862 / 3.4,
            });
            _.wrongImg2 = "wrong3"
            self.add({
                id: _.wrongImg2, type: "ImageBox",
                src: "assets/Jochen/wrong3.PNG",
                x: 436, y: 102, width: 701 / 2.1, height: 459 / 2.1,
            });
            _.wrongs = [o[_.wrongImg0], o[_.wrongImg1], o[_.wrongImg2]];

            _.showNextWrong = function () {
                nextImg = _.wrongs.pop()
                _fadeIn(nextImg, 0);
                _fadeOut(nextImg, 1500);
                _.wrongs.unshift(nextImg);
                setTimeout(() => publish("nextWrong"), 2500);
            }

            listen(self, "nextWrong", _.showNextWrong)
            setTimeout(() => publish("nextWrong"), 500);

            o[_.jochen].changeImage(JochenFaces.verduzt);

            _.wrongs.forEach(obj => _hide(obj));
            _fadeIn(o[_.btmWords], 200);
            _fadeIn(o[_.nextMiddle], 400);
        },
        onend: function (self) {
            unlisten(self)
            let o = self.objects;
            _hide(o[_.btmWords]);
            _hide(o[_.nextMiddle]);
            self.remove(_.wrongImg0);
            self.remove(_.wrongImg1);
            self.remove(_.wrongImg2);

            //_hide(o[_.wrongImg])
        }
    }, {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("1-14")
            o[_.btmWords].setTextID("01_text14");
            //o[_.nextMiddle].changeOnClick(() => publish("slideshow/scratch"))

            //TODO TEXT FÜR MAYA EINFÜGEN
            _fadeIn(o[_.btmWords], 200);
            _fadeIn(o[_.nextMiddle], 400);
        },
        onend: function (self) {
            let o = self.objects;
            _hide(o[_.btmWords]);
            _hide(o[_.nextMiddle]);
            _hide(o[_.jochen]);

            self.clear()
        },
    },
);