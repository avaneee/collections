// specifically all the stuff that's showing up on the homepage
// all items assigned either postcard, magnet, misc

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

];

// from small sites homepage

// function rotateLinks() {
// 	let allSpans = document.querySelectorAll('span');
// 	allSpans.forEach((element) => {
// 		let randomDeg = Math.random() * 20;
// 		element.style.transform = `rotate(${randomDeg}deg)`;
// 	});
// }
// setInterval(rotateLinks, 500);

// new js
const canvas = document.getElementById('main-canvas');
const exploreBtn = document.getElementById('explore-btn');
const navOverlay = document.getElementById('nav-overlay');
const navLinksContainer = document.querySelector('.nav-links');

let itemElements = [];

function init() {
    const shuffled = [...inventory].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 15);

    selected.forEach((item, index) => {
        const img = document.createElement('img');
        img.src = item.frontImg;
        img.className = 'home-item';
        
        // 1. Initial Random Scatter (Safe Bounds)
        const randX = Math.random() * (window.innerWidth - 220);
        const randY = Math.random() * (window.innerHeight - 220);
        const randRot = (Math.random() - 0.5) * 40;

        img.style.transform = `translate(${randX}px, ${randY}px) rotate(${randRot}deg)`;
        
        // 2. Calculate Grid Position (3 rows of 5)
        const col = index % 5; // 0, 1, 2, 3, 4
        const row = Math.floor(index / 5); // 0, 1, 2
        
        const gridSpacingX = window.innerWidth / 6;
        const gridSpacingY = 120;
        const gridX = (col + 1) * gridSpacingX - 100; // Center the 200px image
        const gridY = (window.innerHeight * 0.65) + (row * gridSpacingY);

        // Store these for the hover state
        img.dataset.scatter = `translate(${randX}px, ${randY}px) rotate(${randRot}deg)`;
        img.dataset.grid = `translate(${gridX}px, ${gridY}px) rotate(0deg)`;

        canvas.appendChild(img);
        itemElements.push(img);

        // Trigger grid on hover
        img.addEventListener('mouseenter', () => {
            canvas.classList.add('hover-active');
            itemElements.forEach(el => el.style.transform = el.dataset.grid);
        });
    });
}

// Explore Click Logic
exploreBtn.addEventListener('click', () => {
    const types = ['postcard', 'magnet', 'misc'];
    const finalThree = types.map(type => 
        inventory.find(item => item.type === type)
    );

    navLinksContainer.innerHTML = finalThree.map(item => `
        <a href="${item.type}/index.html" class="nav-item">
            <img src="${item.frontImg}">
            <h2 style="font-family: monospace; margin-top: 15px;">${item.type}s</h2>
        </a>
    `).join('');

    canvas.style.opacity = '0';
    document.getElementById('hero-text').style.opacity = '0';
    
    setTimeout(() => {
        canvas.classList.add('hidden');
        navOverlay.classList.add('visible');
    }, 500);
});

init();