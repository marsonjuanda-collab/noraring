
AOS.init({
    duration: 1000,
    easing: 'ease-out-expo',
    once: true,
    offset: 50,
    delay: 0
});


// hero

const heroModal = document.getElementById('heroModal');
const heroBtnCv = document.getElementById('viewCvBtn');
const heroCloseModal = document.querySelector('.hero-modal-close');

if (heroBtnCv) {
    heroBtnCv.addEventListener('click', (e) => {
        e.preventDefault();
        if (heroModal) {
            heroModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    });
}

if (heroCloseModal) {
    heroCloseModal.addEventListener('click', () => {
        if (heroModal) {
            heroModal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
}

window.addEventListener('click', (e) => {
    if (heroModal && e.target === heroModal) {
        heroModal.style.display = 'none';
        document.body.style.overflow = '';
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && heroModal && heroModal.style.display === 'flex') {
        heroModal.style.display = 'none';
        document.body.style.overflow = '';
    }
});

document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// navbar scroll
// const navbar = document.querySelector('.navbar');

// if (navbar) {
//     window.addEventListener('scroll', () => {
//         const currentScroll = window.pageYOffset;
        
//         if (currentScroll > 50) {
//             navbar.style.background = 'rgba(13, 13, 13, 0.9)';
//             navbar.style.backdropFilter = 'blur(10px)';
//             navbar.style.transition = 'all 0.3s ease';
//         } else {
//             navbar.style.background = 'transparent';
//             navbar.style.backdropFilter = 'none';
//         }
//     });
// }


// project - certificate
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const certificateCards = document.querySelectorAll('.certificate-card');

if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {

            filterButtons.forEach(btn => btn.classList.remove('active'));
        
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            if (projectCards.length > 0) {
                projectCards.forEach(card => {
                    if (filterValue === 'project' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                        card.style.opacity = '0';
                        setTimeout(() => {
                            card.style.opacity = '1';
                        }, 50);
                    } else {
                        card.style.display = 'none';
                    }
                });
            }
            
            if (certificateCards.length > 0) {
                certificateCards.forEach(card => {
                    if (filterValue === 'certificate' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                        card.style.opacity = '0';
                        setTimeout(() => {
                            card.style.opacity = '1';
                        }, 50);
                    } else {
                        card.style.display = 'none';
                    }
                });
            }
        });
    });
}


// modal certi fungsi open
const certModal = document.getElementById('certificateModal');
const certModalImage = document.getElementById('certModalImage');
const certModalTitle = document.getElementById('certModalTitle');
const certModalDesc = document.getElementById('certModalDesc');
const certCloseModal = document.querySelector('.cert-modal-close');

function openCertModal(imgSrc, title, description) {
    if (certModalImage) certModalImage.src = imgSrc;
    if (certModalTitle) certModalTitle.textContent = title;
    if (certModalDesc) certModalDesc.textContent = description;
    if (certModal) {
        certModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

if (certificateCards.length > 0) {
    certificateCards.forEach(card => {
        card.addEventListener('click', (e) => {

            if (e.target.closest('a')) return;
            
            e.preventDefault();
            
            const img = card.querySelector('.certificate-image-box img');
            const imgSrc = img ? img.src : '';
            
            // Get title and description
            const titleElem = card.querySelector('.certificate-heading');
            const title = titleElem ? titleElem.textContent : '';
            
            const descElem = card.querySelector('.certificate-brief');
            const description = descElem ? descElem.textContent : '';
            
            openCertModal(imgSrc, title, description);
        });
    });
}

if (certCloseModal) {
    certCloseModal.addEventListener('click', () => {
        if (certModal) {
            certModal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
}

window.addEventListener('click', (e) => {
    if (certModal && e.target === certModal) {
        certModal.style.display = 'none';
        document.body.style.overflow = '';
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && certModal && certModal.style.display === 'flex') {
        certModal.style.display = 'none';
        document.body.style.overflow = '';
    }
});



function handleResponsive() {
    const width = window.innerWidth;
    const heroTitle = document.querySelector('.hero-title');
    
    if (heroTitle) {
        if (width < 576) {
            heroTitle.style.letterSpacing = '-0.02em';
        } else {
            heroTitle.style.letterSpacing = '-0.03em';
        }
    }
}

function updateYear() {
    const yearElements = document.querySelectorAll('.current-year');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(el => {
        el.textContent = currentYear;
    });
}


window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    handleResponsive();
    updateYear();
    console.log('Portfolio Andreas Leba - Ready');
});

window.addEventListener('resize', handleResponsive);