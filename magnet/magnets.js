// with added tray stuff
function renderPile() {
    const tray = document.getElementById('tray');
    const handle = document.getElementById('tray-handle');
    const trayContainer = document.getElementById('tray-container');

    // Toggle Tray Logic
    handle.onclick = () => {
        trayContainer.classList.toggle('open');
        handle.innerText = trayContainer.classList.contains('open') ? "▼ Close" : "▲ Magnets";
    };

    const magnets = inventory.filter(item => item.type === 'magnet');

    magnets.forEach(item => {
        const card = document.createElement('img');
        card.className = 'magnet';
        card.src = item.frontImg;

        makeDraggable(card);
        tray.appendChild(card);
    });
}

function makeDraggable(el) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    el.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e.preventDefault();

        // BRING TO CANVAS: If the magnet is still in the tray, move it to the canvas
        if (el.parentElement.id === 'tray') {
            const rect = el.getBoundingClientRect();
            
            // Set initial position based on where it was in the tray
            el.style.left = rect.left + "px";
            el.style.top = rect.top + "px";
            
            // Move to canvas and change styling
            document.getElementById('canvas').appendChild(el);
            el.classList.add('on-fridge');
        }

        el.style.zIndex = Math.floor(Date.now() / 1000);
        
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