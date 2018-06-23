/*function User(name, age){
	this.name = name;
	let userAge = age;

	this.say = function() {
		alert("Имя пользователя: ${this.name}, возраст: ${userAge}");
	}

	this.getAge = function() {
		return userAge;
	}

	this.setAge = function(age) {
		if(typeof age === 'number' && age > 0 && age < 110){
			userAge = age;
		} else{
			console.log("Недопустимое значение");
		}
	}
}

let roman = new User('Roman', 25);

console.log(roman.name);
console.log(roman.getAge());
roman.setAge(23);
console.log(roman.getAge());*/


/*let number = 1;

(function(){
	let number = 2;
	console.log(number);

	return console.log(number + 3);
}()) //Функция вызывает себя на месте. 
//Наружные скобки обозначают function expression (без скобок будет function declaretion и будет ошибка ибо она не может быть анонимной)

console.log(number);*/


let user = (function () {
	let privat = function() {
		console.log("I'm privat!");
	};

	let sayHello = function(){
			console.log('Hello');
	};
	/*Приватные методы*/

	return {
		sayHello: sayHello,
		privat: privat
	}
	/*Доступный для всех только sayHello*/
}())

console.log(user.privat());
console.log(user.sayHello());