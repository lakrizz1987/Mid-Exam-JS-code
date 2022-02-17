function solve(input) {

    let chest = input.shift().split('|')

    let line = input.shift()

    while (line !== 'Yohoho!') {
        let array = line.split(' ')
        let command = array.shift()
        if (command === 'Loot') {
            for (const item of array) {
                if (!chest.includes(item)) {
                    chest.unshift(item)
                }
            }
        } else if (command === 'Drop') {

            let index = Number(array.shift())

            if (index > 0 && index < chest.length) {
                let spliced = chest.splice(index, 1)
                let item = spliced.shift()
                chest.push(item)
            }

        } else if (command === 'Steal') {

            let countSteal = Number(array.shift())
            let stealed

            if (countSteal >= chest.length) {
                stealed = chest.splice(0)
            } else {
                let index = -countSteal
                stealed = chest.splice(index)
            }
            console.log(stealed.join(', '))

        }

        line = input.shift()
    }

    if(chest.length <= 0){
        console.log("Failed treasure hunt.")
    }else{
        let average = 0
        let points = 0
        for (const element of chest) {
            points += element.length
        }
        average = points / chest.length
        console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`)
    }
}
solve(["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"])

