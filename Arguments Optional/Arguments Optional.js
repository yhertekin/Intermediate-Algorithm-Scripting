function addTogether(x, y) {
 
    if(typeof x != "number")
      return undefined;
  
    function add(y){
      if(typeof y == "number")
        return x + y;
      return undefined;
    }
  
    if(typeof y == "undefined"){
      return y => add(y);
    }
    return add(y);
}
  
console.log(addTogether(2)(1));
  