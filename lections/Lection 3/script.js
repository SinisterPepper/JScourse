/*function User(name, id){
	this.name = name;
	this.id = id;
	this.avatar = "Photo";
}

User.prototype.deleteAvatar = function() {
	this.avatar = null;
};
// Добавили функцию в прототип (класс)

john = new User("John", 25);

john.deleteAvatar();

function Admin(name, id){
	this.name = name;
	this.id = id;
	this.avatar = "Photo";
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.changeMyId = function(){
	this.id = 1;
	console.log("I am the boss");
}

let admin = new Admin("Admin", 3);

admin.deleteAvatar();
admin.changeMyId();

console.log(admin);*/

//es6:

class Options {
	constructor(height, width, bg){
		this.height =height;
		this.width = width;
		this.bg = bg;
	}

	createNewDiv(text){
		let div = document.createElement('div');
		div.textContent = text;
		div.style.cssText = `height: ${this.height};
							width: ${this.width} ;
							background-color: ${this.bg}`
		document.body.appendChild(div);
	}
} 

let obj = new Options('200px', '300px', 'red' );

obj.createNewDiv('MyDiv');

let obj1 = new Options('400px', '660px', 'blue');

obj1.createNewDiv('MyDiv');