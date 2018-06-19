window.addEventListener("DOMContentLoaded", function(){

	let tab = document.getElementsByClassName("info-header-tab"),
		tabContent = document.getElementsByClassName('info-tabcontent');
		info_header = document.getElementsByClassName('info-header')[0];

	function hideTabContent(a){
		for(let i = a; i < tabContent.length; i++){
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);


	function showTabContent(b){
		if(tabContent[b].classList.contains('hide')){
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info_header.addEventListener('click', function(event){
		let target = event.target;
		if(target.className == 'info-header-tab'){
			for(let i = 0; i < tab.length; i++){
				if(target == tab[i]){
					showTabContent(i);
					break;
				}
			}
		}
	});
//Timer

	let deadline = "2018-06-16";
	function getTimeRemaining(endtime){
		
		let t = Date.parse(endtime) - Date.parse(new Date());//Указанная дата - дата сейчас
		if(t < 0){
			return {
			'total': t,
			'hours': '00',
			'minutes': '00',
			'seconds': '00'
			};
		}
		let seconds = Math.floor((t/1000) % 60),
			minutes = Math.floor((t/1000/60) % 60),
			hours = Math.floor((t/(1000*60*60)));
		if(hours < 10){hours = "0" + hours;}
		if(minutes < 10){minutes = "0" + minutes;}
		if(seconds < 10){seconds = "0" + seconds;}
		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}


	function setClock(id, endtime){
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours');
			minutes = timer.querySelector('.minutes');
			seconds = timer.querySelector('.seconds');
		let timeInterval;

			function updateClock(){
				let t = getTimeRemaining(endtime);
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
	
	//Modal
	let more = document.querySelector('.more'),
	 	overlay = document.querySelector('.overlay'),
	 	close = document.querySelector('.popup-close');

	let info = document.getElementsByClassName('info')[0];
	/*Дальше идут обработчики на каждый таб*/
	
	info.addEventListener('click', function(event){
		let target = event.target;
		if(target.className == 'description-btn'){
			showPopUp.call(target);
		}
		close.addEventListener('click', function(){
			overlay.style.display = 'none';
			target.classList.remove('more-splash');
			document.body.style.overflow = '';
		});
	});

	
	/*Обработчик на кнопку Узнать больше под таймером*/
	more.addEventListener('click', function(){
		showPopUp.call(more);
		close.addEventListener('click', function(){
			overlay.style.display = 'none';
			more.classList.remove('more-splash');
			document.body.style.overflow = '';
		});
	});



	function showPopUp(){
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	}
	/*Функция вызова модального окна*/


	//Form
	let message = new Object();
	message.loading = "Загрузка...";
	message.success = "Спасибо. Скоро мы с вами свяжемся!";
	message.failure = "Что-то пошло не так...";

	let form = document.getElementsByClassName("main-form")[0],
		input = form.getElementsByTagName('input'),
		statusMessage = document.createElement('div');

	statusMessage.classList.add('status'); //Дописать стили

	form.addEventListener('submit', function(event) {
		event.preventDefault();
		form.appendChild(statusMessage);

		sendRequest.call(form);

		for (let i = 0; i < input.length; i++){
			input[i].value = '';
			//Очищаем поля ввода
		}
		
	});


	let contacts_form = document.getElementById('form'),
		contacts_input = contacts_form.getElementsByTagName('input');

	contacts_form.addEventListener('submit', function(event) {
		event.preventDefault();
		contacts_form.appendChild(statusMessage);
		
		sendRequest.call(contacts_form);
		
		for (let i = 0; i < input.length; i++){
			contacts_input[i].value = '';
			//Очищаем поля ввода
		}
	});


	function sendRequest(){
		let request = new XMLHttpRequest();
		request.open("POST", "server.php");

		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		let formData = new FormData(this);//Готовим данные к отправке.

		request.send(formData);
		//Дальше наблюдаем за статусом 

		request.onreadystatechange = function(){
			if(request.readyState < 4){
				statusMessage.innerHTML = message.loading;
			} else if (request.readyState === 4) {
				if(request.status == 200 && request.status < 300){
					statusMessage.innerHTML = message.success;	
					// Добавляем контент на страницу
				}
				else {
					statusMessage.innerHTML = message.failure;
				}
			}
		};
	}

});