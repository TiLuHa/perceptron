SLIDES.push(
    {
        id: "all_at_once",
        onjump: function (self) {

        },
        onstart: function (self) {
            let o = self.objects;
            let stage = addJochenStage(self);
            _.allBirnenGrid = addBirnenGrid(self, 20, 0);
            _.allNetwork = addNetwork21small(self, 180, 0);
            _.loesungAnzeigen = "loesungAnzeigen"
            self.add({
                id: _.loesungAnzeigen, type: "Button", x: 730, y: 463,
                text_id: "05_loesungAnzeigen",
                onclick: ()=>{
                    publish("change/0-2", [3]);
                    publish("change/1-2", [2]);
                    publish("update/2", [-4]);
                    publish("OutputFinished")
                }
            });

            let all = [].concat(stage, _.allBirnenGrid, _.allNetwork, [o[_.loesungAnzeigen]]);
            actionOnAllObjects(all, _hide);

            o[_.slideCounter].setText("3-1")
            o[_.btmWords].setTextID("03_text1")
            o[_.topWords].setTextID("03_title")

            if(SHOW_SLIDE_NUMBER) _show(o[_.slideCounter])

            o[_.jochen].changeImage(Loader.manifest.jochen_fragend);
            actionOnAllObjects([
                o[_.topWords],
                o[_.jochen],
                o[_.btmWords],
                o[_.nextMiddle],
            ], _fadeIn, 1000, 500);
        },
        onend: function (self) {
            let o = self.objects;
            actionOnAllObjects([
                o[_.topWords],
                o[_.btmWords],
                o[_.nextMiddle],
            ], _hide)
        }
    }, {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("3-2");
            o[_.btmWords].setTextID("03_text2");

            o[_.jochen].changeImage(Loader.manifest.jochen_laecheln);


            actionOnAllObjects(_.all_birnen,
                (b) => {
                    if (_.birnenForItem0.includes(b)) _fadeIn(b)
                    else _fadeOut(b, 0, 0.2)
                }, 500, 200)


            actionOnAllObjects([
                o[_.btmWords],
                o[_.nextMiddle],
            ], _fadeIn, 1000, 500);
        },
        onend: function (self) {
            let o = self.objects;

            actionOnAllObjects([
                o[_.btmWords],
                o[_.nextMiddle],
            ], _hide)
        },
    },
    {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("3-3")
            o[_.btmWords].setTextID("03_text3")

            _moveX(o[_.jochen], -210)
            actionOnAllObjects(_.allNetwork, _fadeIn, 0, 0)

            publish("newOutput", [_.network])

            actionOnAllObjects([
                o[_.btmWords],
                o[_.nextMiddle],
            ], _fadeIn, 1000, 500);

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
            o[_.slideCounter].setText("3-5")
            o[_.btmWords].setTextID("03_text5")

            o[_.nextMiddle].deactivate();
            //_show(o[_.heatmap])


            let countDownTime = 35
            let countDown = Array.from(Array(countDownTime).keys())

            countDown.forEach(i => {
                setTimeout(() => o[_.loesungAnzeigen].setText2("Lösung (" + (countDownTime - i) + ")"), 999 * i);
            })

            o[_.loesungAnzeigen].deactivate()
            setTimeout(() => o[_.loesungAnzeigen].activate(), countDownTime * 1000);
            setTimeout(() => o[_.loesungAnzeigen].setText("05_loesungAnzeigen"), countDownTime * 1000);


            listen(_, "OutputFinished", () => {
                if (equal2dBooleanArray(_.birnenForItem0okList, _.okList)) {
                    o[_.nextMiddle].activate();
                    o[_.jochen].changeImage(Loader.manifest.jochen_stars)
                } else {
                    o[_.nextMiddle].deactivate();
                    o[_.jochen].changeImage(Loader.manifest.jochen_fragend)
                }
            });
            publish("OutputFinished")

            actionOnAllObjects([
                o[_.btmWords],
                o[_.nextMiddle],
                o[_.loesungAnzeigen],
            ], _fadeIn, 500, 500);
        },
        onend: function (self) {
            let o = self.objects;
            self.remove(_.loesungAnzeigen)
            unlisten(_)
            actionOnAllObjects([
                o[_.btmWords],
                o[_.nextMiddle],
            ], _hide)

        }
    }, {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("3-6")
            o[_.btmWords].setTextID("03_text6")

            actionOnAllObjects([
                o[_.btmWords],
                o[_.nextMiddle],
            ], _fadeIn, 500, 500);
        },
        onend: function (self) {
            let o = self.objects;
            actionOnAllObjects([
                o[_.btmWords],
                o[_.nextMiddle],
            ], _hide)
        }
    },
);

