const myMagicianName = ["David Blaine", "David Copperfield", "Dynamo"];

show_magicians(myMagicianName);
make_great(myMagicianName);
show_magicians(myMagicianName);

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
