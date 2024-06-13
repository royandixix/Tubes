// header
let header = document.getElementById('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow',window.scrollY);
});

// home
document.addEventListener('DOMContentLoaded', function() {
    const homeText = document.querySelector('.home-text');
    const homeImg = document.querySelector('.home-img');

    // Set opacity awal menjadi 0
    homeText.style.opacity = '0';
    homeImg.style.opacity = '0';

    // Animasi transisi opacity
    homeText.style.transition = 'opacity 0.5s ease-in-out';
    homeImg.style.transition = 'opacity 0.5s ease-in-out';

    // Set opacity menjadi 1 setelah beberapa waktu
    setTimeout(function() {
        homeText.style.opacity = '1';
        homeImg.style.opacity = '1';
    }, 500); // Waktu sebelum opacity berubah (dalam milidetik)

    // Animasi transisi dari kiri (home-text)
    setTimeout(function() {
        homeText.style.transition = 'transform 1.5s ease-in';
        homeText.style.transform = 'translateX(-80%)';
    }, 900); // Waktu sebelum transisi left dimulai

    // Animasi transisi dari kanan (home-img)
    setTimeout(function() {
        homeImg.style.transition = 'transform 1.5s ease-in';
        homeImg.style.transform = 'translateX(80%)';
    }, 900); // Waktu sebelum transisi right dimulai

    // Gunakan setTimeout untuk mengatur waktu munculnya elemen setelah beberapa detik
    setTimeout(function() {
        homeText.style.transition = 'transform 1s ease-in';
        homeText.style.transform = 'translateX(0)';
        homeImg.style.transition = 'transform 1s ease-in';
        homeImg.style.transform = 'translateX(0)';
    }, 1200); // Waktu sebelum elemen muncul sepenuhnya
});

// specs
document.addEventListener('DOMContentLoaded', function() {
    const specsDetails = document.querySelector('.specs-details');
    const specsImg = document.querySelector('.specs-img');

    // Set opacity awal menjadi 0
    specsDetails.style.opacity = '0';
    specsImg.style.opacity = '0';

    // Animasi transisi muncul dari atas (specs-details)
    specsDetails.style.transition = 'opacity 0.5s ease-in-out, transform 1s ease-in-out';
    specsDetails.style.transform = 'translateY(-50px)'; // Mulai sedikit di atas posisi normal

    // Animasi transisi muncul dari atas (specs-img)
    specsImg.style.transition = 'opacity 0.5s ease-in-out, transform 1s ease-in-out';
    specsImg.style.transform = 'translateY(-50px)'; // Mulai sedikit di atas posisi normal

    // Set opacity menjadi 1 dan kembali ke posisi normal setelah beberapa waktu
    setTimeout(function() {
        specsDetails.style.opacity = '1';
        specsDetails.style.transform = 'translateY(0)';
        specsImg.style.opacity = '1';
        specsImg.style.transform = 'translateY(0)';
    }, 500); // Waktu sebelum elemen muncul (dalam milidetik)
});

// shop
document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.shop-container .box');
  
    // Set opacity awal menjadi 0 dan posisi sedikit di atas
    boxes.forEach((box, index) => {
        box.style.opacity = '0';
        box.style.transform = 'translateY(-50px)';
  
        // Animasi transisi muncul dari atas
        box.style.transition = 'opacity 0.5s ease-in-out, transform 1s ease-in-out';
  
        // Set timeout untuk masing-masing box
        setTimeout(function() {
            box.style.opacity = '1';
            box.style.transform = 'translateY(0)';
        }, 300 * index); // Delay munculnya setiap box (dalam milidetik)
    });
});

// buds
document.addEventListener('DOMContentLoaded', function() {
    const budsText = document.querySelector('.buds-text');
    const budsImage = document.querySelector('.buds-image');

    // Animasi transisi masuk dari kiri (buds-text)
    budsText.style.transition = 'transform 1.5s ease-in-out';
    budsText.style.transform = 'translateX(-80%)';

    // Animasi transisi masuk dari kanan (buds-image)
    budsImage.style.transition = 'transform 1.5s ease-in-out';
    budsImage.style.transform = 'translateX(80%)';

    // Set timeout untuk munculnya setelah beberapa waktu
    setTimeout(function() {
        budsText.style.transform = 'translateX(0)';
        budsImage.style.transform = 'translateX(0)';
    }, 500); // Waktu sebelum elemen muncul (dalam milidetik)
});

// footer
document.addEventListener('DOMContentLoaded', function() {
    const footerBoxes = document.querySelectorAll('.footer-box');

    // Set opacity awal menjadi 0 dan posisi sedikit di atas
    footerBoxes.forEach(box => {
        box.style.opacity = '0';
        box.style.transform = 'translateY(-50px)';
    });

    // Animasi transisi muncul dari atas
    footerBoxes.forEach((box, index) => {
        box.style.transition = 'opacity 0.5s ease-in-out, transform 1s ease-in-out';
        box.style.transitionDelay = `${index * 200}ms`; // Mengatur delay berdasarkan index

        // Set timeout untuk masing-masing box
        setTimeout(function() {
            box.style.opacity = '1';
            box.style.transform = 'translateY(0)';
        }, 200); // Membuat semua box muncul pada waktu yang sama (dalam milidetik)
    });
   homeImg.anmation = 'move 3s infinte';
});






