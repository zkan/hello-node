// Object property shorthand

const name = 'Kan'
const userAge = 38

const user = {
  name,
  age: userAge,
  location: 'Bangkok',
}

console.log(user)

// Object destructuring

const product = {
  label: 'Red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined,
}

const { label, stock } = product

console.log(label)
console.log(stock)

const { label:productLabel, rating = 5 } = product

console.log(productLabel)
console.log(rating)
