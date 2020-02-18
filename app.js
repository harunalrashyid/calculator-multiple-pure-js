let numberValue = [];
let resultValue = document.querySelector('.calculator__result-value');

let number = document.querySelectorAll('.calculator__number');
let checkbox = document.querySelectorAll('.calculator__checkbox');
let countChecked = checkbox.length;

let operationIncrement = document.querySelector('.calculator__operation-increment');
let operationDecrement = document.querySelector('.calculator__operation-subtract');
let operationMultiply = document.querySelector('.calculator__operation-multiply');
let operationDivide = document.querySelector('.calculator__operation-divide');

const validateCheckBox = () => {
	checkbox.forEach(function(e, i) {
	    e.addEventListener('change', function() {
	    	if (!e.checked) {
	    		number[i].setAttribute('disabled', '');
	    		countChecked -= 1;
	    	} else {
	    		number[i].removeAttribute('disabled');
	    		countChecked += 1;	    		
	    	}

	    	if (countChecked < 2) return alert('check number input minimal 2 (dua)');	        
	    })
	});	
}

const extractInputValue = element => {
	element.forEach((e, i) => { 
		if(e.value && !e.disabled) return numberValue.push(e.value);
	});
};

const parseToNumber = input => {
	return input.map(Number);
}

const increment = input => {
	return parseToNumber(input).reduce( (sum, value) => sum + value);
};

const decrement = input => {
	return parseToNumber(input).reduce( (sum, value) => sum - value);
};

const multiply = input => {
	return parseToNumber(input).reduce( (sum, value) => sum * value);
};

const divide = input => {
	return parseToNumber(input).reduce( (sum, value) => sum / value);
};		

const resetValue = () => {
	return numberValue = [];
};

const actionIncrement = () => {
	operationIncrement.addEventListener('click', function() {
		extractInputValue(number);
		resultValue.innerHTML = increment(numberValue);
		resetValue();
	});
}

const actionDecrement = () => {
	operationDecrement.addEventListener('click', function() {
		extractInputValue(number);
		resultValue.innerHTML = decrement(numberValue);
		resetValue();
	});
}

const actionMultiply = () => {
	operationMultiply.addEventListener('click', function() {
		extractInputValue(number);
		resultValue.innerHTML = multiply(numberValue);
		resetValue();
	});
}

const actionDivide = () => {
	operationDivide.addEventListener('click', function() {
		extractInputValue(number);
		resultValue.innerHTML = divide(numberValue);
		resetValue();
	});
}

validateCheckBox();
actionIncrement();
actionDecrement();
actionMultiply();
actionDivide();