function sumAll(arr) {
    const myArr = arr.sort((a, b) => a-b);
    
    const first = myArr[0];
    const second = myArr[1];
  
    return (second - first + 1)*(second+first)/2
    
  }
  
  console.log(sumAll([1, 4]));
  