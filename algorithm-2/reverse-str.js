const reverse = function (str) {
    let reversed = str.split('').reverse().join('');
    return reversed
}
console.log(reverse("dog"));
console.log(reverse("race car"));