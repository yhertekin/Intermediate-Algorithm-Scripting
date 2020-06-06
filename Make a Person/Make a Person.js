var Person = function(firstAndLast) {

    let names = firstAndLast.split(' ');
    
    this.getFirstName = function() {
      return names[0];
    };
    this.getLastName = function() {
      return names[1];
    };
    this.getFullName = function() {
      return names[0] + " " + names[1];
    };
    this.setFirstName = function(first) {
      names[0] = first;
    };
    this.setLastName = function(second) {
      names[1] = second;
    };
    this.setFullName = function(firstAndLast) {
      names = firstAndLast.split(' ');    
    };
    
};
  
var bob = new Person('Bob Ross');
bob.getFullName();
  