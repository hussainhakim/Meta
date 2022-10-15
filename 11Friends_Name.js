console.log("What are your friends name? Give comma separated list");
process.stdin.setEncoding('utf8');
var friends_name;
process.stdin.on('readable', function() {
    friends_name = process.stdin.read();
    if (friends_name !== null) {
        friends_name = friends_name.replace(/[\s\t\n\r]/gm,'');
        let friends_array = friends_name.split(',');
        var iterator = friends_array.values();
        for (let elements of iterator) {
            console.log(elements);
          }
        process.exit();
    }
});