// // var bb;
// console.log('Hello Sotatek')

// const a1 = 1;

// let a2;

// var a3;

// function name(params) {
//   let aa;
//   var bb = 4;
//   // bb = 4

// }

// for (let i = 0; i < 10; i++) { // 0 1 2 3 4 5 6 7 8 9
//   setTimeout(() => {
//     console.log('i value: ', i) // console.log('i value: ', 3)
//   }, i * 1000);
// }

// var i = 0;
// for (var i = 0; i < 10; i++) { // 10 10 10 10 10 10 10 10 10 10 
//   setTimeout(() => {
//     console.log('i value: ', i) // console.log('i value: ', &i)
//   }, i * 1000);
// }

// i = 10

for (let i = 0; i < 10; i++) { // 10 10 10 10 10 10 10 10 10 10 
  console.log('i', i)
}

const v = {
  a: 1,
  b: 2,
  c: 3
}

for (const key in v) {
  console.log('key', key)
}

console.log('Object.keys(v)', Object.keys(v))

const arr = [6, 4, 2, 5, 3, 7, 8, 1, 9, 2]

for (const a of arr) {
  console.log('a', a)
}

console.log('arr', arr)

arr.push(9)

console.log('arr', arr)

function hamxuly(element, index, array) {
  console.log('element', element)
  console.log('index', index)
  console.log('array', array)
  console.log("=====================")
  return element * 10
}

function hamloc(element) {
  return element > 6
}

const resultMap = arr.map(hamxuly)
const resultFilter = arr.filter(hamloc)

console.log('resultMap', resultMap)
console.log('resultFilter', resultFilter)

console.log('===========================================================================')

function hamxulyreduce(previous, current, index, array) {
  console.log('previous', previous)
  console.log('current', current)
  console.log('index', index)
  console.log('array', array)
  console.log('===============')
  return previous + current
}
const resultReduce = arr.reduce(hamxulyreduce)
const resultReduce2 = arr.reduce(hamxulyreduce, -10)

console.log('resultReduce', resultReduce)
console.log('resultReduce2', resultReduce2)

console.log('arr.reduce((a, b) => a + b)', arr.reduce((a, b) => a + b))

console.log('arr', arr)

arr.sort((a, b) => a - b)

console.log('arr', arr)

function getStr() {
  return ' something'
}
const t = ' sotatek'
const str1 = " ' thien 1" + t
const str2 = ' " thien 2' + t + ' ' + getStr() + '\n' // cong string

// template string
const str3 = `thien 3 ${getStr()} ${t}` // printf("thien %s %d", "sotatek", 7)

