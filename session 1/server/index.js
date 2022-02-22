//SuperType constructor function
function SuperType() {
	this.name = 'Virat';
}

//SuperType prototype
SuperType.prototype.getSuperName = function () {
	return this.name;
};

//SubType prototype function
function SubType() {
	this.age = 26;
}

//Inherit the properties from SuperType
SubType.prototype = new SuperType();

//Add new property to SubType prototype
SubType.prototype.getSubAge = function () {
	return this.age;
};

//Create a SubType object
var subTypeObj = new SubType();
console.log('subTypeObj.name', subTypeObj.name); //Output: Virat
console.log('subTypeObj.age', subTypeObj.age); //Output: 26
console.log('subTypeObj.getSuperName()', subTypeObj.getSuperName()); //Output: Virat
console.log('subTypeObj.getSubAge()', subTypeObj.getSubAge()); //Output: 26

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');

var subTypeObj2 = new SubType();
console.log('2-subTypeObj.name', subTypeObj2.name); //Output: Virat
console.log('2-subTypeObj.age', subTypeObj2.age); //Output: 26
console.log('2-subTypeObj.getSuperName()', subTypeObj2.getSuperName()); //Output: Virat
console.log('2-subTypeObj.getSubAge()', subTypeObj2.getSubAge()); //Output: 26

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');

subTypeObj2.name = 'akash';
console.log('=======after changing the name property==========');
console.log('2-subTypeObj.name', subTypeObj2.name); //Output: Virat
console.log('subTypeObj.name', subTypeObj.name); //Output: Virat
console.log('2-subTypeObj.getSuperName()', subTypeObj2.getSuperName()); //Output: Virat
console.log('subTypeObj.getSuperName()', subTypeObj.getSuperName()); //Output: Virat

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');

var newObj = new SuperType();
newObj.__proto__.getSuperName = () => {
	return 'changed function definition';
};

console.log('2-subTypeObj.getSuperName()', subTypeObj2.getSuperName()); //Output: Virat
console.log('subTypeObj.getSuperName()', subTypeObj.getSuperName()); //Output: Virat
