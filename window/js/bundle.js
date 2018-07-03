(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener("DOMContentLoaded", function(){

	let modals = require('../js/parts/modals.js');
	let tabs = require('../js/parts/tabs.js');
	

	modals();
	tabs();

});	
},{"../js/parts/modals.js":2,"../js/parts/tabs.js":3}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
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
		}
	
	}
	/*Функция которая прячет содержание табов*/

	hideTabContent.call(glazing_block[1], 1);
	hideTabContent.call(decoration_block[1], 1);

	function showTabContent(b) {
		console.log(this.classList);
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

}
module.exports = tabs;
},{}]},{},[1]);
