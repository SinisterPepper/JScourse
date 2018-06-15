/*function User(name, id){
	this.name = name;
	this.id = id;
	this.human = true;
	this.hello = function(){
		alert("Hello " + this.name);
	}
}

User.prototype.exit = function(name) {
	alert("Пользователь " + this.name + " ушел");
};

let roman = new User('Roman', 23);
let ivan = new User('Ivan', 24);*/


/*let user = {
	name: "John"
}*/
/*function sayName(){
	console.log(this);
	console.log(this.name);
}*/

/*function sayName(surname){
	console.log(this);
	console.log(this.name + surname);
}
console.log(sayName.call(user, " Smith"));
console.log(sayName.apply(user, [' Snow']));
*/



/*function count(number){
	return this*number;
}

let double = count.bind(2); //2 будет подставляться в this.
console.log(double(3));
console.log(double(10));
*/


//1) Если функция вызвана просто так, то ее this = window или undefined если активирован use strict
// 2) Если функция вызывается в объекте, this = объект
// 3) Конструктор (new) - this = созданный объект
// 4) Указание конкретного контекста - call, apply, bind



let btn = document.getElementsByTagName('button')[0];

/*btn.addEventListener('click', function(){
	this.style.backgroundColor = "red";
})*/

btn.addEventListener('click', () =>{
	console.log(this); //получим Window (особенность стрелочной функции)
});


/*'use strict'
num = 4;
console.log(num);*/


/*'use strict'

function showThis(a,b){
	console.log(this);
	function sum(){
		console.log(this);
		return a + b; // Он ищет их в window
	}
	console.log(sum());
}

showThis(4,5);
//showThis(5,5);*/


/*let obj = {
	a: 20,
	b: 15,
	sum: function(){
		function shout(){
			console.log(this);
		}// Функция потеряла контекст выполнения, т.к. вызвана не как метод какого-либо объекта
		shout();
	}
};
obj.sum();*/

