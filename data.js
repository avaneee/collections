// all items assigned either postcard, magnet, misc

let inventory = [

        // all postcards

    { 
        name: "amalfi souvenir", 
        type: "postcard", 
        frontImg: "../assets/postcardpics/post_amalfi1.webp", 
        backImg: "../assets/postcardpics/post_amalfi2.webp", 
        date: "2022",
        loc: "amalfi coast, italy"
    },

    { 
        name: "xeroxed #3", 
        type: "postcard", 
        frontImg: "../assets/postcardpics/post_artgal1.webp", 
        backImg: "../assets/postcardpics/post_artgal2.webp", 
        date: "23 october 2025",
        loc: "providence, ri, usa"
    },

    { 
        name: "gbc", 
        type: "postcard", 
        frontImg: "../assets/postcardpics/post_gbc2.webp", 
        backImg: "../assets/postcardpics/post_gbc1.webp", 
        date: "17 april 2026",
        loc: "the globe, providence, ri, usa"
    },

    { 
        name: "xeroxed #1", 
        type: "postcard", 
        frontImg: "../assets/postcardpics/post_web1.webp", 
        backImg: "../assets/postcardpics/post_web2.webp", 
        date: "23 october 2025",
        loc: "list art building, providence, ri, usa"
    },

    { 
        name: "xeroxed #2", 
        type: "postcard", 
        frontImg: "../assets/postcardpics/post_vivoli1.webp", 
        backImg: "../assets/postcardpics/post_vivoli2.webp", 
        date: "22 october 2025",
        loc: "list art building, providence, ri, usa"
    },
    { 
        name: "vienna waited", 
        type: "postcard", 
        frontImg: "../assets/postcardpics/post_vienna2.webp", 
        backImg: "../assets/postcardpics/post_vienna1.webp", 
        date: "6 july 2025",
        loc: "vienna, austria"
    },
    { 
        name: "us open", 
        type: "postcard", 
        frontImg: "../assets/postcardpics/post_usopen2.webp", 
        backImg: "../assets/postcardpics/post_usopen1.webp", 
        date: "7 september 2025",
        loc: "flushing, ny, usa"
    },
    { 
        name: "from an art exhibition", 
        type: "postcard", 
        frontImg: "../assets/postcardpics/post_tika2.webp", 
        backImg: "../assets/postcardpics/post_tika1.webp", 
        date: "june 2025",
        loc: "bangalore, india"
    },
    { 
        name: "lenticular #1", 
        type: "postcard", 
        frontImg: "../assets/postcardpics/post_teatro1.webp", 
        backImg: "../assets/postcardpics/post_teatro2.webp", 
        date: "june 2023",
        loc: "pompeii, italy"
    },
    { 
        name: "xeroxed #4", 
        type: "postcard", 
        frontImg: "../assets/postcardpics/post_stamped1.webp", 
        backImg: "../assets/postcardpics/post_stamped2.webp", 
        date: "22 october 2025",
        loc: "list art building, providence, ri, usa"
    },
    { 
        name: "xeroxed #5", 
        type: "postcard", 
        frontImg: "../assets/postcardpics/post_spot1.webp", 
        backImg: "../assets/postcardpics/post_spot2.webp", 
        date: "22 october 2025",
        loc: "list art building, providence, ri, usa"
    },
    { 
        name: "xeroxed #6", 
        type: "postcard", 
        frontImg: "../assets/postcardpics/post_showstart2.webp", 
        backImg: "../assets/postcardpics/post_showstart1.webp", 
        date: "17 october 2025",
        loc: "list art building, providence, ri, usa"
    },
    { 
        name: "xeroxed #7", 
        type: "postcard", 
        frontImg: "../assets/postcardpics/post_showdone2.webp", 
        backImg: "../assets/postcardpics/post_showdone1.webp", 
        date: "23 october 2025",
        loc: "list art building, providence, ri, usa"
    },
    // { 
    //     name: "visa on arrival", 
    //     type: "postcard", 
    //     frontImg: "../assets/postcardpics/post_show2.webp", 
    //     backImg: "../assets/postcardpics/post_show1.webp", 
    //     date: "17 april 2026",
    //     loc: "list art building, providence, ri, usa"
    // },
    { 
        name: "found at a thrift store", 
        type: "postcard", 
        frontImg: "../assets/postcardpics/post_sea1.webp", 
        backImg: "../assets/postcardpics/post_sea2.webp", 
        date: "unknown",
        loc: "long island, ny, usa"
    },
    { 
        name: "xeroxed #8", 
        type: "postcard", 
        frontImg: "../assets/postcardpics/post_sari2.webp", 
        backImg: "../assets/postcardpics/post_sari1.webp", 
        date: "19 october 2025",
        loc: "list art building, providence, ri, usa"
    },
    { 
        name: "xeroxed #9", 
        type: "postcard", 
        frontImg: "../assets/postcardpics/post_sarah2.webp", 
        backImg: "../assets/postcardpics/post_sarah1.webp", 
        date: "18 october 2025",
        loc: "list art building, providence, ri, usa"
    },
    { 
        name: "ponte vecchio", 
        type: "postcard", 
        frontImg: "../assets/postcardpics/post_ponte1.webp", 
        backImg: "../assets/postcardpics/post_ponte2.webp", 
        date: "21 july 2025",
        loc: "florence, italy"
    },
    { 
        name: "xeroxed #10", 
        type: "postcard", 
        frontImg: "../assets/postcardpics/post_parth2.webp", 
        backImg: "../assets/postcardpics/post_parth1.webp", 
        date: "21 october 2025",
        loc: "list art building, providence, ri, usa"
    },
    { 
        name: "leela driving in france", 
        type: "postcard", 
        frontImg: "../assets/postcardpics/post_paris2.webp", 
        backImg: "../assets/postcardpics/post_paris1.webp", 
        date: "june 2025 & october 2025",
        loc: "paris, france"
    },
    { 
        name: "from the nicobar office", 
        type: "postcard", 
        frontImg: "../assets/postcardpics/post_nico1.webp", 
        backImg: "../assets/postcardpics/post_nico2.webp", 
        date: "summer 2023",
        loc: "new delhi, india"
    },
    { 
        name: "got this at museo camera", 
        type: "postcard", 
        frontImg: "../assets/postcardpics/post_museo2.webp", 
        backImg: "../assets/postcardpics/post_museo1.webp", 
        date: "summer 2023 & october 2025",
        loc: "new delhi, india"
    },
    { 
        name: "fresco", 
        type: "postcard", 
        frontImg: "../assets/postcardpics/post_moon2.webp", 
        backImg: "../assets/postcardpics/post_moon1.webp", 
        date: "summer 2023",
        loc: "pompeii, italy"
    },
    { 
        name: "mass moca field trip", 
        type: "postcard", 
        frontImg: "../assets/postcardpics/post_moca2.webp", 
        backImg: "../assets/postcardpics/post_moca1.webp", 
        date: "10 october 2025",
        loc: "north adams, ma, usa"
    },
    { 
        name: "milan hate", 
        type: "postcard", 
        frontImg: "../assets/postcardpics/post_milan2.webp", 
        backImg: "../assets/postcardpics/post_milan1.webp", 
        date: "20 july 2025",
        loc: "milan, italy"
    },
    { 
        name: "xeroxed #11", 
        type: "postcard", 
        frontImg: "../assets/postcardpics/post_mikko2.webp", 
        backImg: "../assets/postcardpics/post_mikko1.webp", 
        date: "20 october 2025",
        loc: "list art building, providence, ri, usa"
    },
    { 
        name: "xeroxed #12", 
        type: "postcard", 
        frontImg: "../assets/postcardpics/post_mems2.webp", 
        backImg: "../assets/postcardpics/post_mems1.webp", 
        date: "21 october 2025",
        loc: "list art building, providence, ri, usa"
    },
    { 
        name: "xeroxed #13", 
        type: "postcard", 
        frontImg: "../assets/postcardpics/post_mel2.webp", 
        backImg: "../assets/postcardpics/post_mel1.webp", 
        date: "17 october 2025",
        loc: "list art building, providence, ri, usa"
    },
    { 
        name: "xeroxed #14", 
        type: "postcard", 
        frontImg: "../assets/postcardpics/post_maroon1.webp", 
        backImg: "../assets/postcardpics/post_maroon2.webp", 
        date: "21 october 2025",
        loc: "list art building, providence, ri, usa"
    },
    { 
        name: "xeroxed #15", 
        type: "postcard", 
        frontImg: "../assets/postcardpics/post_map1.webp", 
        backImg: "../assets/postcardpics/post_map2.webp", 
        date: "17 october 2025",
        loc: "list art building, providence, ri, usa"
    },
    { 
        name: "xeroxed #16", 
        type: "postcard", 
        frontImg: "../assets/postcardpics/post_luca1.webp", 
        backImg: "../assets/postcardpics/post_luca2.webp", 
        date: "21 october 2025",
        loc: "list art building, providence, ri, usa"
    },
    { 
        name: "day in castiglioncello", 
        type: "postcard", 
        frontImg: "../assets/postcardpics/post_livorno2.webp", 
        backImg: "../assets/postcardpics/post_livorno1.webp", 
        date: "18 july 2025",
        loc: "livorno, italy"
    },
    { 
        name: "xeroxed #17", 
        type: "postcard", 
        frontImg: "../assets/postcardpics/post_lilly2.webp", 
        backImg: "../assets/postcardpics/post_lilly1.webp", 
        date: "20 october 2025",
        loc: "list art building, providence, ri, usa"
    },
    { 
        name: "sent by lili", 
        type: "postcard", 
        frontImg: "../assets/postcardpics/post_lili2.webp", 
        backImg: "../assets/postcardpics/post_lili1.webp", 
        date: "26 july 2025",
        loc: "florence, italy"
    },
    { 
        name: "lenticular #2", 
        type: "postcard", 
        frontImg: "../assets/postcardpics/post_jupiter2.webp", 
        backImg: "../assets/postcardpics/post_jupiter1.webp", 
        date: "summer 2023",
        loc: "pompeii, italy"
    },
    { 
        name: "xeroxed #18", 
        type: "postcard", 
        frontImg: "../assets/postcardpics/post_idk2.webp", 
        backImg: "../assets/postcardpics/post_idk1.webp", 
        date: "21 october 2025",
        loc: "list art building, providence, ri, usa"
    },
    { 
        name: "xeroxed #19", 
        type: "postcard", 
        frontImg: "../assets/postcardpics/post_grey2.webp", 
        backImg: "../assets/postcardpics/post_grey1.webp", 
        date: "22 october 2025",
        loc: "list art building, providence, ri, usa"
    },
    { 
        name: "architecture", 
        type: "postcard", 
        frontImg: "../assets/postcardpics/post_greek1.webp", 
        backImg: "../assets/postcardpics/post_greek2.webp", 
        date: "summer 2023",
        loc: "pompeii, italy"
    },
    { 
        name: "lago di garda", 
        type: "postcard", 
        frontImg: "../assets/postcardpics/post_garda2.webp", 
        backImg: "../assets/postcardpics/post_garda1.webp", 
        date: "13 july 2025",
        loc: "lake garda, italy"
    },
    { 
        name: "lenticular #3", 
        type: "postcard", 
        frontImg: "../assets/postcardpics/post_forum2.webp", 
        backImg: "../assets/postcardpics/post_forum1.webp", 
        date: "summer 2023",
        loc: "pompeii, italy"
    },
    { 
        name: "xeroxed #20", 
        type: "postcard", 
        frontImg: "../assets/postcardpics/post_flor1.webp", 
        backImg: "../assets/postcardpics/post_flor2.webp", 
        date: "5 april 2026",
        loc: "21 euclid, providence, ri, usa"
    },
    { 
        name: "from via torta 10", 
        type: "postcard", 
        frontImg: "../assets/postcardpics/post_firenze2.webp", 
        backImg: "../assets/postcardpics/post_firenze1.webp", 
        date: "24 july 2025",
        loc: "florence, italy"
    },
    { 
        name: "xeroxed #21", 
        type: "postcard", 
        frontImg: "../assets/postcardpics/post_euclid2.webp", 
        backImg: "../assets/postcardpics/post_euclid1.webp", 
        date: "20 october 2025",
        loc: "list art building, providence, ri, usa"
    },
    { 
        name: "xeroxed #22", 
        type: "postcard", 
        frontImg: "../assets/postcardpics/post_earth2.webp", 
        backImg: "../assets/postcardpics/post_earth1.webp", 
        date: "21 october 2025",
        loc: "list art building, providence, ri, usa"
    },
    { 
        name: "xeroxed #23", 
        type: "postcard", 
        frontImg: "../assets/postcardpics/post_del1.webp", 
        backImg: "../assets/postcardpics/post_del2.webp", 
        date: "21 october 2025",
        loc: "list art building, providence, ri, usa"
    },
    { 
        name: "domes", 
        type: "postcard", 
        frontImg: "../assets/postcardpics/post_domes2.webp", 
        backImg: "../assets/postcardpics/post_domes1.webp", 
        date: "15 september 2025",
        loc: "providence, ri, usa"
    },
    { 
        name: "xeroxed #24", 
        type: "postcard", 
        frontImg: "../assets/postcardpics/post_cheers2.webp", 
        backImg: "../assets/postcardpics/post_cheers1.webp", 
        date: "21 october 2025",
        loc: "list art building, providence, ri, usa"
    },
    { 
        name: "cet", 
        type: "postcard", 
        frontImg: "../assets/postcardpics/post_cet2.webp", 
        backImg: "../assets/postcardpics/post_cet1.webp", 
        date: "24 july 2025",
        loc: "florence, italy"
    },
    { 
        name: "xeroxed #25", 
        type: "postcard", 
        frontImg: "../assets/postcardpics/post_brown1.webp", 
        backImg: "../assets/postcardpics/post_brown2.webp", 
        date: "22 october 2025",
        loc: "list art building, providence, ri, usa"
    },

        // all magnets

    { 
        name: "india gate", 
        type: "magnet", 
        frontImg: "../assets/magnetpics/magnet1.webp",
        date: "2026",
        loc: "new delhi, india" 
    },
    { 
        name: "france", 
        type: "magnet", 
        frontImg: "../assets/magnetpics/magnet2.webp",
        date: "june 2025",
        loc: "paris, france" 
    },
    { 
        name: "castiglioncello", 
        type: "magnet", 
        frontImg: "../assets/magnetpics/magnet3.webp",
        date: "18 july 2025",
        loc: "castiglioncello, italy" 
    },
    { 
        name: "palmenhaus", 
        type: "magnet", 
        frontImg: "../assets/magnetpics/magnet4.webp",
        date: "5 july 2025",
        loc: "vienna, austria" 
    },
    { 
        name: "munich", 
        type: "magnet", 
        frontImg: "../assets/magnetpics/magnet5.webp",
        date: "summer 2024",
        loc: "munich, germany" 
    },
    { 
        name: "glacier 3000", 
        type: "magnet", 
        frontImg: "../assets/magnetpics/magnet6.webp",
        date: "28 june 2025",
        loc: "gstaad, switzerland" 
    },
    { 
        name: "swiss", 
        type: "magnet", 
        frontImg: "../assets/magnetpics/magnet7.webp",
        date: "28 june 2025",
        loc: "gstaad, switzerland" 
    },
    { 
        name: "paris bill", 
        type: "magnet", 
        frontImg: "../assets/magnetpics/magnet9.webp",
        date: "unknown",
        loc: "paris, france" 
    },
    { 
        name: "red fort", 
        type: "magnet", 
        frontImg: "../assets/magnetpics/magnet10.webp",
        date: "winter 2025",
        loc: "new delhi, india" 
    },
    { 
        name: "iit", 
        type: "magnet", 
        frontImg: "../assets/magnetpics/magnet11.webp",
        date: "unknown",
        loc: "new delhi, india" 
    },
    { 
        name: "andaman", 
        type: "magnet", 
        frontImg: "../assets/magnetpics/magnet12.webp",
        date: "12 january 2026",
        loc: "andaman and nicobar islands, india" 
    },
    { 
        name: "elephant", 
        type: "magnet", 
        frontImg: "../assets/magnetpics/magnet13.webp",
        date: "winter 2025",
        loc: "new delhi, india" 
    },
    { 
        name: "barcelona", 
        type: "magnet", 
        frontImg: "../assets/magnetpics/magnet14.webp",
        date: "24 june 2024",
        loc: "barcelona, spain" 
    },
    { 
        name: "ucl bayern", 
        type: "magnet", 
        frontImg: "../assets/magnetpics/magnet15.webp",
        date: "summer 2024",
        loc: "munich, germany" 
    },
    { 
        name: "garda", 
        type: "magnet", 
        frontImg: "../assets/magnetpics/magnet16.webp",
        date: "12 july 2025",
        loc: "peschiera del garda, italy" 
    },
    { 
        name: "boar", 
        type: "magnet", 
        frontImg: "../assets/magnetpics/magnet17.webp",
        date: "25 july 2026",
        loc: "florence, italy" 
    },
    { 
        name: "marble duomo", 
        type: "magnet", 
        frontImg: "../assets/magnetpics/magnet18.webp",
        date: "24 july 2026",
        loc: "florence, italy" 
    },
    { 
        name: "prater", 
        type: "magnet", 
        frontImg: "../assets/magnetpics/magnet19.webp",
        date: "4 july 2025",
        loc: "vienna, austria" 
    },
    { 
        name: "navigli", 
        type: "magnet", 
        frontImg: "../assets/magnetpics/magnet20.webp",
        date: "11 july 2026",
        loc: "milan, italy" 
    },
    { 
        name: "in pain", 
        type: "magnet", 
        frontImg: "../assets/magnetpics/magnet21.webp",
        date: "21 june 2025",
        loc: "paris, france" 
    },
    { 
        name: "kimono lady", 
        type: "magnet", 
        frontImg: "../assets/magnetpics/magnet22.webp",
        date: "unknown",
        loc: "unknown" 
    },
    { 
        name: "romeo and juliet", 
        type: "magnet", 
        frontImg: "../assets/magnetpics/magnet23.webp",
        date: "13 july 2025",
        loc: "verona, italy" 
    },
    { 
        name: "medici", 
        type: "magnet", 
        frontImg: "../assets/magnetpics/magnet24.webp",
        date: "22 july 2025",
        loc: "florence, italy" 
    },
    { 
        name: "guppy by ai", 
        type: "magnet", 
        frontImg: "../assets/magnetpics/magnet25.webp",
        date: "unknown",
        loc: "new delhi, india" 
    },
    { 
        name: "chumbak", 
        type: "magnet", 
        frontImg: "../assets/magnetpics/magnet26.webp",
        date: "unknown birthday",
        loc: "new delhi, india" 
    },
    { 
        name: "taxi", 
        type: "magnet", 
        frontImg: "../assets/magnetpics/magnet27.webp",
        date: "27 november 2024",
        loc: "new york city, usa" 
    },
    // add from euclid
    { 
        name: "zion", 
        type: "magnet", 
        frontImg: "../assets/magnetpics/magnet.webp",
        date: "unknown",
        loc: "zion national park, ut, usa" 
    },


        // all misc scraps

    { 
        name: "receipt", 
        type: "misc", 
        frontImg: "../assets/miscpics/scrap6.webp",
        date: "july 2025",
        loc: "vienna, austria" 
    },
    { 
        name: "metro pass", 
        type: "misc", 
        frontImg: "../assets/miscpics/scrap7.webp",
        date: "june 2025",
        loc: "thomery, france" 
    },
    { 
        name: "museum ticket", 
        type: "misc", 
        frontImg: "../assets/miscpics/scrap8.webp",
        date: "june 2025",
        loc: "paris, france" 
    },
    { 
        name: "souvenir bag", 
        type: "misc", 
        frontImg: "../assets/miscpics/scrap9.webp",
        date: "july 2025",
        loc: "florence, italy" 
    },
    { 
        name: "receipt", 
        type: "misc", 
        frontImg: "../assets/miscpics/scrap10.webp",
        date: "july 2025",
        loc: "vienna, austria" 
    },
    { 
        name: "stamps", 
        type: "misc", 
        frontImg: "../assets/miscpics/scrap11.webp",
        date: "july 2025",
        loc: "florence, italy" 
    },
    { 
        name: "gym membership", 
        type: "misc", 
        frontImg: "../assets/miscpics/scrap13.webp",
        date: "june 2025",
        loc: "florence, italy" 
    },

    { 
        name: "greenhouse ticket", 
        type: "misc", 
        frontImg: "../assets/miscpics/scrap14.webp",
        date: "july 2025",
        loc: "vienna, austria" 
    },

    { 
        name: "metro pass", 
        type: "misc", 
        frontImg: "../assets/miscpics/scrap18.webp",
        date: "june 2025",
        loc: "thomery, france" 
    },
    { 
        name: "receipt", 
        type: "misc", 
        frontImg: "../assets/miscpics/scrap26.webp",
        date: "july 2025",
        loc: "florence, italy" 
    },
    { 
        name: "mini espresso cup", 
        type: "misc", 
        frontImg: "../assets/miscpics/scrap17.webp",
        date: "july 2025",
        loc: "florence, italy" 
    },
    { 
        name: "perfume bottle", 
        type: "misc", 
        frontImg: "../assets/miscpics/scrap15.webp",
        date: "june 2025",
        loc: "florence, italy" 
    },
    { 
        name: "san lorenzo pamphlet", 
        type: "misc", 
        frontImg: "../assets/miscpics/scrap20.webp",
        date: "july 2025",
        loc: "florence, italy" 
    },
    { 
        name: "photo booth at jo&joe", 
        type: "misc", 
        frontImg: "../assets/miscpics/scrap24.webp",
        date: "july 2025",
        loc: "vienna, austria" 
    },
    { 
        name: "san lorenzo pamphlet", 
        type: "misc", 
        frontImg: "../assets/miscpics/scrap20.webp",
        date: "july 2025",
        loc: "florence, italy" 
    },
    { 
        name: "train ticket", 
        type: "misc", 
        frontImg: "../assets/miscpics/scrap27.webp",
        date: "july 2025",
        loc: "vienna, austria" 
    },
    { 
        name: "fotoautomatica pics", 
        type: "misc", 
        frontImg: "../assets/miscpics/scrap28.webp",
        date: "june 2025",
        loc: "florence, italy" 
    },
    { 
        name: "gym membership", 
        type: "misc", 
        frontImg: "../assets/miscpics/scrap29.webp",
        date: "june 2025",
        loc: "florence, italy" 
    },
    { 
        name: "museum ticket", 
        type: "misc", 
        frontImg: "../assets/miscpics/scrap30.webp",
        date: "july 2025",
        loc: "florence, italy" 
    },
    { 
        name: "trenitalia ticket", 
        type: "misc", 
        frontImg: "../assets/miscpics/scrap31.webp",
        date: "july 2025",
        loc: "florence, italy" 
    },
    { 
        name: "san lorenzo pamphlet", 
        type: "misc", 
        frontImg: "../assets/miscpics/scrap32.webp",
        date: "july 2025",
        loc: "florence, italy" 
    },
    { 
        name: "souvenir store packet", 
        type: "misc", 
        frontImg: "../assets/miscpics/scrap33.webp",
        date: "july 2025",
        loc: "florence, italy" 
    },
    { 
        name: "fotoautomatica pics", 
        type: "misc", 
        frontImg: "../assets/miscpics/scrap34.webp",
        date: "june 2025",
        loc: "florence, italy" 
    },
    { 
        name: "museum ticket", 
        type: "misc", 
        frontImg: "../assets/miscpics/scrap35.webp",
        date: "july 2025",
        loc: "florence, italy" 
    },
    { 
        name: "restaurant business card", 
        type: "misc", 
        frontImg: "../assets/miscpics/scrap36.webp",
        date: "july 2025",
        loc: "florence, italy" 
    },
    { 
        name: "ticket", 
        type: "misc", 
        frontImg: "../assets/miscpics/scrap38.webp",
        date: "july 2025",
        loc: "vienna, austria" 
    },
    { 
        name: "museum ticket", 
        type: "misc", 
        frontImg: "../assets/miscpics/scrap39.webp",
        date: "july 2025",
        loc: "florence, italy" 
    },
];