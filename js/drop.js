$(function () {
	// Drag
	interact(".drag").draggable({
		onstart(e){
			if(!e.target.posX) e.target.posX = 0;
			if(!e.target.posY) e.target.posY = 0;
		},
		onmove(e){
			e.target.posX += e.dx;
			e.target.posY += e.dy;
			e.target.style.transform = `translate(${e.target.posX}px, ${e.target.posY}px)`;
		},

		autoScroll: true,
	});

	// Drop
	interact(".drop").dropzone({
		ondragenter(e) {
			e.relatedTarget.style.backgroundColor = "rgb(21, 146, 71)"
			e.relatedTarget.style.color = "#fff"
		},
		ondragleave(e) {
			e.relatedTarget.style.backgroundColor = "rgb(160, 230, 188)"
			e.relatedTarget.style.color = "#333333"
			e.target.dataset.name = "blank"
		},
		ondrop(e){
			const dragQuiz = e.relatedTarget.getAttribute("quiz");
			const dropQuiz = e.target.getAttribute("quiz");
			
			if(dragQuiz == dropQuiz) {
				e.target.dataset.name = "true";
			} else if(dragQuiz !== dropQuiz) {
				e.target.dataset.name = "false";
			}
		},
	}).on("dropactivate", function(e){
		e.target.classList.add("drop-activated");
	});


	// scoring
	const scoringBtn = document.getElementById("scoring-btn");
	scoringBtn.addEventListener("click", event=> {
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
});

