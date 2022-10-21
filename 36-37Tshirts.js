make_shirt('S', 'Whatss Uppp!!');
make_shirt();

function make_shirt(mySize = 'L', myText = 'I Love Javascript!') {
    console.log("You are ordering " + mySize + " sized Tshirt with text " + "\'" + myText + "\' printed on it.");
}