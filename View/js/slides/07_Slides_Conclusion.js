SLIDES.push(
    {
        id: "conclusion",
        onjump: function (self) {
        },
        onstart: function (self) {
            let o = self.objects;


            _.sortierer = "sortierer"
            self.add({
                id: _.sortierer, type: "ImageBox",
                src: Loader.manifest.birnensortierer,
                x: 367, y: 137, width: 250
            });
            let stage = addJochenStage(self)
            _.nextProducts = [Loader.manifest.birnencreme, Loader.manifest.birnenschuhe, Loader.manifest.birnensaft];
            _.nextProduct = "nextProduct"
            self.add({
                id: _.nextProduct, type: "ImageBox",
                src: _.nextProducts[0],
                x: 436, y: 102, width: 150, height: 150,
            });

            _.all = [].concat(stage, [o[_.nextProduct], o[_.sortierer]])
            actionOnAllObjects(_.all, _hide)



            if(SHOW_SLIDE_NUMBER) _show(o[_.slideCounter])

            o[_.slideCounter].setText("7-1")
            o[_.btmWords].setTextID("07_text1")
            o[_.topWords].setTextID("07_title")

            actionOnAllObjects([
                o[_.topWords],
                o[_.jochen],
                o[_.btmWords],
                o[_.nextMiddle],
            ], _fadeIn, 500, 700);

            o[_.jochen].changeImage(Loader.manifest.jochen_stars)

        },
        onend: function (self) {
            let o = self.objects;

            actionOnAllObjects([
                o[_.topWords],
                o[_.nextMiddle],
                o[_.btmWords],
            ], _hide)

        }
    }, {
        onstart: function (self) {
            let o = self.objects;

            o[_.slideCounter].setText("7-2")
            o[_.btmWords].setTextID("07_text2")

            o[_.jochen].changeImage(Loader.manifest.jochen_stars)



            const showNextProduct = function () {
                let nextImg = _.nextProducts.pop()
                _fadeIn(o[_.nextProduct], 0);
                _fadeOut(o[_.nextProduct], 1500);
                setTimeout(() => o[_.nextProduct].changeImage(nextImg), 2000)
                setTimeout(() => publish("nextProduct"), 2500);
                _.nextProducts.unshift(nextImg);
            }


            actionOnAllObjects([
                o[_.btmWords],
                o[_.nextMiddle],
            ], _fadeIn, 500, 500)

            listen(_,"nextProduct", showNextProduct);
            publish("nextProduct");
        },
        onend: function (self) {
            let o = self.objects;
            self.remove(_.nextProduct);
            unlisten(_)

            actionOnAllObjects([
                o[_.nextMiddle],
                o[_.btmWords]
            ], _hide)
        }
    }, {
        onstart: function (self) {
            let o = self.objects;

            o[_.slideCounter].setText("7-3")
            o[_.btmWords].setTextID("07_text3")

            o[_.jochen].changeImage(Loader.manifest.jochen_zufrieden)

            actionOnAllObjects([
                o[_.tochter],
                o[_.btmWords],
                o[_.nextMiddle],
            ], _fadeIn, 500, 500)
        },
        onend: function (self) {
            let o = self.objects;

            actionOnAllObjects([
                o[_.nextMiddle],
                o[_.btmWords]
            ], _hide)
        }
    }, {
        onstart: function (self) {
            let o = self.objects;

            o[_.slideCounter].setText("7-4")
            o[_.btmWords].setTextID("07_text4")

            o[_.nextMiddle].changeOnClick(() => publish("slideshow/scratch"))

            actionOnAllObjects([
                o[_.sortierer],
                o[_.btmWords],
                o[_.nextMiddle],
            ], _fadeIn, 500, 500)
        },
        onend: function (self) {
            self.clear()
        }
    },
    {
        onstart: function (self) {

            // WORDS
            self.add({
                id: "text1", type: "TextBox",
                x: 3, y: 6, width: 800,
                text_id: "conclusion_0"
            });
            self.add({
                id: "text2", type: "TextBox",
                x: 30, y: 65 - 10, width: 760, size: 30, color: "#4089DD",
                text_id: "conclusion_1_a"
            });
            self.add({
                id: "text3", type: "TextBox",
                x: 50, y: 115 - 10, width: 760,
                text_id: "conclusion_1_a2"
            });
            self.add({
                id: "text4", type: "TextBox",
                x: 80, y: 187, width: 760, size: 30, color: "#efc701",
                text_id: "conclusion_2_a"
            });
            self.add({
                id: "text5", type: "TextBox",
                x: 100, y: 242 - 10, width: 760,
                text_id: "conclusion_2_a2"
            });
            self.add({
                id: "text6", type: "TextBox",
                x: 130, y: 316, width: 760, size: 30, color: "#DD4040",
                text_id: "conclusion_3_a"
            });
            self.add({
                id: "text7", type: "TextBox",
                x: 150, y: 366 - 10, width: 760,
                text_id: "conclusion_3_a2"
            });
            self.add({
                id: "text8", type: "TextBox",
                x: 74, y: 440, width: 520, align: "right",
                text_id: "conclusion_4"
            });

            // IMAGE
            /*self.add({
                id: "img", type: "ImageBox",
                src: "assets/conclusion/summary.png",
                x: 10, y: 60, width: 140, height: 350
            });
*/
            // Button
            self.add({
                id: "button", type: "Button", x: 615, y: 481,
                text_id: "conclusion_btn", size: "long",
                message: "slideshow/scratch"
            });

        },

        onend: function (self) {
            self.clear();
        }
    },
    {
        onstart: function(self){

            // Splash in background
            self.add({ id:"splash", type:"Splash", blush:false });

            // Circular Wordbox
            self.add({
                id:"text", type:"TextBox",
                x:160, y:10, width:640, height:500, align:"center",
                text_id:"outro_1"
            });

            // Button
            self.add({
                id:"button", type:"Button", x:385, y:466,
                text_id:"outro_1_btn",
                message:"slideshow/next"
            });

        },
        onend: function(self){
            self.remove("text");
            self.remove("button");
        }
    }
);