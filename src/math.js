// Single return statement -- use (..)
export const add = (a, b) => (a + b)

// Multiple statements -- use {..}
export const area = (r) => {
  const PI = 3.14
  return PI * r * r
}

let volume = 3500

// Alternatively, we can do:
// const let PI = 3.14
// const let volume = 10
// export {
//   PI,
//   volume
// }
