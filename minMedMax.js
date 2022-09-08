const { template } = require('@babel/core')

function minMedMax(num1, num2, num3) {
    //code here
    let min = num1
    let med = num2
    let max = num3
    if (num1 > num2) {
        min = num2
        med = num1
    }
    if (num1 > num3) {
        min = num3
        max = num1
    }
    if (num2 > num3) {
        med = num3
        max = num2
    }
    return { min, med, max }
}
module.exports = minMedMax
