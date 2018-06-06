let point = document.getElementsByClassName('menu-item');
let list = document.getElementsByClassName('ul');


/*Пункт 1*/
point[0].parentNode.insertBefore(point[2], point[1]);

let li = document.createElement('li');

li.classList.add("menu-item");
point[0].parentNode.appendChild(li);
li.textContent = 'Пятый пункт';

/*Пунтк 2*/
document.body.style.background = 
				'url(img/apple_true.jpg) center no-repeat';

/*Пункт 3*/
let title = document.getElementById('title');

title.textContent = 'Мы продаем только подлинную технику Apple';


/*Пункт 4*/
let div = document.getElementsByClassName('column');
div[1].removeChild(div[1].childNodes[3]);


/*Пункт 5*/
let answer = document.getElementById('prompt');
let question =  prompt("Что вы думаете о технике Apple?", "Я фанат яблока!");
if ((typeof(question)) != 'string' || question == null || question === ''){
	 		answer.textContent = 'Да, словами не передать!';
}else{
	answer.textContent = question;
}
