
        // Enhanced JavaScript with multiple animations and interactions

        // Loading screen
        window.addEventListener('load', () => {
            const loading = document.getElementById('loading');
            setTimeout(() => {
                loading.style.opacity = '0';
                setTimeout(() => {
                    loading.style.display = 'none';
                }, 500);
            }, 1500);
        });

        // Mouse follower
        const mouseFollower = document.getElementById('mouseFollower');
        let mouseX = 0, mouseY = 0;
        let followerX = 0, followerY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function animateFollower() {
            followerX += (mouseX - followerX) * 0.1;
            followerY += (mouseY - followerY) * 0.1;
            
            mouseFollower.style.left = followerX - 10 + 'px';
            mouseFollower.style.top = followerY - 10 + 'px';
            
            requestAnimationFrame(animateFollower);
        }
        animateFollower();

        // Glowing orb that follows mouse with delay
        const glowOrb = document.getElementById('glowOrb');
        let orbX = window.innerWidth / 2;
        let orbY = window.innerHeight / 2;

        document.addEventListener('mousemove', (e) => {
            setTimeout(() => {
                orbX = e.clientX;
                orbY = e.clientY;
                glowOrb.style.left = orbX + 'px';
                glowOrb.style.top = orbY + 'px';
            }, 100);
        });

        // Create floating particles
        function createParticles() {
            const particles = document.getElementById('particles');
            const particleCount = 50;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                const size = Math.random() * 4 + 2;
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight;
                const animationDuration = Math.random() * 4 + 4;
                const animationDelay = Math.random() * 2;
                
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                particle.style.left = x + 'px';
                particle.style.top = y + 'px';
                particle.style.animationDuration = animationDuration + 's';
                particle.style.animationDelay = animationDelay + 's';
                
                particles.appendChild(particle);
            }
        }

        createParticles();

        // App icon click animation
        const appIcon = document.getElementById('appIcon');
        appIcon.addEventListener('click', () => {
            appIcon.style.transform = 'scale(0.9) rotateY(180deg)';
            setTimeout(() => {
                appIcon.style.transform = 'scale(1) rotateY(0deg)';
            }, 300);
        });

        // Download button enhanced animation
        const downloadBtn = document.getElementById('downloadBtn');
        downloadBtn.addEventListener('mouseenter', () => {
            downloadBtn.style.transform = 'translateY(-5px) scale(1.05)';
        });

        downloadBtn.addEventListener('mouseleave', () => {
            downloadBtn.style.transform = 'translateY(0) scale(1)';
        });

       // downloadBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Create ripple effect
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.4)';
            ripple.style.width = ripple.style.height = '20px';
            ripple.style.left = (e.offsetX - 10) + 'px';
            ripple.style.top = (e.offsetY - 10) + 'px';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.pointerEvents = 'none';

            downloadBtn.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);

            // Show download message
            showToast('start Downloading..');
        //});

        // Add ripple animation keyframes
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                0% {
                    transform: scale(1);
                    opacity: 1;
                }
                100% {
                    transform: scale(20);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        // Scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.scroll-animate').forEach(el => {
            observer.observe(el);
        });

        // Screenshot hover effects
        const screenshots = document.querySelectorAll('.screenshot');
        screenshots.forEach((screenshot, index) => {
            screenshot.addEventListener('mouseenter', () => {
                screenshots.forEach((other, otherIndex) => {
                    if (otherIndex !== index) {
                        other.style.transform = 'scale(0.95)';
                        other.style.opacity = '0.7';
                    }
                });
            });

            screenshot.addEventListener('mouseleave', () => {
                screenshots.forEach(other => {
                    other.style.transform = 'scale()';
                    other.style.opacity = '1';
                });
            });

            // Click to zoom effect
            screenshot.addEventListener('click', () => {
                screenshot.style.position = 'fixed';
                screenshot.style.top = '50%';
                screenshot.style.left = '50%';
                screenshot.style.transform = 'translate(-50%, -50%) scale(1.5)';
                screenshot.style.zIndex = '10000';
                screenshot.style.background = 'rgba(0, 0, 0, 0.9)';
                
                const overlay = document.createElement('div');
                overlay.style.position = 'fixed';
                overlay.style.top = '0';
                overlay.style.left = '0';
                overlay.style.width = '100%';
                overlay.style.height = '100%';
                overlay.style.background = 'rgba(0, 0, 0, 0.8)';
                overlay.style.zIndex = '9999';
                overlay.style.cursor = 'pointer';
                
                document.body.appendChild(overlay);
                
                const closeZoom = () => {
                    screenshot.style.position = 'relative';
                    screenshot.style.top = 'auto';
                    screenshot.style.left = 'auto';
                    screenshot.style.transform = 'scale(1)';
                    screenshot.style.zIndex = 'auto';
                    screenshot.style.background = 'rgba(255, 255, 255, 0.05)';
                    overlay.remove();
                };
                
                overlay.addEventListener('click', closeZoom);
                
                setTimeout(() => {
                    document.addEventListener('keydown', (e) => {
                        if (e.key === 'Escape') {
                            closeZoom();
                        }
                    }, { once: true });
                }, 100);
            });
        });

        // Feature cards interaction
        const features = document.querySelectorAll('.feature');
        features.forEach(feature => {
            feature.addEventListener('mouseenter', () => {
                const icon = feature.querySelector('i');
                icon.style.transform = 'scale(1.2) rotateY(360deg)';
                
                // Add floating animation to other features
                features.forEach(otherFeature => {
                    if (otherFeature !== feature) {
                        otherFeature.style.transform = 'translateY(5px)';
                    }
                });
            });

            feature.addEventListener('mouseleave', () => {
                const icon = feature.querySelector('i');
                icon.style.transform = 'scale(1) rotateY(0deg)';
                
                features.forEach(otherFeature => {
                    otherFeature.style.transform = 'translateY(0)';
                });
            });
        });

        // Parallax scrolling effect
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.app-showcase, .about');
            
            parallaxElements.forEach(element => {
                const speed = 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });

            // Update particle positions based on scroll
            const particles = document.querySelectorAll('.particle');
            particles.forEach((particle, index) => {
                const speed = (index % 3 + 1) * 0.1;
                const yPos = scrolled * speed;
                particle.style.transform = `translateY(${yPos}px)`;
            });
        });

        // Toast notification system
        function showToast(message, duration = 3000) {
            const toast = document.createElement('div');
            toast.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: linear-gradient(135deg, #6c5ce7, #a29bfe);
                color: white;
                padding: 15px 25px;
                border-radius: 10px;
                box-shadow: 0 10px 30px rgba(108, 92, 231, 0.3);
                z-index: 10000;
                font-weight: 600;
                opacity: 0;
                transform: translateX(100%);
                transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            `;
            toast.textContent = message;
            document.body.appendChild(toast);

            setTimeout(() => {
                toast.style.opacity = '1';
                toast.style.transform = 'translateX(0)';
            }, 100);

            setTimeout(() => {
                toast.style.opacity = '0';
                toast.style.transform = 'translateX(100%)';
                setTimeout(() => toast.remove(), 300);
            }, duration);
        }

        // Typing animation for subtitle
        function typeWriter(element, text, speed = 50) {
            element.textContent = '';
            element.style.opacity = '1';
            let i = 0;
            
            function type() {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            type();
        }

        // Start typing animation after page load
        setTimeout(() => {
            const subtitle = document.querySelector('.subtitle');
            const originalText = subtitle.textContent;
            typeWriter(subtitle, originalText, 30);
        }, 2000);

        // Interactive background color change on scroll
        window.addEventListener('scroll', () => {
            const scrollPercent = window.pageYOffset / (document.body.scrollHeight - window.innerHeight);
            const hue = 240 + (scrollPercent * 60); // Changes from blue to purple
            document.body.style.filter = `hue-rotate(${hue - 240}deg)`;
        });

        // Add click sound effect simulation
        function playClickSound() {
            // Create audio context for click feedback
            if (typeof AudioContext !== 'undefined' || typeof webkitAudioContext !== 'undefined') {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.value = 800;
                oscillator.type = 'sine';
                
                gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.1);
            }
        }

        // Add click sound to interactive elements
        document.querySelectorAll('.download-btn, .feature, .screenshot, .app-icon').forEach(element => {
            element.addEventListener('click', playClickSound);
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Dynamic title animation
        const title = document.querySelector('h1');
        const titleText = title.textContent;
        
        setInterval(() => {
            title.style.textShadow = `
                0 0 ${Math.random() * 50 + 30}px rgba(108, 92, 231, 0.8),
                0 0 ${Math.random() * 80 + 50}px rgba(108, 92, 231, 0.3),
                0 0 ${Math.random() * 100 + 70}px rgba(162, 155, 254, 0.2)
            `;
        }, 2000);

        // Resize handler for responsive animations
        window.addEventListener('resize', () => {
            // Recreate particles on resize
            const particles = document.getElementById('particles');
            particles.innerHTML = '';
            createParticles();
        });

        // Add performance optimization for animations
        let ticking = false;

        function updateAnimations() {
            // Throttle animation updates
            if (!ticking) {
                requestAnimationFrame(() => {
                    // Update any continuous animations here
                    ticking = false;
                });
                ticking = true;
            }
        }

        // Initialize all animations after DOM is ready
        document.addEventListener('DOMContentLoaded', () => {
            console.log('🚀 welcome');
            
            // Add entrance animations with staggered delays
            const animatedElements = document.querySelectorAll('.feature');
            animatedElements.forEach((element, index) => {
                element.style.animationDelay = `${index * 0.2}s`;
            });
        });

        // Add keyboard navigation
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowDown':
                    window.scrollBy(0, 100);
                    break;
                case 'ArrowUp':
                    window.scrollBy(0, -100);
                    break;
                case ' ':
                    e.preventDefault();
                    window.scrollBy(0, window.innerHeight * 0.8);
                    break;
            }
        });
