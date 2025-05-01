// const numbers = [{ x: 1 }, { x: 3 }, { x: 5 }, { x: 7 }]
// console.log(numbers.includes({ x: 5 }))

function myIncludes(array, findItem) {
  for (const item of array) {
    if (item === findItem) return true
  }
  return false
}

//
//

const numbers = [1, 3, 5, 7]
console.log(myIncludes(numbers, 3))

// console.log({ x: 5 } === { x: 5 })

// console.log(5 === 5)

// разновидности типов данных

// примитивные
// number
// string
// boolean
// undefined

// не примитивные
// object
// array

// примитивные передются по значению
// не примитивные передаются по ссылке

// вот банан

// вот адресс магазина, где можно взять банан <<<=== bananLink
// вот адресс магазина, где можно взять банан <<<=== goToBanan
// вот адресс магазина, где можно взять банан <<<=== goToBanan2

const bananLink = {}
const goToBanan = bananLink
const goToBanan2 = bananLink

console.log(bananLink === goToBanan)
console.log(goToBanan2 === goToBanan)
console.log(bananLink === goToBanan2)
