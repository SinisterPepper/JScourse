function modals() {

	let popUpOverlay = document.querySelector('.popup');
	let popUpClose = document.getElementsByClassName('popup_close')[0];
	let orderCallBack = document.getElementsByClassName('phone_link')[0];
	let callTheMaster = document.getElementsByClassName('phone_link')[1];
	


	let popUpEngineerOverlay = document.querySelector('.popup_engineer');
	let popUpEngineerBtn = document.querySelector('.popup_engineer_btn');
	let popUpEngineerClose = document.getElementsByClassName('popup_close')[1];

	
	
	let timerId = setTimeout(function(){
		showPopUp.call(popUpOverlay);
		clearTimeout(timerId);
	}, 60000);


	document.body.addEventListener('click', function(event){
		event.preventDefault();
		if(event.target == popUpEngineerBtn){
			showPopUp.call(popUpEngineerOverlay);
		} 
		else if(event.target == callTheMaster || event.target == orderCallBack ){
			showPopUp.call(popUpOverlay);
		}
		
	});

	popUpOverlay.addEventListener('click', function(e) {
		if(e.target.className == 'popup'){
			closePopUp.call(popUpOverlay);
		}
	});
	popUpClose.addEventListener('click', function(){
		closePopUp.call(popUpOverlay);
	});


	popUpEngineerOverlay.addEventListener('click', function (e){
		let target = e.target;
		if(target.className == 'popup_engineer'){
			closePopUp.call(popUpEngineerOverlay);
		}
	});
	popUpEngineerClose.addEventListener('click', function(){
		closePopUp.call(popUpEngineerOverlay);
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