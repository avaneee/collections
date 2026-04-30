
const container = document.getElementById('misc-container');
const rotationData = [1,2,3]; // To store current rotation and speed for each element

// 1. Filter for 'misc' only (though you mentioned all items are misc)
const miscItems = inventory.filter(item => item.type === 'misc');

function spawnItem(itemData) {
    const img = document.createElement('img');
    img.src = itemData.frontImg;
    img.className = 'misc-item';
    
    // Random Size, Position, and a tiny "wobble" speed
    const size = Math.random() * 100 + 50;
    const x = Math.random() * (window.innerWidth - size);
    const y = Math.random() * (window.innerHeight - size);
    const speed = (Math.random() - 0.5) * 2; // Slow rotation: -1 to 1 deg per frame
    
    img.style.width = `${size}px`;
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
    
    container.appendChild(img);

    // Track rotation state
    rotationData.push({
        element: img,
        currentRotation: Math.random() * 360,
        speed: speed
    });
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

    // Spawn the rest randomly over 1-2 minutes (60k - 120k ms)
    delayedItems.forEach((item) => {
        const randomDelay = Math.random() * 90000; // Average 1.5 mins
        setTimeout(() => spawnItem(item), randomDelay);
    });
}

// 3. Animation Loop (RequestAnimationFrame is better than setInterval)
function animate() {
    rotationData.forEach(data => {
        data.currentRotation += data.speed;
        data.element.style.transform = `rotate(${data.currentRotation}deg)`;
    });
    requestAnimationFrame(animate);
}

// Start everything
document.addEventListener('DOMContentLoaded', () => {
    initializeMisc();
    animate();
});