console.log("What is your personName?");
process.stdin.setEncoding('utf8');
var personName;
process.stdin.on('readable', function() {
    personName = process.stdin.read();
    if (personName !== null) {
        console.log("Hello ".concat(personName, "Would you like to learn some Javascript today?"));
        process.exit();
    }
});