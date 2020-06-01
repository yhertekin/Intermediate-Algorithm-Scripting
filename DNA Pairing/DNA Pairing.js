const dna = {
    "A":"T",
    "T":"A",
    "C":"G",
    "G":"C"
}

function pairElementFirstApproach(str){

    return str.split("").map(item => [item, dna[item]])
}

function pairElement(str) {

    const myArr = []
    for(let i in str){
      myArr.push([str[i], dna[str[i]]])
    }
    return myArr;
}
  
console.log(pairElement("GCG"));
console.log(pairElementFirstApproach("GCG"));

  