console.log("What is your favourite number?");
process.stdin.setEncoding('utf8');
let inputText;
process.stdin.on('readable', function() {
    inputText = process.stdin.read();
    inputText = inputText.replace(/[\t\n\r]/gm,'');
    let fav_number = parseInt(inputText);
    if (fav_number !== null && !isNaN(fav_number)) {
        console.log(`Your favourite number is ${fav_number}`);
        process.exit();
    } else {
        console.log(`Do you think ${inputText} is a number?`);
    }
});