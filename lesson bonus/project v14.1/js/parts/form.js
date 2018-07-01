let message = new Object();
	message.loading = "Загрузка...";
	message.success = "Спасибо. Скоро мы с вами свяжемся!";
	message.failure = "Что-то пошло не так...";

	let form = document.getElementsByClassName("main-form")[0],
		input = form.getElementsByTagName('input'),
		statusMessage = document.createElement('div');

	statusMessage.classList.add('status'); //Дописать стили

function form() {
	
	form.addEventListener('submit', function(event) {
		event.preventDefault();
		form.appendChild(statusMessage);

		let formData = new FormData(this);//Готовим данные к отправке.

		function postData(data) {
			return new Promise(function(resolve, reject){
				let request = new XMLHttpRequest();
				request.open("POST", "server.php");
				request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			
				request.onreadystatechange = function(){
					if(request.readyState < 4){
						resolve()
					} else if (request.readyState === 4) {
						if(request.status == 200 && request.status < 300){
							resolve
							// Добавляем контент на страницу
						} else {
							reject()
							}		
					}
				};
				request.send(formData);
				//Дальше наблюдаем за статусом 
			});
		}

		function clearInput(){
			for (let i = 0; i < input.length; i++){
				input[i].value = '';
				//Очищаем поля ввода
			}
		}

		postData(formData)
			.then(() => statusMessage.innerHTML = message.loading)
			.then(() => {
				statusMessage.innerHTML = '';
			})
			.catch(()=> statusMessage.innerHTML = message.failure)
			.then(clearInput)
		
	});
form(form);


/*	let contacts_form = document.getElementById('form'),
		contacts_input = contacts_form.getElementsByTagName('input');

	contacts_form.addEventListener('submit', function(event) {
		event.preventDefault();
		contacts_form.appendChild(statusMessage);
		
		sendRequest.call(contacts_form);
		
		for (let i = 0; i < input.length; i++){
			contacts_input[i].value = '';
			//Очищаем поля ввода
		}
	});*/

module.exports = form;