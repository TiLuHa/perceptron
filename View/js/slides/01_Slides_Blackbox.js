const actionOnAllObjects = function (arrayOfObjects, action, startTime = 0, intervall = 0) {
    arrayOfObjects.reduce((time, obj) => {
        action(obj, time);
        return time + intervall;
    }, startTime);
}

const addJochenStage = function (self) {
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
        src: Loader.manifest.jochen_kamera,
        x: 200, y: 60, width: 380 / 2, height: 545 / 2,
    });
    all.push(o[_.jochen])

    _.tablet = "tablet";
    self.add({
        id: _.tablet, type: "ImageBox",
        src: Loader.manifest.tablet1,
        x: 600, y: 170, width: 438 / 3, height: 689 / 3,
    });
    all.push(o[_.tablet])

    _.tochter = "tochterBild";
    self.add({
        id: _.tochter, type: "ImageBox",
        src: Loader.manifest.tochter,
        x: 600, y: 60, width: 380 / 2.1, height: 545 / 2.1,
    });
    all.push(o[_.tochter])

    //Text an Jochen
    _.jochenHello = "jochenhello";
    self.add({
        id: _.jochenHello, type: "TextBox",
        x: 420, y: 85, width: 50, height: 50,
        align: "center", color: "#aaa", size: 17,
        text_id: "jochen_hello"
    });
    all.push(o[_.jochenHello])


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

    _.itemRight = "itemRight";
    self.add({
        id: _.itemRight, type: "ImageBox",
        src: Loader.manifest.birnenmarmelade,
        x: 750, y: 100,
        width: 570 * 0.3, height: 554 * 0.3,
    });
    all.push(o[_.itemRight])

    _.pencils = "pencils";
    self.add({
        id: _.pencils, type: "ImageBox",
        src: Loader.manifest.pencils,
        x: 388, y: 75,
        width: 200
    });
    all.push(o[_.pencils])

    return all;
};

function addScalas(self, shiftx = 0, shifty = 0, input1, input2) {
    let o = self.objects;
    _.topScala = []
    _.bottomScala = []

    _.scalaTop = "scalaTop";
    self.add({
        id: _.scalaTop, type: "ImageBox",
        src: Loader.manifest.scalaFarbe,
        x: 380 + shiftx, y: 100 + shifty,
    });
    _.topScala.push(o[_.scalaTop]);

    _.pfeilTop = "pfeilTop";
    self.add({
        id: _.pfeilTop, type: "ImageBox",
        src: Loader.manifest.network_pfeilRechts,
        x: 469+ (21.5 * input1) + shiftx, y: 66 + shifty,
        width:40,
        rotation: 90,
    });
    _.topScala.push(o[_.pfeilTop])

    _.scalaButtom = "scalaButtom";
    self.add({
        id: _.scalaButtom, type: "ImageBox",
        src: Loader.manifest.scalaSize,
        x: 380 + shiftx, y: 270 + shifty,
    });
    _.bottomScala.push(o[_.scalaButtom])

    _.pfeilButtom = "pfeilButtom";
    self.add({
        id: _.pfeilButtom, type: "ImageBox",
        src: Loader.manifest.network_pfeilRechts,
        x: 469+ (21.5 * input2) + shiftx, y: 247 + shifty,
        width:40,
        rotation: 90,
    });
    _.bottomScala.push(o[_.pfeilButtom])

    _.birneTopLeft = "birneTopLeft";
    self.add({
        id: _.birneTopLeft, type: "ImageBox",
        src: Loader.manifest.b1,
        x: 330 + shiftx, y: 90 + shifty,
        width: 570 * 0.075, height: 554 * 0.075,
    });
    _.topScala.push(o[_.birneTopLeft])

    _.birneTopRight = "birneTopRight";
    self.add({
        id: _.birneTopRight, type: "ImageBox",
        src: Loader.manifest.b8,
        x: 605 + shiftx, y: 90 + shifty,
        width: 570 * 0.075, height: 554 * 0.075,
    });
    _.topScala.push(o[_.birneTopRight])

    _.birneButtomLeft = "birneButtomLeft";
    self.add({
        id: _.birneButtomLeft, type: "ImageBox",
        src: Loader.manifest.b1,
        x: 340 + shiftx, y: 275 + shifty,
        width: 570 * 0.05, height: 554 * 0.05,
    });
    _.bottomScala.push(o[_.birneButtomLeft])

    _.birneButtomRight = "birneButtomRight";
    self.add({
        id: _.birneButtomRight, type: "ImageBox",
        src: Loader.manifest.b1,
        x: 605 + shiftx, y: 235 + shifty,
        width: 570 * 0.1, height: 554 * 0.1,
    });
    _.bottomScala.push(o[_.birneButtomRight])

    _.textScale00 = "textScale00";
    self.add({
        id: _.textScale00, type: "TextBox",
        x: 362 + shiftx, y: 146 + shifty, width: 50, height: 50,
        align: "center", color: "#484848", size: 17,
        text: "-5"
    });
    _.topScala.push(o[_.textScale00])

    _.textScale01 = "textScale01";
    self.add({
        id: _.textScale01, type: "TextBox",
        x: 464 + shiftx, y: 146 + shifty, width: 50, height: 50,
        align: "center", color: "#484848", size: 17,
        text: "0"
    });
    _.topScala.push(o[_.textScale01])

    _.textScale02 = "textScale02";
    self.add({
        id: _.textScale02, type: "TextBox",
        x: 568 + shiftx, y: 146 + shifty, width: 50, height: 50,
        align: "center", color: "#484848", size: 17,
        text: "5"
    });
    _.topScala.push(o[_.textScale02])

    _.textScale10 = "textScale10";
    self.add({
        id: _.textScale10, type: "TextBox",
        x: 362 + shiftx, y: 316 + shifty, width: 50, height: 50,
        align: "center", color: "#484848", size: 17,
        text: "-5"
    });
    _.bottomScala.push(o[_.textScale10])

    _.textScale11 = "textScale11";
    self.add({
        id: _.textScale11, type: "TextBox",
        x: 464 + shiftx, y: 316 + shifty, width: 50, height: 50,
        align: "center", color: "#484848", size: 17,
        text: "0"
    });
    _.bottomScala.push(o[_.textScale11])

    _.textScale12 = "textScale12";
    self.add({
        id: _.textScale12, type: "TextBox",
        x: 568 + shiftx, y: 316 + shifty, width: 50, height: 50,
        align: "center", color: "#484848", size: 17,
        text: "5"
    });
    _.bottomScala.push(o[_.textScale12])

    return [].concat(_.topScala, _.bottomScala);
}

