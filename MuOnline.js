function solve(input){
    let health = 100
    let coins = 0
    let bestRoom = 0
    let isDead = false
    let lastMonster = ''

    let array = input.split('|')
    for (let line of array) {
        let newArr = line.split(' ')

        let command = newArr[0]
        let points = Number(newArr[1])
        bestRoom +=1

        if(command === 'potion'){
            let newHealth = health + points
            if(newHealth > 100){
                let healedPoints = 100 - health
                health = 100
                console.log(`You healed for ${healedPoints} hp.`)
                console.log(`Current health: ${health} hp.`)
            }else{
                health = newHealth
                console.log(`You healed for ${points} hp.`)
                console.log(`Current health: ${health} hp.`)
            }
        }else if(command === 'chest'){
            console.log(`You found ${points} bitcoins.`)
            coins += points
        }else{
            health -= points
            if(health > 0){
                console.log(`You slayed ${command}.`)
            }else{
                lastMonster = command
                isDead = true
                break
            }
        }
    }
    if(isDead){
        console.log(`You died! Killed by ${lastMonster}.`)
        console.log(`Best room: ${bestRoom}`)
    }else{
        console.log(`You've made it!`)
        console.log(`Bitcoins: ${coins}`)
        console.log(`Health: ${health}`)
    }
}
solve("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")