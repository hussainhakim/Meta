const myArray = ["Fajita", "Tikka", "Hawaii"];
const myArrayVerb = ["I like ", "I want to order ", "I hate "];

myArray.forEach(element => {
    console.log(element);
});

myArray.forEach(element => {
    console.log(myArrayVerb[generateRandomInteger(0,2)] + element);
});

function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1))
}