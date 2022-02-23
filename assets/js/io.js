var carouselWidth = $(".carousel-inner-custom")[0].scrollWidth;
var cardWidth = $(".carousel-item-custom").width();
var scrollPosition = 0;

$(".carousel-control-next-custom").on("click", function () {
    console.log("clicked");
    if (scrollPosition < (carouselWidth - cardWidth * 4)) { //check if you can go any further
      scrollPosition += cardWidth;  //update scroll position
      $(".carousel-inner-custom").animate({ scrollLeft: scrollPosition },600); //scroll left
    }
});

$(".carousel-control-prev-custom").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      $(".carousel-inner-custom").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });