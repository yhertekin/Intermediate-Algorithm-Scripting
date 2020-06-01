function translatePigLatin(str) {

    const vowels = "aeiou";
    let word = "";

    if(vowels.includes(str[0])) 
      return str + "way"
    
    for(let i in str){
      if(!vowels.includes(str[i])){
        word += str[i];
      }
      else{
        return str.slice(i, i+word.length) + word + "ay"
      }
    }
    
    return str + "ay";
    
}
  
console.log(translatePigLatin("california"));
  