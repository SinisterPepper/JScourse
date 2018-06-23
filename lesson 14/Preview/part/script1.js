function myModule(){
	this.hello = function () {
		return console.log('hello!');
	}

	this.goodbye = function(){
		return console.log('goodbye');
	}
}


module.exports = myModule;