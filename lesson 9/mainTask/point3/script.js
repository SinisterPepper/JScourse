let age = document.getElementById('age');

age.addEventListener('change', function(){
	showUser.call(age, 'Тихонов', 'Роман');
});

function showUser(surname, name){
	alert("Пользователь " + surname + " " +name + ", его возраст " + this.value);
}