const camelCase = function (str) {
    str = str.toLowerCase()
    let strArray = str.split(' ')
    let strDummy = strArray[0]
    for (let index =1; index < strArray.length; index++) {
       strDummy += strArray[index][0].toUpperCase() + strArray[index].slice(1)
        
    }
    console.log(strDummy);
    
}
camelCase('camel case word')