function LongestWord(sen) { 

    var strArr = [];
   var strCount = {};
   var charMax = '';
   var returnStr = '';
 
   strArr = sen.split(' ');
   
   strArr.forEach(function(item, i) {
     strCount[item] = item.length;
   });
   
   for(var prop in strCount) {
     if(prop === '0') {
       charMax = strCount[prop];
       returnStr = prop;
     } else {
       if(strCount[prop] > charMax) {
         charMax = strCount[prop];
         returnStr = prop;
       }
     }
   }
   
   return returnStr;
 }
    
 // keep this function call here 
 console.log(LongestWord("Palabra mas larga!"));