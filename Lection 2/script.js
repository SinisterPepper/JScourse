/*События на мобильныйх устройствах*/
/*
window.addEventListener("DOMContentLoaded", function(){
	let box = document.getElementsByClassName("box")[0];

	box.addEventListener("touchstart", function(event){
		event.preventDefault();
		console.log(event.touches);
		//touches.length - количество пальцев
	});

	box.addEventListener("touchmove", function(event){
		event.preventDefault();
		console.log('Move');
	});

	box.addEventListener("touchend", function(event){
		event.preventDefault();
		console.log('End');
	});
});*/



/*Регулярные выражения*/

/*let reg = new RegExp("pattern", "flags"); */

/*let reg = /"pattern"/;*/

/*let pass = prompt("Введите ваш пароль");

console.log(pass.replace(/./g, '*'));

console.log('12-34-56'.replace(/-/g, " "));

console.log(/-/.test("12-34-56"));*/

/*Флаг i - ищет независимо от регистра
Флаг g - ищет все совпадения*/



/*search() - ищет только первый элемент
match() - выводит все*/

let str = "My name? is R2D2";
let str1 = " 33 fwef";

//console.log(str.match(/\?/));


//  \d - numbers
//  \w - words
//  \s - Пробелы
//  \D - не числа
//  \W - не буквы
//  \S - не пробелы