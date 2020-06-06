function truthCheck(collection, pre) {

    return collection.every(obj => {
      if(obj[pre])
        return true;
      return false;
    });

}
  
console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
  