import * as calculator from './calculatorEs6.mjs';

import { add } from './calculatorEs6.mjs';

import defaultExportedFunction from './calculatorEs6.mjs';

console.log(calculator.add(12, 3));

console.log(add(12, 3));

console.log(defaultExportedFunction(12, 3));

console.log(calculator.division(12, 3));
