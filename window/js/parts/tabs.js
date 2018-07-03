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