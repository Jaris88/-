function cats(drawCats) {
	for ( let index = 0; index < drawCats; index++) {
		console.log(index + " =-_-=");
	}
}
cats(100);


function add(number1, number2) {
	return number2 * number1;
}
function multiply(add, number3) {
	console.log(add + number3);
}
multiply(add(36325, 9824),777);


function array(a,b) {
	if (a.length !== b.length) {
		return false;
	}
	for ( let i = 0; i < a.length; i++) {
		if (a[i] !== b[i]) {
			return false;
		}
	}
	return true;
}
array([1,2,3,4],[1,2,3,4]);

