console.log("What is your name?");
process.stdin.setEncoding('utf8');
var person_name;
process.stdin.on('readable', function() {
    person_name = process.stdin.read();
    if (person_name !== null) {
        var statement ="\tHello ".concat(person_name, ".\rThis statement with whitespaces and line breaks");
        console.log(statement);
        var statement1 = statement.replace(/[\t\n\r]/gm,'');
        statement1 = statement1.replace(' with ',' without ');
        console.log(statement1);
        process.exit();
    }
});