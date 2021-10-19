function func(num) {
    let sum = 0
    num = num.toString()
    for (let i = 0; i < num.length; i++) {
        sum = sum + parseInt(num[i])

    }

    return sum

}
console.log(func(123))