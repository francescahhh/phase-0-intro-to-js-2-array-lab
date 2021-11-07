let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(catName) {
    return cats.push(catName); 
}

function destructivelyPrependCat(catName) {
    return cats.unshift(catName); 
}

function destructivelyRemoveLastCat() {
    return cats.pop();
}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}

function appendCat(catName) {
    let newCats = [...cats, catName];
    return newCats;
}

function prependCat(catName) {
    let newCats = [catName, ...cats];
    return newCats;
}

function removeLastCat() {
    return cats.slice(0, -1);
}

function removeFirstCat() {
    return cats.slice(1);
}