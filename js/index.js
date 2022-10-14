$(function () {

  const headerElement = $("header");
  // $(window).resize(function() {
  // });
  const windowSize = $(window).width();

  if(windowSize <= 768) {
    headerElement.removeClass("side-header");
    headerElement.addClass("nav-header");
  } else if(windowSize >= 1024) {
    headerElement.removeClass("nav-header");
    headerElement.addClass("side-header");
  }


  const hambergerBtn = $(".hamberger");
  const menuList = $(".quiz-list");
  const hambergerIcon = $(".hamberger .fa-bars");

  $(hambergerBtn).on("click", function() {
    $(menuList).toggleClass('is-active');
    $(hambergerIcon).toggleClass('fa-x');
  });
});