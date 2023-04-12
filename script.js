// complete the given function

function palindrome(str){
	let arr = str.split("");
	arr.reverse();
	let rev= arr.join("");
	if(str==rev) {
		return true;
	}
	else {
		return false;
	}
}
module.exports = palindrome
