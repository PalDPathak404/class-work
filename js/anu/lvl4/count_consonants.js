function count_consonants(str){
    str = str.toLowerCase();
    let count = 0;
    for(let i = 0;i<str.length;i++){
        if(str[i] != "a" && str[i] != "e" && str[i] != "i" && str[i] != "o" && str[i] != "u" && str[i] != " "){
            count++;
        }
    }
    console.log(count);
}
count_consonants("hello");
count_consonants("a e i");