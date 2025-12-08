function gcd_two(a, b){
	a = Math.abs(Math.trunc(a));
	b = Math.abs(Math.trunc(b));

	while(b !== 0){
		const temp = b;
		b = a % b;
		a = temp;
	}
	return a;
}

console.log(gcd_two(12, 18));   
console.log(gcd_two(5, 9));   
console.log(gcd_two(20, 100)); 