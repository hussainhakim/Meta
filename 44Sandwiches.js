const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Select Deal 1,2 or 3', (deal) => {
    deal = deal.replace(/[\s\t\n\r]/gm, '');

    const ingredientsDeal1 = ["Chicken", "Salad leaf", "Mayo", "Tomatoes"];
    const ingredientsDeal2 = ["Chicken", "Salad leaf", "Mayo"];
    const ingredientsDeal3 = ["Chicken", "Salad leaf"];

    let selectDeal = 0;
    switch (deal) {
        case '1':
            selectDeal = ingredientsDeal1.map(x => x);
            break;
        case '2':
            selectDeal = ingredientsDeal2.map(x => x);
            break;
        case '3':
            selectDeal = ingredientsDeal3.map(x => x);
            break;
        default:

    }


    console.log("You are ordering Sandwich with " + JSON.stringify(make_sandwich(selectDeal)));
    make_sandwich("a","b","c","d");
    make_sandwich("a","b","c");
    make_sandwich("a","b");
    rl.close();
    process.exit(0);
});


function make_sandwich(...selectDeal) {
    console.log("Summary of your sandwich ingredients are: " + selectDeal);
    return { ingredients: selectDeal }
}