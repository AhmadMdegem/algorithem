function nonRepeatingCharacter(str) {
    let charCounter = {}
    for (let index = 0; index < str.length; index++) {
        if (!charCounter[str[index]])
            charCounter[str[index]] = 1
        else {
            charCounter[str[index]] = 0
        }
    }
    for (let char in charCounter) {
        if (charCounter[char] === 1)
            return char
    }
}
console.log(nonRepeatingCharacter("aabbccdeef"));