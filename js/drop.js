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
		modifiers: [
			interact.modifiers.restrict({
				restriction: '.answer-area',
				endOnly: true
			})
		],
		autoScroll: true,
	});

	// Drop
	interact(".drop").dropzone({
		ondragenter(e) {
			e.relatedTarget.style.backgroundColor = "rgb(21, 146, 71)";
			e.relatedTarget.style.color = "#fff";
		},
		ondragleave(e) {
			e.relatedTarget.style.backgroundColor = "rgb(160, 230, 188)";
			e.relatedTarget.style.color = "#333333";
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
	
});

