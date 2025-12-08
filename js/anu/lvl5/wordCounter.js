let input = "This is a sentence   so";
let count = 0;
for(let i = 0;i<input.length;i++){
    if(input[i] != " " && input[i+1] == " "){
        count++;
    }
    if(str[str.length - 1] != " "){
        count++;
    }
}

console.log("No. of words : " + count);

//,ethod2 