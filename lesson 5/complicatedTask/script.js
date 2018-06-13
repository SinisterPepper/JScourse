let date = new Date();
let date1 = new Date();
let mydiv1 = document.getElementsByTagName('div')[0];
let mydiv2 = document.getElementsByTagName('div')[1];

/*Пункт 1*/
let param = {
	hour: 'numeric',
	minute: 'numeric',
	second: 'numeric',
	day: 'numeric',
	month: 'numeric',
	year: 'numeric'
};
let today = date.toLocaleString("ru", param);
console.log(today);
let arr = today.split(', ').reverse();

/*let dateArr = arr[1].split('.');
let a = dateArr[0];
dateArr[0] = dateArr[1];
dateArr[1] = a;
arr[1] = dateArr.join('.');*/

mydiv1.textContent = arr.join(' ');


/*Пункт 2*/
function formatDate(date){

	let dd = date.getDate();
	if (dd < 10) {
		dd = '0' + dd;	
	}

	let mm = date.getMonth();
	if (mm < 10) {
		mm = '0' + mm;
	}

	return dd + "." + mm + '.' + date.getFullYear();
	

}
//console.log(formatDate(date));


/*Пункт 3*/

function getDayOfWeek(date) {

	let day = ['Воскресенье',
			   'Понедельник',
			   'Вторник', 
			   'Среда', 
			   'Четверг', 
			   'Пятница', 
			   'Суббота'];
	return day[date.getDay()];
}

mydiv2.textContent = getDayOfWeek(date);

/*Пункт 4*/

function howMuchToWait(date1, date2){
	let time = date2 - date1;
	return Math.round(time / (1000*60*60*24)); //time в миллисекундах. Делим на секунду,минуту, час и сутки.
}

/*Метод считает количество дней между датами date1 и date 2*/


let input1 = document.getElementsByClassName('date-value')[0];
let input2 = document.getElementsByClassName('date-value')[1];
let result = document.getElementsByClassName('between-date')[0];
let button = document.getElementsByClassName('button')[0];
let body = document.getElementsByTagName('body')[0];


let firstDate = [];
let secondDate = [];

body.addEventListener('change', function (event){
	let target = event.target;

	if(target.className == 'date-value'){
		if(input1.value === '' || input2.value === ''){
			button.disabled = true;
		} else{
			button.disabled = false;
		}
	}
	firstDate = input1.value.split(".");

	secondDate = input2.value.split(".");
});
/*Обработчик делает кнопку Посчитать неактивной пока не заполнены оба поля*/


button.addEventListener('click', function(){
	let date1 = new Date(firstDate[2], firstDate[1], firstDate[0]-1);
	let date2 = new Date(secondDate[2], secondDate[1], secondDate[0]-1 );
	result.value = howMuchToWait(date1, date2);
});
/*Обработчик который запускает метод howMuchToWait при клике на кнопку Посчитать*/

