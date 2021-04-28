var cadena = ["ahffaksfajeeubsne", "jefaa"]

function MinWindowSubstring(strArr) { 

    let string = strArr[0];
    let string2 = strArr[1];
    
    let cadenaCorta = null;
    
    for (let i = 0; i < string.length; i++) {
        for (let j = i; j < string.length; j++) {
            let testString = string.substr(i, j-i+1);
            if (subIncludesAll(testString, string2)) {
                if (cadenaCorta === null || testString.length < cadenaCorta.length) {
                    cadenaCorta = testString;
                }
            }
        }
    }
    return cadenaCorta;
    
    
    function subIncludesAll(str, string2) {
        for (let i = 0; i < str.length; i++) {
            if (string2.indexOf(str[i]) !== -1) {
                // reemplaza letras por vacio en cadena2
                string2 = string2.replace(str[i], '');
            }
        }
        return (string2.length === 0);
    }
}
   

console.log(MinWindowSubstring(cadena));