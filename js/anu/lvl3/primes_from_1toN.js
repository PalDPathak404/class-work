function primes_from_1toN(N){
    let bag="";
    for(let i =2;i<=N;i++){
        var count = 0;
    for(let j =1;j<=i;j++){
        if(i % j == 0){
            count++;
        }
    }
    if(count<=2){
        bag = bag + i + " ";
    }
}
console.log(bag);
}

//another approach using the prime function
// function isPrime(N){
//     var count = 0;
//     var isPrime;
//     for(let i =1;i<=N;i++){
//         if(N % i == 0){
//             count++;
//         }
//     }
//   ((count>2) ? (isPrime = false) : (isPrime = true));
//   return isPrime;
// }
// function primes_from_1toN(N){
//     let bag="";
//     var num;
//     for(let j = 2;j<=N;j++){
//         var prime = isPrime(j);
//         if(prime){
//             bag = bag + j + " ";
//         }
//     }
//     console.log(bag);
// }


primes_from_1toN(10);
primes_from_1toN(5);
primes_from_1toN(2);