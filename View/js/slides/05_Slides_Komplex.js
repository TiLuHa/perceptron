SLIDES.push(
    {
        id: "komplex",
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