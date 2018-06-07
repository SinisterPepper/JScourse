let date = new Date();
let date1 = new Date();


/*Пункт 1*/
let param = {
	hour: 'numeric',
	minute: 'numeric',
	second: 'numeric',
	day: 'numeric',
	month: 'numeric',
	year: 'numeric'
}
let today = date.toLocaleString("ru", param)
let arr = today.split(', ').reverse();
document.write("<br>" +arr.join(' ') + "<br>");


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

document.write(getDayOfWeek(date));

/*Пункт 4*/

function howMuchToWait(date1, date2){
	let time = date2 - date1;
	console.log(typeof(time / (1000*60*60*24)))
	return time / (1000*60*60*24); //time в миллисекундах. Делим на секунду,минуту, час и сутки.
}

console.log(howMuchToWait(new Date(2018,0,1), new Date(2019,0,9)));

let input1 = document.getElementsByTagName('input')[0];
let input2 = document.getElementsByTagName('input')[1];
let input3 = document.getElementsByTagName('input')[2];

let button = document.getElementsByClassName('button')[0];


button.addEventListener('click', function(){
	console.log(input1.value);
	let date1 = new Date(input1.value);
	let date2 = new Date(input2.value);
	input3.value = howMuchToWait(date1, date2);
});


