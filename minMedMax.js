const { template } = require('@babel/core')

function minMedMax(num1, num2, num3) {
    //code here
    let min = num1
    let mid = num2
    let max = num3
    if (num1 > num2) {
        if (num1 > num3) {
            max = num1
            if (num2 > num3) {
                mid = num2
                min = num3
            } else {
                mid = num3
                min = num2
            }
        } else {
            max = num3
            mid = num1
            min = num2
        }
    } else {
        if (num2 > num3) {
            max = num2
            if (num1 > num3) {
                mid = num1
                min = num3
            } else {
                mid = num3
                min = num1
            }
        } else {
            max = num3
            mid = num2
            min = num1
        }
    }
    return { min, mid, max }
}
module.exports = minMedMax
