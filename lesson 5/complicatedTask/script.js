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
	return time / (1000*60*60*24); //time в миллисекундах. Делим на секунду,минуту, час и сутки.
}

console.log(howMuchToWait(new Date(2018,0,1), new Date(2019,0,9)));