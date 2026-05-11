const TICKET_KEYWORDS = ["ticket", "stub", "pass", "entry", "admission", "boarding", "voucher"];
const RECEIPT_KEYWORDS = ["receipt", "invoice", "bill", "check", "payment", "order"];
const PHOTO_KEYWORDS = ["photo", "fotoautomatica"];


function inferTray(name) {
    const lower = name.toLowerCase();
    if (TICKET_KEYWORDS.some(k => lower.includes(k))) return "tickets";
    if (RECEIPT_KEYWORDS.some(k => lower.includes(k))) return "receipts";
    if (PHOTO_KEYWORDS.some(k => lower.includes(k))) return "photos";
    return "misc";
}

const miscItems = inventory
    .filter(item => item.type === "misc")
    .map(item => ({ ...item, correctTray: inferTray(item.name) }))
    .sort(() => Math.random() - 0.5);

let queue = [...miscItems];
const trayContents = { tickets: [], receipts: [], photos: [], misc: [] };
let correct = 0;
let total = 0;

const card = document.getElementById("drag-card");
const cardImg = document.getElementById("card-img");
const statusEl = document.getElementById("status");
const itemArea = document.getElementById("item-area");

function showNext() {
    if (queue.length === 0) {
        itemArea.style.display = "none";
        statusEl.textContent = "";
        showSummary();
        return;
    }

    const item = queue[0];
    cardImg.src = item.frontImg || "";
    cardImg.alt = item.name;
    statusEl.textContent = `${queue.length} item${queue.length !== 1 ? "s" : ""} left`;
}

function showSummary() {
    const panel = document.getElementById("summary");
    const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;

    const cols = [
        { key: "tickets", label: "tickets" },
        { key: "receipts", label: "receipts" },
        { key: "photos", label: "photos" },
        { key: "misc", label: "actually misc" },
    ];

    panel.innerHTML = `
    <h3>all sorted!</h3>
    <div class="summary-grid">
      ${cols.map(c => `
        <div class="summary-col">
          <div class="summary-col-label">${c.label}</div>
          <div class="summary-col-count">${trayContents[c.key].length}</div>
        </div>
      `).join("")}
    </div>
    <div class="summary-accuracy">${accuracy}% sorted correctly</div>
  `;
    panel.style.display = "block";
}

function addToTray(trayKey, item, isCorrect) {
    const pile = document.querySelector(`#tray-${trayKey} .tray-pile`);
    const count = trayContents[trayKey].length;

    const chip = document.createElement("div");
    chip.className = "tray-item" + (isCorrect ? "" : " wrong");

    // scatter: nudge position and rotate slightly per item
    const offsetX = 10 + Math.random() * 20;
    const offsetY = count * 6 + Math.random() * 8;
    const rotate = (Math.random() - 0.5) * 18;

    chip.style.left = offsetX + "px";
    chip.style.top = offsetY + "px";
    chip.style.transform = `rotate(${rotate}deg)`;
    chip.style.zIndex = count + 1;

    chip.innerHTML = `<img src="${item.frontImg || ""}" alt="${item.name}" />`;
    pile.appendChild(chip);

    // grow tray height as pile builds
    pile.style.height = (offsetY + 90) + "px";
}

card.addEventListener("dragstart", () => {
    setTimeout(() => card.classList.add("dragging"), 0);
});

card.addEventListener("dragend", () => {
    card.classList.remove("dragging");
});

document.querySelectorAll(".tray").forEach(tray => {
    tray.addEventListener("dragover", e => {
        e.preventDefault();
        tray.classList.add("drag-over");
    });

    tray.addEventListener("dragleave", () => {
        tray.classList.remove("drag-over");
    });

    tray.addEventListener("drop", e => {
        e.preventDefault();
        tray.classList.remove("drag-over");

        if (queue.length === 0) return;
        const item = queue[0];
        const trayKey = tray.dataset.tray;
        const isCorrect = item.correctTray === trayKey;

        const empty = tray.querySelector(".tray-empty");
        if (empty) empty.style.display = "none";

        trayContents[trayKey].push(item);
        total++;
        if (isCorrect) correct++;

        addToTray(trayKey, item, isCorrect);

        queue.shift();
        showNext();
    });
});

showNext();