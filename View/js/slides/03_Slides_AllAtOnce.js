SLIDES.push(
    {
        id: "all_at_once",
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
            o[_.slideCounter].setText("1-3")

            _.topWords = "topWords";
            self.add({
                id: _.topWords, type: "TextBox", text_id: "03_title",
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
                id: _.btmWords, type: "TextBox", text_id: "03_text1",
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
            o[_.slideCounter].setText("3-2")
            o[_.btmWords].setTextID("03_text2")

            addBirnenGrid(self)

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
            o[_.slideCounter].setText("3-3")
            o[_.btmWords].setTextID("03_text3")

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
            o[_.slideCounter].setText("3-4")
            o[_.btmWords].setTextID("03_text4")

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

function addBirnenGrid(self, start_x = 220, start_y = 50,
rows = 3, columns = 8) {
    let o = self.objects;

    _.start_x = start_x
    _.start_y = start_y

    _.scale0 = 1
    _.scale1 = 0.9
    _.scale2 = 0.8
    _.birnen_shrinkfactor = .15
    _.birnen_width = 303 * _.birnen_shrinkfactor
    _.birnen_height = 514 * _.birnen_shrinkfactor
    _.appart = 20

    _.get_x = (pos) => _.start_x + pos * (_.birnen_width + _.appart)
    _.get_y = (pos) => _.start_y + pos * (_.birnen_height + _.appart)

    _.b11 = "b11"
    self.add({
        id: _.b11, type: "ImageBox",
        src: "assets/birnen/b1.jpg",
        x: _.get_x(0), y: _.get_y(1),
        width: _.birnen_width * _.scale1, height: _.birnen_height * _.scale1,
    });

    _.b12 = "b12"
    self.add({
        id: _.b12, type: "ImageBox",
        src: "assets/birnen/b2.jpg",
        x: _.get_x(1), y: _.get_y(1),
        width: _.birnen_width * _.scale1, height: _.birnen_height * _.scale1,
    });

    _.b13 = "b13"
    self.add({
        id: _.b13, type: "ImageBox",
        src: "assets/birnen/b3.jpg",
        x: _.get_x(2), y: _.get_y(1),
        width: _.birnen_width * _.scale1, height: _.birnen_height * _.scale1,
    });

    _.b14 = "b14"
    self.add({
        id: _.b14, type: "ImageBox",
        src: "assets/birnen/b4.jpg",
        x: _.get_x(3), y: _.get_y(1),
        width: _.birnen_width * _.scale1, height: _.birnen_height * _.scale1,
    });

    _.b15 = "b15"
    self.add({
        id: _.b15, type: "ImageBox",
        src: "assets/birnen/b5.jpg",
        x: _.get_x(4), y: _.get_y(1),
        width: _.birnen_width * _.scale1, height: _.birnen_height * _.scale1,
    });

    _.b16 = "b16"
    self.add({
        id: _.b16, type: "ImageBox",
        src: "assets/birnen/b6.jpg",
        x: _.get_x(5), y: _.get_y(1),
        width: _.birnen_width * _.scale1, height: _.birnen_height * _.scale1,
    });

    _.b17 = "b17"
    self.add({
        id: _.b17, type: "ImageBox",
        src: "assets/birnen/b7.jpg",
        x: _.get_x(6), y: _.get_y(1),
        width: _.birnen_width * _.scale1, height: _.birnen_height * _.scale1,
    });

    _.b18 = "b18"
    self.add({
        id: _.b18, type: "ImageBox",
        src: "assets/birnen/b8.jpg",
        x: _.get_x(7), y: _.get_y(1),
        width: _.birnen_width * _.scale1, height: _.birnen_height * _.scale1,
    });

    _.b01 = "b01"
    self.add({
        id: _.b01, type: "ImageBox",
        src: "assets/birnen/b1.jpg",
        x: _.get_x(0), y: _.get_y(0),
        width: _.birnen_width * _.scale0, height: _.birnen_height * _.scale0,
    });

    _.b02 = "b02"
    self.add({
        id: _.b02, type: "ImageBox",
        src: "assets/birnen/b2.jpg",
        x: _.get_x(1), y: _.get_y(0),
        width: _.birnen_width * _.scale0, height: _.birnen_height * _.scale0,
    });

    _.b03 = "b03"
    self.add({
        id: _.b03, type: "ImageBox",
        src: "assets/birnen/b3.jpg",
        x: _.get_x(2), y: _.get_y(0),
        width: _.birnen_width * _.scale0, height: _.birnen_height * _.scale0,
    });

    _.b04 = "b04"
    self.add({
        id: _.b04, type: "ImageBox",
        src: "assets/birnen/b4.jpg",
        x: _.get_x(3), y: _.get_y(0),
        width: _.birnen_width * _.scale0, height: _.birnen_height * _.scale0,
    });

    _.b05 = "b05"
    self.add({
        id: _.b05, type: "ImageBox",
        src: "assets/birnen/b5.jpg",
        x: _.get_x(4), y: _.get_y(0),
        width: _.birnen_width * _.scale0, height: _.birnen_height * _.scale0,
    });

    _.b06 = "b06"
    self.add({
        id: _.b06, type: "ImageBox",
        src: "assets/birnen/b6.jpg",
        x: _.get_x(5), y: _.get_y(0),
        width: _.birnen_width * _.scale0, height: _.birnen_height * _.scale0,
    });

    _.b07 = "b07"
    self.add({
        id: _.b07, type: "ImageBox",
        src: "assets/birnen/b7.jpg",
        x: _.get_x(6), y: _.get_y(0),
        width: _.birnen_width * _.scale0, height: _.birnen_height * _.scale0,
    });

    _.b08 = "b08"
    self.add({
        id: _.b08, type: "ImageBox",
        src: "assets/birnen/b8.jpg",
        x: _.get_x(7), y: _.get_y(0),
        width: _.birnen_width * _.scale0, height: _.birnen_height * _.scale0,
    });

    _.b21 = "b21"
    self.add({
        id: _.b21, type: "ImageBox",
        src: "assets/birnen/b1.jpg",
        x: _.get_x(0), y: _.get_y(2),
        width: _.birnen_width * _.scale2, height: _.birnen_height * _.scale2,
    });

    _.b22 = "b22"
    self.add({
        id: _.b22, type: "ImageBox",
        src: "assets/birnen/b2.jpg",
        x: _.get_x(1), y: _.get_y(2),
        width: _.birnen_width * _.scale2, height: _.birnen_height * _.scale2,
    });

    _.b23 = "b23"
    self.add({
        id: _.b23, type: "ImageBox",
        src: "assets/birnen/b3.jpg",
        x: _.get_x(2), y: _.get_y(2),
        width: _.birnen_width * _.scale2, height: _.birnen_height * _.scale2,
    });

    _.b24 = "b24"
    self.add({
        id: _.b24, type: "ImageBox",
        src: "assets/birnen/b4.jpg",
        x: _.get_x(3), y: _.get_y(2),
        width: _.birnen_width * _.scale2, height: _.birnen_height * _.scale2,
    });

    _.b25 = "b25"
    self.add({
        id: _.b25, type: "ImageBox",
        src: "assets/birnen/b5.jpg",
        x: _.get_x(4), y: _.get_y(2),
        width: _.birnen_width * _.scale2, height: _.birnen_height * _.scale2,
    });

    _.b26 = "b26"
    self.add({
        id: _.b26, type: "ImageBox",
        src: "assets/birnen/b6.jpg",
        x: _.get_x(5), y: _.get_y(2),
        width: _.birnen_width * _.scale2, height: _.birnen_height * _.scale2,
    });

    _.b27 = "b27"
    self.add({
        id: _.b27, type: "ImageBox",
        src: "assets/birnen/b7.jpg",
        x: _.get_x(6), y: _.get_y(2),
        width: _.birnen_width * _.scale2, height: _.birnen_height * _.scale2,
    });

    _.b28 = "b28"
    self.add({
        id: _.b28, type: "ImageBox",
        src: "assets/birnen/b8.jpg",
        x: _.get_x(7), y: _.get_y(2),
        width: _.birnen_width * _.scale2, height: _.birnen_height * _.scale2,
    });

    _.all_birnen = [
        o[_.b01], o[_.b02], o[_.b03], o[_.b04], o[_.b05], o[_.b06], o[_.b07], o[_.b08],
        o[_.b11], o[_.b12], o[_.b13], o[_.b14], o[_.b15], o[_.b16], o[_.b17], o[_.b18],
        o[_.b21], o[_.b22], o[_.b23], o[_.b24], o[_.b25], o[_.b26], o[_.b27], o[_.b28],
    ];

    _.not_item1 = [
        o[_.b01], o[_.b02], o[_.b03], o[_.b04], o[_.b05], o[_.b06],/*o[_.b07],o[_.b08],*/
        o[_.b11], o[_.b12], o[_.b13], o[_.b14], o[_.b15],/*o[_.b16],o[_.b17],o[_.b18],*/
        o[_.b21], o[_.b22], o[_.b23], o[_.b24],/*o[_.b25],o[_.b26],o[_.b27],o[_.b28],*/
    ];

    let scale = [1, 0.9, 0.8];

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            let birnenString = ("birne"+i )+ j

            _[birnenString] = birnenString;
            self.add({
                id: _.b28, type: "ImageBox",
                src: "assets/birnen/b8.jpg",
                x: _.get_x(j), y: _.get_y(i),
                width: _.birnen_width * scale[i], height: _.birnen_height * scale[i],
            });

            let resultString = ("result"+i )+ j
            _[resultString] = resultString;
            self.add({
                id: resultString, type: "ImageBox",
                x: _.get_x(j)+15, y: _.get_y(i)+40, width: 40, height: 40,
                src: "assets/birnen/Right.png"
            });
        }
    }
}