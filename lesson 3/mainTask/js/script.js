let budget, 
	storeName, 
	time, 
	price;


function start(){
	budget = prompt("Ваш бюджет на месяц?", "");

	while(isNaN(budget) || budget === '' || budget == null ){
		budget = prompt("Ваш бюджет?", "");
	}
	storeName = prompt("Название вашего магазина?").toUpperCase();;
	
	time = 19;
}


//start();

var mainList = {
	budget: budget,
	storeName: storeName,
	shopGoods: [],
	employers: {
		staff:[]
	},
	open: false,
	discount: false
}

/*function Employer(nameOfEmployer) {
		this.nameOfEmployer = nameOfEmployer;
}
//Конструктор объекта Employer*/


function chooseGoods(){
	for (var i = 0; i < 5; i++){
		var good = prompt("Какой тип товаров будем продавать?", "");
		
		if((typeof(good)) === 'string' && (typeof(good)) != null && good != '' && good.length < 50){
			console.log("Все верно!");
			mainList.shopGoods[i] = good;
		} else {

		}
	}
}

//chooseGoods();

function workTime(time){
	if (time < 0){
		console.log("Такого просто не может быть");
	} else if (time > 8 && time < 20){
		console.log("Время работать");
		} else if (time < 24) {
			console.log("Уже слишком поздно");
			} else{
					console.log("В сутках только 24 часа");
				  }
}

//workTime(time);

function showBudgetPerDay(){
	alert(Math.round(mainList.budget / 30*10)/10);
}
/*Функция showBudgetPerDay() выводит бюджет за день*/


//showBudgetPerDay();


function getDiscount(discount){
	return (discount) ?  price = price * 0.8 : price;
}
/*Функция возвращает 80% от цены в зависимости от наличия скидки discount*/





/*Объект employers содержит массив staff содержащий имена сотрудников*/


for(let i = 0; i < 4; i++){
	let nameOfEmployer = prompt("Имя нового сотрудника?");
	if((typeof(nameOfEmployer)) === 'string' && (typeof(nameOfEmployer)) != null && nameOfEmployer != ''){
				
			recruiteEmployer(i,nameOfEmployer);
		} 

}

function recruiteEmployer(i,nameOfEmployer){
	mainList.employers.staff[i] = nameOfEmployer;
}
/*Функция добавляющая имя нового сотрудника в массив staff*/

console.log(mainList.employers);


//console.log(mainList);


