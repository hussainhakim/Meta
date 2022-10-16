const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Give the comma separated list of properties for Employee', (emp_properties) => {
    emp_properties = emp_properties.replace(/[\t\n\r]/gm, '');
    emp_properties = emp_properties.split(',');
    rl.question('Give the comma separated list of values for Employee properties', (emp_values) => {
        emp_values = emp_values.replace(/[\t\n\r]/gm, '');
        emp_values = emp_values.split(',');

        let objArr = [];
        const obj = emp_properties.reduce((accumulator, element, index) => {
            return { ...accumulator, [element]: emp_values[index] };
        }, {});
        objArr.push(obj);
        console.log(objArr[1]);
        console.log(objArr[0]);
        rl.close();
        process.exit(0);
    });
});