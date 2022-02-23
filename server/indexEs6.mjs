import * as calculator from './calculatorEs6.mjs';

import { add } from './calculatorEs6.mjs';

import defaultExportedFunction from './calculatorEs6.mjs';

console.log(calculator.add(12, 3));

console.log(add(12, 3));

console.log(defaultExportedFunction(12, 3));

console.log(calculator.division(12, 3));

//////////////////////////====ARRAY METHODS=====//////////////////////////////////////////

import * as arrayMethods from './arrayMethodsES6Mod.mjs';

// https://www.digitalocean.com/community/tutorial_series/working-with-arrays-in-javascript
// https://www.youtube.com/watch?v=80KX6aD9R7M&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ

arrayMethods.concat();
arrayMethods.join();
arrayMethods.slice();
arrayMethods.indexOf();
arrayMethods.lastIndexOf();
arrayMethods.pop();
arrayMethods.push();
arrayMethods.shift();
arrayMethods.unshift();
arrayMethods.deleteElement();
arrayMethods.addWithSplice();
arrayMethods.removeWithSplice();
arrayMethods.addremoveWithSplice();
arrayMethods.fill();
arrayMethods.sort();
