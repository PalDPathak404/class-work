function toUpperCase(str){
    let result = "";
    for(let i = 0; i < str.length; i++){
        let char = str[i];
        let code = char.charCodeAt(0);
        if(code >= 97 && code <= 122){
            result += String.fromCharCode(code - 32);
        } else {
            result += char;
        }
    }
    return result;
}

console.log(toUpperCase("hello"));
console.log(toUpperCase("Js"));        
console.log(toUpperCase("123abc"));     