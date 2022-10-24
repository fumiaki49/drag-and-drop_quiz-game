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
		speed: 500,
	});

	// Drop
	interact(".drop").dropzone({
		overlap: "pointer",
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

			const dragRect = e.relatedTarget.getBoundingClientRect();
			const dropRect = e.target.getBoundingClientRect();

			e.relatedTarget.posX += dropRect.left - dragRect.left;
			e.relatedTarget.posY += dropRect.top - dragRect.top;
			e.relatedTarget.style.transform = `translate(${e.relatedTarget.posX}px, ${e.relatedTarget.posY}px)`;
		},
	}).on("dropactivate", function(e){
		e.target.classList.add("drop-activated");
	});
	
});

