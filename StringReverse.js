function reverseString(str) {
    const arr = str.split('')
    const reversedStr = arr.reverse().join('')
    return reversedStr
}
// Версия 2
function reverseStr(str) {
    const arr = str.split('')
    const reversedArr = arr.map((value, index, array) => {
       return array[arr.length - 1 - index]
    }).join('')
    return reversedArr
}

module.exports = reverseString;