function sum_of_digits(N){
    var sum = 0,temp = Math.abs(N),digi;
    while(temp > 0){
        digi = temp % 10;
        sum = sum + digi;
        temp = Math.floor(temp /10);
    }
    console.log(sum);
}
sum_of_digits(123);
sum_of_digits(505);