// JSON 
// Java Script Object Notation 

const axios = require('axios')

// doc tu file json
const fileData = require('./data.json')

console.log(fileData)
console.log(fileData.thuoctinh1)


// doc tu file txt
const fs = require('fs') // File System
const dataTxt = fs.readFileSync('./src/data.txt')
console.log("readfilesync")
console.log(dataTxt.toString())

const dataTxt2 = fs.readFile('./src/data.txt', (err, data) => {
  console.log("readfile")
  console.log(data.toString())
})

console.log("end of readfile")



// ghi vao file
fs.writeFileSync('./src/thien.txt', 'day la du lieu')

const obj = {
  thien: 1,
  khang: "2",
  hieu: true,
  mang: [
    1, 2, 3, 4, "34534", true, false
  ],

  thang: undefined,
  thien3: null,
  fun1: () => console.log(1)
}

const dataString = JSON.stringify(obj)

JSON.parse(dataString)



fs.writeFileSync('./src/thien.json', JSON.stringify(obj))