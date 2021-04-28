function BracketCombinations(numero) {
  
    //haremos un factorial para las combinaciones
    let factorial = (n) => {
      let k = 1;
      for(var i = n; i >= 1; i--){
        k = k * i;
      }
      return k;
    }
    
    // Formula de las combinaciones de parentesis
    const result = (factorial(2*numero))/((factorial(numero+1))*(factorial(numero)));
    return result; 
  }
     
  // llamamos desde la consola el numero que queramos conocer sus combinaciones
  console.log(BracketCombinations(4));