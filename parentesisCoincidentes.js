function BracketMatcher(str) {
    let abierto = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '(') abierto++;
      if (str[i] === ')') abierto--;
      if (abierto < 0) return 0;
    }
  
    return abierto ? 0 : 1;
  }
     
  console.log(BracketMatcher("(((((hola k ace)))"));