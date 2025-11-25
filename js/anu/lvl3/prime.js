function isPrime(N){
    var count = 0;
    for(let i =1;i<=N;i++){
        if(N % i == 0){
            count++;
        }
    }
    console.log((count>2) ? ("notPrime") : ("isPrime"));
}
isPrime(2);
isPrime(17);
isPrime(15);