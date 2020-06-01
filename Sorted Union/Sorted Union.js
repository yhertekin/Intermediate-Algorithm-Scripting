function uniteUnique(...arr) {
    const myArr = []

    arr.map(item => item.map(number => {
        if(!(number in myArr)) myArr.push(number)
    }));
    
    return myArr;
 
}
  
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
  