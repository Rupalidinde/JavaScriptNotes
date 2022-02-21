var log = console.log;

log('Inside global execution context');

function functionOne() {
	log('Inside function one');

	function setTimeoutFunction() {
		log('Inside setTimeoutFunction: I will be executed atleast after 1 sec');
	}

	setTimeout(setTimeoutFunction, 1000);

	for (var i = 0; i < 100000000; i++) {
		// Blocking code. This makes the for loop to execute for more than 1 second
		// Still setTimeoutFunction is not executed. It gets executed only after
		// last statement of the code
	}

	log('Exiting functionOne');
}

functionOne();

log('Exiting global execution context');
