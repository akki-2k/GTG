// Gallery Functionality
const images = [
    '../GTG/assets/thumbnailone.png',
    '../GTG/assets/thumbnailtwo.png',
    '../GTG/assets/thumbnailthree.png',
    '../GTG/assets/thumbnailfour.png',
    '../GTG/assets/thumbnailone.png',
    '../GTG/assets/thumbnailtwo.png',
    '../GTG/assets/thumbnailthree.png',
    '../GTG/assets/thumbnailfour.png'
];

let currentIndex = 0;
const mainImage = document.getElementById('mainImage');
const dots = document.querySelectorAll('.dot');
const thumbnails = document.querySelectorAll('.thumbnail');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateGallery(index) {
    currentIndex = index;
    mainImage.src = images[index];
    
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
    
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateGallery(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateGallery(currentIndex);
});

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        updateGallery(parseInt(dot.dataset.index));
    });
});

thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
        updateGallery(parseInt(thumb.dataset.index));
    });
});
