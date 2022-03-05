require('dotenv').config({ path: __dirname + '/.discountenv' });

console.log('diwali discount is: ', process.env.diwaliDiscount);
