let input = "hello";
let result = "";

for(let i = input.length-1;i>=0;i--){
    result = result + input[i];
}
if(result == input){
    console.log("Its a palindrome");
}
else{
    console.log("Its not a paliondrome");
}

/* another method to be used here is two pointer method
let i = 0;
let j = input.length - 1;

while(i<j){
 if(input[i] == input[j]){
    count++;
    i++;
    j--;
 }
    else{
    break;}
}
    if(count == Math.floor(input.length / 2)){
console.log("its a palindrome")}*/

/* by ai 
let input = "madam";
let i = 0, j = input.length - 1;
let isPalindrome = true;

while (i < j) {
    if (input[i] !== input[j]) {
        isPalindrome = false;
        break;
    }
    i++;
    j--;
}

if (isPalindrome) console.log("its a palindrome");
else console.log("not a palindrome");
 */