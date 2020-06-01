function fearNotLetter(str) {
    const alp = "abcdefghijklmnopqrstuvwxyz"
    let index = alp.indexOf(str[0]);
  
    for(let i = 1; i < str.length; i++){
      index++;
      if(alp.indexOf(str[i]) != index)
        return alp[index];    
    }
    return undefined;
  }
  
  console.log(fearNotLetter("abce"));
  