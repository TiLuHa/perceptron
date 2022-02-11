SLIDES.push(
    {
        id: "all_at_once",
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
            o[_.slideCounter].setText("3-1")

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

            _.allBirnen = addBirnenGrid(self)
            _.allNetwork = addNetwork21small(self)

            _.not_item1 = [
                o[_.b00], o[_.b01], o[_.b02], o[_.b03], o[_.b04], o[_.b05],/* o[_.b06],o[_.b07],*/
                o[_.b10], o[_.b11], o[_.b12], o[_.b13], o[_.b14], /*o[_.b15],o[_.b16],o[_.b17],*/
                o[_.b20], o[_.b21], o[_.b22], o[_.b23], /*o[_.b24],o[_.b25],o[_.b26],o[_.b27],*/
            ];

            _.not_item1.forEach(obj => _fadeOut(obj,0,0.2))
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

            _.allBirnen.concat(_.allNetwork).forEach(obj => _hide(obj))

        }
    },
    {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("3-4")
            o[_.btmWords].setTextID("03_text4")

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
);

function addBirnenGrid(self,
                       start_x = 420,
                       start_y = 50,
                       scale = [1, 0.9, 0.8],
                       src = ["assets/birnen/b1.jpg", "assets/birnen/b2.jpg", "assets/birnen/b3.jpg",
                           "assets/birnen/b4.jpg", "assets/birnen/b5.jpg", "assets/birnen/b6.jpg",
                           "assets/birnen/b7.jpg", "assets/birnen/b8.jpg"],
                       inputColMin = 0,
                       inputColStep = 1,
                       inputRowMin = 10,
                       inputRowStep = 2,
                       heatmapGitterX = 5,
                       heatmapGitterY = 8,
) {
    let o = self.objects;
    let all = [];

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

    _.heatmap = "heatmap"
    self.add({
        id: _.heatmap, type: "Heatmap",
        x: _.start_x - (_.birnen_width + _.appart)/5,
        y: _.start_y - (_.birnen_height + _.appart)/5,

        xfirst: inputColMin ,//- inputColStep,
        xstepsize: inputColStep / heatmapGitterX,
        xcount: (columns) * heatmapGitterX,

        yfirst: inputRowMin,// - inputRowStep,
        ystepsize: inputRowStep / heatmapGitterY,
        ycount: (rows) * heatmapGitterY,
        xsize: (_.birnen_width + _.appart) /heatmapGitterX,
        ysize: (_.birnen_height + _.appart) / heatmapGitterY,
    });
    all.push(o[_.heatmap])

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
            all.push(o[_[birnenString]])
            let resultString = ("r" + i) + j

            _[resultString] = resultString;
            self.add({
                id: resultString, type: "ImageBox",
                x: _.get_x(j) + 15, y: _.get_y(i) + 40, width: 40, height: 40,
                src: "assets/birnen/Right.png"
            });
            _.all_results.push(o[_[resultString]])
            all.push(o[_[resultString]])

            listen(self, "newOutput", function (network) {
                let x = inputColMin + j * inputColStep;
                let y = inputRowMin + i * inputRowStep;

                let nnoutput = network.getOutputFast([x, y])[0];

                if (nnoutput > 0.5) _show(o[_[resultString]]);
                else _hide(o[_[resultString]]);
            });
        }
    }
    return all;
}

function addNetwork21small(self, shiftx = 0, shifty = 0) {
    let o = self.objects;
    all = []

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
            "0-2": -4,
            "1-2": 2,
        }
    });
    _.network = o[_.perceptron].network;
    all.push(o[_.perceptron])

    _.biasDot = "biasDot"
    self.add({
        id: _.biasDot, type: "ImageBox",
        src: "assets/birnen/blau/bias.png",
        x: 132 + shiftx,
        y: 226 + shifty,
    })
    all.push(o[_.biasDot]);

    _.sliderWeight1 = "sliderWeight1"
    self.add({
        id: _.sliderWeight1, type: "Slider",
        x: 100 + shiftx, y: 93 + shifty,
        width: 100, rotation: 40,
        min: -10, max: 10, step: 1,
        message: "update/0-2"
    });
    all.push(o[_.sliderWeight1]);

    _.sliderWeight2 = "sliderWeight2"
    self.add({
        id: _.sliderWeight2, type: "Slider",
        x: 71 + shiftx, y: 265+shifty,
        width: 100, rotation: 324,
        min: -10, max: 10, step: 1,
        message: "update/1-2"
    });
    all.push(o[_.sliderWeight2]);

    _.sliderBias = "slider_bias";
    self.add({
        id: _.sliderBias, type: "Slider",
        x: 140+shiftx, y: 255+shifty,
        width: 100,
        min: -10, max: 10, step: 1,
        message: "update/2"
    });
    all.push(o[_.sliderBias]);


    _.anchorInput1X = 0+shiftx;
    _.anchorInput1Y = 70+shiftx;
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
    all.push(o[_.input1]);

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
    all.push(o[_.input1Description]);


    _.anchorInput2X = _.anchorInput1X + 0;
    _.anchorInput2Y = _.anchorInput1Y + 170;
    _.input2 = "input2"
    self.add({
        id: _.input2, type: "ImageBox",
        src: "assets/birnen/blau/pfeilrechtsblau.png",
        x: _.anchorInput2X,
        y: _.anchorInput2Y,
    })
    all.push(o[_.input2]);

    _.input2Description = "input2Description";
    self.add({
        id: _.input2Description, type: "TextBox",
        x: _.anchorInput2X + _.xPlusInputDescription,
        y: _.anchorInput2Y + _.yPlusInputDescription,
        width: 130, height: 50,
        align: "center", color: "blue", size: 17,
        rotation: 270, text_id: "input2_description"
    })
    all.push(o[_.input2Description]);

    _.perceptronLinks = "perceptronLinks"
    self.add({
        id: _.perceptronLinks, type: "ImageBox",
        src: "assets/birnen/blau/linksteil.png",
        x: 155+shiftx,
        y: 170+shifty,
    })
    all.push(o[_.perceptronLinks]);

    _.perceptronRechts = "perceptronRechts"
    self.add({
        id: _.perceptronRechts, type: "ImageBox",
        src: "assets/birnen/blau/teilrechts.png",
        x: 188+shiftx,
        y: 171+shifty,
    })
    all.push(o[_.perceptronRechts]);


    publish("update/0-2", [_.network.links[0].weight]);
    publish("update/1-2", [_.network.links[1].weight]);
    publish("update/2", [_.network.getNodes()[2].bias]);

    return all
}