function addBirnenGrid(self,
                       shiftx = 0,
                       shifty = 0,
                       clickable = false,
                       inputColMin = -3,
                       inputColStep = 6 / 2,
                       inputRowMin = -5,
                       inputRowStep = 10 / 7,
                       heatmapGitterX = 1,//10,
                       heatmapGitterY = 1,//16,
                       scale = [1, 0.9, 0.8],
                       src = [
                           Loader.manifest.b1,
                           Loader.manifest.b2,
                           Loader.manifest.b3,
                           Loader.manifest.b4,
                           Loader.manifest.b5,
                           Loader.manifest.b6,
                           Loader.manifest.b7,
                           Loader.manifest.b8,
                       ],
) {
    let o = self.objects;
    let all = [];

    _.okList = [...Array(scale.length)].map(e => Array(src.length));


    _.start_x = 420 + shiftx
    _.start_y = 50 + shifty

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
        x: _.start_x - (_.birnen_width + _.appart) / heatmapGitterX,
        y: _.start_y - (_.birnen_height + _.appart) / heatmapGitterY,

        xfirst: inputColMin,//- inputColStep,
        xstepsize: inputColStep / heatmapGitterX,
        xcount: (columns) * heatmapGitterX,

        yfirst: inputRowMin,// - inputRowStep,
        ystepsize: inputRowStep / heatmapGitterY,
        ycount: (rows) * heatmapGitterY,
        xsize: (_.birnen_width + _.appart) / heatmapGitterX,
        ysize: (_.birnen_height + _.appart) / heatmapGitterY,
    });
    all.push(o[_.heatmap])

    _.all_scanner = []
    _.all_birnen = []
    _.all_results = []
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {

            let scannerString = ("s" + i) + j
            if (clickable) {
                _[scannerString] = scannerString;
                self.add({
                    id: scannerString, type: "ImageBox",
                    x: _.get_x(j) - _.appart/2 - 5, y: _.get_y(i)- _.appart/2,
                    width: (_.birnen_width + _.appart*2) * scale[i], height: (_.birnen_height + _.appart*2) * scale[i],
                    src: Loader.manifest.birnenscanner,
                    class: "miniscanner"
                });
                _.all_scanner.push(o[_[scannerString]])
                all.push(o[_[scannerString]])
            }

            let x = inputRowMin + j * inputRowStep;
            let y = inputColMin + i * inputColStep;

            let birnenString = ("b" + i) + j
            _[birnenString] = birnenString;

            self.add({
                id: birnenString, type: "ImageBox",
                src: src[j],
                x: _.get_x(j), y: _.get_y(i),
                //                x: _.get_x(j) + (_.birnen_width * (1 - scale[i]) / 2),
                //                 y: _.get_y(i) + (_.birnen_height * (1 - scale[i]) / 2),
                width: _.birnen_width * scale[i], height: _.birnen_height * scale[i],
                class: clickable ? "zoom" : "nonzoom",
                onclick: () => {
                    if (!clickable) return;
                    publish("BirneClicked", [x, y])

                    console.log("new Input: " + x + "/" + y);
                    publish("change/0", [x]);
                    publish("update/1", [y]);
                    o[_.input1Text].setText(x.toFixed(1))
                    o[_.input2Text].setText(y.toFixed(1))

                    let result = _.network.getOutputFast([x, y])[0]
                    if (result > 0.5) {
                        o[_.resultPerceptron].changeImage(Loader.manifest.right);
                    } else {
                        o[_.resultPerceptron].changeImage(Loader.manifest.wrong);
                    }
                    _.all_scanner.forEach(sc => {
                        if (sc.dom.id === scannerString) _show(sc);
                        else _hide(sc);
                    });
                },
            });

            _.all_birnen.push(o[_[birnenString]])
            all.push(o[_[birnenString]])


            let resultString = ("r" + i) + j;

            _[resultString] = resultString;
            self.add({
                id: resultString, type: "ImageBox",
                x: _.get_x(j) + _.birnen_width/3, y: _.get_y(i) + _.birnen_height/3, width: 30, height: 30,
                src: Loader.manifest.right,
                class: "resultInGrid"
            });
            _.all_results.push(o[_[resultString]])
            all.push(o[_[resultString]])

            listen(_.network, "newOutput", function (network) {
                if (o[_[resultString]] !== undefined) {

                    let nnoutput = network.getOutputFast([x, y])[0];

                    if (nnoutput > 0.5) {
                        _show(o[_[resultString]]);
                        _.okList[i][j] = true;
                    } else {
                        _hide(o[_[resultString]]);
                        _.okList[i][j] = false;
                    }
                    publish("OutputFinished")
                }
            });
        }
    }

    _.birnenForItem0 = [
        /*o[_.b00], o[_.b01], o[_.b02], o[_.b03], o[_.b04], o[_.b05],*/ o[_.b06], o[_.b07],
        /*o[_.b10], o[_.b11], o[_.b12], o[_.b13], o[_.b14],*/ o[_.b15], o[_.b16], o[_.b17],
        /*o[_.b20], o[_.b21], o[_.b22], o[_.b23],*/o[_.b24], o[_.b25], o[_.b26], o[_.b27],
    ];
    _.birnenForItem0okList = [
        [false, false, false, false, false, false, true, true],
        [false, false, false, false, false, true, true, true],
        [false, false, false, false, true, true, true, true],
    ];

    _.birnenForItem1 = [
        o[_.b00], o[_.b01], o[_.b02], o[_.b03], o[_.b04], o[_.b05], o[_.b06], o[_.b07],
        //o[_.b10],o[_.b11],o[_.b12],o[_.b13],o[_.b14],o[_.b15],o[_.b16],o[_.b17],
        o[_.b20], o[_.b21], o[_.b22], o[_.b23], o[_.b24], o[_.b25], o[_.b26], o[_.b27],
    ];
    _.birnenForItem1okList = [
        [true, true, true, true, true, true, true, true],
        [false, false, false, false, false, false, false, false],
        [true, true, true, true, true, true, true, true],
    ];

    _.birnenForItem2 = [
        //o[_.b00], o[_.b01], //o[_.b02], o[_.b03], o[_.b04], o[_.b05], o[_.b06], o[_.b07],
        o[_.b10], o[_.b11], o[_.b12], o[_.b13], //o[_.b14], o[_.b15],// o[_.b16],o[_.b17],
        o[_.b20], o[_.b21], o[_.b22], o[_.b23], //o[_.b24], o[_.b25], o[_.b26], o[_.b27],
    ];
    _.birnenForItem2okList = [
        [false, false, false, false, false, false, false, false],
        [true, true, true, true, false, false, false, false],
        [true, true, true, true, false, false, false, false],
    ];


    return all;
}

