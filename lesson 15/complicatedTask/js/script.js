function sum(a, b) {
	return a + b > 10;
}
sum(2,2)



let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let num = arr[1][1];


var each = function(startArr, f){return f(startArr)};

var a = [64, 49, 36, 25, 16];

var myFunc = function(a){
	var newArr = [];
	for (var i = 0; i < a.length; i++) {
		newArr[i] = Math.sqrt(a[i]);
	}
	return newArr;

}
console.log(typeof(each(a, myFunc)));
console.log(each(a, myFunc));

module.exports = {
	sum: sum,
	num: num,
	each: each
}
