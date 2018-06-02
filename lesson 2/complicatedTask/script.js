var week = [
			'Monday', 
			'Tuesday', 
			'Wednesday', 
			'Thursday', 
			'Friday', 
			'Saturday', 
			'Sunday'
			];

var date = new Date();
day = date.getDay();
console.log(day);

for (var i = 0; i < week.length; i++){
	switch (week[i]){

		case 'Saturday':
			if(day == 6){
				document.write(week[i].italics().bold() + "<br>");
			} else {
				document.write(week[i].bold() + "<br>");
			}
			break;
			
		case 'Sunday':
			if (day == 0) {
				document.write(week[i].bold().italics() + "<br>");
			} else {
				document.write(week[i].bold() + "<br>");
			}
			
			break;

		default:
			if (i == day - 1){
				document.write(week[i].italics() + "<br>");
			} else{
				document.write(week[i] + '<br>');
			}
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
