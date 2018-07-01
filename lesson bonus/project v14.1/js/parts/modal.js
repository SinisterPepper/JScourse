function modal() {
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
}

module.exports = modal;