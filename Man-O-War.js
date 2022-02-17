function solve(input) {
    let pirateShip = input.shift().split('>').map(Number)
    let warShip = input.shift().split('>').map(Number)
    let maxHealthCapacity = Number(input.shift())
    let isEnd = false

    let line = input.shift()
    while (line !== 'Retire') {

        let array = line.split(' ')
        let command = array.shift()

        if (command == 'Fire') {
            let index = Number(array.shift())
            let damage = Number(array.shift())
            if (index >= 0 && index < warShip.length) {
                warShip[index] -= damage
                if (warShip[index] <= 0) {
                    console.log("You won! The enemy ship has sunken.")
                    isEnd = true
                    break
                }
            }
        } else if (command === 'Defend') {
            let startIndex = Number(array.shift())
            let endIndex = Number(array.shift())
            let damage = Number(array.shift())

            if (startIndex >= 0 && startIndex < pirateShip.length && endIndex >= 0 && endIndex < pirateShip.length) {

                for (let i = startIndex; i <= endIndex; i++) {
                    pirateShip[i] -= damage
                    if (pirateShip[i] <= 0) {
                        console.log(`You lost! The pirate ship has sunken.`)
                        isEnd = true
                        break
                    }
                }
            }
        } else if (command === 'Repair') {
            let index = Number(array.shift())
            let healt = Number(array.shift())

            if (index >= 0 && index < pirateShip.length) {
                pirateShip[index] += healt
                if (healt > maxHealthCapacity) {
                    pirateShip[index] = maxHealthCapacity
                }
            }
        } else if (command === 'Status') {
            let limit = maxHealthCapacity * 0.2
            let damaged = pirateShip.filter(x => x < limit)
            console.log(`${damaged.length} sections need repair.`)
        }

        line = input.shift()
    }

    if (!isEnd) {
        let sumWarShip = warShip.reduce((a, b) => {
            return a + b
        }, 0)

        let sumPirateShip = pirateShip.reduce((a, b) => {
            return a + b
        }, 0)

        console.log(`Pirate ship status: ${sumPirateShip}`)
        console.log(`Warship status: ${sumWarShip}`)
    }

}
solve(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"])

