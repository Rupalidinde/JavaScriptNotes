function add(a, b) {
	return a + b;
}

function multiply(a, b) {
	return a * b;
}

var division = (a, b) => {
	return a / b;
};

function secretFunction(a, b) {
	return `a - b = ${a - b}`;
}

module.exports = {
	add,
	multiply,
	division,
};
