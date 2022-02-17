function solve(input) {
    let [days, plunderPerDay, target] = input.map(Number)
    let totalPlunder = 0

    for (let day = 1; day <= days; day++) {
        let curent = plunderPerDay
        if (day % 3 === 0) {
            curent *= 1.5
        }
        totalPlunder += curent
        if (day % 5 === 0) {
            totalPlunder *= 0.7
        }
    }

    if (totalPlunder >= target) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`)
    } else {
        let percent = totalPlunder / (target / 100)
        console.log(`Collected only ${percent.toFixed(2)}% of the plunder.`)
    }

}
solve(["10",
    "20",
    "380"])
