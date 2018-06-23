function form() {
	let message = new Object();
	message.loading = "Загрузка...";
	message.success = "Спасибо. Скоро мы с вами свяжемся!";
	message.failure = "Что-то пошло не так...";

	let form = document.getElementsByClassName("main-form")[0],
		input = form.getElementsByTagName('input'),
		statusMessage = document.createElement('div');

	statusMessage.classList.add('status'); //Дописать стили

	form.addEventListener('submit', function(event) {
		event.preventDefault();
		form.appendChild(statusMessage);

		sendRequest.call(form);

		for (let i = 0; i < input.length; i++){
			input[i].value = '';
			//Очищаем поля ввода
		}
		
	});


	let contacts_form = document.getElementById('form'),
		contacts_input = contacts_form.getElementsByTagName('input');

	contacts_form.addEventListener('submit', function(event) {
		event.preventDefault();
		contacts_form.appendChild(statusMessage);
		
		sendRequest.call(contacts_form);
		
		for (let i = 0; i < input.length; i++){
			contacts_input[i].value = '';
			//Очищаем поля ввода
		}
	});


	function sendRequest(){
		let request = new XMLHttpRequest();
		request.open("POST", "server.php");

		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		let formData = new FormData(this);//Готовим данные к отправке.

		request.send(formData);
		//Дальше наблюдаем за статусом 

		request.onreadystatechange = function(){
			if(request.readyState < 4){
				statusMessage.innerHTML = message.loading;
			} else if (request.readyState === 4) {
				if(request.status == 200 && request.status < 300){
					statusMessage.innerHTML = message.success;	
					// Добавляем контент на страницу
				}
				else {
					statusMessage.innerHTML = message.failure;
				}
			}
		};
	}
    /*Функция для обращения к серверу*/
}

module.exports = form;