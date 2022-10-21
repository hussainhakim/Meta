const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your age', function (inputAge) {
    inputAge = inputAge.replace(/[\t\n\r]/gm, '');
    let age_number = parseInt(inputAge);
    if (age_number !== null && !isNaN(age_number)) {
        if (age_number < 2) {
            console.log('You\'re a baby');
        } else if (age_number >=2 && age_number < 4) {
            console.log('You\'re a toddler');
        } else if (age_number >=4 && age_number < 13) {
            console.log('You\'re a kid');
        } else if (age_number >=13 && age_number < 20) {
            console.log('You\'re a teenager');
        } else if (age_number >=20 && age_number < 65) {
            console.log('You\'re a adult');
        } else if (age_number >= 65) {
            console.log('You\'re a elder');
        }
    }
    rl.close();
    process.exit(0);
});