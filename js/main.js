function changeBackground() {

	elem.onclick = function () {
		document.body.style.backgroundColor = prompt('Напиши любой цвет на английском', '');
	}
}

changeBackground();