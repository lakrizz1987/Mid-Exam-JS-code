function solve(input) {

    let regEx = /%(?<name>[A-Z][a-z]*)%.*?<(?<product>\w+)>.*?\|(?<qty>\d+)\|.*?(?<price>\d+(?:\.\d+)*)\$/
    let total = 0
    let command = input.shift()
    while (command !== 'end of shift') {
        let array = regEx.exec(command)
        if (array !== null) {

            let name = array.groups.name
            let product = array.groups.product
            let qty = array.groups.qty
            let price = array.groups.price

            total += qty * price

            console.log(`${name}: ${product} - ${(qty * price).toFixed(2)}`)

        }
        command = input.shift()
    }
    console.log(`Total income: ${total.toFixed(2)}`)
}
solve(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift']

)