const isUniqueChar = function (word) {
    let charIn = {}
    for (let index = 0; index < word.length; index++) {
        if (!charIn[word[index]])
            charIn[word[index]] = true
        else
            return false
    }
    return true
}

console.log(isUniqueChar('cat'));
console.log(isUniqueChar('hello'));
