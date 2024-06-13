// header
let header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('shadow');
    } else {
        header.classList.remove('shadow');
    }
});

// home
document.addEventListener('DOMContentLoaded', function() {
    const homeText = document.querySelector('.home-text');
    const homeImg = document.querySelector('.home-img');

    // Initial opacity and transitions
    homeText.style.opacity = '0';
    homeImg.style.opacity = '0';

    homeText.style.transition = 'opacity 0.5s ease-in-out';
    homeImg.style.transition = 'opacity 0.5s ease-in-out';

    // Set opacity to 1 after a delay
    setTimeout(function() {
        homeText.style.opacity = '1';
        homeImg.style.opacity = '1';
    }, 500);

    // Animation for text from left and image from right
    setTimeout(function() {
        homeText.style.transition = 'transform 1s ease-in-out';
        homeText.style.transform = 'translateX(0)';
        homeImg.style.transition = 'transform 1s ease-in-out';
        homeImg.style.transform = 'translateX(0)';
    }, 900);
});

// Other sections follow similar adjustments for timing and transitions...

