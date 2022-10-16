const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Give the comma separated list of places you want to visit', (myPlaces) => {
    myPlaces = myPlaces.replace(/[\t\n\r]/gm, '');
    let myPlaces_array = myPlaces.split(',');
    console.log("So, these are the places you want to visit");

    console.log(myPlaces_array);

    let myPlaces_arraySorted = myPlaces_array.slice().sort();
    console.log("Sorted places you want to visit");
    console.log(myPlaces_arraySorted);

    let myPlaces_reverseSorted = myPlaces_arraySorted.reverse();
    console.log("Reverse sorted places you want to visit");
    console.log(myPlaces_reverseSorted);
    
    let myPlaces_reverse = myPlaces_array.map(myPlaces_array.pop,[...myPlaces_array]); 
    console.log("Reverse order of the original places you want to visit");
    console.log(myPlaces_reverse);
    console.log("So, these are the places you want to visit");
    console.log(myPlaces_array);
    let myPlaces_rev_rev = myPlaces_reverse.map(myPlaces_reverse.pop,[...myPlaces_reverse]); 
    console.log("Reverse of reverse order of the original places you want to visit");
    console.log(myPlaces_rev_rev);


    rl.close();
    process.exit(0);
});