function addInputs(self, shiftx = 0, shifty = 0, input1Value = 2, input2Value = -1) {
    let o = self.objects;
    let all = []

    let anchorInput1X = 160 + shiftx
    let anchorInput1Y = 70 + shifty;

    let xPlusInputText = 40;
    let yPlusInputText = 30;
    let xPlusInputDescription = -47;
    let yPlusInputDescription = 35;

    _.input1 = "input1"
    self.add({
        id: _.input1, type: "ImageBox",
        src: "assets/birnen/blau/pfeilrechtsblau.png",
        x: anchorInput1X,
        y: anchorInput1Y,
    })
    all.push(o[_.input1])

    _.input1Text = "input1Text"
    self.add({
        id: _.input1Text, type: "TextBox",
        x: anchorInput1X + xPlusInputText,
        y: anchorInput1Y + yPlusInputText,
        text: "" + input1Value,
        class: "inputText"
    });
    all.push(o[_.input1Text])

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
    all.push(o[_.input1Description])

    let anchorInput2X = anchorInput1X + 0;
    let anchorInput2Y = anchorInput1Y + 170;

    _.input2 = "input2"
    self.add({
        id: _.input2, type: "ImageBox",
        src: "assets/birnen/blau/pfeilrechtsblau.png",
        x: anchorInput2X,
        y: anchorInput2Y,
    })
    all.push(o[_.input2])


    _.input2Text = "input2Text"
    self.add({
        id: _.input2Text, type: "TextBox",
        x: anchorInput2X + xPlusInputText,
        y: anchorInput2Y + yPlusInputText,
        text: "" + input2Value,
        class: "inputText"
    });
    all.push(o[_.input2Text])


    _.input2Description = "input2Description";
    self.add({
        id: _.input2Description, type: "TextBox",
        x: anchorInput2X + xPlusInputDescription,
        y: anchorInput2Y + yPlusInputDescription,
        width: 130, height: 50,
        align: "center", color: "blue", size: 17,
        rotation: 270, text_id: "input2_description"
    })
    all.push(o[_.input2Description])

    return all

}

