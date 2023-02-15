$(document).ready(function() {

    // trigger mixit up [shuffle]

    $("#gallery").mixItUp();

    // links to sections

    $(".nav li a").on("click", function() {

        $(".nav li a").removeClass("active")
        $(this).addClass("active");
        aSide.toggleClass("open");
        navToggler.toggleClass("btntoggle");

        $("html, body").animate({

            scrollTop: $('#' + $(this).data("value")).offset().top

        }, 1000);


    });
    $(".bottom-nav a").on("click", function() {

        $(".bottom-nav a").removeClass("active")
        $(this).addClass("active");
        $("html, body").animate({

            scrollTop: $('#' + $(this).data("value")).offset().top

        }, 1000);


    });



    // Sync Links With Sections 

    $(window).on("scroll", function() {
        $(".section").each(function() {

            if ($(window).scrollTop() > $(this).offset().top - 60) {

                var blockID = $(this).attr("id");

                $(".nav li a").removeClass("active");
                $('.nav li a[data-value="' + blockID + '"]').addClass("active");
                $(".bottom-nav a").removeClass("active");
                $('.bottom-nav a[data-value="' + blockID + '"]').addClass("active");

            }

        });
    });

    // nav toggler

    var navToggler = $(".nav-toggler"),
        aSide = $(".aside");

    navToggler.on("click", function() {

        aSide.toggleClass("open");
        $(this).toggleClass("btntoggle")
    })

    // hire us

    $(".hire").on("click", function() {

        $("body, html").animate({

            scrollTop: $(".contact").offset().top

        }, 1000)

    });

    // about

    $(".about").on("click", function() {

        $("body, html").animate({

            scrollTop: $("#about").offset().top

        }, 1000)

    });


    $(".hire").on("click", function() {

        $("body, html").animate({

            scrollTop: $(".contact").offset().top

        }, 1000)

    });

    // button to top

    $(".fa-chevron-up").on("click", function() {
        $("html").animate({
            scrollTop: 0
        }, 800)
    });

    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 400) {

            $(".fa-chevron-up").fadeIn();

        } else {
            $(".fa-chevron-up").fadeOut();
        }

    });

    // icon click

    $(".mix .icon").on("click", function() {

        let test = $(this).attr("data-link")
        if (test != undefined) {
            window.open(test)
        }


    })

    var swiper = new Swiper(".myslider", {
        grabCursor: true,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            700: {
                slidesPerView: 1,
            },
            1000: {
                slidesPerView: 1,
            },
        },
    });


    // create random width and height for loading

    function generateRandom(min = -500, max = 500) {

        // find diff
        let difference = max - min;

        // generate random number 
        let rand = Math.random();

        // multiply with difference 
        rand = Math.floor(rand * difference);

        // add with min value 
        rand = rand + min;

        return rand;

    }

    function test() {

        $(".gel").css("width", generateRandom())
        $(".gel").css("height", generateRandom())
    }

    var intervalId = window.setInterval(function() {
        test()
    }, 1000);

    // loading

    var intervalId = window.setInterval(function() {

        var typed = new Typed(".intro", {
            strings: [" I'm youssef Kamel. ", ],
            typeSpeed: 100,
            backSpeed: 40,
        });

    }, 4000);


    var intervalId2 = window.setInterval(function() {

        clearInterval(intervalId)

    }, 4500);


    // cursor
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', e => {
        cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
    })

    document.addEventListener('click', () => {
        cursor.classList.add("expand");

        setTimeout(() => {
            cursor.classList.remove("expand");
        }, 500)
    })

    // timeline
    // Timeline Body Animations Below ===
    function VerticalTimeline(element) {
        this.element = element;
        this.blocks = this.element.getElementsByClassName("js-cd-block");
        this.images = this.element.getElementsByClassName("js-cd-img");
        this.contents = this.element.getElementsByClassName("js-cd-content");
        this.offset = 0.8;
        this.hideBlocks();
    };

    VerticalTimeline.prototype.hideBlocks = function() {
        //hide timeline blocks which are outside the viewport
        if (!"classList" in document.documentElement) {
            return;
        }
        var self = this;
        for (var i = 0; i < this.blocks.length; i++) {
            (function(i) {
                if (self.blocks[i].getBoundingClientRect().top > window.innerHeight * self.offset) {
                    self.images[i].classList.add("cd-is-hidden");
                    self.contents[i].classList.add("cd-is-hidden");
                }
            })(i);
        }
    };

    VerticalTimeline.prototype.showBlocks = function() {
        if (!"classList" in document.documentElement) {
            return;
        }
        var self = this;
        for (var i = 0; i < this.blocks.length; i++) {
            (function(i) {
                if (self.contents[i].classList.contains("cd-is-hidden") && self.blocks[i].getBoundingClientRect().top <= window.innerHeight * self.offset) {
                    // add bounce-in animation
                    self.images[i].classList.add("cd-timeline__img--bounce-in");
                    self.contents[i].classList.add("cd-timeline__content--bounce-in");
                    self.images[i].classList.remove("cd-is-hidden");
                    self.contents[i].classList.remove("cd-is-hidden");
                }
            })(i);
        }
    };

    var verticalTimelines = document.getElementsByClassName("js-cd-timeline"),
        verticalTimelinesArray = [],
        scrolling = false;
    if (verticalTimelines.length > 0) {
        for (var i = 0; i < verticalTimelines.length; i++) {
            (function(i) {
                verticalTimelinesArray.push(new VerticalTimeline(verticalTimelines[i]));
            })(i);
        }

        //show timeline blocks on scrolling
        window.addEventListener("scroll", function(event) {
            if (!scrolling) {
                scrolling = true;
                (!window.requestAnimationFrame) ? setTimeout(checkTimelineScroll, 250): window.requestAnimationFrame(checkTimelineScroll);
            }
        });
    }

    function checkTimelineScroll() {
        verticalTimelinesArray.forEach(function(timeline) {
            timeline.showBlocks();
        });
        scrolling = false;
    };


    // trigger nice scroll
    // $(function() {
    //     $("body").niceScroll();
    // });

    // trigger AOS
    function aos_init() {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out-back",
            once: true
        });
    }
    $(window).on('load', function() {
        aos_init();
    });



});