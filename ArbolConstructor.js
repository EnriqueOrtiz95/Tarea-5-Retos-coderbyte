function TreeConstructor(strArr) { 

    let padres = {}
    let hijos = {}
  
    for(i = 0; i < strArr.length; i++){
      let par = strArr[i].replace(/[()]/g,"").split(",")
      let hijo = par[0]
      let padre = par[1]
  
      if(padres[padre]){
        padres[padre].push(hijo)
      }else{
        padres[padre] = [hijo]
      }
      if(padres[padre].length > 2){
        return false
      }
      if(hijos[hijo]){
        return false
      }else{
        hijos[hijo] = padres
      }
      } 
      return true
  
  }
     
  // keep this function call here 
  console.log(TreeConstructor(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]));