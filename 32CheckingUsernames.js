const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Give the comma separated list of user names', (current_users) => {
    current_users = current_users.replace(/[\s\t\n\r]/gm, '');
    current_users = current_users.split(',');
    rl.question('Give the comma separated list of new user names', (new_users) => {
        new_users = new_users.replace(/[\s\t\n\r]/gm, '');
        new_users = new_users.split(',');

        new_users.forEach(element => {
            if (!(current_users.indexOf(element) == -1)) {
                console.log(`${element} will need a new user name`);
            } else {
                console.log(`${element} username is available`);
            }
        });

        rl.close();
        process.exit(0);
    });
});