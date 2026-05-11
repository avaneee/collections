let magnetIndex = 0;
let currentMagnet = null;

function renderNext() {
    const tray = document.getElementById('tray');
    tray.innerHTML = '';

    const magnets = inventory.filter(item => item.type === 'magnet');
    if (magnetIndex >= magnets.length) {
        tray.innerHTML = '<p style="font-family: typewriter; color: #5d362c; text-align:center;">all done!</p>';
        return;
    }

    const item = magnets[magnetIndex];
    const card = document.createElement('img');
    card.className = 'magnet';
    card.src = item.frontImg;
    makeDraggable(card);
    tray.appendChild(card);
    currentMagnet = card;
}

function makeDraggable(el) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    el.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e.preventDefault();

        // hide tray while dragging
        document.getElementById('tray-container').style.opacity = '0';
        document.getElementById('tray-container').style.pointerEvents = 'none';

        if (el.parentElement.id === 'tray') {
            const rect = el.getBoundingClientRect();
            el.style.left = rect.left + "px";
            el.style.top = rect.top + "px";
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

        // show tray again
        document.getElementById('tray-container').style.opacity = '1';
        document.getElementById('tray-container').style.pointerEvents = 'auto';

        const trayContainer = document.getElementById('tray-container');
        const trayRect = trayContainer.getBoundingClientRect();
        const elRect = el.getBoundingClientRect();

        const droppedOnFridge =
            elRect.right < trayRect.left ||
            elRect.left > trayRect.right ||
            elRect.bottom < trayRect.top ||
            elRect.top > trayRect.bottom;

        if (droppedOnFridge) {
            magnetIndex++;
            renderNext();
        }
    }
}

document.addEventListener('DOMContentLoaded', renderNext);