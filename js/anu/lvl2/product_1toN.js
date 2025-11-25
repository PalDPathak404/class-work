function product_1toN(N){
    var product = 1;
    for(let i = 1 ; i<= N;i++){
        product = product * i;
    }
    console.log(product);
}
product_1toN(4);
product_1toN(5);