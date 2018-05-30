var budget = +prompt("Ваш бюджет на месяц?", "");
var storeName = prompt("Название вашего магазина?", "");

var shopGoods = [];
var employers = {}

var mainList = {
	budget,
	storeName,
	shopGoods,
	employers,
	open
}

var i = 3;
while(i){
	shopGoods.push(prompt("Какой тип товаров будем продавать?", ""));
	i--;
}

alert(Math.round(budget / 30*10)/10);



/*console.log(shopGoods);
console.log(mainList);
console.log(mainList.budget);
console.log(typeof(mainList.open));
console.log(budget);
console.log(storeName);*/