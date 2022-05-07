// const callApi = (input) => new Promise((resolve, reject) => {
//   if (input > 10) resolve('data return from call api ' + input * 10)
//   else reject('data reject from call api ' + input)
// })

// // const promise1 = new Promise((resolve, reject) => {
// //   // resolve(1);
// //   reject(2);
// // });

// // promise1.then(data => {
// //   console.log('data', data)
// // }).catch(err => {
// //   console.log('err', err)
// // })

// // // async await


// const promise2 = new Promise(async (resolve, reject) => {
//   try {
//     const data = await callApi(5) // unhandle rejection / unhandle promise reject
//     resolve(data)
//   } catch (error) {
//     reject(error)
//   }
// });

// promise2.then(data => {
//   console.log('data', data)
// }).catch(err => {
//   console.log('err', err)
// })

// // BTVN: return error ra ben ngoai cua function tu promise
// async function hamXuLy(params) {

//   await callApi(17);
//   const promise3 = new Promise((resolve, reject) => {
//     reject('some err')
//   })

//   promise3.then(data => {

//   }).catch(err => {

//   })

//   // do something

//   // return error

//   await startTranscation()

//   // do something

//   await commitTransaction()

// }

// // BTVN tai sao promise all nhanh hon await lan luot, mac du nodejs la ngon ngu single thread
// Promise.all([
//   new Promise(),
//   new Promise(),
//   new Promise(),
// ])

// const fn1 = async function (params) {
//   //  do something
// }

// const fn2 = new Promise()

// fn1().then().catch();
// await fn1();

// fn2.then().catch();
// await fn2();

// const _fn1 = function (params) {
//   return new Promise((reolve, reject) => {
//     //  do something
//   })
// }

// function tenFn1(params) {

// }

// const tenFn2 = function (params) {

// }

// const tenFn3 = () => {

// }

// const obj = {
//   tenFn20: function (params) {
//     console.log('this.value', this.value)
//   },
//   tenFn30: () => {
//     console.log('this.value', this.value)
//   },
//   value: 1
// };


// // Promise.status = pending
const sleep = (ms) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('this is sleep api')
    // Promise.status = resolved
  }, ms);
});

// (async () => {

//   const data1 = await sleep();
//   const data2 = await sleep();
//   const data3 = await sleep();
//   const data4 = await sleep();
//   const data5 = await sleep();

//   const result2 = await Promise.all([
//     data1,
//     data2,
//   ])

// })()

// await new Promise();


(async () => {

  // 1.
  setTimeout(() => {
    console.log('Jason')
  }, 10)
  
  // 2.
  setTimeout(() => {
    console.log('Thomas')
  }, 0)

  // 3.
  console.log('Sotatek')

})()

// 1. push callback => stack call | sai
// 2. push callback => stack call | sai 

// 1. push callback => Timer 
// 2. push callback => Timer 
// 3. console.log Sotatek

// asynchronous origin: C# delegate function

// i++
// i++
// i++
// i++

// stack call : [func1, func2, func3]

// 1-await func1(): call api and get data
// 2-await func1(): call api and get data

  // 1-
  // func(): => network messsage func1

  // NetworkIO: network messsage func1
  // NetworkIO: create flag: func1 waiting
  // NetworkIO: get data
  // NetworkIO: update flag: func1 done
  
  // func(): receive and return data

  // 2-
  // func(): => network messsage func1

  // NetworkIO: network messsage func1
  // NetworkIO: create flag: func1 waiting
  // NetworkIO: get data
  // NetworkIO: update flag: func1 done
  
  // func(): receive and return data

// Promise all 

  // 1-
  // func(): => network messsage func1
  // func(): => network messsage func1

  // NetworkIO: network messsage func1
  // NetworkIO: create flag: func1 waiting
  // NetworkIO: get data
  // NetworkIO: update flag: func1 done

  // NetworkIO: network messsage func1
  // NetworkIO: create flag: func1 waiting
  // NetworkIO: get data
  // NetworkIO: update flag: func1 done
  
  // func(): receive and return data
  // func(): receive and return data


  // function => call stack => cpu
  
  // cpu 4 core => 4 workers => threadpoolsize = 4

  
  

