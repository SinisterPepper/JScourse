let budget, 
	storeName, 
	price = 10;

let opn_btn = document.getElementById('open-btn');
let name_value = document.getElementsByClassName('name-value')[0];
let budget_value = document.getElementsByClassName('budget-value')[0];
let goods_value = document.getElementsByClassName('goods-value')[0];
let items_value = document.getElementsByClassName('items-value')[0];
let employers_value = document.getElementsByClassName('employers-value')[0];
let discount_value = document.getElementsByClassName('discount-value')[0];
let isOpen = document.getElementsByClassName('isopen')[0];
let isopen_value = document.getElementsByClassName('isopen-value')[0];

let main_functions = document.getElementsByClassName('main')[0];


let goods_item = document.getElementsByClassName('goods-item');

let goods_item_btn = document.getElementsByTagName('button')[1];
let count_budget_btn = document.getElementsByTagName('button')[2];
let hire_employers_btn = document.getElementsByTagName('button')[3];

let choose_item = document.querySelector('.choose-item');
let time_value = document.querySelector('.time-value');
let count_budget_value = document.querySelector('.count-budget-value');

let hire_employers_item = document.querySelectorAll('.hire-employers-item');


opn_btn.addEventListener('click', () => {
	budget = prompt("Ваш бюджет на месяц?", "");

	while(isNaN(budget) || budget === '' || budget === null ){
		budget = prompt("Ваш бюджет?", "");
	}
	budget_value.textContent = budget;
	count_budget_btn.disabled = false; //Кнопка неактивна пока не заполнится поле Бюджет магазина

	storeName = prompt("Название вашего магазина?", '').toUpperCase();
	name_value.textContent = storeName;

});

goods_item_btn.addEventListener('click', () => {
	for (var i = 0; i < goods_item.length; i++){
		var a = goods_item[i].value;
					
		if((typeof(a)) === 'string' && (typeof(a)) !== null && a.length < 50){
			console.log("Все верно!");
			mainList.shopGoods[i] = a;
			goods_value.textContent = mainList.shopGoods;
		} else {
				i = i - 1;
			   }
	}
});


choose_item.addEventListener('change', () => {
	let items = choose_item.value;

	 if (isNaN(items) && items !== ''){
	 	mainList.shopItems = items.split(",");
		mainList.shopItems.sort();

		items_value.textContent  = mainList.shopItems;
	 }
});

time_value.addEventListener('change', () => {
	let time = time_value.value;

	if (time < 0){
		console.log("Такого просто не может быть");
		mainList.open = false;
		turnAllInputs (false);
	}   else if (time > 8 && time < 20){
			console.log("Время работать");
			mainList.open = true;
			turnAllInputs(true);

		}   else if (time < 24) {
				console.log("Уже слишком поздно");
				mainList.open = false;
				turnAllInputs (false);
	        }   else {
					console.log("В сутках только 24 часа");
					mainList.open = false;
					turnAllInputs (false);
				}
	if(mainList.open === true){
		isopen_value.style.backgroundColor = 'green';
		isOpen.textContent = 'Открыто';
	}   else{
		isopen_value.style.backgroundColor = 'red';
		isOpen.textContent = 'Закрыто';
	}
});


count_budget_btn.addEventListener('click', () => {
	count_budget_value.value = Math.round(budget / 30*10)/10;
});


hire_employers_btn.addEventListener('click', () => {
	for(let i = 0; i < hire_employers_item.length; i++){
		
		let name = hire_employers_item[i].value;
		mainList.employers[i] = name;
		employers_value.textContent += mainList.employers[i] + ', ';
	}
});


discount_value.addEventListener('click', () => {
	if(discount_value.style.backgroundColor !== 'green' ){
		discount_value.style.backgroundColor = 'green';
		mainList.discount = true;
	} else{
		discount_value.style.backgroundColor = 'red';
		mainList.discount = false;
	}
	
});
/*Теперь поле discount_value работает как переключатель. Пользователь может активировать или дективировать дисконтную систему*/

main_functions.addEventListener('change', function(event){
	let target = event.target;

	if (target.className === 'goods-item'){

		if(goods_item[0].value === '' || goods_item[1].value === '' || goods_item[2].value === '' ||
		   			goods_item[3].value === ''){
			   goods_item_btn.disabled = true;
		} else{
			   goods_item_btn.disabled = false;
	          }
	}

	if(target.className === 'hire-employers-item'){
		if(hire_employers_item[0].value === '' || hire_employers_item[1].value === '' || 
			hire_employers_item[2].value === ''){
			hire_employers_btn.disabled = true;
		} else{
			hire_employers_btn.disabled = false;
		}

	}
});
/*Обработчик для полей Категории товаров и  Имена сотрудников.
Регулирует доступ к кнопкам Утвердить и Нанять*/


function turnAllInputs (isOpen) {
	if(!isOpen){
		goods_item[0].disabled = true;
		goods_item[0].value = '';
		goods_item[1].disabled = true;
		goods_item[1].value = '';
		goods_item[2].disabled = true;
		goods_item[2].value = '';
		goods_item[3].disabled = true;
		goods_item[3].value = '';

		choose_item.disabled = true;
		choose_item.value = '';

		hire_employers_item[0].disabled = true;
		hire_employers_item[0].value = '';
		hire_employers_item[1].disabled = true;
		hire_employers_item[1].value = '';
		hire_employers_item[2].disabled = true;
		hire_employers_item[2].value = '';
		hire_employers_btn.disabled = true;
		goods_item_btn.disabled = true;
	} else{
		goods_item[0].disabled = false;
		goods_item[1].disabled = false;
		goods_item[2].disabled = false;
		goods_item[3].disabled = false;
		choose_item.disabled = false;
		hire_employers_item[0].disabled = false;
		hire_employers_item[1].disabled = false;
		hire_employers_item[2].disabled = false;
	}
}
/*Функция регулирующая доступ к кнопкам и полям, а также удаляющая значения полей после закрытия магазина. 
Вызывается в обработчике поля time_value*/


let mainList = {
	budget: budget,
	storeName: storeName,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: [],
	
	getDiscount: function getDiscount(discount){
					return (discount) ?  price = price * 0.8 : price;
			    },
	
 	 showShopItems: function showShopItems(){
 	 	document.body.innerHTML = "У нас вы можете купить: <br>";
 	 	mainList.shopItems.forEach(function(item, i, arr){
 	 		if(i == arr.length - 1){
 	 			document.body.innerHTML += ""+(i+1)+") "+ item;
 	 		} else { document.body.innerHTML += ''+(i+1)+") "+ item + "<br>";
 	 		}
 	 		
 	 	});
 	 },/*Метод выводящий на экран список товаров из массива shopItems*/

 	 showShop: function showShop(){
 	 	console.log("Наш магазин включает в себя: \n");
 	 	for(var key in mainList){
 	 		if(mainList.hasOwnProperty(key)){
 	 			console.log(key + " = " + mainList[key] + "\n");	
 	 		}
 	
 	 	}
 	 }/*Метод выводящий в консоль все свойства и методы объекта mainList*/
}; //mainList