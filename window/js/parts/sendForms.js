function sendForm() {
	let message = new Object();
	message.loading = "Загрузка...";
	message.success = "Спасибо. Скоро мы с вами свяжемся!";
	message.failure = "Что-то пошло не так...";

	let callTheMasterBtn = document.getElementsByClassName('btn-block');

	let form = document.getElementsByClassName("form"),
		form_input = document.getElementsByClassName('form_input'),
		statusMessage = document.createElement('div');
	
	statusMessage.classList.add('status'); //Дописать стили


	document.body.addEventListener('click', function(event) {
		event.preventDefault()	
		let target = event.target;

		for(let i = 0; i < callTheMasterBtn.length; i++) {
			
			if(target == callTheMasterBtn[i]){
				
				form[i].appendChild(statusMessage);
			
				let inputName = form[i].getElementsByTagName('input')[0],
					inputPhone = form[i].getElementsByTagName('input')[1];
				
				sendRequest.call(form[i]);

				inputName.value = '';
				inputPhone.value = '';
				break;
			}
			//Очищаем поля ввода
			
		}		
	});

	document.body.addEventListener('keypress', function(event) {
		let target = event.target;
		if(target.name === 'user_phone'){
			event.preventDefault();
			
			if(/[\d]/i.test(event.key)){
				target.value += event.key;
			}
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
module.exports = sendForm;