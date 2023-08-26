// console.log("Hello World")
// const os = require('os')

//Packages
//1. Internal or In Built packages
//2. External or Third Party Packages
//3. Custom Built Packages

// console.log(os.cpus())
// console.log(os.version())
// console.log(os.homedir())
// console.log(os.tmpdir())
// console.log(os.hostname())
// console.log(os.platform())

//---------- File System -----------

// const fs = require('fs')
// try {
//     fs.writeFile('sample.txt','I am a new data here for the third time','utf-8',(err)=>{
//         if(err)
//             console.log(err)
//         else
//         {
//             fs.readFile('sample.txt','utf-8',(err,data)=>{
//                 if(err)
//                     console.log(err)
                
//                 console.log(data)
//             })
//         }
//     })
// } catch (error) {
//     console.log(error)
// }

// try {
//     let data = fs.readFileSync('sample.txt','utf-8')

//     fs.writeFileSync('sample2.txt','welcome to the guvi','utf-8')

//     let data1 = fs.readFileSync('sample2.txt','utf-8')
//     console.log(data1)
// } catch (error) {
//     console.log(error)
// }


// -------------- HTTP Service ----------------
// const http = require('http')
// const PORT = 8000
// const server = new http.createServer((req,res)=>{
//     console.log(req.url)
//     let urlData = req.url.split('?')
//     if(urlData[0]==='/read')
//     {
//         let data = fs.readFileSync('sample.txt')
//         res.writeHead(200,{'Content-Type':'text/html'})
//         res.end(data)
//     }
//     else if(urlData[0]==='/write')
//     {
//         let data = urlData[1].split('=')
//         if(data.length>=2)
//         {
//             let writeData = decodeURIComponent(data[1])
//             fs.writeFileSync('sample.txt',writeData)
//             res.writeHead(200,{'Content-Type':'text/html'})
//             res.end(`<div style="text-align: center;">
//                         <h1>File Written Successfully</h1>
//                     </div>`)
//         }
//         else
//         {
//             res.writeHead(400,{'Content-Type':'text/html'})
//             res.end(`<div style="text-align: center;">
//                         <h1>File Written Unsuccessfull</h1>
//                     </div>`)
//         }
//     }
//     else
//     {
//         res.writeHead(400,{'Content-Type':'text/html'})
//         let data = fs.readFileSync('index.html')
//         res.end(data)
//     }
// })

// server.listen(PORT,()=>console.log(`Server Listening to ${PORT}`))

//-----------------Task------------------

// const http = require('http')
// const fs = require('fs')
// const PORT = 8000

// const server = http.createServer((req,res)=>{
//     try {
//         let dateTime = new Date()
//         fs.writeFileSync(`DateTime/${dateTime}`, dateTime.toString())
    
//         let data = fs.readFileSync(`DateTime/${dateTime}`)
    
//         res.writeHead(200,{'Content-Type':'text/html'})
//         res.end(data)
//     } catch (error) {
//         res.writeHead(200   ,{'Content-Type':'text/html'})
//         res.end(error)
//     }
// })

// server.listen(PORT)