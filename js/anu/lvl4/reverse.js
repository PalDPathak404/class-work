let input = "hello";
let result = "";

for(let i = input.length-1;i>=0;i--){
    result = result + input[i];
}
console.log(result);

/* 
Method - 2

let input = "hello";
input = input.split("").reverse().join("");
console.log(input); */