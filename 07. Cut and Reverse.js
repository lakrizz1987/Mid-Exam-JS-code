function solve(str) {
    let firstPart = str.substring(0, str.length / 2)
    let secondPart = str.substring(str.length / 2)

    let one = firstPart.split('').reverse().join('')
    let second = secondPart.split('').reverse().join('')
    console.log(one)
    console.log(second)
}
solve('tluciffiDsIsihTgnizamAoSsIsihT')