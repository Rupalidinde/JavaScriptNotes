// or just write => require('dotenv').config();
// which uses defult configs
require('dotenv').config();
const PortNumber = process.env.PORT_Number;
module.exports = {
	PortNumber,
};
