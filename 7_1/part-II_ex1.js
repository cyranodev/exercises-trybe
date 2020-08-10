const factorial = number => number > 1 ? number * factorial(number - 1) : 1
  


const factorial = number => 
number > 1 ?
number * factorial(
  number > 1 ? number * factorial(
    number => number > 1 ? number * factorial(
      number => number > 1 ? number * factorial(  
) : 1


console.log(factorial(5))