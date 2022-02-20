function solve(input) {
    let arrayOfCards = input.shift().split(', ')
    let n = Number(input.shift())

    for (let i = 0; i < n; i++) {
        let line = input[i]
        let array = line.split(', ')
        let command = array.shift()

        if(command === 'Add'){
            let cardName = array.shift()

            if(arrayOfCards.includes(cardName)){
                console.log('Card is already in the deck')
            }else{
                arrayOfCards.push(cardName)
                console.log("Card successfully added")
            }

        }else if(command === 'Remove'){
            let cardName = array.shift()

            if(arrayOfCards.includes(cardName)){
                let index = arrayOfCards.indexOf(cardName)
                arrayOfCards.splice(index,1)
                console.log("Card successfully removed")
            }else{
                console.log("Card not found")
            }

        }else if(command === 'Remove At'){
            let index = Number(array.shift())

            if(index >=0 && index < arrayOfCards.length){
                arrayOfCards.splice(index,1)
                console.log("Card successfully removed")
            }else{
                console.log("Index out of range")
            }

        }else if(command === 'Insert'){
            let index = Number(array.shift())
            let cardName = array.shift()

            if(index < 0 || index >= arrayOfCards.length){
                console.log("Index out of range")
            }else if(index >=0 && index < arrayOfCards.length){

                if(arrayOfCards.includes(cardName)){
                    console.log("Card is already added")
                }else{
                    arrayOfCards.splice(index,0,cardName)
                    console.log("Card successfully added")
                }
            }
        }
    }

    console.log(arrayOfCards.join(', '))
}
solve(["Jack of Spades, Ace of Clubs, Jack of Clubs",
"2",
"Insert, -1, Queen of Spades",
"Remove At, 1"])


