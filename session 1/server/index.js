const calculator = (a, b) => {
	function add() {
		return a + b;
	}
	function subtract() {
		return a - b;
	}
	function multiply() {
		return a * b;
	}
	function divide() {
		return a / b;
	}

	return {
		add: add,
		subtract: subtract,
		multiply: multiply,
		divide: divide,
	};
};

const cal = calculator(12, 6);

console.log(cal.add());
console.log(cal.subtract());
console.log(cal.multiply());
console.log(cal.divide());
