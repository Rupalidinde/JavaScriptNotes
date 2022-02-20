**Assignment-1**

create a function calculator with two function arguments, and having four nested functions
called addition, subtraction, multiplication and division, which will return the result
(and wont log the result to console).

The calculator function should return these function as object

using this returned object console log the result of each operation

and write an object explaining execution context of every function and global execution context

---

**Assignment-2:**

Write the function to calculate the area of a circle.
Use regular as well as arrow notation
Assign this function to variable and use that variable to call this function

---

**Assignment-3:**

explain why console.log(temp) produces error in outerFunction but not in the innerFunction

also write scope chain for every function

```javascript
const outerFunction = () => {
	var outerVar1 = 'javascript';
	console.log(temp);

	function innerFunction() {
		var temp = 345;
		console.log(temp);
	}

	innerFunction();
};

outerFunction();
```
