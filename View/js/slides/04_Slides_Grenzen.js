SLIDES.push(
    {
        id: "grenzen",
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
            o[_.slideCounter].setText("4-1")

            _.topWords = "topWords";
            self.add({
                id: _.topWords, type: "TextBox", text_id: "04_title",
                x: 130, y: 10, width: 700, height: 100, align: "center"
            });

            _.jochen = "jochenBild";
            self.add({
                id: _.jochen, type: "ImageBox",
                src: JochenFaces.erstaunt,
                x: 200, y: 60, width: 380 / 2, height: 545 / 2,
            });

            _.btmWords = "btmWords";
            self.add({
                id: _.btmWords, type: "TextBox", text_id: "04_text1",
                x: 130, y: 347, width: 700, height: 100, align: "center"
            })

            _.nextMiddle = "nextMiddle";
            self.add({
                id: _.nextMiddle, type: "Button",
                x: 383, y: 463,
                text_id: "01_button_next", uppercase: false,
                onclick: () => publish("slideshow/next")
            });

        },
        onend: function (self) {
            let o = self.objects;
            self.remove(_.topWords)
            _hide(o[_.jochen])
            _hide(o[_.btmWords])
            _hide(o[_.nextMiddle])
        }
    },
    {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("4-2")
            o[_.btmWords].setTextID("04_text2")

            _.allBirnen = addBirnenGrid(self)
            _.allNetwork = addNetwork21small(self)

            _.not_item2 = [
                /*o[_.b00], o[_.b01], o[_.b02], o[_.b03], o[_.b04], o[_.b05],o[_.b06],o[_.b07],*/
                o[_.b10], o[_.b11], o[_.b12], o[_.b13], o[_.b14], o[_.b15],o[_.b16],o[_.b17],
                /*o[_.b20], o[_.b21], o[_.b22], o[_.b23], o[_.b24],o[_.b25],o[_.b26],o[_.b27],*/
            ];

            _.not_item2.forEach(obj => _fadeOut(obj,0,0.2))
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