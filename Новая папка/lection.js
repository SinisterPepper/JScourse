function isSimple(n){
	if(n === 1){
		return true;
	}
	for(let i = 2; i <= n; i++){
		if(n%i == 0 && i != n){
			return false;
		}
	}
	return true;
}
let arr;

function getSimpleNumbers(a, b){
	let arr = [];
	for(let i = a; i <= b; i++){
		if(isSimple(i)){
			arr.push(i);
		}
	}
	return arr;	
}

arr = getSimpleNumbers(1,100);

//console.log(arr);

arr.forEach(function (item, i, arr){
	document.write(item + " - делители этого числа: 1 и " + (item) + "<br>");
});