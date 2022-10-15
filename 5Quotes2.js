const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your famous person name ? ', function (famous_person) {
  rl.question('Whats his message? ', function (message) {
    console.log(`${famous_person} once said, "${message}"`);
    rl.close();
    process.exit(0);
  });
});