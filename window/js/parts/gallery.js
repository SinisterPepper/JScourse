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
			} else{
				gallery_container.style.backgroundColor= '#fff';
				gallery_container.style.opacity = '1';
			}
			
				
		}
		
	});
	


}
module.exports = gallery;