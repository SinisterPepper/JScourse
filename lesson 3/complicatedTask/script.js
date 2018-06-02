let mistake, correction = ''; //Ошибка и справление
let str = 'урок-3-был слишком легким';


/*Пункт 1*/
str = str[0].toUpperCase() + str.slice(1);

console.log(str);


function changeSymbols(mistake, correction, str){

	for(let pos = 0; pos < str.length; pos++) {
		let foundPos = str.indexOf(mistake, pos);
		 
		if(foundPos != -1){
			str = str.slice(0, foundPos) + correction + str.slice(foundPos+1);
		}
		// console.log(foundPos); // нашли ошибку на этой позиции
	}
	return str;
}
/*Функция swapSymbols заменяет символ mistake на символ correction
строке str и возвращает исправленную строку*/


/*Пункт 2*/
str = changeSymbols("-", " ", str);

console.log(str)


/*Пункт 3*/
strEasy = str.substr(str.indexOf("легким"), 6);

strEasy = strEasy.slice(0,4) + "оо";

document.write(strEasy);


/*Пункт 4*/
let arr = [20, 33, 1, "Человек", 2, 3];
let sum = 0;

for(let i = 0; i < arr.length; i++){
	if(!isNaN(arr[i])){
		sum += arr[i] ** 3;
	}
}
console.log("Квадратный корень из суммы кубов равен: " + (Math.sqrt(sum)))


/*Пункт 5*/
function formatString(str){
	if((typeof(str)) != 'string' || str == ''){
		alert("Это не строка!");
		return;
	}
	str = str.replace(/^\s+|\s+$/g, "");

	if(str.length > 50){
		return str = str.slice(0,50) + '...';
	}
	return str;

}

let strWithSpaces = "  Очень большая строка без пробелов в начале и конце и с троеточием      ";
document.write("<br>" + formatString(strWithSpaces));
