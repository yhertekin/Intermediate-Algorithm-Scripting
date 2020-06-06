function steamrollArray(arr, flat=[]) { 

    for(let i = 0; i < arr.length; i++){
      if(Array.isArray(arr[i])){
        steamrollArray(arr[i], flat);
      }
      else{
        flat.push(arr[i]);
      }
    };
  
    return flat;    
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
  