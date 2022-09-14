/* =======================================
           preloader   
========================================= */

$(window).on("load", function () {
  // makes sure that whole site is loaded
  $("#status").fadeOut();
  $("#preloader").delay(350).fadeOut("siow");
});

/* =======================================
               team 
========================================= */

$(function () {
  $("#team-members").owlCarousel({
    items: 2,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-angle-left"></i>', 
              '<i class="fa fa-angle-right"></i>',
             ],
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1,
      },
      // breakpoint from 480 up
      480: {
        items: 2,
      },
    },
  });
});

/* =======================================
              progress Bars 
========================================= */

$(function () {

  $("progress-elements").waypoint(function () {

      $(".progress-bar").each(function () {

        $(this).animate({
              width: $(this).attr("aria-valuenow") + "%"
          }, 2000);

      });

      this.destroy();
    }, {
      offset: "bottom-in-view",
    });

});

/* =======================================
             responsive tabs
========================================= */

$(function () {
  $("#services-tabs").responsiveTabs({
    animation: "slide",
  });
});

/* =======================================
             portfolio
========================================= */

$(window).on("load", function () {
  // initialize isotope
  $("#isotope-container").isotope({});

  // filter items on button click
  $("#isotope-filters").on("click", "button", function () {
    // get filter value
    var filtervalue = $(this).attr("data-filter");

    //filter portfolio
    $("#isotope-container").isotope({
      filter: filtervalue,
    });
    // active button
    $("#isotope-filters").find(".active").removeClass("active");
    $(this).addClass("active");
  });
});

/* =======================================
             Magnifier
========================================= */

$(function () {
  $("#portfolio-wrapper").magnificPopup({
    delegate: "a", //child items selector, by clicking on it popup will open
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});

/* =======================================
             testimonials
========================================= */

$(function () {
  $("#testimonial-slider").owlCarousel({
    items: 1,
    autoplay: false,
    smartspeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
  });
});

/* =======================================
             stats
========================================= */

$(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 2000,
  });
});

/* =======================================
               Clients
========================================= */

$(function () {
  $("#clients-list").owlCarousel({
    items: 6,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 2,
      },
      // breakpoint from 480 up
      480: {
        items: 3,
      },
      // breakpoint from 768 up
      768: {
        items: 6,
      },
    },
  });
});

/* =======================================
                 google map
========================================= */
$(window).on("load", function () {
  //map variable
  var addressString = "230 Broadway, NY, New York 10007,USA";
  var myLatlng = { lat: 40.7123, lng: -74.00592 };

  // 1. render map
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: myLatlng,
  });

  // 2. add marker
  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: "click to see address",
  });

  // 3. add info window
  var infowindow = new google.maps.InfoWindow({
    content: addressString,
  });

  // show info window when user clicks marker
  marker.addListener("click", function () {
    infowindow.open(map, marker);
  });

  // 4. resize function
  google.maps.event.addDomListener(window, "resize", function () {
    var center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(center);
  });
});

/* =======================================
               Navigation
========================================= */
/* rShow & Hide White Navigation */
$(function () {
  // showhide nav on page load
  showHideNav();

  $(window).scoll(function () {
    // showhide nav on window's scroll
    showHideNav();
  });

  function showHideNav() {
    if ($(window).scrollTop() > 50) {
      //show white nav
      $("nav").addClass("white-nav-top");

      // show back to top button
      $("#back-to-top").fadeIn();
    } else {
      // Hide white nav
      $("nav").removeClass("white-nav-top");

      // Hide back to top button
      $("#back-to-top").fadeOut();
    }
  }
});

// smooth scrolling
$(function () {
  $("a.smooth-scroll").click(function (event) {
    event.preventdefault();

    // get section id like #about, #servcies, #work, #team and etc.
    var section_id = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(section_id).offset().top - 64,
      },
      1250,
      "easeInOutExpo"
    );
  });
});

/* =======================================
               mobile menu
========================================= */
$(function () {
  // show mobile nav
  $("#mobile-nav-open-btn").click(function () {
    $("#mobile-nav").css("height", "100%");
  });

  // hide mobile nav
  $("#mobile-nav-close-btn, #mobile-nav").click(function () {
    $("#mobile-nav").css("height", "0%");
  });
});

/* =======================================
               animation
========================================= */
// animate on scroll
$(function () {
  new WOW().init();
});

// home animation on page load
$(window).on('load', function () {
  
    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");
});










