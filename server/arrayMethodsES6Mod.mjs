const log = console.log;

export function concat() {
	// Create arrays of monovalves and bivalves
	let monovalves = ['abalone', 'conch'];
	let bivalves = ['oyster', 'mussel', 'clam'];

	// Concatenate them together into shellfish variable
	let shellfish = monovalves.concat(bivalves);
	log(shellfish);
}

export function join() {
	let fish = ['piranha', 'barracuda', 'koi', 'eel'];
	// Join the elements of an array into a string

	// If separator omitted, the array elements are separated with a comma.
	let fishString = fish.join();
	log(fishString);

	let fishStringWithHyphen = fish.join('-');
	log(fishStringWithHyphen);
}

export function slice() {
	let fish = ['piranha', 'barracuda', 'koi', 'eel'];
	// Slice a new array from 2 to 4
	let fishWithShortNames = fish.slice(2, 4);
	log(fishWithShortNames);

	// Slice a new array from 2 to the end of the array
	fishWithShortNames = fish.slice(2);

	log(fishWithShortNames);
}

export function indexOf() {
	let fish = ['piranha', 'barracuda', 'koi', 'barracuda'];
	// Find the first instance of an element
	let index = fish.indexOf('barracuda');
	log(index);

	//If the given argument is a value that does not exist in the array, it will return -1.
	index = fish.indexOf('akash');
	log(index);
}

export function lastIndexOf() {
	let fish = ['piranha', 'barracuda', 'koi', 'barracuda'];
	// Find the first instance of an element
	let index = fish.lastIndexOf('barracuda');
	log(index);

	//If the given argument is a value that does not exist in the array, it will return -1.
	index = fish.lastIndexOf('akash');
	log(index);
}

export function pop() {
	const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
	log('fruits before pop => ', fruits);
	let poppedFruit = fruits.pop();
	log('fruits after pop', fruits);

	// The pop() method returns the value that was "popped out":
	log('popped Fruit => ', poppedFruit);
}

export function push() {
	const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
	log('fruits before PUSH => ', fruits);
	let newLength = fruits.push('KIWI');
	log('fruits after PUSH => ', fruits);

	// The push() method returns the new array length:
	log('popped Fruit => ', newLength);
}

export function shift() {
	// The shift() method removes the first array element and "shifts" all other elements to a lower index.

	const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
	log('fruits before shift => ', fruits);
	fruits.shift();
	log('fruits after shift => ', fruits);
}

export function unshift() {
	// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

	const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
	log('fruits before unshift => ', fruits);
	let newLength = fruits.unshift('KIWI');
	log('fruits after unshift => ', fruits);

	// The unshift() method returns the new array length.
	log('NEW LENGTH AFTET UNSHIFT => ', newLength);
}

export function deleteElement() {
	// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

	const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
	log('fruits before delete => ', fruits);
	delete fruits[0];
	log('fruits after delete => ', fruits);
}

export function addWithSplice() {
	// splice(index number, number of items to remove, items to add)

	let fish = ['piranha', 'barracuda', 'koi', 'eel'];

	// Splice a new item number into index position 1
	fish.splice(1, 0, 'manta ray');

	log(fish);
}

export function removeWithSplice() {
	// splice(index number, number of items to remove, items to add)
	let fish = ['piranha', 'barracuda', 'koi', 'eel'];

	// Remove two items, starting at index position 1
	fish.splice(1, 2);

	log(fish);
}

export function addremoveWithSplice() {
	// splice(index number, number of items to remove, items to add)
	let fish = ['piranha', 'barracuda', 'koi', 'eel'];

	// Remove two items and add one
	fish.splice(1, 2, 'manta ray');

	log(fish);

	fish.splice(1, 0, 'first-fish', 'second-fish');
	log(fish);
}

export function fill() {
	let fish = ['piranha', 'barracuda', 'koi', 'eel'];

	// Replace all values in the array with "shark"
	fish.fill('shark');

	log(fish);
}

export function sort() {
	let fish = ['piranha', 'barracuda', 'koi', 'eel'];
	// Sort items in array
	fish.sort();
	log(fish);

	//Since sort() is based on the first unicode character, it will sort uppercase items before lowercase.
	fish = ['piranha', 'barracuda', 'Koi', 'eel'];
	fish.sort();
	log(fish);

	//Numbers come before both uppercase and lowercase characters.
	fish = ['piranha', 'barracuda', 'Koi', '1 eel'];
	fish.sort();
	log(fish);

	// sort() will not sort an array of numbers by size by default. Instead, it will only check the first character in the number.
	let numbers = [42, 23, 16, 15, 4, 8];
	numbers.sort();
	log(numbers);

	// In order to sort numbers properly, you could create a comparison function as an argument.
	// Function to sort numbers by size
	const sortNumerically = (a, b) => {
		return a - b;
	};
	numbers.sort(sortNumerically);
	log(numbers);
	log(numbers.sort((a, b) => b - a));

	//object array sort
	let employees = [
		{ name: 'John', salary: 90000, hireDate: new Date(2011, 10, 30) },
		{ name: 'David', salary: 75000, hireDate: new Date(2011, 11, 30) },
		{ name: 'Ana', salary: 80000, hireDate: new Date(2022, 10, 30) },
	];
	employees.sort(function (x, y) {
		return x.salary - y.salary;
	});

	console.table(employees);

	// by name
	employees.sort(function (x, y) {
		let a = x.name.toUpperCase(),
			b = y.name.toUpperCase();
		return a == b ? 0 : a > b ? 1 : -1;
	});

	console.table(employees);

	// by date
	employees.sort(function (x, y) {
		let a = new Date(x.hireDate),
			b = new Date(y.hireDate);
		return a - b;
	});

	console.table(employees);
}
