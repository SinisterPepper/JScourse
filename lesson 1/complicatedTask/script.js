var num = 33721;

var mult = 1 ;

while (num){
	temp = num%10;
	num = (num-temp)/10;
	mult *= temp;
}


var poweredMult = mult ** 3;
var arr = poweredMult.toString().split('');
alert(arr[0]+arr[1]);

/*console.log(mult);
console.log(poweredMult);*/
