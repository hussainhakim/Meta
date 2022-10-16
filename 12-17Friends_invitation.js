const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Give the comma separated list of invitees', (invitees) => {
  invitees = invitees.replace(/[\t\n\r]/gm, '');
  rl.question('Who will not be able to make it?', (removeInvitee) => {
    invitees_array = invitees.split(',');
    console.log("Original list of invitees are:")
    var iterator = invitees_array.values();
    for (let element of iterator) {
      console.log(element);
    }
    console.log(`${removeInvitee} will not be able to make it.`);
    console.log(`Removing ${removeInvitee} ...`);
    var filteredInvitees = invitees_array.filter(e => e !== removeInvitee);
    console.log("Tentative list of invitees are");
    filteredInvitees.forEach(element => {
      console.log(element);
    });

    rl.question('Weve got a bigger table. Add 3 more invitees', (invitees) => {
      invitees = invitees.replace(/[\t\n\r]/gm, '').split(',');
      // Add to start
      filteredInvitees.unshift(invitees.pop());
      // Add to middle
      let startIndex = Math.ceil(filteredInvitees.length / 2);
      filteredInvitees.splice(startIndex, 0, invitees.pop());
      //Add to end
      filteredInvitees.push(invitees.pop());

      console.log("Final list of invitees are");
      filteredInvitees.forEach(element => {
        console.log(element);
      });

      console.log("We've got a problem booking the table and only two people are invited");

      while (filteredInvitees.length > 0) {
        let inviteeMessage = ", you are not invited";
        if (filteredInvitees.length <= 2) {
          inviteeMessage = ", you are still invited";
        }
        let invitee = filteredInvitees.pop();
        console.log(`${invitee} ${inviteeMessage}`);
      }
      rl.close();
      process.exit(0);
    });
  });
});