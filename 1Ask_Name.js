console.log("What is your name?");
process.stdin.setEncoding('utf8');
var name;
process.stdin.on('readable', function() {
    name = process.stdin.read();
    if (name !== null) {
        console.log("Hello ".concat(name, "Would you like to learn some Javascript today?"));
        process.exit();
    }
});