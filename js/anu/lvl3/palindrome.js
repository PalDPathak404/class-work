function reverse_num(N){
    var reverse = Number(String(N).split("").reverse().join(""));
    console.log((reverse == N) ? ("isPalindrome") : ("notPalindrome"));
}
reverse_num(1234);
reverse_num(121);