function sum_1toN(N){
    var sum = 0;
    for(let i = 1 ; i<= N;i++){
        sum = sum + i;
    }
    console.log(sum);
}
sum_1toN(5);
sum_1toN(10);