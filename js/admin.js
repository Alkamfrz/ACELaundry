!(function (l) {
  "use strict";
  l("#sidebarToggle, #sidebarToggleTop").on("click", function (e) {
    l("body").toggleClass("sidebar-toggled"),
      l(".sidebar").toggleClass("toggled"),
      l(".sidebar").hasClass("toggled") &&
        l(".sidebar .collapse").collapse("hide");
  }),
    l(window).resize(function () {
      l(window).width() < 768 && l(".sidebar .collapse").collapse("hide"),
        l(window).width() < 480 &&
          !l(".sidebar").hasClass("toggled") &&
          (l("body").addClass("sidebar-toggled"),
          l(".sidebar").addClass("toggled"),
          l(".sidebar .collapse").collapse("hide"));
    }),
    l("body.fixed-nav .sidebar").on(
      "mousewheel DOMMouseScroll wheel",
      function (e) {
        var o;
        768 < l(window).width() &&
          ((o = (o = e.originalEvent).wheelDelta || -o.detail),
          (this.scrollTop += 30 * (o < 0 ? 1 : -1)),
          e.preventDefault());
      }
    ),
    l(document).on("scroll", function () {
      100 < l(this).scrollTop()
        ? l(".scroll-to-top").fadeIn()
        : l(".scroll-to-top").fadeOut();
    }),
    l(document).on("click", "a.scroll-to-top", function (e) {
      var o = l(this);
      l("html, body")
        .stop()
        .animate(
          { scrollTop: l(o.attr("href")).offset().top },
          1e3,
          "easeInOutExpo"
        ),
        e.preventDefault();
    });
  l(".nav-item").on("click", function (e) {
    if (l(this).hasClass("active")) {
      l(this).removeClass("active");

      l(this).find(".collapse").collapse("hide");
    } else {
      l(this).addClass("active");
      l(this).find(".collapse").collapse("show");
    }
    if (l(this).hasClass("active")) {
      l(this).siblings().removeClass("active");
      l(this).siblings().find(".collapse").collapse("hide");
    }
    l(document).on("click", function (e) {
      if (l(e.target).closest(".nav-item").length === 0) {
        l(".nav-item").removeClass("active");
        l(".nav-item").find(".collapse").collapse("hide");
      }
    });
  });
  l('.dropdown-toggle').on('click', function(e) {
    e.preventDefault();
    var ldropdownMenu = l(this).next('.dropdown-menu');
    
    // Toggle dropdown visibility
    ldropdownMenu.toggleClass('show');
    
    // Close other open dropdowns
    l('.dropdown-menu').not(ldropdownMenu).removeClass('show');
  });

  // Close dropdown on click outside
  l(document).on('click', function(e) {
    if (l(e.target).closest('.dropdown').length === 0) {
      l('.dropdown-menu').removeClass('show');
    }
  });
})(jQuery);
