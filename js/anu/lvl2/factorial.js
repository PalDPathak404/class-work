function factorial(N){
    var product = 1;
    for(let i = 1 ; i<= N;i++){
        product = product * i;
    }
    if(N == 0){
        product = 1;
    }
    console.log(product);
}
factorial(3);
factorial(5);
factorial(0);