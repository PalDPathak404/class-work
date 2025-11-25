function length_string(str){
    let i = 0;
    let count = 0;
    while(str[i]){
        count++;
        i++;
    }
    console.log(count);
}
length_string("hello");
length_string("Javascript");
