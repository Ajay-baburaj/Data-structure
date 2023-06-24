
function search(array, target, n) {
    for (let i = 0; i < n; i++) {
        if (array[i] == target) {
            return i
        }
    }
    return -1
}
const array = [1, 12, 8, 5, 23]
const target = 80
const n = array.length
const result = search(array, target, n)
result == -1 ? console.log('target not found') : console.log(`target value found at ${result}`)
