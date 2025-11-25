function count_digits(N){
    var count = 0,temp = Math.abs(N);
    while(temp > 0){
        count++;
        temp = Math.floor(temp / 10);
    }
    console.log(count);
}
count_digits(1234);
count_digits(-98);
