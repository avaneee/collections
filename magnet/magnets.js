function renderPile() {
    const canvas = document.getElementById('canvas');
    
    // Only get magnets from data.js inventory
    const magnets = inventory.filter(item => item.type === 'magnet');

    magnets.forEach(item => {
        const card = document.createElement('div');
        card.className = 'magnet';
        
        // 1. Initial Random Position (The Pile)
        const randomX = Math.random() * (window.innerWidth - 300);
        const randomY = Math.random() * (window.innerHeight - 200);
        const randomRot = (Math.random() - 0.5) * 40; 
        
        card.style.left = `${randomX}px`;
        card.style.top = `${randomY}px`;
        card.style.transform = `rotate(${randomRot}deg)`;

        // 2. Dragging Logic
        makeDraggable(card);

        canvas.appendChild(card);
    });
}


function makeDraggable(el) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    el.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e.preventDefault();
        // Bring to front on click
        el.style.zIndex = Number(Date.now()).toString().slice(-5);
        
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        
        el.style.top = (el.offsetTop - pos2) + "px";
        el.style.left = (el.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

document.addEventListener('DOMContentLoaded', renderPile);
