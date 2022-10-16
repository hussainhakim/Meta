const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Give the comma separated list of invitees', (invitees) => {
  invitees = invitees.replace(/[\t\n\r]/gm, '');
  let invitees_array = invitees.split(',');
  console.log(`Number of items in the list is ${invitees_array.length}`)
  rl.close();
  process.exit(0);
});
