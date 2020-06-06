function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    
    arr.forEach(obj => {
      obj.orbitalPeriod = Math.round(2*Math.PI*Math.sqrt((earthRadius+obj.avgAlt)**3/GM));
      delete obj.avgAlt;
    });
  
    return arr;
}
  
console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
  