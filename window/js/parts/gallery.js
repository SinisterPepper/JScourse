function gallery() {

	let gallery_container = document.getElementsByClassName('container')[4],
		gallery_content = gallery_container.getElementsByClassName('col-lg-3');
		gallery_block = gallery_container.getElementsByClassName('image_link');
	//console.log(gallery_content);

	gallery_container.addEventListener('click', function(event) {
		console.log(1);
		
	});


}
module.exports = gallery;