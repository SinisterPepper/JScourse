/*btn.addEventListener('click', function(){
	alert("Что-то произошло!");
})*/
/*
let func1 = function(param, func2) {
	func2( function(param, func3){
		func3(function(param,func3){
			func4(function(param, func5){

			});
		});
	});
};*/

let drink = 1;
function shoot (arrow, headshot, fail) {
	console.log("Вы сделали выстрел...");
	setTimeout(function(){
		Math.random() > 0.5 ? headshot({}) : fail("Вы промахнулись");
	}, 3000)
};

function win(){
	console.log("Вы победили");
	(drink == 1) ? buyBeer() : giveMoney();
}

function buyBeer(){
	console.log("Вам купили пиво");
}

function giveMoney(){
	console.log("Вам дали деньги!");
}

function lose(){
	console.log("Вы проиграли!");
}

shoot({},
	function(mark){
		console.log("Вы попали в цель!");
		win(mark, buyBeer, giveMoney);
	},
	function(miss){
		console.error(miss);
		lose();
	}
	)
