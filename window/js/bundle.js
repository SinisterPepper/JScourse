(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener("DOMContentLoaded", function(){

	let modals = require('../js/parts/modals.js');
	

	modals();

});	
},{"../js/parts/modals.js":2}],2:[function(require,module,exports){
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
},{}]},{},[1]);
