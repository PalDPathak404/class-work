function fibonacci(N){
    let bag="";
    var first = 0;
    var second = 1;
    var next = first + second;
    if(N <4){
        if(N == 1){
            bag = bag + first + " ";
        }
        else if(N == 2){
            bag = bag + first + " " + second + " ";
        }
        else{
            bag = bag + first + " "+  second + " " +next + " ";
        }
    }
    else{
        bag = bag + first + " " + second + " " + next + " ";
        for(let i = 4;i<=N;i++){
            first = second;
            second = next;
            next = first + second;
            bag = bag + next + " ";
        }
    }
    console.log(bag);
}
fibonacci(5);
fibonacci(1);
fibonacci(7);
