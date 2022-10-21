const myArray = [1,2,3,4,5,6,7,8,9];

for (const [index,value] of myArray.entries()) {
    if (index == 0) {
        console.log(value + 'st');
    } else if (index == 1) {
        console.log(value + 'nd');
    } else if (index == 2) {
        console.log(value + 'rd');
    } else {
        console.log(value + 'th');
    }
  }