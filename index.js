let MS = 0;
let S = 0;
let M = 0;
let H = 0;
let myInterval;

function padZero(value)
{
    return value.toString().padStart(2,0)
}



let root = document.getElementById('root')

let title = document.createElement('h1')
title.innerHTML = "Stopwatch"
root.appendChild(title)


let clock = document.createElement('div')
clock.setAttribute('id','clock')
clock.innerHTML=`<h1>${padZero(H)} <sub>H</sub> : ${padZero(M)} <sub>M</sub> : ${padZero(S)} <sub>S</sub> <sub>${padZero(MS)}</sub></h1> `
root.appendChild(clock)


function stopwatch()
{
    myInterval = setInterval(()=>{
        MS++
        if(MS===100)
        {
            S++
            MS=0
        }

        if(S===60)
        {
            M++
            S=0
        }
        if(M===60)
        {
            H++
            M=0
        }
        clock.innerHTML = `<h1>${padZero(H)} <sub>H</sub> : ${padZero(M)} <sub>M</sub> : ${padZero(S)} <sub>S</sub> <sub>${padZero(MS)}</sub></h1>`
    },10) 
}

let btn_1 = document.createElement('button')
btn_1.innerHTML = "Start"
btn_1.addEventListener('click',()=>{
    if(btn_1.innerHTML === "Start")
    {
        btn_1.innerHTML = "Stop"
        stopwatch()
    }
    else
    {
        btn_1.innerHTML = "Start"
        clearInterval(myInterval)
    }
})
root.appendChild(btn_1)

let btn_2 = document.createElement('button')
btn_2.innerHTML = "Reset"
btn_2.addEventListener('click',()=>{
    clearInterval(myInterval)
    H=0
    M=0
    S=0
    MS=0
    btn_1.innerHTML = "Start"
    clock.innerHTML = `<h1>${padZero(H)} <sub>H</sub> : ${padZero(M)} <sub>M</sub> : ${padZero(S)} <sub>S</sub> <sub>${padZero(MS)}</sub></h1>`
})
root.appendChild(btn_2)

