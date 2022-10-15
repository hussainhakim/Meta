function math_operation (a, b, c) {
    let result = 0;
  
    try {
  
      switch(c) {
        case '+':
            result = a + b
          break;
  
        case '*':
            result = a * b
          break;
  
        case '-':
            result = a - b
          break;
  
       case '/': 
          if (b === 0) {
            throw "Can't divide by 0!"
          } else {
            result = a / b
          }
          break;
      }
    }
    catch(e) {
      console.log("There's an error: ", e)
    }
  
    return result;
  }
  
  console.log(math_operation(4,2,'*'));
  console.log(math_operation(16,8,'-'));
  console.log(math_operation(16,2,'/'));
  console.log(math_operation(4,4,'+'));