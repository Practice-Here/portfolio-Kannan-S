$(document).ready(function () {

    // Sticky navbar & scroll-up button
    $(window).scroll(function () {
        $('.navbar').toggleClass("sticky", this.scrollY > 20);
        $('.scroll-up-btn').toggleClass("show", this.scrollY > 500);
    });

    // Slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        $('html').removeClass("smooth-scroll");
    });

    // Smooth scroll on menu item click
    $('.navbar .menu li a').click(function () {
        $('html').addClass("smooth-scroll");
    });

    // Toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing text animation script (merged for .typing & .typing-2)
    var typed = new Typed(".typing", {
    strings: ["QA Engineer!", "Manual Tester!", "Automation Tester!"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
    });

    var typed = new Typed(".typing-2", {
    strings: ["QA Engineer!", "Manual Tester!", "Automation Tester!"],
    typeSpeed: 200,
    backSpeed: 200,
    loop: true
    });

    // Owl Carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000, // fixed correct key name
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

  document.querySelectorAll(".skill-icon").forEach(icon => {
    icon.addEventListener("click", () => {
        icon.classList.toggle("active");
    });
 });

   // Redirect to index.html on refresh
    if (performance.navigation.type === 1) {  
     window.location.href = "index.html";
    }

  // Redirect to index.html on back button navigation
  window.addEventListener("pageshow", function (event) {
    if (event.persisted) {
        window.location.href = "index.html";
    }
  });

  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });

  const img = document.querySelector('.about .about-content .left img');

    if (img) { // Safety check: only run if the image exists on the page
        img.addEventListener('mousemove', (e) => {
            const { offsetWidth: width, offsetHeight: height } = img;
            const { offsetX: mouseX, offsetY: mouseY } = e;

            // Calculate rotation
            const xAxis = (width / 2 - mouseX) / 20;
            const yAxis = (height / 2 - mouseY) / 20;

            img.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });

        img.addEventListener('mouseleave', () => {
            img.style.transform = `rotateY(0deg) rotateX(0deg)`;
        });
    }

 // Journey Timeline Auto-play Script
 $(document).ready(function () {
    const radios = document.querySelectorAll('input[name="gallery-item"]');
    if (radios.length > 0) {
        let currentIndex = 0;
        let autoPlayInterval;

        function startAutoPlay() {
            autoPlayInterval = setInterval(() => {
                currentIndex = (currentIndex + 1) % radios.length;
                radios[currentIndex].checked = true;
            }, 3000); // Changes slide every 3 seconds
        }

        function stopAutoPlay() {
            clearInterval(autoPlayInterval);
        }

        // Start the rotation initially
        startAutoPlay();

        // Allow user to click manually, which resets the timer
        radios.forEach((radio, index) => {
            radio.addEventListener('change', () => {
                currentIndex = index;
                stopAutoPlay();
                startAutoPlay();
            });
        });
    }
 })

});
