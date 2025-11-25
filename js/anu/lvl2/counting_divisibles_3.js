function counting_divisibles_3(N){
    var count = 0;
    for(let i =1;i<=N;i++){
        if(i % 3 == 0){
            count++;
        }
    }
    console.log(count);
}
counting_divisibles_3(10);
counting_divisibles_3(7);