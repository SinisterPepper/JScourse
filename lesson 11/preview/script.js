/*let options = {
	width: 1366,
	height: 768,
	background: 'red',
	font: {
		size: "16px",
		color: "#fff"
	}
}


console.log(JSON.stringify(options));*/



let request = new XMLHttpRequest();
//1) Создаем объект запроса

request.open("GET", 'server.php', true, login, password);
//2) Настройка запрос (true - аасинхронность)

request.send();
//3) Отправили запрос

request.status
request.statusText //Текстовое описание отвевта сервера
request.responseText // Текстовый ответ от сервера
request.readyState //Текущее состояние запроса.