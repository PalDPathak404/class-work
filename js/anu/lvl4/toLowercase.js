let input = "HELLO";
let store = [];
let result = "";

for (let i = 0; i < input.length; i++) {
    store.push(input.charCodeAt(i));
}

for (let j = 0; j < store.length; j++) {
    if (store[j] > 64 && store[j] < 91) {
        store[j] = store[j] + 32;
    }
    result += String.fromCharCode(store[j]);
}

console.log(result); 
