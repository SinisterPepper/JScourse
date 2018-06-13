let date = new Date();
let div = document.getElementsByClassName('watch')[0];


let param = {
	hour: 'numeric',
	minute: 'numeric',
	second: 'numeric'
};

let timeIs = date.toLocaleString('ru', param);
div.textContent = timeIs;