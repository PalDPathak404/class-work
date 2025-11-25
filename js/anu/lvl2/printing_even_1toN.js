function printing_even_1toN(N){
    let bag="";
    for(let i =1;i<=N;i++){
        if(i %2 == 0){bag = bag + i + " ";}
    }
    console.log(bag);
}
printing_even_1toN(15);