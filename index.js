window.addEventListener("load", () => {
  window.scrollTo(0, 64);
});
(function () {
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('section[id]');
        const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');

        
        navLinks.forEach(link => {
          link.addEventListener('click', (e) => {
            
            navLinks.forEach(l => {
              l.classList.remove('bg-indigo-600');
              l.style.color = '#4B5563';
            });
            
            link.classList.add('bg-indigo-600');
            link.style.color = '#fff';

            if (!mobileMenu.classList.contains('hidden')) {
              closeMobileMenu();
            }
          });
        });

        
        window.addEventListener('scroll', () => {
          const scrollY = window.scrollY;
          sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 120;
            const sectionId = section.getAttribute('id');
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
              navLinks.forEach(link => {
                link.classList.remove('bg-indigo-600');
                link.style.color = '#4B5563';
                if (link.getAttribute('href') === `#${sectionId}`) {
                  link.classList.add('bg-indigo-600');
                  link.style.color = '#fff';
                }
              });
            }
          });
        });

        // Mobile menu anim.
        function openMobileMenu() {
          mobileMenu.classList.remove('hidden');
          mobileMenu.setAttribute('aria-hidden', 'false');
          menuToggle.setAttribute('aria-expanded', 'true');
          menuToggle.setAttribute('aria-label', 'Close menu');
        }
        function closeMobileMenu() {
          mobileMenu.classList.add('hidden');
          mobileMenu.setAttribute('aria-hidden', 'true');
          menuToggle.setAttribute('aria-expanded', 'false');
          menuToggle.setAttribute('aria-label', 'Open menu');
        }

        if (menuToggle && mobileMenu) {
          menuToggle.addEventListener('click', (e) => {
            if (mobileMenu.classList.contains('hidden')) openMobileMenu();
            else closeMobileMenu();
          });

          mobileMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => closeMobileMenu());
          });

          document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
              closeMobileMenu();
            }
          });
        }
      })();


// Intersection Observer for About Section
const aboutSection = document.getElementById('about');
if (aboutSection) {
  const aboutElements = aboutSection.querySelectorAll('.fade-in-element');
  
  const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        
        aboutElements.forEach((element, index) => {
          setTimeout(() => {
            element.style.animation = 'fadeInUp 0.8s ease forwards';
          }, index * 100);
        });
        
        aboutObserver.unobserve(entry.target);
      }
    });
  }, { 
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });
  
  aboutObserver.observe(aboutSection);
}

// Intersection Observer for Services Section
const servicesSection = document.getElementById('services');
if (servicesSection) { /*I know that this if statement is useless but I did it anyways 'cause ... why not*/ 
  const servicesElements = servicesSection.querySelectorAll('.fade-in-element, .freeze');
  
  const servicesObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        servicesElements.forEach(item => {
          item.classList.remove('freeze');
        });
        servicesObserver.unobserve(entry.target);
      }
    });
  }, { 
    threshold: 0.1
  });
  
  servicesObserver.observe(servicesSection);
}

// Intersection Observer for Schedule Section
const scheduleSection = document.getElementById('schedule');
if (scheduleSection) {
  const scheduleElements = scheduleSection.querySelectorAll('.fade-in-element');
  
  const scheduleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        scheduleElements.forEach((element, index) => {
          const isEven = index % 2 === 0;
          element.style.opacity = '0';
          element.style.transform = isEven ? 'translateX(-40px) scale(0.95)' : 'translateX(40px) scale(0.95)';
          
          setTimeout(() => {
            element.style.transition = 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)';
            element.style.opacity = '1';
            element.style.transform = 'translateX(0) scale(1)';
          }, index * 100);
        });
        scheduleObserver.unobserve(entry.target);
      }
    });
  }, { 
    threshold: 0.1,
    rootMargin: '0px 0px -80px 0px'
  });
  
  scheduleObserver.observe(scheduleSection);
}
const locationIcons = document.querySelectorAll('.hero-location-icon');

locationIcons.forEach(icon => {
  icon.addEventListener('click', (e) => {
    e.preventDefault();
    icon.classList.add('icon-clicked');
    setTimeout(() => {
      icon.classList.remove('icon-clicked');
    }, 1900);
  })
})