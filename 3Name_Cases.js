console.log("What is your name?");
process.stdin.setEncoding('utf8');
var name;
process.stdin.on('readable', function() {
    name = process.stdin.read();
    if (name !== null) {
        console.log("Your name in different cases:")
        console.log(name.toLowerCase() + name.toUpperCase() + toTitleCase(name));
        process.exit();
    }
});

function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }