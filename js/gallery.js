// Gallery Functionality
const images = [
    'https://via.placeholder.com/600x600/667eea/ffffff?text=Perfume+1',
    'https://via.placeholder.com/600x600/764ba2/ffffff?text=Perfume+2',
    'https://via.placeholder.com/600x600/f093fb/ffffff?text=Perfume+3',
    'https://via.placeholder.com/600x600/4facfe/ffffff?text=Perfume+4'
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
