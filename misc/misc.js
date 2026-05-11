const TICKET_KEYWORDS = ["ticket", "stub", "pass", "entry", "admission", "boarding", "voucher"];
const RECEIPT_KEYWORDS = ["receipt", "invoice", "bill", "check", "payment", "order"];

function inferTray(name) {
    const lower = name.toLowerCase();
    if (TICKET_KEYWORDS.some(k => lower.includes(k))) return "tickets";
    if (RECEIPT_KEYWORDS.some(k => lower.includes(k))) return "receipts";
    return "misc";
}

const miscItems = inventory
    .filter(item => item.type === "misc")
    .map(item => ({ ...item, correctTray: inferTray(item.name) }))
    .sort(() => Math.random() - 0.5);

let queue = [...miscItems];
const trayContents = { tickets: [], receipts: [], misc: [] };
let correct = 0;
let total = 0;

const card = document.getElementById("drag-card");
const cardImg = document.getElementById("card-img");
const cardName = document.getElementById("card-name");
const cardMeta = document.getElementById("card-meta");
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
    cardName.textContent = item.name;
    cardMeta.textContent = [item.date, item.loc].filter(Boolean).join(" · ");
    statusEl.textContent = `${queue.length} item${queue.length !== 1 ? "s" : ""} left`;
}

function showSummary() {
    const panel = document.getElementById("summary");
    const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;

    const cols = [
        { key: "tickets", label: "tickets" },
        { key: "receipts", label: "receipts" },
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

card.addEventListener("dragstart", e => {
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

        const chip = document.createElement("div");
        chip.className = "tray-item" + (isCorrect ? "" : " wrong");
        chip.innerHTML = `
      <img src="${item.frontImg || ""}" alt="${item.name}" />
      <div class="tray-item-name">${item.name}</div>
    `;
        tray.appendChild(chip);

        trayContents[trayKey].push(item);
        total++;
        if (isCorrect) correct++;

        queue.shift();
        showNext();
    });
});

showNext();