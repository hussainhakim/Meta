const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let alienArray = ['green', 'yellow', 'red'];
console.log('Take aim at the Alien with colors: ' + alienArray);
rl.question('Which Alien did you shoot?', function (alientColor) {
    alientColor = alientColor.replace(/[\t\n\r]/gm, '').toLowerCase();
    if (alientColor == 'green') {
        console.log('Congratulations! You\'ve earned 5 points.');
    } else {
        if (alienArray.indexOf(alientColor) >= 0)
            console.log('Congratulations! You\'ve earned 10 points.');
    }
    rl.question('Which Alien did you shoot?', function (alientColor) {
        alientColor = alientColor.replace(/[\t\n\r]/gm, '').toLowerCase();
        switch (alientColor) {
            case 'green':
                console.log('Congratulations! You\'ve earned 5 points.');
                break;
            case 'yellow':
                console.log('Congratulations! You\'ve earned 10 points.');
                break;
            case 'red':
                console.log('Congratulations! You\'ve earned 15 points.');
                break;
            default:
                console.log('Sorry! No points for you');
        }
        rl.close();
        process.exit(0);
    });
});