let input = "banana";
let count = 0;
for(let i = 0;i<input.length;i++){
    if(input[i] == 'a' || input[i] == 'A'){
        count++;
    }
}
console.log("These many times a appreared in the word : " + count);