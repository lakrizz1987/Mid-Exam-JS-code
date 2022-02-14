function solve(input) {
    let regExNames = /[A-Za-z]/g
    let regExNum = /\d/g
    let allRacers = input.shift()
    let objRacers = {}

    let command = input.shift()

    while (command !== 'end of race') {

        let name = command.match(regExNames).join('')
        let allDistance = 0

        if (name !== null) {
            let distance = command.match(regExNum)

            for (let line of distance) {
                allDistance += Number(line)
            }
        }

        if (allRacers.includes(name)) {

            if (objRacers.hasOwnProperty(name)) {
                objRacers[name] = objRacers[name] + allDistance
            } else {
                objRacers[name] = allDistance
            }
        }

        command = input.shift()
    }
    
    let sortedRacers = Object.entries(objRacers).sort((a,b)=>b[1]-a[1])
    
    if(sortedRacers[0]){
        console.log(`1st place: ${sortedRacers[0][0]}`)
    }
    if(sortedRacers[1]){
        console.log(`2nd place: ${sortedRacers[1][0]}`)
    }
    if(sortedRacers[2]){
        console.log(`3rd place: ${sortedRacers[2][0]}`)
    }
}
solve(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race']

)