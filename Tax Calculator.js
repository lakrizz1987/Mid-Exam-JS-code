function solve(input) {
    let allTax = 0
    let carArr = input[0].split('>>')

    for (let line of carArr) {
        let curentCarArr = line.split(' ')
        let type = curentCarArr.shift()
        let years = curentCarArr.shift()
        let kilometers = curentCarArr.shift()
        let tax = 0

        if (type === 'family') {
            tax += 50
            tax -= 5 * years
            let curentPoints = Math.floor(kilometers / 3000)
            tax += curentPoints * 12

        } else if (type === 'heavyDuty') {
            tax += 80
            tax -= 8*years
            let curentPoints = Math.floor(kilometers / 9000)
            tax += curentPoints * 14

        } else if (type === 'sports') {
            tax += 100
            tax -= 9*years
            let curentPoints = Math.floor(kilometers / 2000)
            tax += curentPoints * 18

        } else {
            console.log('Invalid car type.')
            continue
        }

        console.log(`A ${type} car will pay ${tax.toFixed(2)} euros in taxes.`)
        allTax += tax
    }

    console.log(`The National Revenue Agency will collect ${allTax.toFixed(2)} euros in taxes.`)
}
solve([ 'family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012' ])