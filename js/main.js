// make active nav menu coloured
document.addEventListener("DOMContentLoaded", function() {
    var currentLocation = window.location.href;
    var menuLinks = document.querySelectorAll("nav a");
    
    menuLinks.forEach(function(link) {
        if (link.href === currentLocation) {
            link.classList.add("active");
            }
        });
    });

    // initialize swiper
    const swiperOne = new Swiper('.swiper-one', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,

        // // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // media queries
        breakpoints: {
            350: {
                slidesPerView: 2,
                // spaceBetween: 50,
            },
            450: {
                slidesPerView: 3,
                // spaceBetween: 50,
            },
            600: {
                slidesPerView: 4,
                // spaceBetween: 40,
            },
            
            740: {
                slidesPerView: 5,
                // spaceBetween: 20,
            },
        },

        // // And if we need scrollbar
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    });

    // initialize swiper
    const swiperTwo = new Swiper('.swiper-two', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,

        // // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // media queries
        breakpoints: {
            100: {
                slidesPerView: 1,
                // spaceBetween: 50,
            },
            350: {
                slidesPerView: 2,
                // spaceBetween: 50,
            },
            550: {
                slidesPerView: 3,
                // spaceBetween: 50,
            },
            700: {
                slidesPerView: 4,
                // spaceBetween: 40,
            },
            
            870: {
                slidesPerView: 5,
                // spaceBetween: 20,
            },
        },

        // // And if we need scrollbar
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    });

    const swiperThree = new Swiper('.swiper-three', {
        slidesPerView: 3,

        // // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // media queries
        breakpoints: {
            100: {
                slidesPerView: 1,
                // spaceBetween: 50,
            },
            400: {
                slidesPerView: 2,
                // spaceBetween: 50,
            },
            600: {
                slidesPerView: 3,
                // spaceBetween: 50,
            },
            // 700: {
            //     slidesPerView: 4,
            //     // spaceBetween: 40,
            // },
            
            // 870: {
            //     slidesPerView: 5,
            //     // spaceBetween: 20,
            // },
        },

        // // And if we need scrollbar
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    });