function addNetwork21small(self, shiftx = 0, shifty = 0, slidermin = -5, slidermax = 5, sliderstep= 1) {
    let o = self.objects;
    all = []

    _.perceptron = "perceptron"
    self.add({
        id: _.perceptron, type: "Perceptron",
        size: [2, 1],
        activationFun: Activations.SIGMOID,
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

    _.itemPicture = "itemPicture"
    self.add({
        id: _.itemPicture, type: "ImageBox",
        src: Loader.manifest.birnenmarmelade,
        x: 145 + shiftx,
        y: 57 + shifty,
        width: 100
    })
    all.push(o[_.itemPicture]);

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
        min: slidermin, max: slidermax, step: sliderstep,
        message: "0-2"
    });
    all.push(o[_.sliderWeight1]);

    _.sliderWeight2 = "sliderWeight2"
    self.add({
        id: _.sliderWeight2, type: "Slider",
        x: 71 + shiftx, y: 265 + shifty,
        width: 100, rotation: 324,
        min: slidermin, max: slidermax, step: sliderstep,
        message: "1-2"
    });
    all.push(o[_.sliderWeight2]);

    _.sliderBias = "slider_bias";
    self.add({
        id: _.sliderBias, type: "Slider",
        x: 140 + shiftx, y: 255 + shifty,
        width: 100,
        min: slidermin, max: slidermax, step: sliderstep,
        message: "2"
    });
    all.push(o[_.sliderBias]);


    let anchorInput1X = 0 + shiftx,
        anchorInput1Y = 70 + shifty,
        xPlusInputText = 40,
        yPlusInputText = 30,
        xPlusInputDescription = -47,
        yPlusInputDescription = 35;

    _.input1 = "input1";
    self.add({
        id: _.input1, type: "ImageBox",
        src: "assets/birnen/blau/pfeilrechtsblau.png",
        x: anchorInput1X,
        y: anchorInput1Y,
    })
    all.push(o[_.input1]);

    _.input1Description = "input1Description";
    self.add({
        id: _.input1Description, type: "TextBox",
        x: anchorInput1X + xPlusInputDescription,
        y: anchorInput1Y + yPlusInputDescription,
        width: 130, height: 50,
        align: "center", color: "blue", size: 17,
        rotation: 270,
        text_id: "input1_description"
    })
    all.push(o[_.input1Description]);


    let anchorInput2X = anchorInput1X + 0;
    let anchorInput2Y = anchorInput1Y + 170;
    _.input2 = "input2"
    self.add({
        id: _.input2, type: "ImageBox",
        src: "assets/birnen/blau/pfeilrechtsblau.png",
        x: anchorInput2X,
        y: anchorInput2Y,
    })
    all.push(o[_.input2]);

    _.input2Description = "input2Description";
    self.add({
        id: _.input2Description, type: "TextBox",
        x: anchorInput2X + xPlusInputDescription,
        y: anchorInput2Y + yPlusInputDescription,
        width: 130, height: 50,
        align: "center", color: "blue", size: 17,
        rotation: 270, text_id: "input2_description"
    })
    all.push(o[_.input2Description]);

    _.perceptronLinks = "perceptronLinks"
    self.add({
        id: _.perceptronLinks, type: "ImageBox",
        src: "assets/birnen/blau/linksteil.png",
        x: 155 + shiftx,
        y: 170 + shifty,
    })
    all.push(o[_.perceptronLinks]);

    _.perceptronRechts = "perceptronRechts"
    self.add({
        id: _.perceptronRechts, type: "ImageBox",
        src: "assets/birnen/blau/teilrechts.png",
        x: 188 + shiftx,
        y: 171 + shifty,
    })
    all.push(o[_.perceptronRechts]);


    publish("change/0-2", [_.network.links[0].weight]);
    publish("change/1-2", [_.network.links[1].weight]);
    publish("update/2", [_.network.getNodes()[2].bias]);

    return all
}