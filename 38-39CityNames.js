
const placeArray = [["Karachi", "Pakistan"], ["Sydney", "Australia"], ["New York", "USA"], ["London", "UK"], ["Rome", "Italy"]];
placeArray.forEach(item => {
    console.log(print_places(item[0], item[1]));
})

function print_places(myCity, myCountry) {
    return myCity + ", " + myCountry;
}