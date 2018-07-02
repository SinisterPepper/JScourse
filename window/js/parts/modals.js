function modals() {

	popUpOverlay = document.querySelector('.popup');
	popUpClose = document.getElementsByClassName('popup_close')[0];
	orderCallBack = document.getElementsByClassName('phone_link')[0];
	callTheMaster = document.getElementsByClassName('phone_link')[1];
	

	popUpEngineerOverlay = document.querySelector('.popup_engineer');
	popUpEngineerBtn = document.querySelector('.popup_engineer_btn');
	popUpEngineerClose = document.getElementsByClassName('popup_close')[1];

	

	document.body.addEventListener('click', function(event){
		event.preventDefault();
		if(event.target == popUpEngineerBtn){
			showPopUp.call(popUpEngineerOverlay);

			popUpEngineerOverlay.addEventListener('click', function (e){
				let target = e.target;
				if(target.className == 'popup_engineer'){
					closePopUp.call(popUpEngineerOverlay);
				}
			});
			popUpEngineerClose.addEventListener('click', function(){
				closePopUp.call(popUpEngineerOverlay);
			});
		} 

		else if(event.target == callTheMaster || event.target == orderCallBack ){
			showPopUp.call(popUpOverlay);

			popUpOverlay.addEventListener('click', function(e){
				if(e.target.className == 'popup'){
					closePopUp.call(popUpOverlay);
				}
			});
			popUpClose.addEventListener('click', function(){
				closePopUp.call(popUpOverlay);
			});
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