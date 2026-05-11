let inventory = [

        // all postcards

    { 
        name: "mass moca field trip", 
        type: "postcard", 
        frontImg: "assets/postcardpics/post_moca2.webp", 
        backImg: "assets/postcardpics/post_moca1.webp", 
        date: "10 october 2025",
        loc: "north adams, ma, usa"
    },
    { 
        name: "xeroxed #2", 
        type: "postcard", 
        frontImg: "assets/postcardpics/post_vivoli1.webp", 
        backImg: "assets/postcardpics/post_vivoli2.webp", 
        date: "22 october 2025",
        loc: "list art building, providence, ri, usa"
    },
    { 
        name: "vienna waited", 
        type: "postcard", 
        frontImg: "assets/postcardpics/post_vienna2.webp", 
        backImg: "assets/postcardpics/post_vienna1.webp", 
        date: "6 july 2025",
        loc: "vienna, austria"
    },

    { 
        name: "gbc", 
        type: "postcard", 
        frontImg: "assets/postcardpics/post_gbc1.webp", 
        backImg: "assets/postcardpics/post_gbc2.webp", 
        date: "2026",
        loc: "the globe, providence, ri, usa"
    },
    { 
        name: "milan hate", 
        type: "postcard", 
        frontImg: "assets/postcardpics/post_milan2.webp", 
        backImg: "assets/postcardpics/post_milan1.webp", 
        date: "20 july 2025",
        loc: "milan, italy"
    },

        // all magnets

    { 
        name: "la isla surf school", 
        type: "magnet", 
        frontImg: "assets/magnetpics/magnet45.webp",
        date: "18 may 2025",
        loc: "charleston, sc, usa" 
    },
    { 
        name: "luau", 
        type: "magnet", 
        frontImg: "assets/magnetpics/magnet40.webp",
        date: "26 march 2026",
        loc: "honolulu, hi, usa" 
    },
    { 
        name: "water fire", 
        type: "magnet", 
        frontImg: "assets/magnetpics/magnet41.webp",
        date: "4 october 2025",
        loc: "providence, ri, usa" 
    },
    { 
        name: "prater", 
        type: "magnet", 
        frontImg: "assets/magnetpics/magnet19.webp",
        date: "4 july 2025",
        loc: "vienna, austria" 
    },
    

        // all misc scraps
    { 
        name: "fotoautomatica pics", 
        type: "misc", 
        frontImg: "assets/miscpics/scrap28.webp",
        date: "june 2025",
        loc: "florence, italy" 
    },
    { 
        name: "metro pass", 
        type: "misc", 
        frontImg: "assets/miscpics/scrap7.webp",
        date: "",
        loc: "thomery, france" 
    },
    { 
        name: "greenhouse ticket", 
        type: "misc", 
        frontImg: "assets/miscpics/scrap14.webp",
        date: "",
        loc: "vienna, austria" 
    },
    { 
        name: "museum ticket", 
        type: "misc", 
        frontImg: "assets/miscpics/scrap39.webp",
        date: "july 2025",
        loc: "florence, italy" 
    },
// for the nav bar
    { 
    name: "postcards", 
    type: "postcard", 
    frontImg: "assets/postcardpics/post_moca2.webp", 
    backImg: "", 
    date: "",
    loc: "",
    navLink: "postcard/index.html"
},
{ 
    name: "magnets", 
    type: "magnet", 
    frontImg: "assets/magnetpics/magnet3.webp", 
    backImg: "", 
    date: "",
    loc: "",
    navLink: "magnet/index.html"
},
{ 
    name: "misc", 
    type: "misc", 
    frontImg: "assets/miscpics/scrap24.webp", 
    backImg: "", 
    date: "",
    loc: "",
    navLink: "misc/index.html"
},
];

// ── intro sequence 

const INTRO_TEXT = "I like collecting things. So I made a website that can act as a digital archive of everything I've collected <3";

// pick up to 4 random frontImgs from inventory
function pickIntroImages() {
    const shuffled = [...inventory].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 4).map(item => item.frontImg);
}

