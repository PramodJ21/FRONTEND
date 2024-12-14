const carousel = document.querySelector('.recommendation-carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

function updateCarousel() {
    const totalItems = carousel.children.length;
    const itemsToShow = 3;
    const maxIndex = totalItems - itemsToShow;

    // Move the carousel
    carousel.style.transform = `translateX(-${currentIndex * 100 / itemsToShow}%)`;

    // Show/hide buttons
    prevBtn.style.display = currentIndex === 0 ? 'none' : 'block';
    nextBtn.style.display = currentIndex === maxIndex ? 'none' : 'block';
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < carousel.children.length - 3) {
        currentIndex++;
        updateCarousel();
    }
});

// Initial update
updateCarousel();
