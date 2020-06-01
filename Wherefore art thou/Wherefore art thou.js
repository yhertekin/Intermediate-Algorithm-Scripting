function whatIsInAName(collection, source) {

    return collection.filter(obj => Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] == source[key]));
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));