$(document).ready(function() { //Все что в скобка будет выполнено после прогрузки страницы

	$('.list-item:first').hover(function() { //callback функция при наведении на первый элемент класса list-item
		$(this).toggleClass('active'); //присваиваем элементу клаcc active при наведении (после класс будет пропадать)
		
	});

	$('.list-item:eq(2)').on('click', function(){ //получаем третий элемент и вешаем обработчик
		$('.image:even').fadeToggle('slow';) //получаем четную картинку и анимируем появление и исчезновение (медленно)
	});

	$('.list-item:eq(4)').on('click', function(){
		$('.image:odd').animate({
			opacity: 'toggle', //toggle - обратимый процесс
			height: 'toggle'
		}, 3000);
	});

})