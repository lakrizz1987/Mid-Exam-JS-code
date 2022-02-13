function solve(input) {
    let encryptedMessage = input.shift().split("")

    let array = input.shift().split("|")
    let command = array.shift()

    while (command !== "Decode") {

        if (command === "Move") {
            let numLetters = Number(array.shift())
            
            for (let i = 0; i < numLetters; i++) {
                let element = encryptedMessage.shift()
                encryptedMessage.push(element)

            }
        } else if (command === "Insert") {
            let index = Number(array.shift())
            let value = array.shift().split("")
            for (let i = 0; i < value.length; i++) {
                const element = value[value.length - 1 - i];
                encryptedMessage.splice(index, 0, element)
            }
            

        } else if (command === "ChangeAll") {
            let value = array.shift()
            let newValue = array.shift()
            for (let i = 0; i < encryptedMessage.length; i++) {
                let element = encryptedMessage[i]
                if (element === value) {
                    encryptedMessage[i] = newValue
                }

            }
        }

        array = input.shift().split("|")
        command = array.shift()
    }

    console.log(`The decrypted message is: ${encryptedMessage.join("")}`)
}
solve([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
]

)