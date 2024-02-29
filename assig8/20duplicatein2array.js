function remdup(arr1, arr2) {
    const cmbarr = arr1.concat(arr2)

    const newnum = new Set(cmbarr)

    const newarr = Array.from(newnum)

    return newarr
}

const a = [1, 2, 3, 4, 5]
const b = [5, 3, 7, 8, 9]

const uniqueArray = remdup(a, b)
console.log(uniqueArray)
