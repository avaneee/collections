// 1. Render Function
function renderInventory(filterType = 'all') {
    const canvas = document.getElementById('canvas');
    canvas.innerHTML = ''; 

    // Create a shuffled version of the inventory
    // This uses sort() with a random value to intersperse types
    const shuffledInventory = [...inventory].sort(() => Math.random() - 0.5);

    // Use shuffledInventory instead of inventory
    shuffledInventory.forEach(item => {
        // Filter Logic
        if (filterType !== 'all' && item.type !== filterType) return;

        // Create Element
        const card = document.createElement('div');
        
        // Add classes: item-card, the type (magnet/misc), and is-postcard if applicable
        const isMagnet = item.type === 'magnet';
        card.className = `item-card ${item.type} ${isMagnet ? 'is-magnet' : ''}`;

        const isPostcard = item.type === 'postcard';
        card.className = `item-card ${item.type} ${isPostcard ? 'is-postcard' : ''}`;

        // Random Rotation (-3 to +3 degrees) for handmade feel
        const randomRot = (Math.random() - 0.5) * 6;
        card.style.transform = `rotate(${randomRot}deg)`;

        // Build HTML conditionally
        // Only include the 'back' div if it's a postcard
        let innerContent = `
            <div class="item-inner">
                <div class="side front">
                    <img src="${item.frontImg}" alt="${item.name}">
                </div>`;
        
        if (isPostcard) {
            innerContent += `
                <div class="side back">
                    <img src="${item.backImg}" alt="${item.name} Back">
                </div>`;
        }

        innerContent += `</div>`; // Close item-inner
        card.innerHTML = innerContent;
        
        canvas.appendChild(card);
    });
}

// 2. Control Bar Listeners
const buttons = document.querySelectorAll('.filter-btn');

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // UI Update: Active Button
        buttons.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');

        const filterValue = e.target.getAttribute('data-group');

        renderInventory(filterValue);
    });
});

// 3. Initial Load
document.addEventListener('DOMContentLoaded', () => {
    renderInventory('all');
});

function renderInventory(filterType = 'all') {
  const canvas = document.getElementById('canvas');
  canvas.innerHTML = '';

  // Toggle postcard column class
  canvas.className = filterType === 'postcard' ? 'filter-postcard' : '';

  const shuffledInventory = [...inventory].sort(() => Math.random() - 0.5);

  shuffledInventory.forEach(item => {
    if (filterType !== 'all' && item.type !== filterType) return;

    const card = document.createElement('div');
    const isPostcard = item.type === 'postcard';

    // Removed the duplicate className assignment and is-magnet class
    card.className = `item-card ${item.type}${isPostcard ? ' is-postcard' : ''}`;

    const randomRot = (Math.random() - 0.5) * 6;
    card.style.transform = `rotate(${randomRot}deg)`;

    let innerContent = `
      <div class="item-inner">
        <div class="side front">
          <img src="${item.frontImg}" alt="${item.name}">
        </div>`;

    if (isPostcard) {
      innerContent += `
        <div class="side back">
          <img src="${item.backImg}" alt="${item.name} Back">
        </div>`;
    }

    innerContent += `</div>`;
    card.innerHTML = innerContent;
    canvas.appendChild(card);
  });
}