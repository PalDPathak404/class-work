function first_N_multiples_7(N){
    let bag="";
    for(let i = 1;i<=N;i++){
        bag = bag + i*7 + " ";
    }
    console.log(bag);
}
first_N_multiples_7(3);
first_N_multiples_7(5);
first_N_multiples_7(1);