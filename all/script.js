
        const hamburger = document.getElementById('hamburger');
        const closeBtn = document.getElementById('close-btn');
        const nav = document.getElementById('nav');

        hamburger.addEventListener('click', () => {
            nav.classList.add('open');
        });

        closeBtn.addEventListener('click', () => {
            nav.classList.remove('open');
        });
   //categories all animation img
   function cycleImages(containerId) {
    const container = document.getElementById(containerId);
    const images = container.getElementsByTagName('img');
    let currentIndex = 0;

    setInterval(() => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }, 2000);
}

cycleImages('allCategoryImages');