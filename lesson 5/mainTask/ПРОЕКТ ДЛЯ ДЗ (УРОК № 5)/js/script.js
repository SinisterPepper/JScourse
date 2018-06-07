let budget, 
	storeName, 
	time, 
	price;


function start(){
	budget = prompt("Ваш бюджет на месяц?", "");

	while(isNaN(budget) || budget === '' || budget == null ){
		budget = prompt("Ваш бюджет?", "");
	}
	storeName = prompt("Название вашего магазина?", '').toUpperCase();;
	
	time = 19;
}


//start();
start();

var mainList = {
	budget: budget,
	storeName: storeName,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: [],
	chooseGoods: function chooseGoods(){
				for (var i = 0; i < 5; i++){
					var good = prompt("Какой тип товаров будем продавать?", "");
					
					if((typeof(good)) === 'string' && (typeof(good)) != null && good != '' && good.length < 50){
						console.log("Все верно!");
						mainList.shopGoods[i] = good;
					} else {

					}
				}
	},
	workTime: function workTime(time){
				if (time < 0){
					console.log("Такого просто не может быть");
				} else if (time > 8 && time < 20){
					console.log("Время работать");
					mainList.open = true;
					} else if (time < 24) {
						console.log("Уже слишком поздно");
						} else{
								console.log("В сутках только 24 часа");
							  }
				},
	showBudgetPerDay: function showBudgetPerDay(){
						alert(Math.round(mainList.budget / 30*10)/10);
					  },
	getDiscount: function getDiscount(discount){
					return (discount) ?  price = price * 0.8 : price;
			    },

	recruiteEmployer: function recruiteEmployer(){
							for(let i = 0; i < 4; i++){
								let nameOfEmployer = prompt("Имя нового сотрудника?");

								if((typeof(nameOfEmployer)) === 'string' && (typeof(nameOfEmployer)) != null && nameOfEmployer != ''){
										mainList.employers[i] = nameOfEmployer;
								} 
							}
						
					    },
					    
	 chooseShopItems: function chooseShopItems(){
	 	let items = prompt("Перечислите через запятую товары", "");
	 	while((typeof(items)) != 'string' || items == null || items === ''){
	 		items = prompt("Перечислите через запятую товары", "");
	 	}
	 	mainList.shopItems = items.split(",");
	 	mainList.shopItems.push(prompt("Подождите, еще ", ""));
	 	mainList.shopItems.sort();
 	 },/*Теперь метод проверяет что items содержит непустую строку*/

 	 showShopItems: function showShopItems(){
 	 	document.write("У нас вы можете купить: <br>");
 	 	mainList.shopItems.forEach(function(item, i, arr){
 	 		if(i == arr.length - 1){
 	 			document.write((i+1)+") "+ item);
 	 		} else { document.write((i+1)+") "+ item + "<br>");
 	 		}
 	 		
 	 	});
 	 },/*Метод выводящий на экран список товаров из массива shopItems*/

 	 showShop: function showShop(){
 	 	console.log("Наш магазин включает в себя: \n");
 	 	for(var key in mainList){
 	 		console.log(key + " = " + mainList[key] + "\n");	
 	 		
 	 	}
 	 }/*Метод выводящий в консоль все свойства и методы объекта mainList*/
} //mainList



let opn_btn = document.getElementById('open-btn');
let name_value = document.getElementsByClassName('name-value')[0];
let budget_value = document.getElementsByClassName('budget-value')[0];
let goods_value = document.getElementsByClassName('goods-value')[0];
let items_value = document.getElementsByClassName('items-value')[0];
let employers_value = document.getElementsByClassName('employers-value')[0];
let discount_value = document.getElementsByClassName('discount-value')[0];
let isopen_value = document.getElementsByClassName('discount-value')[0];



let goods_item = document.getElementsByClassName('goods-item')[0];

let goods_item_btn = document.getElementsByTagName('button')[1];
let count_budget_btn = document.getElementsByTagName('button')[2];
let hire_employers_btn = document.getElementsByTagName('button')[3];

console.log(goods_item_btn);
console.log(count_budget_btn);
console.log(hire_employers_btn);
let choose_item = document.querySelector('.choose-item');
let time_value = document.querySelector('.time-value');
let count_budget_value = document.querySelector('.count-budget-value');

let hire_employers_item = document.querySelectorAll('.hire-employers-item');
//console.log(hire_employers_item);