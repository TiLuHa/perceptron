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

function addBirnenGrid(self,
                       start_x = 220,
                       start_y = 50,
                       scale = [1, 0.9, 0.8],
                       src = ["assets/birnen/b1.jpg", "assets/birnen/b2.jpg", "assets/birnen/b3.jpg",
                           "assets/birnen/b4.jpg", "assets/birnen/b5.jpg", "assets/birnen/b6.jpg",
                           "assets/birnen/b7.jpg", "assets/birnen/b8.jpg"],
                       inputColMin = 0,
                       inputColStep = 1,
                       inputRowMin = 10,
                       inputRowStep = 2,
                       heatmapGitter = 5) {
    let o = self.objects;

    _.start_x = start_x
    _.start_y = start_y

    _.birnen_shrinkfactor = .15
    _.birnen_width = 303 * _.birnen_shrinkfactor
    _.birnen_height = 514 * _.birnen_shrinkfactor
    _.appart = 20

    _.get_x = (pos) => _.start_x + pos * (_.birnen_width + _.appart)
    _.get_y = (pos) => _.start_y + pos * (_.birnen_height + _.appart)

    let rows = scale.length;
    let columns = src.length;

    self.add({
        id: "heatmap", type: "Heatmap",
        x: _.start_x,// - (_.birnen_width + _.appart),
        y: _.start_y,// - (_.birnen_height + _.appart),

        xfirst: inputColMin ,//- inputColStep,
        xstepsize: inputColStep / heatmapGitter,
        xcount: (columns /*+2*/) * heatmapGitter,

        yfirst: inputRowMin,// - inputRowStep,
        ystepsize: inputRowStep / heatmapGitter,
        ycount: (rows /*+2*/) * heatmapGitter,
        xsize: (_.birnen_width + _.appart) /heatmapGitter,
        ysize: (_.birnen_height + _.appart) / heatmapGitter,
    });

    _.all_birnen = []
    _.all_results = []
    for (let i = 0; i < rows; i++) {


        for (let j = 0; j < columns; j++) {
            let birnenString = ("b" + i) + j
            _[birnenString] = birnenString;

            self.add({
                id: birnenString, type: "ImageBox",
                src: src[j],
                x: _.get_x(j), y: _.get_y(i),
                width: _.birnen_width * scale[i], height: _.birnen_height * scale[i],
            });
            _.all_birnen.push(o[_[birnenString]])
            let resultString = ("r" + i) + j

            _[resultString] = resultString;
            self.add({
                id: resultString, type: "ImageBox",
                x: _.get_x(j) + 15, y: _.get_y(i) + 40, width: 40, height: 40,
                src: "assets/birnen/Right.png"
            });
            _.all_results.push(o[_[resultString]])
            listen(self, "newOutput", function (network) {
                let x = inputColMin + j * inputColStep;
                let y = inputRowMin + i * inputRowStep;

                let nnoutput = network.getOutputFast([x, y])[0];

                if (nnoutput > 0.5) _hide(_[resultString]);
                else _show(_[resultString]);
            });
        }


    }


    _.not_item1 = [
        o[_.b01], o[_.b02], o[_.b03], o[_.b04], o[_.b05], o[_.b06],/*o[_.b07],o[_.b08],*/
        o[_.b11], o[_.b12], o[_.b13], o[_.b14], o[_.b15],/*o[_.b16],o[_.b17],o[_.b18],*/
        o[_.b21], o[_.b22], o[_.b23], o[_.b24],/*o[_.b25],o[_.b26],o[_.b27],o[_.b28],*/
    ];
}