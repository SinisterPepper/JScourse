function timer() {

	let deadline = "2018-07-08";
	function getTimeRemaining(endtime) {
		
		let t = Date.parse(endtime) - Date.parse(new Date());//Указанная дата - дата сейчас
		if(t < 0){
			return {
			'total': t,
			'days': '00',
			'hours': '00',
			'minutes': '00',
			'seconds': '00'
			};
		}
		let seconds = Math.floor((t/1000) % 60),
			minutes = Math.floor((t/1000/60) % 60),
			hours = Math.floor((t/(1000*60*60)%24)),
			days = Math.floor((t/(1000*60*60*24)));

		if(hours < 10){hours = "0" + hours;}
		if(minutes < 10){minutes = "0" + minutes;}
		if(seconds < 10){seconds = "0" + seconds;}
		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	function setClock(id, endtime){
		let timer = document.getElementById(id),
			days = timer.querySelector('.days'),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds');
		let timeInterval;

			function updateClock(){
				let t = getTimeRemaining(endtime);
				days.innerHTML = t.days;
				hours.innerHTML = t.hours;
				minutes.innerHTML = t.minutes;
				seconds.innerHTML = t.seconds;
				if(t.total <= 0){
					clearInterval(timeInterval);
				}
			}
			updateClock();
			timeInterval = setInterval(updateClock, 1000);
	}
	setClock('timer', deadline);
}
module.exports = timer;