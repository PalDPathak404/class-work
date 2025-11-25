function sum_of_digits(N){
    var product = 1,temp = Math.abs(N),digi;
    while(temp > 0){
        digi = temp % 10;
        product = product * digi;
        temp = Math.floor(temp /10);
    }
    console.log(product);
}
sum_of_digits(123);
sum_of_digits(505);