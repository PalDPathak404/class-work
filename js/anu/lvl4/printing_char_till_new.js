function printing_char_till_new(str){
    let result = "";
    for(let i = 0; i < str.length; i++){
        result += str[i];
        if(i < str.length - 1){
            result += "  ";
        }
    }
    console.log(result);
}
printing_char_till_new("cat");
printing_char_till_new("hi");