// complete the given function

function palindrome(str){
	let st = str.toLowerCase();
	let arr = st.split("");
	arr.reverse();
	let rev= arr.join("");
	if(st==rev) {
		return true;
	}
	else {
		return false;
	}
}
module.exports = palindrome
