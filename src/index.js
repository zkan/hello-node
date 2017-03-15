console.log('Hello, Node!')

// Single return statement -- use (..)
const add = (a, b) => (a + b)

// Multiple statements -- use {..}
const area = (r) => {
  const PI = 3.14
  return PI * r * r
}

console.log('3 + 5 = ' + add(3, 5))
console.log('area = ' + area(3))
