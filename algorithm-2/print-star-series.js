function printStarSeries(num, count) {
    for (let i = 0; i < count; i++) {
        let word = ''
        let objStars = {}
        for (let index = 0; index < num; index++) {
            word += "*"
            objStars[index] = word
            console.log(objStars[index]);
        }
        for (let index = num - 2; index >= 0; index--) {
            console.log(objStars[index]);
        }
    }
}


printStarSeries(3, 2)
