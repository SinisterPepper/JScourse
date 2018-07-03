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
			showPopUp.call(popUpCalcProfileOverlay);
		}
		else if(target == popUpCalcProfileNextBtn) {
			closePopUp.call(popUpCalcProfileOverlay);
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
	});

	/*Обработчик для закрытия модального окна popupCalcProfile*/
	popUpCalcProfileClose.addEventListener('click', function(){
		closePopUp.call(popUpCalcProfileOverlay);
	});

	/*Обработчик для закрытия модального окна popupCalcEnd*/
	popUpCalcEndClose.addEventListener('click', function(){
		closePopUp.call(popUpCalcEndOverlay);
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
				popUpCalcProfileNextBtn.disabled = true;
			} else {
				inputCold.setAttribute('checked', 'checked');
				inputWarn.removeAttribute('checked');
				popUpCalcProfileNextBtn.disabled = false;
			}
			
		} else if (target === warmCheckbox) {
			if (inputWarn.hasAttribute('checked')){
				inputWarn.removeAttribute('checked');
				popUpCalcProfileNextBtn.disabled = true;
			} else {
				inputWarn.setAttribute('checked', 'checked');
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