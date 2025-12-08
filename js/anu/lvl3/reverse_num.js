// function reverse_num(N){
//     var temp = 0;
//     if(N<0){
//         N = N * -1;
//         temp = 1;
//     }
//     N = Number(String(N).split("").reverse().join(""));
//     if(temp == 1){
//         N = N *-1;
//     }
//    console.log(N);
// }
// reverse_num(1234);
// reverse_num(-321); 
//method 2
function method_2(N){
let check = 1;
if(N<0){
    check = 1;
    n= Math.abs(N);
}
N = Number(String(N).split("").reverse().join(""));
console.log(N);
}
method_2(100);