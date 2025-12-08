let input = "hello World";
let result = "";

for(let i =0;i<input.length;i++){
    if(input[i] != " "){
        result += input[i];
    }
}
console.log(result);

/* method -2 
 let arr=str.split(" "):
console.log(arr):

let res-arr.join(""):
console.log(res);*/