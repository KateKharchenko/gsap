; 'use strict'

;(function(){
	var beetroot = document.getElementById('beetroot'),
		beetrootPath = Math.ceil(beetroot.getTotalLength()),
		text = document.getElementById('text'),
		textPath = Math.ceil(text.getTotalLength()),
		tl1= new TimelineMax(), tl2 = new TimelineMax(); 

		beetroot.style.strokeDashoffset = beetrootPath;
		text.style.strokeDashoffset = textPath;

		tl1.to(beetroot, 6, {
			strokeDasharray: beetrootPath,
			strokeDashoffset: 0,
		})
		.to(beetroot, 0, {
			fill: '#77c167',
		})
		.to(text, 0, {
			fill: '#3d3935',
		});

		tl2.to(text, 60, {
			stroke: '#3d3935',
			strokeDasharray: textPath,
			strokeDashoffset: 0,
		});
})();