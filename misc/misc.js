
const container = document.getElementById('misc-container');

// 1. Filter for 'misc' only (though you mentioned all items are misc)
const miscItems = inventory.filter(item => item.type === 'misc');

function spawnItem(itemData) {
    const img = document.createElement('img');
    img.src = itemData.frontImg;
    img.className = 'misc-item';
    
    // Random Size, Position
    const size = Math.random() * 100 + 280;
    const x = Math.random() * (window.innerWidth - size);
    const y = Math.random() * (window.innerHeight - size);
    
    img.style.width = `${size}px`;
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
    
    container.appendChild(img);
}

// 2. The "80/20" Spawning Logic
function initializeMisc() {
    const totalItems = miscItems.length;
    const instantCount = Math.floor(totalItems * 0.8);
    const delayedItems = miscItems.slice(instantCount);

    // Spawn 80% immediately
    for (let i = 0; i < instantCount; i++) {
        spawnItem(miscItems[i]);
    }

    // Spawn the rest randomly 
    delayedItems.forEach((item) => {
        const randomDelay = Math.random() * 900; // Average 1.5 mins
        setTimeout(() => spawnItem(item), randomDelay);
    });
}

// Start everything
document.addEventListener('DOMContentLoaded', () => {
    initializeMisc();
    animate();
});