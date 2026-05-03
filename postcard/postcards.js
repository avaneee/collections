// for scrolling rack
const frames = document.querySelectorAll('.rack-frame');
const container = document.querySelector('.scroll-container');

window.addEventListener('scroll', () => {
    // 1. calculate how far we've scrolled inside the container
    const rect = container.getBoundingClientRect();
    const scrollProgress = Math.abs(rect.top) / (rect.height - window.innerHeight);
    
    // 2. clamp progress between 0 and 1
    const progress = Math.min(Math.max(scrollProgress, 0), 0.99);
    
    // 3. determine the index (0 to 8)
    const frameIndex = Math.floor(progress * frames.length);
    
    // 4. update the active class
    frames.forEach((img, index) => {
        if (index === frameIndex) {
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }
    });
});

// in the background i want postcards randomly appearing and moving everywhere?