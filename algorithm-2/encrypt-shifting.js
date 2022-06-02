const encrypt = function (str) {
    let strEncrypt = ''
    for (let index = 0; index < str.length; index++) {
        strEncrypt += String.fromCharCode(str.charCodeAt(index)+1);
    }
    str = strEncrypt
    return str
}
console.log(encrypt('cat'));