$(function () {
  function judgeWindowSize() {
    const headerElement = $("header");
    const windowSize = $(window).width();
    
    if(windowSize <= 768) {
      headerElement.removeClass("side-header");
      headerElement.addClass("nav-header");
    } else if(windowSize >= 1024) {
      headerElement.removeClass("nav-header");
      headerElement.addClass("side-header");
    }
  };
  judgeWindowSize();
  
  function hambergerMenu() {
    const hambergerBtn = $(".hamberger");
    const hambergerIcon = $(".hamberger .fa-bars");
    const quizList = $(".quiz-list");
    const quizLink = $(".accordion-list li");

    $(hambergerBtn).on("click", function() {
      $(quizList).toggleClass('is-active');
      $(hambergerIcon).toggleClass('fa-x');
    });
    
    $(quizLink).on("click", function() {
      $(quizList).toggleClass('is-active');
      $(hambergerIcon).toggleClass('fa-x');
    });
  };
  hambergerMenu();

});