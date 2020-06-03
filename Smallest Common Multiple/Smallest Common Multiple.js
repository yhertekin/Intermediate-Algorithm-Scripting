function gcd(a, b){
    if(b == 0)
        return a;
    return gcd(b, a%b)
}

function lcm(a,b){
    return (a*b) / gcd(a, b);
}
  
function smallestCommons(arr) {
    
    arr.sort((a,b) => a-b);

    let min = arr[0];
    let max = arr[1];
    let flag = min;

    while(min <= max){
        flag = lcm(flag, min);
        min++;
    }
    return flag;
}
  
  
  console.log(smallestCommons([2,10]));
  