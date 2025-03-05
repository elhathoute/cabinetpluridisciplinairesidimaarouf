/**
* Template Name: Medicio
* Template URL: https://bootstrapmade.com/medicio-free-bootstrap-theme/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Auto generate the carousel indicators
   */
  document.querySelectorAll('.carousel-indicators').forEach((carouselIndicator) => {
    carouselIndicator.closest('.carousel').querySelectorAll('.carousel-item').forEach((carouselItem, index) => {
      if (index === 0) {
        carouselIndicator.innerHTML += `<li data-bs-target="#${carouselIndicator.closest('.carousel').id}" data-bs-slide-to="${index}" class="active"></li>`;
      } else {
        carouselIndicator.innerHTML += `<li data-bs-target="#${carouselIndicator.closest('.carousel').id}" data-bs-slide-to="${index}"></li>`;
      }
    });
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

  const imageFolder = 'assets/img/photos/';
    const images = [
    'images_added.jpeg',
    'DSC01322-min.JPG',
    'DSC01335-min.JPG',
    'DSC01327-min.JPG',
    //'DSC01320-min.JPG',
    'slide2.jpeg',
    'DSC01316-min.JPG',
    'DSC01321-min.JPG',
    //'DSC01314-min.JPG',
    'DSC01334-min.JPG',
    'DSC01326-min.JPG',
    'DSC01325-min.JPG',
    'DSC01317-min.JPG',
    'DSC01323-min.JPG',
    'DSC01319-min.JPG',
    'DSC01324-min.JPG',
    'DSC01328-min.JPG',
    'DSC01329-min.JPG',
    'DSC01318-min.JPG',
    'DSC01315-min.JPG',
    'DSC01337-min.JPG',
    'DSC01359-min.JPG',
    'DSC01358-min.JPG',
    'DSC01357-min.JPG',
    'DSC01355-min.JPG',
    'DSC01354-min.JPG',
    'DSC01352-min.JPG',
    'DSC01353-min.JPG',
    'DSC01351-min.JPG',
    'DSC01350-min.JPG',
    'DSC01349-min.JPG',
    'DSC01348-min.JPG',
    'DSC01347-min.JPG',
  ];

  const photoRow = document.getElementById('photo-row');

  images.forEach((image, index) => {
    const div = document.createElement('div');
    div.classList.add('swiper-slide');
    const a = document.createElement('a');
    a.classList.add('glightbox');
    a.setAttribute('data-gallery', 'images-gallery');
    a.setAttribute('href', imageFolder + image);
    const img = document.createElement('img');
    img.src = imageFolder + image;
    img.alt = image;
    img.classList.add('lazyload', 'img-fluid','h-100','p-1','rounded-3');
    img.loading = 'lazy';
    img.style.objectFit = 'cover';
    a.appendChild(img);
    div.appendChild(a);
    photoRow.appendChild(div);
  });

 emailjs.init("5MdDVyW3vPE031Q5Y"); 

        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault(); 

            const form = event.target;
            const formData = new FormData(form);

            const name = formData.get("name");
            const email = formData.get("email");
            const subject = formData.get("subject");
            const message = formData.get("message");

            // Send email using EmailJS
            const templateParams = {
                from_name: name,
                from_email: email,
                subject: subject,
                message: message
            };

            emailjs.send('service_wkci996', 'template_wxqh40j', templateParams)
                .then(function(response) {
                    console.log('Success:', response);
                    form.querySelector('.sent-message').style.display = 'block';
                    form.querySelector('.loading').style.display = 'none';
                })
                .catch(function(error) {
                    console.error('Error:', error);
                    form.querySelector('.error-message').style.display = 'block';
                });
        });

})();