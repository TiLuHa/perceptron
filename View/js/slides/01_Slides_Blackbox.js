SLIDES.push(
    {
        id: "sortieren",

        // Slide 1
        onstart: function (self) {

            let o = self.objects;

            // Bild Jochen
            _.jochen = "img";
            _.xpush = 380;
            self.add({
                id: _.jochen, type: "ImageBox",
                src: "assets/Jochen/Jochen_kamera.jpg",
                x: _.xpush, y: 60, width: 380 / 2, height: 545 / 2,
            });

            //Begrüßung Jochen
            _.jochenHello = "jochenhello";
            self.add({
                id: _.jochenHello, type: "TextBox",
                x: 210 + _.xpush, y: 85, width: 50, height: 50,
                align: "center", color: "#aaa", size: 17,
                text_id: "jochen_hello"
            });

            // Words
            _.topWords = "topWords";
            self.add({
                id: _.topWords, type: "TextBox", text_id: "01_title",
                x: 130, y: 10, width: 700, height: 100, align: "center"
            });
            _.btmWords = "btmWords";
            self.add({
                id: _.btmWords, type: "TextBox", text_id: "01_text1",
                x: 130, y: 347, width: 700, height: 100, align: "center"
            })

            // Buttons
            _.next = "next";
            self.add({
                id: _.next, type: "Button",
                x: 383, y: 463, //normal size
                //size: "long", x:304, y:466,
                text_id: "01_button_next", uppercase: false,
                onclick: () => publish("slideshow/next")
            });

            _hide(o[_.topWords]);
            _fadeIn(o[_.topWords], 100);
            _hide(o[_.jochen]);
            _fadeIn(o[_.jochen], 200);
            _hide(o[_.jochenHello]);
            _fadeIn(o[_.jochenHello], 200);
            _hide(o[_.btmWords]);
            _fadeIn(o[_.btmWords], 400);
            _hide(o[_.next]);
            _fadeIn(o[_.next], 700);


        },
        onend: function (self) {
            self.remove(_.topWords);
            self.remove(_.jochenHello);
            self.remove(_.btmWords);
            self.remove(_.next);
        }
    }, {
        // Slide 2
        onstart: function (self) {
            let o = self.objects;

            _.btmWords = "btmWords";
            self.add({
                id: _.btmWords, type: "TextBox", text_id: "01_text2",
                x: 130, y: 347, width: 700, height: 100, align: "center"
            })

            _.next = "next";
            self.add({
                id: _.next, type: "Button",
                x: 383, y: 463, //normal size
                //size: "long", x:304, y:466,
                text_id: "01_button_next", uppercase: false,
                onclick: () => publish("slideshow/next")
            });

            _hide(o[_.btmWords]);
            _fadeIn(o[_.btmWords], 100);
            _hide(o[_.next]);
            _fadeIn(o[_.next], 300);
        },

        onend: function (self) {
            self.remove(_.btmWords);
            self.remove(_.next);
        }
    },
    {
        //Slide 3
        onstart: function (self) {
            let o = self.objects;

            //Jochen an den Rand bewegen
            o[_.jochen].dom.style.left = 0;
            o[_.jochen].dom.src = "assets/Jochen/Jochen_laecheln.jpg";

            _.btmWords = "btmWords";
            self.add({
                id: _.btmWords, type: "TextBox", text_id: "01_text3",
                x: 10, y: 450,
                width: 700, height: 100, align: "center"
            })

            _.next = "next";
            self.add({
                id: _.next, type: "Button",
                x: 730, y: 463, //normal size
                //size: "long", x:304, y:466,
                text_id: "01_button_next", uppercase: false,
                onclick: () => publish("slideshow/next")
            });

            //Birnen hinzufügen
            // self.add({
            //     id: "birnenGrid", type:"Birnengrid",
            //     x:0, y:0
            // })

            _.scale0 = 1
            _.scale1 = 0.9
            _.scale2 = 0.8
            _.birnen_shrinkfactor = .15
            _.birnen_width = 303 * _.birnen_shrinkfactor,
                _.birnen_height = 514 * _.birnen_shrinkfactor,
                _.appart = 20,
                _.start_x = 220,
                _.start_y = 50
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


            _hide(o[_.b11]);
            _fadeIn(o[_.b11], 200);
            _hide(o[_.b12]);
            _fadeIn(o[_.b12], 300);
            _hide(o[_.b13]);
            _fadeIn(o[_.b13], 400);
            _hide(o[_.b14]);
            _fadeIn(o[_.b14], 500);
            _hide(o[_.b15]);
            _fadeIn(o[_.b15], 600);
            _hide(o[_.b16]);
            _fadeIn(o[_.b16], 700);
            _hide(o[_.b17]);
            _fadeIn(o[_.b17], 800);
            _hide(o[_.b18]);
            _fadeIn(o[_.b18], 900);
            _hide(o[_.btmWords]);
            _fadeIn(o[_.btmWords], 100);
            _hide(o[_.next]);
            _fadeIn(o[_.next], 100);
        },
        onend: function (self) {
            self.remove(_.btmWords);
            self.remove(_.next);

        }
    },
    {
        //Slide 4
        onstart: function (self) {
            let o = self.objects;

            _.btmWords = "btmWords";
            self.add({
                id: _.btmWords, type: "TextBox", text_id: "01_text4",
                x: 10, y: 450,
                width: 700, height: 100, align: "center"
            })

            _.next = "next";
            self.add({
                id: _.next, type: "Button",
                x: 730, y: 463, //normal size
                //size: "long", x:304, y:466,
                text_id: "01_button_next", uppercase: false,
                onclick: () => publish("slideshow/next")
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


            _hide(o[_.b01]);
            _fadeIn(o[_.b01], 200);
            _hide(o[_.b02]);
            _fadeIn(o[_.b02], 300);
            _hide(o[_.b03]);
            _fadeIn(o[_.b03], 400);
            _hide(o[_.b04]);
            _fadeIn(o[_.b04], 500);
            _hide(o[_.b05]);
            _fadeIn(o[_.b05], 600);
            _hide(o[_.b06]);
            _fadeIn(o[_.b06], 700);
            _hide(o[_.b07]);
            _fadeIn(o[_.b07], 800);
            _hide(o[_.b08]);
            _fadeIn(o[_.b08], 900);
            _hide(o[_.b21]);
            _fadeIn(o[_.b21], 200);
            _hide(o[_.b22]);
            _fadeIn(o[_.b22], 300);
            _hide(o[_.b23]);
            _fadeIn(o[_.b23], 400);
            _hide(o[_.b24]);
            _fadeIn(o[_.b24], 500);
            _hide(o[_.b25]);
            _fadeIn(o[_.b25], 600);
            _hide(o[_.b26]);
            _fadeIn(o[_.b26], 700);
            _hide(o[_.b27]);
            _fadeIn(o[_.b27], 800);
            _hide(o[_.b28]);
            _fadeIn(o[_.b28], 900);

            _hide(o[_.btmWords]);
            _fadeIn(o[_.btmWords], 100);
            _hide(o[_.next]);
            _fadeIn(o[_.next], 100);

        },
        onend: function (self) {
            self.remove(_.btmWords);
            self.remove(_.next);

        }
    },
    {
        //Slide 5
        onstart: function (self) {
            let o = self.objects;

            _.item_x = 750;
            _.item_y = 100;
            _.item_scale = 0.3
            _.item_width = 570 * _.item_scale
            _.item_height = 554 * _.item_scale
            _.item = "item";
            self.add({
                id: _.item, type: "ImageBox",
                src: "assets/birnen/Birnenmarmelade.jpg",
                x: _.item_x, y: _.item_y,
                width: _.item_width, height: _.item_height,
            });

            _.btmWords = "btmWords";
            self.add({
                id: _.btmWords, type: "TextBox", text_id: "01_text5",
                x: 10, y: 450,
                width: 700, height: 100, align: "center"
            })

            _.next = "next";
            self.add({
                id: _.next, type: "Button",
                x: 730, y: 463, //normal size
                //size: "long", x:304, y:466,
                text_id: "01_button_next", uppercase: false,
                onclick: () => publish("slideshow/next")
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
            _.not_item1.forEach(b => _fadeOut(b, 200, 0.2))

            _hide(o[_.item]);
            _fadeIn(o[_.item], 200);

            _hide(o[_.btmWords]);
            _fadeIn(o[_.btmWords], 100);
            _hide(o[_.next]);
            _fadeIn(o[_.next], 100);

        },
        onend: function (self) {
            self.remove(_.item);
            self.remove(_.btmWords);
            self.remove(_.next);
        }
    },
    {
        //Slide 6
        onstart: function (self) {
            let o = self.objects;

            _.item = "item";
            self.add({
                id: _.item, type: "ImageBox",
                src: "assets/birnen/Birnenkuchen.jpg",
                x: _.item_x, y: _.item_y,
                width: _.item_width, height: _.item_height,
            });

            _.btmWords = "btmWords";
            self.add({
                id: _.btmWords, type: "TextBox", text_id: "01_text6",
                x: 10, y: 450,
                width: 700, height: 100, align: "center"
            })

            _.next = "next";
            self.add({
                id: _.next, type: "Button",
                x: 730, y: 463, //normal size
                //size: "long", x:304, y:466,
                text_id: "01_button_next", uppercase: false,
                onclick: () => publish("slideshow/next")
            });

            _.all_birnen.forEach(b => _fadeOut(b, 200, 0.2))
            _.yes_item2 = [
                o[_.b01], o[_.b02], o[_.b03], o[_.b04], o[_.b05], o[_.b06], o[_.b07], o[_.b08],
                //o[_.b11],o[_.b12],o[_.b13],o[_.b14],o[_.b15],o[_.b16],o[_.b17],o[_.b18],
                o[_.b21], o[_.b22], o[_.b23], o[_.b24], o[_.b25], o[_.b26], o[_.b27], o[_.b28],
            ];
            _.yes_item2.forEach(b => _fadeIn(b, 400))

            _hide(o[_.item]);
            _fadeIn(o[_.item], 400);

            _hide(o[_.btmWords]);
            _fadeIn(o[_.btmWords], 100);
            _hide(o[_.next]);
            _fadeIn(o[_.next], 100);

        },
        onend: function (self) {
            self.remove(_.item);
            self.remove(_.btmWords);
            self.remove(_.next);
        }
    },
    {
        //Slide 7
        onstart: function (self) {
            let o = self.objects;


            _.item = "item";
            self.add({
                id: _.item, type: "ImageBox",
                src: "assets/birnen/Birnensaft.jpg",
                x: _.item_x, y: _.item_y,
                width: _.item_width, height: _.item_height,
            });

            _.btmWords = "btmWords";
            self.add({
                id: _.btmWords, type: "TextBox", text_id: "01_text7",
                x: 10, y: 450,
                width: 700, height: 100, align: "center"
            })

            _.next = "next";
            self.add({
                id: _.next, type: "Button",
                x: 730, y: 463, //normal size
                //size: "long", x:304, y:466,
                text_id: "01_button_next", uppercase: false,
                onclick: () => publish("slideshow/next")
            });

            _.all_birnen.forEach(b => _fadeOut(b, 200, 0.2))
            _.yes_item2 = [
                o[_.b01], o[_.b02], //o[_.b03], o[_.b04], o[_.b05], o[_.b06], o[_.b07], o[_.b08],
                o[_.b11],o[_.b12],o[_.b13],o[_.b14],o[_.b15],o[_.b16],//o[_.b17],o[_.b18],
                o[_.b21], o[_.b22], o[_.b23], o[_.b24], //o[_.b25], o[_.b26], o[_.b27], o[_.b28],
            ];
            _.yes_item2.forEach(b => _fadeIn(b, 400))

            _hide(o[_.item]);
            _fadeIn(o[_.item], 400);

            _hide(o[_.btmWords]);
            _fadeIn(o[_.btmWords], 100);
            _hide(o[_.next]);
            _fadeIn(o[_.next], 100);

        },
        onend: function (self) {
            self.remove(_.item);
            self.remove(_.btmWords);
            self.remove(_.next);

            self.remove(_.b01);
            self.remove(_.b02);
            self.remove(_.b03);
            self.remove(_.b04);
            self.remove(_.b05);
            self.remove(_.b06);
            self.remove(_.b07);
            self.remove(_.b08);
            self.remove(_.b21);
            self.remove(_.b22);
            self.remove(_.b23);
            self.remove(_.b24);
            self.remove(_.b25);
            self.remove(_.b26);
            self.remove(_.b27);
            self.remove(_.b28);
            self.remove(_.b11);
            self.remove(_.b12);
            self.remove(_.b13);
            self.remove(_.b14);
            self.remove(_.b15);
            self.remove(_.b16);
            self.remove(_.b17);
            self.remove(_.b18);
        }
    },
    {
        onstart: function (self) {
            let o = self.objects;

            // Jochen zum Rand bewegen.
            o[_.jochen].dom.style.left = 0;
            o[_.jochen].dom.src = "assets/Jochen/Jochen_laecheln.jpg";

            // Erklärungstext
            _.leftwords = "leftWords";
            self.add({
                id: _.leftwords, type: "TextBox", text_id: "01_birnenlegen",
                x: 530, y: 50, width: 350, height: 400, align: "center"
            });
            _hide(o[_.leftwords]);
            _fadeIn(o[_.leftwords], 200);

            //Birnen
            _.birne = "birne";

            //Standardgröße Birnen
            let widthstd = 35,
                hightstd = 50;

            //Auflistung der Birnen mit Variation
            _.birnen = [
                {good: true, widthplus: 3, hightplus: 0},
                {good: false, widthplus: 10, hightplus: 0},
                {good: true, widthplus: 0, hightplus: 3},
                {good: false, widthplus: 0, hightplus: -20}
            ];

            //Birnen einfügen.
            let x_birne_entrance = 400, y_birne_entrance = 200;
            _.birnen.forEach((b, i) => {
                self.add({
                    id: _.birne + i, type: "ImageBox",
                    src: "assets/birnen/b1.jpg",
                    x: x_birne_entrance + i * 20, y: y_birne_entrance,
                    width: widthstd + b.widthplus,
                    hight: hightstd + b.hightplus,
                });

                _hide(o[_.birne + i]);
            });

            // Sortierboxen einfügen
            _.boxgood = "boxgood";
            _.boxbad = "boxbad";
            let xboxgood = 200, yboxgood = 400,
                xboxbad = 450, yboxbad = 400,
                widthbox = 200, heightbox = 75;
            self.add({
                id: _.boxgood, type: "ImageBox",
                src: "assets/Jochen/box.png",
                x: xboxgood, y: yboxgood,
                width: widthbox,
                hight: heightbox,
            });
            self.add({
                id: _.boxbad, type: "ImageBox",
                src: "assets/Jochen/box2.png",
                x: xboxbad, y: yboxbad,
                width: widthbox,
                hight: heightbox,
            });

            // Pinsel hinzufügen
            _.pinsel = "pinsel";
            self.add({
                id: _.pinsel, type: "ImageBox",
                src: "assets/Jochen/pinsel.png",
                x: x_birne_entrance + 100, y: y_birne_entrance + 100,
                width: 75,
                hight: 60,
            });

            // Weiter-Button
            _.next = "next";
            self.add({
                id: _.next, type: "Button",
                x: 680, y: 496, //long size
                // x:383, y:463, //normal size
                text_id: "01_button_next2", uppercase: false,
                // size: "long",
                onclick: function () {
                    publish("slideshow/next");
                }
            });
            _hide(o[_.next]);
            _fadeIn(o[_.next], 400);

            //Animation Birnen
            let i = 0;
            _.timer = setInterval(function () {
                if (i === _.birnen.length) clearInterval(_.timer);
                _fadeIn(o[_.birne + i], 0);
                o[_.birne + i].dom.style.left = x_birne_entrance - 30;
                let b = _.birnen[i];
                setTimeout(function () {
                    o[_.jochen].dom.src = "assets/Jochen/Jochen_fragend.jpg";
                    setTimeout(function () {
                        o[_.jochen].dom.src = b.good ? "assets/Jochen/Jochen_zufrieden.jpg" : "assets/Jochen/Jochen_wuetend.jpg";
                        o[_.birne + i].dom.style.left = (b.good ? xboxgood : xboxbad) + i * 30 + 20;
                        o[_.birne + i].dom.style.top = b.good ? yboxgood : yboxbad;
                        setTimeout(function () {
                            if (!b.good) o[_.birne + i].dom.src = "assets/Jochen/birne_schlecht.png";
                            i++;
                        }, 200);

                    }, 1000);
                }, 500);
                o[_.jochen].dom.src = "assets/Jochen/Jochen_laecheln.jpg";

            }, 3000);

            //Text nach sortieren
            _.sortiert = "sortiertText"
            self.add({
                id: _.sortiert, type: "TextBox", text_id: "01_richtig_gelegt",
                x: 70, y: 647, width: 700, height: 100, align: "center"
            })
            _hide(o[_.sortiert]);
            _fadeIn(o[_.sortiert], 13000);

        },
        onend: function (self) {
            clearInterval(_.timer);
            self.remove(_.leftwords);
            self.remove(_.sortiert);
            self.remove(_.next);
            self.remove(_.boxgood);
            self.remove(_.boxbad);
            self.remove(_.pinsel);
            _.birnen.forEach((b, i) => {
                self.remove(_.birne + i);
            });

        }

    }, {
        onstart: function (self) {
            let o = self.objects;

            // Jochen normal machen.
            o[_.jochen].dom.src = "assets/Jochen/Jochen_laecheln.jpg";

            // Erklärungstext
            _.leftwords = "leftWords";
            self.add({
                id: _.leftwords, type: "TextBox", text_id: "01_problem",
                x: 230, y: 50, width: 650, height: 400,
                //align:"center"
            });
            _hide(o[_.leftwords]);
            _fadeIn(o[_.leftwords], 200);

            // Weiter-Button
            _.next = "next";
            self.add({
                id: _.next, type: "Button",
                x: 680, y: 496,
                text_id: "01_button_next3", uppercase: false,
                onclick: function () {
                    publish("slideshow/next");
                }
            });
            _hide(o[_.next]);
            _fadeIn(o[_.next], 400);
        },
        onend: function (self) {
            self.remove(_.jochen);
            self.remove(_.leftwords);
            self.remove(_.next);
        }
    },
    /*
    {
    // Birnen manuell sortieren
    onstart: function (self) {
        let o = self.objects;

        //Position Jochen anpassen.
        o.img.dom.style.left = 0;

        // self.objects.topWords.dom.style.top = 500;
        // self.objects.topWords.dom.style.left = 500;
        // self.objects.topWords.dom.style.transform = "scale(0.5)";

        //Words Top
        _.rightWords = "rightWords";
        self.add({
            id: _.rightWords, type: "TextBox", text_id: "01_birnenlegen",
            x: 500, y: 10, width: 300, height: 500, align: "center"
        });

        //Birnen hinzufügen
        let x = 50;
        let y = 150;
        let abs = 60;
        let b0 = {x: 5, y: 2, expected: true};
        let b1 = {x: 9, y: 4, expected: true};
        let b2 = {x: 3, y: 5, expected: false};
        let b3 = {x: 5, y: 5, expected: false};

        _.birnen = [b0, b1, b2, b3];
        _.birnen.forEach((birne, i) => {
            self.add({
                id: "birne" + i, type: "Button", x: x, y: y + i * abs,
                onclick: function () {
                    publish("change/0", [birne.x, birne.expected]);
                    publish("update/1", [birne.y, birne.expected]);
                }
            });
            self.objects["birne" + i].setText2("x:" + birne.x + " y:" + birne.y);
            self.add({
                id: "birneExp"+i, type: "ImageBox",
                x: x-65, y: y+i*abs,
                width: 50, height: 50,
                src:"assets/Jochen/frowny.PNG",
            })
            _hide(self.objects["birneExp"+i])
            listen(_.misc, "newOutput", (network) => {
                //Prüfe ob der Output NICHT übereinstimmt und dann
                //ob der Input zu dem Frowny gehört.
                // noinspection EqualityComparisonWithCoercionJS
                if ((network.getFirstOutput() != birne.expected)
                    && (network.input[0] === birne.x)
                    && (network.input[1] === birne.y)){
                    _show(self.objects["birneExp"+i]);
                }
            });
        });

        // Perceptron
        self.add({
            id: "perceptron", type: "Perceptron", x: 300, y: 0,
            size: [2, 1],
            activationFun: Activations.RELU,
            activationFunOutput: Activations.STEP,
            params:{"0":0, "1":0, "2":1, "0-2":1, "1-2":-1}
        });

        // Image
        let x1 = 500;
        let y1 = 300;
        self.add({
            id: "outputSell", type: "ImageBox",
            src: "assets/Jochen/dollar.PNG",
            x: x1, y: y1, width: 50, height: 50,
        });
        _hide(self.objects.outputSell);
        self.add({
            id: "outputSellNo", type: "ImageBox",
            src: "assets/Jochen/dollarNo.PNG",
            x: x1, y: y1, width: 50, height: 50,
        });
        _hide(self.objects.outputSellNo);
        listen(_.misc, "newOutput", (network, expected) => {
            if (network.getFirstOutput() === 1) {
                _hide(self.objects.outputSellNo);
                _show(self.objects.outputSell, 0);
            } else {
                _hide(self.objects.outputSell);
                _show(self.objects.outputSellNo, 0);
            }
        });


        // Buttons
        self.add({
            id: "btnNext", type: "Button", x: 275, y: 463, text_id: "01_button_next", uppercase: true,
            onclick: function () {
                publish("slideshow/next");
            }
        });
    },
    onend: function (self) {
        self.remove("topWords");
        _.birnen.forEach((b, i) => {
            self.remove("birne" + i);
            self.remove("birneExp" + i);
        });
        self.remove("btnNext");
        self.remove("outputSell");
        self.remove("outputSellNo");
        self.remove("perceptron");
        unlisten(_.misc);
        _.clear();
    }
}
*/
);