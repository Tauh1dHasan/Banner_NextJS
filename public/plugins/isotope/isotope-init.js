(function ($) {
  "use strict";

  jQuery(document).ready(function () {
    var $grid = $(".grid");

    if ($grid.length === 0) {
      return;
    }

    // Isotope Portfolio
    var iso = $grid.data("isotope");
    var $filterCount = $(".filter-count");

    if (iso) {
      function updateFilterCount() {
        $filterCount.text(iso.filteredItems.length);
      }
      updateFilterCount();

      $(".filters-button-group .button").on("click", function () {
        var filterValue = $(this).attr("data-filter");
        $grid.isotope({ filter: filterValue });
        updateFilterCount();
      });

      $(".filters-button-group").each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on("click", "button", function () {
          $buttonGroup.find(".is-checked").removeClass("is-checked");
          $(this).addClass("is-checked");
        });
      });

      $grid.imagesLoaded().progress(function () {
        $grid.isotope("layout");
      });

      var initShow = 10;
      var counter = initShow;
      loadMore(initShow);
      function loadMore(toShow) {
        $grid.find(".hidden").removeClass("hidden");

        var hiddenElems = iso.filteredItems
          .slice(toShow, iso.filteredItems.length)
          .map(function (item) {
            return item.element;
          });
        $(hiddenElems).addClass("hidden");
        $grid.isotope("layout");

        if (hiddenElems.length == 0) {
          jQuery("#load-more").hide();
        } else {
          jQuery("#load-more").show();
        }
      }

      $("#load-more").click(function () {
        if ($(".filters-button-group").data("clicked")) {
          counter = initShow;
          $(".filters-button-group").data("clicked", false);
        } else {
          counter = counter;
        }
        counter = counter + initShow;
        loadMore(counter);
      });

      $(".filters-button-group").click(function () {
        $(this).data("clicked", true);
        loadMore(initShow);
      });

      $(function () {
        $(".effect-fly .grid-item").each(function () {
          $(this).hoverdir();
        });
      });

      $(".effect-tilt .grid-item").tilt({
        maxTilt: 15,
        perspective: 1400,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        speed: 1200,
        scale: 1.01,
        reset: true,
      });

      $(".wptb-slider.style16 .wptb-slider--inner").tilt({
        maxTilt: 15,
        perspective: 1400,
        easing: "cubic-bezier(.03, .98, .52, .99)",
        speed: 300,
        glare: false,
        maxGlare: 0.5,
        scale: 1.01,
        reset: true,
      });
    }
  });

  var $grid = $(".grid").isotope({
    itemSelector: ".grid-item",
    percentPosition: true,
    layoutMode: "masonry",
    transformsEnabled: true,
    transitionDuration: "700ms",
    resize: true,
    fitWidth: true,
    columnWidth: ".grid-sizer",
  });
})(jQuery);
