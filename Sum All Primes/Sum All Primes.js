function isPrime(num) {
    for(let i = 2; i < num; i++){
      if(num % i === 0) 
        return false;
    }
    return num > 1;
  }
  
  function sumPrimes(num) {
    let sum = 0;
    while(num > 0){
      if(isPrime(num)){
        sum += num;
      }
      num--;   
    }
    return sum;
}
  
console.log(sumPrimes(977));
console.log(isPrime(6))