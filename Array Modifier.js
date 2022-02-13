function solve(input) {
    let array = input.shift().split(" ")

    function swap(arr, index1, index2) {
        let buffer = arr[index1]
        arr[index1] = arr[index2]
        arr[index2] = buffer

        return arr
    }

    function multiply(arr, index1, index2) {
        let result = Number(arr[index1]) * Number(arr[index2])
        arr.splice(index1, 1, result.toString())
        return arr
    }

    function decrease(arr) {
        let newArr = []
        for (const num of arr) {
            let curent = Number(num)
            if (curent > 0) {
                curent = curent - 1
                let curentToStr = curent.toString()
                newArr.push(curentToStr)
            } else {
                curent = curent + (-1)
                let curentToStr = curent.toString()
                newArr.push(curentToStr)
            }

        }
        array = newArr
        return array

    }

    command = input.shift()

    while (command !== "end") {
        if (command === "decrease") {
            decrease(array)
        } else {
            let arrayFromComand = command.split(" ")
            let newCommand = arrayFromComand.shift()
            let i1 = arrayFromComand.shift()
            let i2 = arrayFromComand.shift()
            if (newCommand === "swap") {
                swap(array, i1, i2)
            } else if (newCommand === "multiply") {
                multiply(array, i1, i2)
            }
        }
        command = input.shift()
    }

    console.log(array.join(", "))
}
solve([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]
)

solve([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]
)