//Promise is an eventual completion or Failure of asynchronous operation


//Promise States:
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.


let promise_1 = new Promise((resolve,reject)=>{
    if(10>0){
        setTimeout(()=>{
            resolve(10)
        },3000)
    }
    else
    {
        reject("10 is not greater")
    }
})


let promise_2 = new Promise((resolve,reject)=>{
    let date = new Date("01-01-2010")
    let year = date.getFullYear()
    if((year%100 === 0 && year%400===0) || (year%100 !== 0 && year%4 === 0))
    {
        resolve("This is a leap year")
    }
    else
    {
        reject("This is not a leap year")
    }
})

let promise_3 = new Promise((resolve,reject)=>{
    resolve("Promise 3 is sucess")
})

let promise_4 = new Promise((resolve,reject)=>{
    resolve("Promise 4 is sucess")
})


let promise_5 = new Promise((resolve,reject)=>{
    resolve("Promise 5 is sucess")
})

// Promise.all([promise_1,promise_2,promise_3,promise_4,promise_5])
// .then(values=>console.log(values))
// .catch(error=>console.error(error))

// Promise.any([promise_1,promise_2,promise_3,promise_4,promise_5])
// .then(values=>console.log(values))
// .catch(error=>console.error(error))

// Promise.race([promise_1,promise_2,promise_3,promise_4,promise_5])
// .then(values=>console.log(values))
// .catch(error=>console.error(error))

// promise_1.then(value=>value * 10)
//          .then(value => {
//             console.log("10 times of value is:",value) 
//             return "The operation is success"
//         })
//          .then(value => console.log(value))
//          .catch(error=>alert(error))

// promise_2.then(value=>console.log(value))
//          .catch(error=>console.error(error))


// Promise Chaining

promise_1
.then(values=>{
    console.log(values)
    promise_2
    .then(values=>{
        console.log(values)
        promise_3
        .then(values=>{
            console.log(values)
            promise_4
            .then(values=>{
                console.log(values)
                promise_5
                .then(values=>console.log(values))
                .catch(error=>console.error(error))
            })
            .catch(error=>console.error(error))
        })
        .catch(error=>console.error(error))
    })
    .catch(error=>console.error(error))
})
.catch(error=>console.error(error))
