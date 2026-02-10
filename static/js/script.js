/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

(function ($) {
  "use strict";
  $(".video-play").modalVideo();

  $(".portfolio-single-slider").slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $(".clients-logo").slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $(".testimonial-wrap").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".portfolio-gallery").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".portfolio-gallery").each(function () {
    $(this)
      .find(".popup-gallery")
      .magnificPopup({
        type: "image",
        gallery: {
          enabled: true,
        },
      });
  });

  // GLightbox for service galleries
  if (typeof GLightbox !== "undefined" && document.querySelector(".glightbox")) {
    GLightbox({
      selector: ".glightbox",
      touchNavigation: true,
      loop: true,
      closeOnOutsideClick: true,
    });
  }

  // Counter

  $(".counter-stat").counterUp({
    delay: 10,
    time: 1000,
  });

  // Mobile dropdown: first tap expands, second tap navigates
  $(document).on("click", ".nav-item.dropdown > .dropdown-toggle", function (e) {
    if ($(window).width() < 992) {
      var $parent = $(this).parent();
      if (!$parent.hasClass("open")) {
        e.preventDefault();
        $(".nav-item.dropdown.open").removeClass("open");
        $parent.addClass("open");
      }
    }
  });

  // Close mobile dropdowns when tapping outside
  $(document).on("click", function (e) {
    if ($(window).width() < 992 && !$(e.target).closest(".nav-item.dropdown").length) {
      $(".nav-item.dropdown.open").removeClass("open");
    }
  });

  // Reset when navbar collapses
  $("#navbarsExample09").on("hide.bs.collapse", function () {
    $(".nav-item.dropdown.open").removeClass("open");
  });

  // Rybbit event tracking
  function rybbitEvent(name, props) {
    if (window.rybbit && typeof window.rybbit.event === "function") {
      window.rybbit.event(name, props);
    }
  }

  // Phone clicks
  $(document).on("click", 'a[href^="tel:"]', function () {
    rybbitEvent("phone_click", { phone: this.href.replace("tel:", "") });
  });

  // Email clicks
  $(document).on("click", 'a[href^="mailto:"]', function () {
    rybbitEvent("email_click", { email: this.href.replace("mailto:", "") });
  });

  // CTA button clicks (navbar + page CTAs)
  $(document).on("click", ".btn-main, .btn-solid-border, .btn-solid-white", function () {
    var label = $(this).text().trim();
    var href = $(this).attr("href") || "";
    if (href && !href.startsWith("tel:") && !href.startsWith("mailto:")) {
      rybbitEvent("cta_click", { label: label, href: href, page: window.location.pathname });
    }
  });

  // Social media / outbound link clicks
  $(document).on("click", 'a[target="_blank"], .footer-socials a', function () {
    var href = $(this).attr("href") || "";
    if (href.startsWith("http")) {
      rybbitEvent("outbound_click", { url: href });
    }
  });
})(jQuery);
