/*function myModule(){
	this.hello = function () {
		return console.log('hello!');
	}

	this.goodbye = function(){
		return console.log('goodbye');
	}
}


module.exports = myModule;*/


//вариант с ES6

export let one = 1;

let two = 2;

export {two};

export function cons() {
	console.log(1);
}