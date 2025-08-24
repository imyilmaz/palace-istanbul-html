AOS.init({
    once: false,  // Animasyonlar sadece bir kez tetiklenecek
    mobile: false, // Mobil cihazlarda AOS'u devre dışı bırakır
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector('.hamburger');
    const header = document.querySelector('.header');
    const menuOverlay = document.querySelector('.menu-overlay');
    const body = document.querySelector('body');

    // Hamburger menüsüne tıklama
    hamburger.addEventListener('click', function() {
        header.classList.toggle('open'); // open sınıfını ekle veya kaldır
        hamburger.classList.toggle('open'); // open sınıfını ekle veya kaldır
        body.classList.toggle('hidden'); // hidden sınıfını ekle veya kaldır
    });

    // Menü overlay'ine tıklama
    if (menuOverlay) {
        menuOverlay.addEventListener('click', function() {
            header.classList.remove('open'); // open sınıfını kaldır
            hamburger.classList.remove('open'); // open sınıfını kaldır
        });
    }
});
