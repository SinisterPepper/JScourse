var budget = +prompt("Ваш бюджет на месяц?", "");
var storeName = prompt("Название вашего магазина?", "");
var time = 19;


var mainList = {
	budget: budget,
	storeName: storeName,
	shopGoods: [],
	employers: {},
	open: false
}


for (var i = 0; i < 5; i++){
	var good = prompt("Какой тип товаров будем продавать?", "");
	
	if((typeof(good)) === 'string' && (typeof(good)) != null && good != '' && good.length < 50){
		console.log("Все верно!");
		mainList.shopGoods[i] = good;
	} else {

	}
}

 //Цикл while
/*var i = 0;
while(i < 5) {
	var good = prompt("Какой тип товаров будем продавать?", "");
	if((typeof(good)) === 'string' && (typeof(good)) != null && good != '' && good.length < 50){
		console.log("Все верно!");
		mainList.shopGoods[i] = good;
	} 
	i++;
}*/


 //Конструкция do while
/*var i = 0;
do {
	var good = prompt("Какой тип товаров будем продавать?", "");
	if((typeof(good)) === 'string' && (typeof(good)) != null && good != '' && good.length < 50){
		console.log("Все верно!");
		mainList.shopGoods[i] = good;
	} 
	i++;
} while (i<5);*/

if (time < 0){
	console.log("Такого просто не может быть");
} else if (time > 8 && time < 20){
	console.log("Время работать");
	} else if (time < 24) {
		console.log("Уже слишком поздно");
		} else{
				console.log("В сутках только 24 часа");
			  }

alert(Math.round(mainList.budget / 30*10)/10);
console.log(mainList);


