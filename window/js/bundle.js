popUpCalcData = {};
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener("DOMContentLoaded", function(){

	let modals = require('../js/parts/modals.js');
	let tabs = require('../js/parts/tabs.js');
	let timer = require('../js/parts/timer.js');
	let sendForm = require('../js/parts/sendForms.js');
	let gallery = require('../js/parts/gallery.js');
	

	modals();
	tabs();
	timer();
	sendForm();
	//gallery();
});	
},{"../js/parts/gallery.js":2,"../js/parts/modals.js":3,"../js/parts/sendForms.js":4,"../js/parts/tabs.js":5,"../js/parts/timer.js":6}],2:[function(require,module,exports){
function gallery() {

	let gallery_container = document.getElementsByClassName('works')[0],
		gallery_content = gallery_container.getElementsByClassName('col-lg-3');
		gallery_block = gallery_container.getElementsByClassName('image_link');
	//console.log(gallery_content);

	gallery_container.addEventListener('click', function(event) {
		let target = event.target;

		if(target.className == "lupa" || target.className == 'gallery_img'){
			if(gallery_container.style.opacity == '1') {
				gallery_container.style.backgroundColor= '#080808';
				gallery_container.style.opacity = '0.5';
				document.body.style.overflow = 'hidden';
			} else{
				gallery_container.style.backgroundColor= '#fff';
				gallery_container.style.opacity = '1';
				document.body.style.overflow = '';
			}
			
				
		}
		
	});
	


}
module.exports = gallery;
},{}],3:[function(require,module,exports){
function modals() {

	let popUpOverlay = document.querySelector('.popup'),
		popUpClose = document.getElementsByClassName('popup_close')[0],
		orderCallBack = document.getElementsByClassName('phone_link')[0],
		callTheMaster = document.getElementsByClassName('phone_link')[1];
	


	let popUpEngineerOverlay = document.querySelector('.popup_engineer'),
		popUpEngineerBtn = document.querySelector('.popup_engineer_btn'),
		popUpEngineerClose = document.getElementsByClassName('popup_close')[1];

	
	let popUpCalcBtn = document.getElementsByClassName('popup_calc_btn'),
		popUpCalcOverlay = document.querySelector('.popup_calc'),
		popUpCalcContent = document.querySelector('.popup_calc_content'),
		inputWidth = popUpCalcOverlay.getElementsByClassName('form-control')[0],
		inputHeight = popUpCalcOverlay.getElementsByClassName('form-control')[1],
		popUpCalcClose = document.querySelector('.popup_calc_close'),
		popUpCalcNextBtn = document.getElementsByClassName('popup_calc_button')[0];

	

	let popUpCalcProfileOverlay = document.querySelector('.popup_calc_profile'),
		popUpCalcProfileContent = document.querySelector('.popup_calc_profile_content'),
		inputCold = document.getElementsByClassName('checkbox')[0],
		inputWarn = document.getElementsByClassName('checkbox')[1],
		coldCheckbox = document.getElementsByClassName('checkbox-custom')[0],
		warmCheckbox = document.getElementsByClassName('checkbox-custom')[1],
		popUpCalcProfileClose = document.querySelector('.popup_calc_profile_close'),
		popUpCalcProfileNextBtn = document.getElementsByClassName('popup_calc_profile_button')[0];

		
	let popUpCalcEndOverlay = document.querySelector('.popup_calc_end'),
		popUpCalcEndClose = document.querySelector('.popup_calc_end_close');



	let timerId = setTimeout(function(){
		showPopUp.call(popUpOverlay);
		clearTimeout(timerId);
	}, 60000);


	document.body.addEventListener('click', function(event){
		event.preventDefault();
		let target = event.target;
		if(target == popUpEngineerBtn){
			showPopUp.call(popUpEngineerOverlay);
		} 
		else if(target == callTheMaster || target == orderCallBack ){
			showPopUp.call(popUpOverlay);
		}
		else if(target.className.indexOf('popup_calc_btn') != -1) {
			showPopUp.call(popUpCalcOverlay);

			
		}
		else if(target == popUpCalcNextBtn) {
			closePopUp.call(popUpCalcOverlay);
			popUpCalcData.width = inputWidth.value;
			popUpCalcData.height = inputHeight.value;
			inputWidth.value = '';
			inputHeight.value = '';
			showPopUp.call(popUpCalcProfileOverlay);
		}
		else if(target == popUpCalcProfileNextBtn) {
			closePopUp.call(popUpCalcProfileOverlay);
			inputCold.removeAttribute('checked');
			inputWarn.removeAttribute('checked');
			showPopUp.call(popUpCalcEndOverlay);
		}
		
	});


	/*Обработчики для закрытия модального окна popup*/
	popUpOverlay.addEventListener('click', function(e) {
		if(e.target.className == 'popup'){
			closePopUp.call(popUpOverlay);

		}
	});
	popUpClose.addEventListener('click', function(){
		closePopUp.call(popUpOverlay);
	});
	
	/*Обработчики для закрытия модального окна popupEngineer*/
	popUpEngineerOverlay.addEventListener('click', function (e){
		let target = e.target;
		if(target.className == 'popup_engineer'){
			closePopUp.call(popUpEngineerOverlay);
		}
	});
	popUpEngineerClose.addEventListener('click', function(){
		closePopUp.call(popUpEngineerOverlay);
	});

	/*Обработчик для закрытия модального окна popupCalc*/
	popUpCalcClose.addEventListener('click', function(){
		closePopUp.call(popUpCalcOverlay);
		inputWidth.value = '';
		inputHeight.value = '';
		popUpCalcData = {};
	});

	/*Обработчик для закрытия модального окна popupCalcProfile*/
	popUpCalcProfileClose.addEventListener('click', function(){
		closePopUp.call(popUpCalcProfileOverlay);
		inputCold.removeAttribute('checked');
		inputWarn.removeAttribute('checked');
		popUpCalcData = {};
	});

	/*Обработчик для закрытия модального окна popupCalcEnd*/
	popUpCalcEndClose.addEventListener('click', function(){
		closePopUp.call(popUpCalcEndOverlay);
		popUpCalcEndOverlay.getElementsByTagName('input')[0].value = '';
		popUpCalcEndOverlay.getElementsByTagName('input')[1].value = '';
		popUpCalcData = {};
	});

	/*Обработчик не позволяющий вводить ничего кроме цифр в поля Ширина и Высота*/
	popUpCalcContent.addEventListener('keypress', function(event){
		let target = event.target;
		if(target.className === 'form-control'){
			event.preventDefault();
			if(/[\d]/i.test(event.key)){
				target.value += event.key;
			}
			if(target.className === 'form-control'){
				if(inputWidth.value === '' || inputHeight.value === ''){
					popUpCalcNextBtn.disabled = true;
				} else{
					popUpCalcNextBtn.disabled = false;
				}
			}
		}
	});
	/*Обработчик событий позволяющий выбрать только один профиль и разблокирующий кнопку Далее*/
	popUpCalcProfileContent.addEventListener('click', function(event) {
		let target = event.target;
		if(target === coldCheckbox) {
			if (inputCold.hasAttribute('checked')){
				inputCold.removeAttribute('checked');
				popUpCalcData.thermal = '';
				popUpCalcProfileNextBtn.disabled = true;
			} else {
				inputCold.setAttribute('checked', 'checked');
				inputWarn.removeAttribute('checked');
				popUpCalcData.thermal = 'cold';
				popUpCalcProfileNextBtn.disabled = false;
			}
			
		} else if (target === warmCheckbox) {
			if (inputWarn.hasAttribute('checked')){
				inputWarn.removeAttribute('checked');
				popUpCalcData.thermal = '';
				popUpCalcProfileNextBtn.disabled = true;
			} else {
				inputWarn.setAttribute('checked', 'checked');
				popUpCalcData.thermal = 'warm';
				inputCold.removeAttribute('checked');
				popUpCalcProfileNextBtn.disabled = false;
			}
		}
	});



	function showPopUp(){
		document.body.style.overflow = 'hidden';
		this.style.display = 'flex';
	}

	function closePopUp(){
		this.style.display = 'none';
		document.body.style.overflow = '';
	}
}
module.exports = modals;
},{}],4:[function(require,module,exports){
function sendForm() {
	let message = new Object();
	message.loading = "Загрузка...";
	message.success = "Спасибо. Скоро мы с вами свяжемся!";
	message.failure = "Что-то пошло не так...";

	let callTheMasterBtn = document.getElementsByClassName('btn-block');

	let form = document.getElementsByClassName("form"),
		form_input = document.getElementsByClassName('form_input'),
		statusMessage = document.createElement('div');
	
	statusMessage.classList.add('status'); //Дописать стили


	document.body.addEventListener('click', function(event) {
		event.preventDefault()	
		let target = event.target;

		for(let i = 0; i < callTheMasterBtn.length; i++) {
			
			if(target == callTheMasterBtn[i] && i !== 8){
				
				form[i].appendChild(statusMessage);
			
				let inputName = form[i].getElementsByTagName('input')[0],
					inputPhone = form[i].getElementsByTagName('input')[1];
				
				sendRequest.call(form[i]);

				inputName.value = '';
				inputPhone.value = '';
				break;
			} else if(target == callTheMasterBtn[i] && i == 8){

				form[i].appendChild(statusMessage);

				popUpCalcData.inputName = form[i].getElementsByTagName('input')[0].value;
				popUpCalcData.inputPhone = form[i].getElementsByTagName('input')[1].value;
				console.log(popUpCalcData);
				sendRequest.call(popUpCalcData);
				form[i].getElementsByTagName('input')[0].value = '';
				form[i].getElementsByTagName('input')[1].value = '';
				popUpCalcData = {};
			}
			//Очищаем поля ввода
			
		}		
	});

	document.body.addEventListener('keypress', function(event) {
		let target = event.target;
		if(target.name === 'user_phone'){
			event.preventDefault();
			
			if(/[\d]/i.test(event.key)){
				target.value += event.key;
			}
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
}
module.exports = sendForm;
},{}],5:[function(require,module,exports){
function tabs() {

	let glazing_container = document.getElementsByClassName('container')[2];
	let glazing_header = glazing_container.getElementsByClassName('glazing_slider')[0];
	let glazing_block = glazing_container.getElementsByClassName('glazing_block');
	let glazing_links = glazing_container.getElementsByTagName('a');
	let glazing_content = glazing_container.getElementsByClassName('row');

	let decoration_container = document.getElementsByClassName('container')[3],
		decoration_header = decoration_container.getElementsByClassName('decoration_slider')[0],
		decoration_block = decoration_container.getElementsByClassName('decoration_item'),
		decoration_links = decoration_container.getElementsByClassName('no_click'),
		decoration_content = decoration_container.getElementsByClassName('row')[0].children;
	
	let popUpCalc_container = document.getElementsByClassName('popup_calc_content')[0],
		popUpCalc_header = popUpCalc_container.getElementsByClassName('balcon_icons')[0].getElementsByTagName('img'),
		popUpCalc_content = popUpCalc_container.getElementsByClassName('big_img')[0].getElementsByTagName('img');

	
	function hideTabContent(a) {
		if(this.className.indexOf('glazing_block') !== -1){
			for(let i = a; i < glazing_content.length; i++) {
				glazing_content[i].style.display = 'none';
				glazing_links[i].classList.remove('active');
			}

		} else if (this.className.indexOf('decoration_item') != -1) {
			for(let j = a; j < decoration_content.length; j++) {
				decoration_content[j].style.display = 'none';
				decoration_links[j].classList.remove('after_click');
			}
		} else if (this.id.indexOf('type') != -1) {
			for(let j = a; j < popUpCalc_content.length; j++) {
				popUpCalc_content[j].style.display = 'none';
				popUpCalc_header[j].style.width = "20%";
			}
		}
	
	}
	/*Функция которая прячет содержание табов*/

	hideTabContent.call(glazing_block[1], 1);
	hideTabContent.call(decoration_block[1], 1);
	hideTabContent.call(popUpCalc_content[1], 1);

	function showTabContent(b) {
		if(this.className.indexOf('glazing_block') != -1 && 
				glazing_content[b].style.display == 'none'){
			
			hideTabContent.call(glazing_block[b], 0);
			glazing_content[b].style.display = 'flex';
			glazing_links[b].classList.add('active');
		} 
		else if (this.className.indexOf('decoration_item') != -1 &&
				decoration_content[b].style.display == 'none'){
			
			hideTabContent.call(decoration_block[b], 0);
			decoration_content[b].style.display = 'flex';
			decoration_links[b].classList.add('after_click');
		} 
		else if (this.className.indexOf('type') != -1) {
			hideTabContent.call(popUpCalc_content[b], 0);
			popUpCalc_content[b].style.display = 'inline-block';
			popUpCalc_header[b].style.width = "30%";
		}
	}
	/*Функция показывающая содержание таба*/
	

	glazing_header.addEventListener('click', function(event) {
		let target = event.target;
		if(target.className.indexOf('glazing_block') != -1) {
			for(let i = 1; i <= glazing_block.length; i++) {
				if(target.className.indexOf(i) != -1) {
					showTabContent.call(glazing_block[i-1], i-1);
					break;
				}
			}
		}
	});

	decoration_header.addEventListener('click', function(event) {
		let target = event.target;

		if(target.className.indexOf('decoration') != -1) {
			for(let i = 1; i <= decoration_block.length; i++) {
				if(target.className.indexOf(i) != -1) {
					showTabContent.call(decoration_block[i-1], i-1);
					break;
				}
			}
		}
	});


	popUpCalc_container.addEventListener('click', function(event){
		let target = event.target;

		if(target.className.indexOf('type') != -1) {
			
			for(let i = 1; i <= popUpCalc_header.length; i++) {
				if(target.className.indexOf(i) != -1) {
					showTabContent.call(popUpCalc_header[i-1], i-1);
					break;
				}
			}
		}
	});
}
module.exports = tabs;
},{}],6:[function(require,module,exports){
function timer() {

	let deadline = "2018-07-05";
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

		if(days < 10) {days = "0" + days;}
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
},{}]},{},[1]);
