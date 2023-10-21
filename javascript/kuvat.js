const kuvat = document.querySelectorAll('figure');
const lightbox = document.querySelector('.lightbox');
const lightboxKuva = document.querySelector('.lightbox img');
const lightboxKuvaus = document.querySelector('.lightbox p'); // Lisätty kuvauksen elementti
const lightboxSulje = document.querySelector('#lightbox-sulje');

kuvat.forEach(kuva => {
    kuva.addEventListener('click', () => {
        const kuvaElementti = kuva.querySelector('img');
        const kuvaKuvaus = kuva.querySelector('figcaption'); // Haetaan kuvateksti

        lightboxKuva.src = kuvaElementti.src;
        lightboxKuva.alt = kuvaElementti.alt;
        lightboxKuvaus.textContent = kuvaKuvaus.textContent; // Asetetaan kuvateksti ponnahdusikkunaan
        lightbox.style.display = 'block';
    });
});

lightboxSulje.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});
