function convertHTML(str) {
    const entities = {
      "&":"&amp;",
      "<":"&lt;",
      ">":"&gt;",
      '"':"&quot;",
      "'":"&apos;"
    }
    let myStr = "";
    for(let i in str){
      if(entities.hasOwnProperty(str[i])){
        myStr += entities[str[i]];
      }
      else{
        myStr += str[i];
      }
    }
  
    return myStr;
}
  
console.log(convertHTML('Stuff in "quotation marks"'));
   