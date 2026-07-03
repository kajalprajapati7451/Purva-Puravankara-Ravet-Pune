document.addEventListener("DOMContentLoaded", function () {
    // Set current year in footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const hrefAttr = this.getAttribute('href');
            if (hrefAttr === "#") return;
            const target = document.querySelector(hrefAttr);
            if (target) {
                e.preventDefault();
                window.scrollTo({
                    top: target.offsetTop - 80, // Offset for fixed navbar
                    behavior: 'smooth'
                });
            }
        });
    });

    // Close mobile navbar on link click
    const navbarCollapse = document.getElementById('navbarNav');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link, .navbar-nav .btn');
    if (navbarCollapse && navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navbarCollapse.classList.contains('show')) {
                    const toggler = document.querySelector('.navbar-toggler');
                    if (toggler) toggler.click();
                }
            });
        });
    }

    // Form Submission Mock
    const enquiryForm = document.getElementById('enquiryForm');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Submitting...';
            submitBtn.disabled = true;

            setTimeout(() => {
                alert('Thank you for your interest! We will share the cost sheet and project details with you shortly.');
                enquiryForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }

    // Back to Top Button
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 400) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });

        backToTopBtn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
