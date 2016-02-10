// Plain: abcdefghijklmnopqrstuvwxyz
// Cipher: zyxwvutsrqponmlkjihgfedcba

// need to keep non alphabetical characters except a white space

var plain = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var cipher = ["z", "y", "x", "w", "v", "u", "t", "s", "r", "q", "p", "o", "n", "m", "l", "k", "j", "i", "h", "g", "f", "e", "d", "c", "b", "a"];

var atbash = {

	encode: function(text){
	//returns an array of strings without any white space characters
		var stringArray = text.replace(/\s/ig,'').toLowerCase().split('');
		var answerArray = [];
		// return stringArray;
			for(var i=0; i<stringArray.length;i++){
					answerArray.push(cipher[plain.indexOf(stringArray[i])]);
			}
		// return answerArray.join('');
		
		return answerArray.join('').replace(/(.{5})/g,"$1 ").trim()//.match(/.{5}/g)//.join(' ');

	}

};

module.exports = atbash;




// 	for(var j=5;j<stringArray.length/5;j+=5){
// 			answer.splice(j,0," ");
// 	}
// return answer.join('');

// answerArray.push(plain.indexOf(stringArray[i]]))

// for(var j=0; j<stringArray.length;j++){
// 		if(stringArray[j] === plain[i]){
// 				// stringArray[j].replace(j,cipher[plain.indexOf(i)]);
// 				answerArray.push(cipher[plain.indexOf(i)])
// 		}
// }
