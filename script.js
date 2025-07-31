const toggleMenuOpen = () => document.querySelector('header').classList.toggle('open');

const previousBtn = document.getElementById('previousBtn');
const nextBtn = document.getElementById('nextBtn');
const imageContainer = document.querySelector('.images_container');
const infoLayout = document.querySelector('.info_layout');

let currentIndex = 0;
nextBtn.addEventListener('click', () => {
    if (currentIndex === 2) {
        return;
    } else {
        currentIndex++;
        console.log(currentIndex);
        imageContainer.style.transform = `translateX(-${currentIndex * (100 / 3)}%)`;
        setTimeout(() => {
            infoLayout.style.transform = `translateX(-${currentIndex * (100 / 3)}%)`;
        }, 500);
    }
});

previousBtn.addEventListener('click', () => {
    if (currentIndex === 0) {
        return;
    } else {
        currentIndex--;
        console.log(currentIndex);
        imageContainer.style.transform = `translateX(-${currentIndex * (100 / 3)}%)`;

        setTimeout(() => {
            infoLayout.style.transform = `translateX(-${currentIndex * (100 / 3)}%)`;
        }, 300);
    }
});


