// for this i want to have the main links just moving around and stuff probably? some sort of randomising (one postcard, one scrap, one magnet that people can click on)


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

// 1. Pick 15 random items from your data.js inventory
function init() {
    const shuffled = [...inventory].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 15);

    selected.forEach(item => {
        const img = document.createElement('img');
        img.src = item.frontImg;
        img.className = 'home-item';
        
        // Random scatter positions
        const randX = Math.random() * (window.innerWidth - 250);
        const randY = Math.random() * (window.innerHeight - 300);
        const randRot = (Math.random() - 0.5) * 60;

        img.style.left = `${randX}px`;
        img.style.top = `${randY}px`;
        img.style.transform = `rotate(${randRot}deg)`;

        canvas.appendChild(img);
    });
}

// 2. Explore Click Logic
exploreBtn.addEventListener('click', () => {
    // Pick 1 of each type for the final 3
    const types = ['postcard', 'magnet', 'misc'];
    const finalThree = types.map(type => 
        inventory.find(item => item.type === type)
    );

    // Build the 3 links
    navLinksContainer.innerHTML = finalThree.map(item => `
        <a href="${item.type}s/index.html" class="nav-item">
            <img src="${item.frontImg}">
            <h2 style="font-family: monospace; margin-top: 15px;">${item.type}s</h2>
        </a>
    `).join('');

    // Hide everything else and show overlay
    canvas.style.opacity = '0';
    document.getElementById('hero-text').style.opacity = '0';
    
    setTimeout(() => {
        canvas.classList.add('hidden');
        navOverlay.classList.add('visible');
    }, 500);
});

init();