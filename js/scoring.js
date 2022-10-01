// scoring
$(document).on('click', '#scoring-btn', function () {
  const correctAnswer = document.querySelectorAll('[data-name="true"]');
  console.log(correctAnswer);
  
  const uncorrectAnswer = document.querySelectorAll('[data-name="false"]');
  console.log(uncorrectAnswer);
  
  const blankAnswer = document.querySelectorAll('[data-name="blank"]');
  console.log(blankAnswer);
  
  Swal.fire({
    title: "採点結果",
    html: 
    "<div class = 'score-box'>" + "<span class='score-text'>正解:</span>" + "<span class ='points'>" + correctAnswer.length + "</span>" + "</div>" +
    "<div class = 'score-box'>" + "<span class='score-text'>不正解:</span>" + "<span class = 'points'>" + uncorrectAnswer.length + "</span>" + "</div>" +
    "<div class = 'score-box'>" + "<span class='score-text'>空白:</span>" +  "<span class = 'points'>" + blankAnswer.length + "</span>" + "</div>",
  });
});