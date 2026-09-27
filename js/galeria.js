document.querySelectorAll('[data-carousel]').forEach((carousel) => {
  const track = carousel.querySelector('.gallery-track');
  const prev = carousel.querySelector('.gallery-prev');
  const next = carousel.querySelector('.gallery-next');

  if (!track || !prev || !next) return;

  const scrollAmount = () => {
    const firstSlide = track.querySelector('.gallery-slide');
    if (!firstSlide) return 320;
    const gap = Number.parseFloat(getComputedStyle(track).gap) || 20;
    return firstSlide.getBoundingClientRect().width + gap;
  };

  prev.addEventListener('click', () => {
    track.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
  });

  next.addEventListener('click', () => {
    track.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
  });
});

// Lightbox for gallery images
(function(){
  const createLightbox = () => {
    const overlay = document.createElement('div');
    overlay.className = 'tvd-lightbox';
    overlay.innerHTML = `
      <div class="tvd-lightbox-backdrop" data-lb-close></div>
      <div class="tvd-lightbox-inner">
        <button class="tvd-lightbox-close" aria-label="Cerrar">✕</button>
        <img class="tvd-lightbox-img" src="" alt="">
      </div>
    `;
    document.body.appendChild(overlay);
    return overlay;
  };

  const overlay = createLightbox();
  const lbImg = overlay.querySelector('.tvd-lightbox-img');
  const lbClose = overlay.querySelector('.tvd-lightbox-close');

  // Ensure close button actually closes the lightbox
  if (lbClose) {
    lbClose.addEventListener('click', (e) => {
      e.stopPropagation();
      closeLightbox();
    });
  }

  const openLightbox = (src, alt) => {
    lbImg.src = src;
    lbImg.alt = alt || '';
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    overlay.classList.remove('open');
    // small delay to avoid flashing src change
    setTimeout(() => { lbImg.src = ''; lbImg.alt = ''; }, 200);
    document.body.style.overflow = '';
  };

  // Close handlers
  overlay.addEventListener('click', (e) => {
    // Close when clicking backdrop, overlay outside inner, or close button
    if (e.target.matches('[data-lb-close]') || e.target === overlay || !e.target.closest('.tvd-lightbox-inner')) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) closeLightbox();
  });

  // Attach to gallery images (carousel slides and static gallery images)
  const galleryImages = Array.from(document.querySelectorAll('.gallery-slide img'));
  galleryImages.forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', (e) => {
      e.preventDefault();
      openLightbox(img.src, img.alt);
    });
  });
})();
