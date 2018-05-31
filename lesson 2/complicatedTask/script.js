var week = [
			'Monday', 
			'Tuesday', 
			'Wednesday', 
			'Thursday', 
			'Friday', 
			'Saturday', 
			'Sunday'
			];

for (var i = 0; i < week.length; i++){
	switch (week[i]){

		case 'Saturday':
		case 'Sunday':
			document.write(week[i].bold() + "<br>");
			break;

		case 'Thursday':
			document.write(week[i].italics() + "<br>");
			break;
		//Или необходимо вычислить текущий день?

		default:
			document.write(week[i] + '<br>');
			break;
	}
}


var arr = [
		   '334534',
		   '35904569',
		   '743',
		   '49383',
		   '127',
		   '374',
		   '23',
		  ]

for (var j = 0;  j < arr.length; j++){
	if (arr[j].charAt(0) == '3' || arr[j].charAt(0) == '7'){
		console.log(arr[j]);
	}
}
