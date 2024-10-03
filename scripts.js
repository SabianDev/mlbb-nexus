/*CAROUSEL*/
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    let nextInterval = 10000 /*waktu pindah item*/
    let currentIndex = 0;
    let interval;

    function showItem(index) {
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    function showNextItem() {
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
    }

    function showPrevItem() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showItem(currentIndex);
    }

    function resetInterval() {
        clearInterval(interval);
        /*interval 10 detik*/
        interval = setInterval(showNextItem, nextInterval);
    }

    nextButton.addEventListener('click', function() {
        showNextItem();
        resetInterval();
    });

    prevButton.addEventListener('click', function() {
        showPrevItem();
        resetInterval();
    });

    interval = setInterval(showNextItem, nextInterval); // Ganti item setiap 3 detik
});