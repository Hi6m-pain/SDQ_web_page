
        // Profile picture effects
const profilePic = document.querySelector('.profile-pic');
const profileImg = document.querySelector('.profile-pic img');

// Floating animation
let floatDirection = 1;
setInterval(() => {
    const currentTop = parseInt(getComputedStyle(profilePic).top);
    profilePic.style.top = (currentTop + floatDirection) + 'px';
    
    if (currentTop >= 25) floatDirection = -1;
    if (currentTop <= 15) floatDirection = 1;
}, 100);

// Click effects
profilePic.addEventListener('click', () => {
    // Spin animation
    profileImg.style.transform = 'rotate(360deg) scale(1.2)';
    profilePic.style.boxShadow = '0 0 40px rgba(108, 92, 231, 1)';
    
    setTimeout(() => {
        profileImg.style.transform = 'rotate(0deg) scale(1)';
        profilePic.style.boxShadow = '0 0 20px rgba(108, 92, 231, 0.3)';
    }, 600);
    
    // Show tooltip
    showToast('it take too much time to add logic here 😒');
});

// Hover glow effect
profilePic.addEventListener('mouseenter', () => {
    profilePic.style.boxShadow = '0 0 35px rgba(108, 92, 231, 0.8)';
    profileImg.style.filter = 'brightness(1.1)';
});

profilePic.addEventListener('mouseleave', () => {
    profilePic.style.boxShadow = '0 0 20px rgba(108, 92, 231, 0.3)';
    profileImg.style.filter = 'brightness(1)';
});

// Pulse effect every 5 seconds
setInterval(() => {
    profilePic.style.animation = 'profilePulse 1s ease-in-out';
    setTimeout(() => {
        profilePic.style.animation = '';
    }, 1000);
}, 5000);