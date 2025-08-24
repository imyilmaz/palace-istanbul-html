AOS.init({
    once: false,  // Animasyonlar sadece bir kez tetiklenecek
    mobile: false, // Mobil cihazlarda AOS'u devre dışı bırakır
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector('.hamburger');
    const header = document.querySelector('.header');
    const menuOverlay = document.querySelector('.menu-overlay');
    const body = document.querySelector('body');
    const voice = document.querySelector('.voice-on-off');

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

    const audio = document.getElementById('bg-music');
    const btn   = document.querySelector('.voice-on-off');

    function syncUI() {
    if (!audio.paused) {
        btn.classList.add('active'); // stop ikonu görünür
    } else {
        btn.classList.remove('active'); // play ikonu görünür
    }
    }

    async function safePlay() {
    try {
        await audio.play();
    } catch (e) {
        console.debug('Autoplay engellendi, kullanıcı etkileşimi bekleniyor.');
    }
    syncUI();
    }

    window.toggleMusic = () => {
    if (audio.paused) {
        safePlay();
    } else {
        audio.pause();
        syncUI();
    }
    };

    // Sayfa yüklenince dene
    document.addEventListener('DOMContentLoaded', safePlay);

    // Eğer tarayıcı engellerse → ilk kullanıcı etkileşiminde başlat
    const unlock = () => {
    if (audio.paused) safePlay();
    document.removeEventListener('pointerdown', unlock);
    document.removeEventListener('keydown', unlock);
    };
    document.addEventListener('pointerdown', unlock);
    document.addEventListener('keydown', unlock);

    // Çalma durumunu dinle
    audio.addEventListener('play', syncUI);
    audio.addEventListener('pause', syncUI);
});
