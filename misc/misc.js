
const container = document.getElementById('misc-container');
const miscItems = inventory.filter(item => item.type === 'misc');

// Function to check how many items already occupy a space
function getOverlapCount(rect) {
    const existing = document.querySelectorAll('.misc-item');
    let count = 0;
    
    existing.forEach(other => {
        const otherRect = other.getBoundingClientRect();
        // Check if rectangles overlap
        const overlap = !(rect.right < otherRect.left || 
                          rect.left > otherRect.right || 
                          rect.bottom < otherRect.top || 
                          rect.top > otherRect.bottom);
        if (overlap) count++;
    });
    return count;
}

function spawnItem(itemData) {
    const img = document.createElement('img');
    img.src = itemData.frontImg;
    img.className = 'misc-item';
    
    const size = Math.random() * 100 + 200; // Adjusted size for better fitting
    img.style.width = `${size}px`;

    let x, y, rect;
    let attempts = 0;
    const maxAttempts = 50; // Prevent infinite loops if screen is full

    // Try to find a spot where it overlaps 1 or 0 items
    do {
        x = Math.random() * (window.innerWidth - size);
        y = Math.random() * (window.innerHeight - size);
        
        // Temporary rect for calculation
        rect = {
            left: x,
            top: y,
            right: x + size,
            bottom: y + size
        };
        attempts++;
    } while (getOverlapCount(rect) >= 2 && attempts < maxAttempts);

    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
    
    // Give each item a random animation delay so they move independently
    img.style.animationDelay = `${Math.random() * -4}s`;
    // Randomize animation duration slightly for "organic" feel
    img.style.animationDuration = `${3 + Math.random() * 2}s`;

    container.appendChild(img);
}

function initializeMisc() {
    const totalItems = miscItems.length;
    const instantCount = Math.floor(totalItems * 0.8);
    const delayedItems = miscItems.slice(instantCount);

    for (let i = 0; i < instantCount; i++) {
        spawnItem(miscItems[i]);
    }

    delayedItems.forEach((item) => {
        const randomDelay = Math.random() * 5000; // Faster spawn for testing
        setTimeout(() => spawnItem(item), randomDelay);
    });
}

document.addEventListener('DOMContentLoaded', initializeMisc);

