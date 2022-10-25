$(function () {
  function hambergerMenu() {
    $(document).on("click", ".hamberger, .accordion-list li", function() {
      const hambergerIcon = $(".hamberger .fa-bars");
      const quizList = $(".quiz-list");
      $(quizList).toggleClass('is-active');
      $(hambergerIcon).toggleClass('fa-x');
    });
  };
  hambergerMenu();

  function scoringFunction() {
    $(document).on('click', '#scoring-btn', function () {
      const correctAnswer = document.querySelectorAll('[data-name="true"]');
      const uncorrectAnswer = document.querySelectorAll('[data-name="false"]');
      const blankAnswer = document.querySelectorAll('[data-name="blank"]');
      const quizList = document.querySelectorAll(".drop");
    
      if ( uncorrectAnswer.length > 0 || blankAnswer.length > 0 ) {
        Swal.fire({
          title: "もう一度考えてみよう！",
          text: "空白 or 不正解の箇所があります" 
        })
      
      } else if( correctAnswer.length == quizList.length ) {
        Swal.fire({
          title: "全問正解!",
          text: "別の問題にも挑戦してみよう！",
        });
    
        party.confetti(this, {
          lifetime: party.variation.range(2, 4),
          count: 100,
        });
      };
    });
  };
  scoringFunction();

});