function addSinglePerceptron(self, shiftx = 0, shifty = 0, input1 = 2, input2 = -1) {
    let o = self.objects;
    let all = [];

    _.perceptron = "perceptron"
    self.add({
        id: _.perceptron, type: "Perceptron",
        size: [2, 1],
        activationFun: Activations.RELU,
        activationFunOutput: Activations.SIGMOID,
        activationFunInput: Activations.LINEAR,
        params: {
            "0": input1, //Input1
            "1": input2,  //Input2
            "2": (9), //Bias
            "0-2": (-6),
            "1-2": (5),
        }
    });
    all.push(o[_.perceptron])

    _.network = o[_.perceptron].network;


    _.explainLinks = "explainLinks"
    self.add({
        id: _.explainLinks, type: "ImageBox",
        src: "assets/birnen/schwarz/explainTall.png",
        x: 420 + shiftx,
        y: 60 + shifty,
    })
    all.push(o[_.explainLinks])


    _.biasDot = "biasDot"
    self.add({
        id: _.biasDot, type: "ImageBox",
        src: "assets/birnen/blau/bias.png",
        x: 413 + shiftx,
        y: 235 + shifty,
    })
    all.push(o[_.biasDot])

    _.explainRechts = "explainRechts"
    self.add({
        id: _.explainRechts, type: "ImageBox",
        src: "assets/birnen/schwarz/explainTall.png",
        x: 499 + shiftx,
        y: 60 + shifty,
    })
    all.push(o[_.explainRechts])


    _.sliderWeight1 = "sliderWeight1"
    self.add({
        id: _.sliderWeight1, type: "Slider",
        x: 258 + shiftx, y: 93 + shifty,
        width: 200, rotation: 25,
        min: -10, max: 10, step: 1,
        message: "0-2"
    });
    all.push(o[_.sliderWeight1])


    _.sliderWeight2 = "sliderWeight2"
    self.add({
        id: _.sliderWeight2, type: "Slider",
        x: 238 + shiftx, y: 260 + shifty,
        width: 200, rotation: 340,
        min: -10, max: 10, step: 1,
        message: "1-2"
    });
    all.push(o[_.sliderWeight2])


    _.sliderBias = "slider_bias";
    self.add({
        id: _.sliderBias, type: "Slider",
        x: 422 + shiftx, y: 264 + shifty,
        width: 100,
        min: 10, max: -10, step: -1,
        factor: -1,
        message: "2"
    });
    all.push(o[_.sliderBias])


    _.perceptronLinks = "perceptronLinks"
    self.add({
        id: _.perceptronLinks, type: "ImageBox",
        src: "assets/birnen/blau/dingslinks.png",
        x: 420 + shiftx,
        y: 178 + shifty,
    })
    all.push(o[_.perceptronLinks])

    _.perceptronRechts = "perceptronRechts"
    self.add({
        id: _.perceptronRechts, type: "ImageBox",
        src: "assets/birnen/blau/dingsrechts.png",
        x: 499 + shiftx,
        y: 179 + shifty,
    })
    all.push(o[_.perceptronRechts])


    _.resultPerceptron = "resultPerceptron"
    self.add({
        id: _.resultPerceptron, type: "ImageBox",
        x: 512 + shiftx, y: 182 + shifty, width: 57, height: 57,
        src: "assets/birnen/Wrong.png"
    });
    all.push(o[_.resultPerceptron])


    _.sumText = "sumText"
    self.add({
        id: _.sumText, type: "TextBox",
        x: 456 + shiftx,
        y: 197 + shifty,
        text: "-67",
        class: "potenzialText"
    });
    all.push(o[_.sumText])

    _.sumExplainText = "sumExplainText"
    self.add({
        id: _.sumExplainText, type: "TextBox",
        x: 424 + shiftx,
        y: 80 + shifty,
        width: 80, align: "center",
        size:18,
        text: "(-3)*4<br>+(-2)*8<br>+10"
    });
    all.push(o[_.sumExplainText])

    _.resultExplainText = "resultExplainText"
    self.add({
        id: _.resultExplainText, type: "TextBox",
        x: 506 + shiftx,
        y: 80 + shifty,
        width: 80, align: "center",
        size:18,
        text: "14 > 0 ?"
    });
    all.push(o[_.resultExplainText])

    _.geeignetText = "geeignetText"
    self.add({
        id: _.geeignetText, type: "TextBox",
        x: 496 + shiftx,
        y: 71 + shifty,
        width: 100, align: "center",
        text_id: "02_geeigentText"
    });
    all.push(o[_.geeignetText])

    let textcolor = "#3c7dea"
    _.biasLabel = "biasLabel";
    self.add({
        id: _.biasLabel, type: "TextBox",
        x: 413 + shiftx, y: 317 + shifty, width: 120, height: 50,
        align: "center", color: textcolor, size: 17,
        text_id: "02_biaslabel"
    });
    all.push(o[_.biasLabel])

    _.perceptronLabel = "perceptronLabel";
    self.add({
        id: _.perceptronLabel, type: "TextBox",
        x: 600 + shiftx, y: 200 + shifty, width: 100, height: 50,
        align: "center", color: textcolor, size: 17,
        text_id: "02_perceptronlabel"
    });
    all.push(o[_.perceptronLabel])

    _.potenzialLabel = "potenzialLabel";
    self.add({
        id: _.potenzialLabel, type: "TextBox",
        x: 427 + shiftx, y: 39 + shifty, width: 80, height: 50,
        align: "center", color: textcolor, size: 17,
        text_id: "02_potenziallabel"
    });
    all.push(o[_.potenzialLabel])

    _.gewichteLabelTop = "gewichteLabelTop";
    self.add({
        id: _.gewichteLabelTop, type: "TextBox",
        x: 288 + shiftx, y: 96 + shifty, width: 80, height: 50,
        align: "center", color: textcolor, size: 17,
        text_id: "02_gewichtelabel",
        rotation: 25,
    });
    all.push(o[_.gewichteLabelTop])

    _.gewichteLabelButtom = "gewichteLabelButtom";
    self.add({
        id: _.gewichteLabelButtom, type: "TextBox",
        x: 252 + shiftx, y: 218 + shifty, width: 80, height: 50,
        align: "center", color: textcolor, size: 17,
        text_id: "02_gewichtelabel",
        rotation: 340,
    });
    all.push(o[_.gewichteLabelButtom])

    _.ergebnisLabel = "ergebnisLabel";
    self.add({
        id: _.ergebnisLabel, type: "TextBox",
        x: 506 + shiftx, y: 39 + shifty, width: 80, height: 50,
        align: "center", color: textcolor, size: 17,
        text_id: "02_Ergebnislabel"
    });
    all.push(o[_.ergebnisLabel])


    return all;

}

