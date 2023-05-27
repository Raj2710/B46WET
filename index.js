//Async
// setTimeout(()=>{
//     console.log("Welcome")
// },2000)

// setTimeout(()=>{
//     console.log("Hello World")
// },2000)

// setTimeout(()=>{
//     console.log("I am first")
// },2000)

// setTimeout(()=>{
//     console.log("I am Second")
// },2000)


//Callback

// let a = [10,20,30,40,50]
// a.map((e)=>{
//     console.log(e)
// })

// function add(x,y){
//     return x+y
// }

// function display(a,b,callback)
// {
//     console.log(`The sum of ${a} + ${b}:`,callback(a,b))
// }

// // display(5,10,add)
// display(5,10,(a,b)=>{
//     return a+b
// })

// function removeNegativeNumber(x){
//     if(x>0)
//         return true
//     else
//         return false
// }



// function positiveNumber(a,callback){
//     let positiveNumber = []
//     for(let i=0;i<a.length;i++)
//     {
//         if(callback(a[i]))
//             positiveNumber.push(a[i])
//     }

//     return positiveNumber
// }

// let a = [10,20,-3,-42,50,1,-1]
// console.log(positiveNumber(a,removeNegativeNumber))

// function positiveNumber(a,callback){
//     let b = []
//     for(let i=0;i<a.length;i++)
//     {
//         if(callback(a[i]))
//             b.push(a[i])
//     }
//     return b
// }

// let a = [10,20,-3,-42,50,1,-1]
// console.log(positiveNumber(a,(e)=>e>0))


// let a = [10,20,-3,-42,50,1,-1]
// let output = a.filter((x)=>x>0)
// console.log(output)



//Callback hell
let h1 = document.createElement('h1')
document.body.appendChild(h1)
setTimeout(()=>{
    h1.innerHTML = 10
    
    setTimeout(()=>{
        h1.innerHTML = 9

        setTimeout(()=>{
            h1.innerHTML = 8

            setTimeout(()=>{
                h1.innerHTML = 7

                setTimeout(()=>{
                    h1.innerHTML = 6

                    setTimeout(()=>{
                        h1.innerHTML = 5

                        setTimeout(()=>{
                            h1.innerHTML = 4

                            setTimeout(()=>{
                                h1.innerHTML = 3

                                setTimeout(()=>{
                                    h1.innerHTML = 2

                                    setTimeout(()=>{
                                        h1.innerHTML = 1

                                        setTimeout(()=>{
                                            h1.innerHTML = "Happy Independence Day"
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)