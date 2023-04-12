// complete the given function

function palindrome(str){
	if(str==str.reverse()) {
		return true;
	}
	else {
		return false;
	}
}
module.exports = palindrome
