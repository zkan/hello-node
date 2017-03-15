import {add, area, volume} from './math.js'
import {PI as PIE} from './math.js'

console.log('Hello, Node!')

console.log('3 + 5 = ' + add(3, 5))
console.log('area = ' + area(3))
console.log('PI = ' + PIE)
console.log('Volume = ' + volume)

// Destructure
const props = {
  width: 100,
  height: 200,
  type: 'text',
  radius: 10,
}

const {width, height} = props
console.log(width)
console.log(height)

import * as math from './math.js'

console.log(math.add(10, 11))
