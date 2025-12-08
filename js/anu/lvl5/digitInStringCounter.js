var input = "0P2al123";
var count = 0;
for(let i = 0;i<input.length;i++){
    if(input[i] == "0" || input[i] == "1" || input[i] == "2" || input[i] == "3" || input[i] == "4" || input[i] == "5" || input[i] == "6" || input[i] == "7" || input[i] == "8" || input[i] == "9"){
        count++;
    }
}

console.log("No. of digits in string : " + count);

/* Mehtod -2 
*/