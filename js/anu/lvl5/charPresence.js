var input = "Javascript";
var ch = "e";
var check;

check = input.includes(ch);
if(check){
    console.log("INlcudes");
}
else{
    console.log("Not includes");
}


//Method - 2

// var input = "Javascripte";
// var ch = "e";

// let count = 0;
// for(let i = 0;i<input.length;i++){
//     if(input[i] == ch){
//         count++;
//     }
// }
// if(count>0){
//     console.log("Includes");
// }
// else{
//     console.log("Not Includes");
// }

//method - 3

// var i = 0;
// var j = string.length-1;
// while(i<=j){
//     if(string[i] == ch){
//         check = true;
//         break;
//     }
//     i++;
//     j--;
// }
// console.log(check);