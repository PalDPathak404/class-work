var input1 = "Pal";
var input2 = "Pal";
var i = 0;
var j = 0;
var check = true;
while(i<input1.length){
    if(input1[i] != input2[j]){
        check = false;
        break;
    }
    i++;
    j++;
}
console.log(check);

//Mehod- 2  too great method
/* function compareStrings(str1, str2) {
    return str1 === str2;
}

// Test cases
console.log(compareStrings("hello", "hello")); // true
console.log(compareStrings("Hello", "hello")); // false
console.log(compareStrings("js", "js "));      // false
*/

/* Method 3
var input1 = "Pal";
var input2 = "Pal";
var check = false;

if(input1.valueOf() === input2.valueOf()){
    check = true;
}
console.log(check); */