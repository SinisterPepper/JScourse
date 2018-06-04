/*console.log(getFriendlyNumbers(-1,3000));
console.log(getFriendlyNumbers(1000,300));
console.log(getFriendlyNumbers(0,500.5));
console.log(getFriendlyNumbers(0.5,3000));
console.log(getFriendlyNumbers(100,''));
console.log(getFriendlyNumbers(null,1000));
console.log(getFriendlyNumbers(500,-500));
console.log(getFriendlyNumbers(0,NaN));
console.log(getFriendlyNumbers('1',500));*/

console.log(getFriendlyNumbers(0,500));
//console.log(getFriendlyNumbers(220,284));
//console.log(getFriendlyNumbers(0,3000));



function getFriendlyNumbers(start, end) {
	let friendlyNumbersArr = [];

	if(isNaN(start) || isNaN(end) || start > end || 
		start < 0 || !isInteger(start) || !isInteger(end)){
		//console.log("Некорректные границы!");
		return false;	
	}
	
	for(let i = start; i < end-1; i++){
		for(let j = i+1; j <= end; j++){
			if(isFriendly(i,j)){
				friendlyNumbersArr.push([i,j]);
			}
		}
	}
	return friendlyNumbersArr;
	/*Вычисляем дружественные числа в заданном диапазоне*/
}



//console.log(isFriendly(220,284));



function sumOfDividers(n){
	let sum = 0;
	for(let i = 1; i < n; i++){
		if(n%i == 0){
			sum += i;
		}
	}
	return sum;
}
/*Метод возвращающий сумму делителей числа n*/


function isFriendly(n,m){
	if(sumOfDividers(n) ==  m && sumOfDividers(m) == n){
		return true;
	}
	return false;
}
/*Метод провяющий являются ли m и n дружественными*/


function isInteger(num){
	return (num ^ 0) === num;
}
/*Метод проверяющий целое ли число.
^ - работает только с целыми числами. У дроби он вернет только целую часть.*/
