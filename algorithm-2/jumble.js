const colors = ["red", "indigo", "white", "teal", "yellow"];
const foods = ["bread", "cheese", "cucumber"];
    
const jumble = function (arr1, arr2) {
    let jumbledArr = []
    for(let item of arr2) {
        arr1.push(item)
    }
    while(arr1.length) {
        let randomNumber = Math.floor(Math.random() * arr1.length)
        jumbledArr.push(arr1.splice(randomNumber, 1)[0])
    }
    return jumbledArr
}
console.log(jumble(colors,foods));