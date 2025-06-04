document.querySelectorAll('.product-img').forEach(img => {
  img.addEventListener('click', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = img.src;
    lightbox.style.display = 'flex';
  });
});

document.querySelector('.close-btn').addEventListener('click', () => {
  document.getElementById('lightbox').style.display = 'none';
});