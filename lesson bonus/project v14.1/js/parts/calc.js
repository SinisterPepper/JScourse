function calc() {
	let persons = document.getElementsByClassName('counter-block-input')[0];
    let restDays = document.getElementsByClassName('counter-block-input')[1],
    	place = document.getElementById('select'),
    	totalValue = document.getElementById('total'),
    	personsSum = 0,
    	daysSum = 0,
    	total = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener('change', function() {
    	let reg = /^\d+$/;

    	if(reg.test(this.value)){
    		personsSum = +this.value;
			total = (daysSum + personsSum) * 4000;
			if (restDays.value === '' || persons.value === '' || 
	    		restDays.value === '0' || persons.value === '0') {
				totalValue.innerHTML = 0;
			} else {
				totalValue.innerHTML = total * place.options[place.selectedIndex].value;
			}
    	} else {
    		this.value = '';
    	}
    	
    });

    restDays.addEventListener('change', function() {
    	let reg = /^\d+$/;

    	if(reg.test(this.value)){
    		daysSum = +this.value;
	    	total = (daysSum + personsSum) * 4000;
	    	if (restDays.value === '' || persons.value === '' || 
	    		restDays.value === '0' || persons.value === '0') {
	    		totalValue.innerHTML = 0;
	    	} else {
	    		totalValue.innerHTML = total * place.options[place.selectedIndex].value;
	    	}
    	} else {
    		this.value = '';
    	}    	
    });

    place.addEventListener('change', function() {
    	if (restDays.value === '' || persons.value === '' || 
	    		restDays.value === '0' || persons.value === '0') {
    		totalValue.innerHTML = 0;
    	} else {
    		let a = total;
    		totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    	}
    });
}

module.exports = calc;