function runIntro() {
    const overlay    = document.getElementById('introOverlay');
    const textEl     = document.getElementById('introText');
    const continueEl = document.getElementById('introContinue');
    const slots      = [
        document.getElementById('introImg0'),
        document.getElementById('introImg1'),
        document.getElementById('introImg2'),
        document.getElementById('introImg3'),
        // document.getElementById('introImg4'),
        // document.getElementById('introImg5'),
        // document.getElementById('introImg6'),
    ];

    // populate image slots
    const imgs = pickIntroImages();
    slots.forEach((slot, i) => {
        if (imgs[i]) {
            const img = document.createElement('img');
            img.src = imgs[i];
            img.alt = '';
            slot.appendChild(img);
        }
    });

    // decide at which character indices to reveal each image
    const len = INTRO_TEXT.length;
    const triggers = [
        Math.floor(len * 0.1),
        Math.floor(len * 0.3),
        Math.floor(len * 0.65),
        Math.floor(len * 0.95),
    ];

    let charIndex = 0;

    function typeNext() {
        charIndex++;
        const displayed = INTRO_TEXT.slice(0, charIndex);
        textEl.innerHTML = displayed + '<span class="intro-cursor"></span>';

        // reveal images at trigger points
        triggers.forEach((t, i) => {
            if (charIndex === t) slots[i].classList.add('visible');
        });

        if (charIndex < INTRO_TEXT.length) {
            setTimeout(typeNext, 40 + Math.random() * 20);
        } else {
            // typing done — remove cursor, show continue button
            textEl.innerHTML = INTRO_TEXT;
            setTimeout(() => continueEl.classList.add('visible'), 400);
        }
    }

    // small delay before typing starts
    setTimeout(typeNext, 500);

    // continue button dismisses the overlay
    continueEl.addEventListener('click', (e) => {
        e.preventDefault();
        overlay.classList.add('hidden');
        // fully remove from DOM after fade so it doesn't block interaction
        overlay.addEventListener('transitionend', () => overlay.remove(), { once: true });
    });
}

runIntro();

// ── rack nav items ──────────────────────────────────────────────

const NAV_ITEMS = [
    { 
        name: "castiglioncello", 
        label: "magnets", 
        frontImg: "assets/magnetpics/magnet3.webp", 
        href: "magnet/index.html"
    },
    { 
        name: "mass moca field trip", 
        label: "postcards", 
        frontImg: "assets/postcardpics/post_moca2.webp", 
        href: "postcard/index.html"
    },
    { 
        name: "joenjoe", 
        label: "misc", 
        frontImg: "assets/miscpics/scrap24.webp", 
        href: "misc/index.html"
    },
];

function buildRackNav() {
    // left side gets first item, right side gets last two
    const left  = document.getElementById('rackNavLeft');
    const right = document.getElementById('rackNavRight');

    function makeCard(item) {
        const a = document.createElement('a');
        a.href = item.href;
        a.className = 'rack-nav-card';

        const img = document.createElement('img');
        img.src = item.frontImg;
        img.alt = item.label;

        const label = document.createElement('p');
        label.textContent = item.label;

        a.appendChild(img);
        a.appendChild(label);
        return a;
    }

    left.appendChild(makeCard(NAV_ITEMS[0]));
    right.appendChild(makeCard(NAV_ITEMS[1]));
    right.appendChild(makeCard(NAV_ITEMS[2]));
}

buildRackNav();

// ── scrolling rack 

const frames    = document.querySelectorAll('.rack-frame');
const container = document.querySelector('.scroll-container');

window.addEventListener('scroll', () => {
    const rect           = container.getBoundingClientRect();
    const scrollProgress = Math.abs(rect.top) / (rect.height - window.innerHeight);
    const progress       = Math.min(Math.max(scrollProgress, 0), 0.99);
    const frameIndex     = Math.floor(progress * frames.length);

    frames.forEach((img, index) => {
        img.classList.toggle('active', index === frameIndex);
    });
});