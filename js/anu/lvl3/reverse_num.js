function reverse_num(N){
    var temp = 0;
    if(N<0){
        N = N * -1;
        temp = 1;
    }
    N = Number(String(N).split("").reverse().join(""));
    if(temp == 1){
        N = N *-1;
    }
   console.log(N);
}
reverse_num(1234);
reverse_num(-321); 