function sumFibs(num) {
 
    const fib = [1,1];
    
    let i = 2;
    while(fib[i-2] + fib[i-1] <= num){
      fib.push(fib[i-2]+fib[i-1]);
      i++;
    }
    
    return fib.filter(n => n % 2 == 1).reduce((a,b) => a+b);  
}

console.log(sumFibs(4));