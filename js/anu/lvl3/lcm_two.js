// function lcm_two(){
// 	function gcd(a, b){
// 		a = Math.abs(Math.trunc(a));
// 		b = Math.abs(Math.trunc(b));
// 		while(b !== 0){
// 			const t = b;
// 			b = a % b;
// 			a = t;
// 		}
// 		return a;
// 	}

// 	function lcm_two(a, b){
// 		a = Math.trunc(a);
// 		b = Math.trunc(b);
// 		if(a === 0 || b === 0) return 0;
// 		return Math.abs((a / gcd(a, b)) * b);
// 	}

// 	// Test examples
// 	console.log(lcm_two(4, 6));   // 12
// 	console.log(lcm_two(5, 7));   // 35
// 	console.log(lcm_two(3, 9));   // 9

// }


function multi_table(N){
    let array = [];
   for(let i =1;i<11;i++){
     array.push(i*N) ;
   }
   return array;
}
var num1 = 4;
var num2 = 6;
let array1 = multi_table(num1);
let array2 = multi_table(num2);
let count = 0;
for(let i =0;i<array1.length - 1;i++){
    for(let j =0;j<array2.length - 1;j++){
        if(array1[i] == array2[j]){
            count++;
            console.log(array1[i]);
            break;
        }
    }
    if(count != 0){
        break;
    }
}