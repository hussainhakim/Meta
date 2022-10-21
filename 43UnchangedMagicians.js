const myMagicianName = ["David Blaine", "David Copperfield", "Dynamo"];

show_magicians(myMagicianName);
let myMagiciansCopy = myMagicianName.map(x => x); //Create shallow copy of array
make_great(myMagiciansCopy);
show_magicians(myMagicianName); //Unchanged
show_magicians(myMagiciansCopy);//Great Magicians

function show_magicians(myMagicianName) {
    myMagicianName.forEach(element => {
        console.log(element);
    });
}

function make_great(myMagicianName) {
    for(let i=0;i<myMagicianName.length;i++) {
        myMagicianName[i] = "Great " + myMagicianName[i];
    }
}