function addScanner(self, shiftx = 0, shifty = 0) {
    let o = self.objects;
    let all = []

    let scannerX = 0 + shiftx;
    let scannerY = 100 + shifty

    _.birnenScanner = "birnenScanner";
    self.add({
        id: _.birnenScanner, type: "ImageBox",
        src: Loader.manifest.birnenscanner,
        x: scannerX, y: scannerY, width: 639 / 4, height: 782 / 4,
    });
    all.push(o[_.birnenScanner])

    _.birnenScannerText = "birnenScannerText";
    self.add({
        id: _.birnenScannerText, type: "TextBox",
        x: scannerX + 17, y: scannerY + 75, width: 130, height: 50,
        align: "center", color: "#aaa", size: 17,
        text_id: "02_scannerText"
    });
    all.push(o[_.birnenScannerText])

    _.birneBig = "birneBig"
    self.add({
        id: _.birneBig, type: "ImageBox",
        src: Loader.manifest.b7,
        x: scannerX + 40,
        y: scannerY + 30,
        width: 80,
        rotation: 0
    });
    all.push(o[_.birneBig])
    return all;
}

function buildTabletInterface(self) {
    let o = self.objects;
    let all = []

    _.birnenscannerX = 0
    _.birnenscannerY = 100
    _.birnenScanner = "birnenScanner";
    self.add({
        id: _.birnenScanner, type: "ImageBox",
        src: Loader.manifest.birnenscanner,
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

    _.birneBig = "birneBig"
    self.add({
        id: _.birneBig, type: "ImageBox",
        src: Loader.manifest.b7,
        x: 40,
        y: 130,
        width: 80,
        rotation: 0
    });
    all.push(o[_.birneBig])

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

const addSortingSlide = function (self, shiftx = -100, shifty = 0, findingTime = 750, stepTime = 2000) {
    let face0 = Loader.manifest.jochen_verduzt;
    let face1 = Loader.manifest.jochen_erstaunt;

    let o = self.objects;
    let all = [];

    let item_scale = 0.3
    let item_width = 570 * item_scale
    let item_height = 554 * item_scale

    _.jochen2 = "jochen2Bild";
    self.add({
        id: _.jochen2, type: "ImageBox",
        src: face0,
        x: 0, y: 60, width: 380 / 2, height: 545 / 2,
    });
    all.push(o[_.jochen2])

    _.jochenHelloLeft = "jochenhelloleft";
    self.add({
        id: _.jochenHelloLeft, type: "TextBox",
        x: 210, y: 85, width: 50, height: 50,
        align: "center", color: "#aaa", size: 17,
        text_id: "jochen_hello"
    });
    all.push(o[_.jochenHelloLeft])

    _.birne0 = "birne0";
    self.add({
        id: _.birne0, type: "ImageBox",
        src: Loader.manifest.b1,
        x: 454 + shiftx, y: 154 + shifty,
        width: _.birnen_width * 1,
        rotation: 0
    });
    all.push(o[_.birne0])

    _.birne1 = "birne1"
    self.add({
        id: _.birne1, type: "ImageBox",
        src: Loader.manifest.b4,
        x: 454 + shiftx, y: 154 + shifty,
        width: _.birnen_width * 0.8,
        rotation: 0
    });
    all.push(o[_.birne1])

    _.birne2 = "birne2"
    self.add({
        id: _.birne2, type: "ImageBox",
        src: Loader.manifest.b7,
        x: 454 + shiftx, y: 154 + shifty,
        width: _.birnen_width * 0.9,
        rotation: 0
    });
    all.push(o[_.birne2])

    _.item0 = "item0";
    self.add({
        id: _.item0, type: "ImageBox",
        src: Loader.manifest.birnenmarmelade,
        x: 523 + shiftx,//_.item_x,
        y: -13 + shifty,//_.item_y,
        width: item_width, height: item_height,
    });
    all.push(o[_.item0])

    _.item1 = "item1";
    self.add({
        id: _.item1, type: "ImageBox",
        src: Loader.manifest.birnenkuchen,
        x: 587 + shiftx,//_.item_x,
        y: 100 + shifty,//_.item_y,
        width: item_width, height: item_height,
    });
    all.push(o[_.item1])

    _.item2 = "item2";
    self.add({
        id: _.item2, type: "ImageBox",
        src: Loader.manifest.birnenbier,
        x: 542 + shiftx,//_.item_x,
        y: 213 + shifty,//_.item_y,
        width: item_width, height: item_height,
    });
    all.push(o[_.item2])


    _.arrow0 = "arrow0";
    self.add({
        id: _.arrow0, type: "ImageBox",
        src: Loader.manifest.arrow,
        x: 500 + shiftx, y: 100 + shifty,
        width: 40,
        rotation: 315
    });
    all.push(o[_.arrow0])

    _.arrow1 = "arrow1"
    self.add({
        id: _.arrow1, type: "ImageBox",
        src: Loader.manifest.arrow,
        x: 526 + shiftx, y: 176 + shifty,
        width: 40,
        rotation: 0
    });
    all.push(o[_.arrow1])

    _.arrow2 = "arrow2"
    self.add({
        id: _.arrow2, type: "ImageBox",
        src: Loader.manifest.arrow,
        x: 500 + shiftx, y: 248 + shifty,
        width: 40,
        rotation: 45
    });
    all.push(o[_.arrow2])

    _.hacken0 = "hacken0"
    self.add({
        id: _.hacken0, type: "ImageBox",
        src: "assets/birnen/Right.png",
        x: 523 + 100 + shiftx,//_.item_x,
        y: -13 + 100 + shifty,//_.item_y,
        width: 40,
        rotation: 0
    });
    all.push(o[_.hacken0])

    _.hacken1 = "hacken1"
    self.add({
        id: _.hacken1, type: "ImageBox",
        src: "assets/birnen/Right.png",
        x: 587 + 100 + shiftx,//_.item_x,
        y: 100 + 100 + shifty,//_.item_y,
        width: 40,
        rotation: 0
    });
    all.push(o[_.hacken1])

    _.hacken2 = "hacken2"
    self.add({
        id: _.hacken2, type: "ImageBox",
        src: "assets/birnen/Right.png",
        x: 650 + shiftx,//_.item_x,
        y: 330 + shifty,//_.item_y,
        width: 40,
        rotation: 0
    });
    all.push(o[_.hacken2]);

    let itemOpacity = 0.2;

    _.step0 = function () {
        _show(o[_.jochenHelloLeft]);
        o[_.jochenHelloLeft].setTextID("01_ehm");
        o[_.jochen2].changeImage(face0);
        _fadeIn(o[_.birne0], 0);
        _hide(o[_.birne1])
        _hide(o[_.birne2])
        _hide(o[_.hacken0])
        _hide(o[_.hacken1])
        _hide(o[_.hacken2])

        _fadeOut(o[_.item0], 0, itemOpacity)
        _fadeOut(o[_.item1], 0, itemOpacity)
        _fadeOut(o[_.item2], 0, itemOpacity)

        setTimeout(function () {
            o[_.jochenHelloLeft].setTextID("01_step0");
            o[_.jochen2].changeImage(face1);
            _fadeIn(o[_.hacken0], 0);
            _fadeIn(o[_.hacken2], 0);
            _fadeIn(o[_.item0], 0);
            _fadeIn(o[_.item2], 0);
        }, findingTime)

        setTimeout(function () {
            publish("startStep1")
        }, stepTime);
    };

    _.step1 = function () {
        o[_.jochenHelloLeft].setTextID("01_ehm");
        o[_.jochen2].changeImage(face0);
        _fadeIn(o[_.birne1], 0);
        _hide(o[_.birne0])
        _hide(o[_.birne2])
        _hide(o[_.hacken0])
        _hide(o[_.hacken1])
        _hide(o[_.hacken2])
        _fadeOut(o[_.item0], 0, itemOpacity)
        _fadeOut(o[_.item1], 0, itemOpacity)
        _fadeOut(o[_.item2], 0, itemOpacity)


        setTimeout(function () {
            o[_.jochenHelloLeft].setTextID("01_step1");
            o[_.jochen2].changeImage(face1);
            _fadeIn(o[_.hacken1], 0);
            _fadeIn(o[_.hacken2], 0);
            _fadeIn(o[_.item1], 0);
            _fadeIn(o[_.item2], 0);
        }, findingTime)

        setTimeout(function () {
            publish("startStep2")
        }, stepTime);
    };

    _.step2 = function () {
        o[_.jochenHelloLeft].setTextID("01_ehm");
        o[_.jochen2].changeImage(face0);
        _fadeIn(o[_.birne2], 0);
        _hide(o[_.birne0])
        _hide(o[_.birne1])
        _hide(o[_.hacken0])
        _hide(o[_.hacken1])
        _hide(o[_.hacken2])
        _fadeOut(o[_.item0], 0, itemOpacity)
        _fadeOut(o[_.item1], 0, itemOpacity)
        _fadeOut(o[_.item2], 0, itemOpacity)

        setTimeout(function () {
            o[_.jochenHelloLeft].setTextID("01_step2");
            o[_.jochen2].changeImage(face1);
            _fadeIn(o[_.hacken1], 0);
            _fadeIn(o[_.item1], 0);
        }, findingTime);

        setTimeout(function () {
            publish("startStep0")
        }, stepTime);
    }

    return all;
};

const addFotoSlide = function (exampleBirneSrc = Loader.manifest.b7) {
    return {
        onstart: function (self) {

            let o = self.objects;
            o[_.slideCounter].setText("fotoslide");

            // Bild Jochen
            _.jochenFoto = "jochenFoto";
            self.add({
                id: _.jochenFoto, type: "ImageBox",
                src: Loader.manifest.jochen_verduzt,
                x: 200, y: 60, width: 380 / 2, height: 545 / 2,
            });

            _.tablet2 = "tablet2";
            self.add({
                id: _.tablet2, type: "ImageBox",
                src: Loader.manifest.tablet2,
                x: 350, y: 170, width: 438 / 4.5, height: 689 / 4.5,
            });

            _.flashlight = "flashlight";
            self.add({
                id: _.flashlight, type: "ImageBox",
                src: Loader.manifest.blitzlicht,
                x: 350, y: 170, width: 208 / 2.5, height: 222 / 2.5,
            });


            _.birneFoto = "birneFoto"
            self.add({
                id: _.birneFoto, type: "ImageBox",
                src: exampleBirneSrc,
                x: 554,
                y: 254,
                width: 40,
                rotation: 0
            });

            _hide(o[_.flashlight]);
            _show(o[_.jochenFoto]);
            _show(o[_.tablet2]);
            _fadeIn(o[_.birneFoto], 1000);
            _show(o[_.flashlight], 1500);
            _hide(o[_.flashlight], 2000)
            setTimeout(() => o[_.jochenFoto].changeImage(Loader.manifest.jochen_zufrieden), 2000);
            setTimeout(() => publish("slideshow/scratch"), 3000);

        },
        onend: function (self) {
            self.remove(_.jochenFoto);
            self.remove(_.tablet2);
            self.remove(_.birneFoto);
            self.remove(_.flashlight);
        }
    }
};

const addFehlvorstellung = function (self) {
    let o = self.objects;

    let all = [];
    _.wrongImg0 = "wrong0"
    self.add({
        id: _.wrongImg0, type: "ImageBox",
        src: Loader.manifest.wrong1,
        x: 497, y: 60, width: 520 / 3, height: 810 / 3,
    });
    all.push(o[_.wrongImg0]);
    _.wrongImg1 = "wrong1"

    self.add({
        id: _.wrongImg1, type: "ImageBox",
        src: Loader.manifest.wrong2,
        x: 493, y: 60, width: 714 / 3.4, height: 862 / 3.4,
    });
    all.push(o[_.wrongImg1]);
    _.wrongImg2 = "wrong2"
    self.add({
        id: _.wrongImg2, type: "ImageBox",
        src: Loader.manifest.wrong3,
        x: 436, y: 102, width: 701 / 2.1, height: 459 / 2.1,
    });
    all.push(o[_.wrongImg2]);
    _.wrongs = [o[_.wrongImg0], o[_.wrongImg1], o[_.wrongImg2]];


    _.showNextWrong = function () {
        nextImg = _.wrongs.pop()
        _fadeIn(nextImg, 0);
        _fadeOut(nextImg, 1500);
        _.wrongs.unshift(nextImg);
        setTimeout(() => publish("nextWrong"), 2500);

    }
    return all;
}


SLIDES.push(
    {
        id: "sortieren",
        onjump: function (self) {

        },

        // Slide 1
        onstart: function (self) {

            let o = self.objects;

            let all = addJochenStage(self);
            let birnenStuff = addBirnenGrid(self, -170, 20);
            _.sortingSlide = addSortingSlide(self);
            _.fehlvorstellung = addFehlvorstellung(self);

            all = [].concat(all, _.sortingSlide, birnenStuff, _.fehlvorstellung);

            actionOnAllObjects(all, _hide);

            if(SHOW_SLIDE_NUMBER) _show(o[_.slideCounter]);

            o[_.slideCounter].setText("1-1")
            o[_.btmWords].setTextID("01_text1");

            _moveX(o[_.jochen], 180)

            _moveX(o[_.jochenHello], 180)
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
            _moveX(o[_.jochenHello], -180)
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
            o[_.jochen].changeImage(Loader.manifest.jochen_laecheln)

            actionOnAllObjects([
                o[_.btmLeftWords],
                o[_.nextRight],
            ], _fadeIn, 2000, 500)

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
            ], _fadeIn, 3500, 500)

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

            actionOnAllObjects(_.birnenForItem0, _fadeIn, 500)

            _show(o[_.itemRight], 0)
            actionOnAllObjects([
                o[_.btmLeftWords],
                o[_.nextRight],
            ], _fadeIn, 1500, 500)


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
            o[_.itemRight].changeImage(Loader.manifest.birnenkuchen);

            actionOnAllObjects(_.birnenForItem1, _fadeIn, 500)

            _show(o[_.itemRight], 0)
            actionOnAllObjects([
                o[_.btmLeftWords],
                o[_.nextRight],
            ], _fadeIn, 1500, 500)


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
            actionOnAllObjects(_.birnenForItem2, _fadeIn, 500)

            _show(o[_.itemRight], 0)

            actionOnAllObjects([
                o[_.btmLeftWords],
                o[_.nextRight],
            ], _fadeIn, 1500, 500)
        },
        onend: function (self) {
            let o = self.objects;
            actionOnAllObjects([
                o[_.btmLeftWords],
                o[_.nextRight],
                o[_.itemRight],
                o[_.jochen]
            ], _hide);

            actionOnAllObjects(_.all_birnen, _hide);

        }
    },
    {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("1-8");
            o[_.btmLeftWords].setTextID("01_text8");

            o[_.nextRight].changeOnClick(() => {
                publish("startStep0");
                _hide(o[_.nextRight]);
                _fadeIn(o[_.nextRight], 2000);
                o[_.nextRight].changeOnClick(
                    () => publish("slideshow/next"))
            });

            _show(o[_.jochen2]);

            actionOnAllObjects([
                o[_.birne0],
                o[_.arrow0],
                o[_.item0],
                o[_.arrow1],
                o[_.item1],
                o[_.arrow2],
                o[_.item2],
                o[_.btmLeftWords],
                o[_.nextRight]
            ], _fadeIn, 500, 500);

            listen(_, "startStep0", _.step0)
            listen(_, "startStep1", _.step1)
            listen(_, "startStep2", _.step2)

        },
        onend: function (self) {
            let o = self.objects;
            unlisten(_);
            actionOnAllObjects(_.sortingSlide,
                (obj) => self.remove(obj.id));

            actionOnAllObjects([
                o[_.btmLeftWords],
                o[_.nextRight],
            ], (obj) => self.remove(obj.id));

            _show(o[_.jochen])
            o[_.jochen].changeImage(Loader.manifest.jochen_erschoepft);
        }
    },
    {
        //Slide 9
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("1-9")
            o[_.btmWords].setTextID("01_text9");
            o[_.jochenHello].setTextID("01_platt");
            _moveX(o[_.jochen], 200);

            actionOnAllObjects([
                o[_.btmWords],
                o[_.nextMiddle],
                o[_.jochenHello]
            ], _fadeIn, 500, 500)

        },
        onend: function (self) {
            let o = self.objects;
            actionOnAllObjects([
                o[_.btmWords],
                o[_.nextMiddle],
                o[_.jochenHello]
            ], _hide)
        }

    },
    {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("1-10")
            o[_.btmWords].setTextID("01_text10");

            actionOnAllObjects([
                o[_.tochter], o[_.btmWords], o[_.nextMiddle]
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
    {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("1-11")
            o[_.btmWords].setTextID("01_text11");

            o[_.jochen].changeImage(Loader.manifest.jochen_fragend);

            actionOnAllObjects([
                o[_.btmWords], o[_.nextMiddle]
            ], _fadeIn, 500, 500);
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
            o[_.slideCounter].setText("1-12")
            o[_.btmWords].setTextID("01_text12");
            o[_.jochenHello].setTextID("01_tschau")
            o[_.jochen].changeImage(Loader.manifest.jochen_zufrieden);

            _fadeOut(o[_.tochter], 2000);
            actionOnAllObjects([
                o[_.btmWords], o[_.nextMiddle], o[_.jochenHello]
            ], _fadeIn, 500, 500);

        },
        onend: function (self) {
            let o = self.objects;
            actionOnAllObjects([
                o[_.btmWords],
                o[_.nextMiddle],
                o[_.jochenHello],
            ], _hide)
        }
    },
    {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("1-13")
            o[_.btmWords].setTextID("01_text13");

            listen(self, "nextWrong", _.showNextWrong)
            setTimeout(() => publish("nextWrong"), 500);

            o[_.jochen].changeImage(Loader.manifest.jochen_verduzt);

            actionOnAllObjects([
                o[_.btmWords], o[_.nextMiddle],
            ], _fadeIn, 500, 500);
        },
        onend: function (self) {
            unlisten(self)
            let o = self.objects;
            actionOnAllObjects([
                o[_.btmWords],
                o[_.nextMiddle],
            ], _hide)
            actionOnAllObjects(_.fehlvorstellung,
                (obj) => self.remove(obj.id));
        }
    }, {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("1-14")
            o[_.btmWords].setTextID("01_text14");
            o[_.jochen].changeImage(Loader.manifest.jochen_zufrieden);


            o[_.nextMiddle].changeOnClick(() => publish("slideshow/scratch"))

            actionOnAllObjects([
                o[_.btmWords], o[_.nextMiddle],
            ], _fadeIn, 500, 500);
        },
        onend: function (self) {
            let o = self.objects;
            _hide(o[_.btmWords]);
            _hide(o[_.nextMiddle]);
            _hide(o[_.jochen]);
            unlisten(_)
            unlisten(_.network)

            self.clear()
        },
    },
);