// let doc = document.getElementById("root")
// console.log(doc)
// doc.innerHTML = '<h1>Welcome to Guvi</h1>'
// doc.setAttribute('class','text-color');
// doc.style.textAlign = "center"
// doc.style.fontFamily="Verdana"
// doc.style.color="blue"
// doc.innerText = '<h1>Welcome to Guvi</h1>'

// let docs = document.getElementsByTagName('div')
// for(let i = 0;i<docs.length;i++)
// {
//     docs[i].innerHTML = "<h1>Welcome to Guvi</h1>"
//     docs[i].setAttribute('class','text-color');
//     docs[i].style.textAlign = "center"
//     docs[i].style.fontFamily="Verdana"
//     docs[i].style.color="blue"
// }

// let h1 = document.createElement("h1")
// h1.innerHTML = "I am learning Javascript"
// document.body.appendChild(h1)

// let h2 = document.createElement("h1")
// h2.innerHTML = "We are late"
// document.body.appendChild(h2)

// h2.append("We should be responsible")


// let parent = document.createElement('div')
// parent.style.display = 'flex'
// parent.style.flexWrap = 'wrap'
// document.body.appendChild(parent)

// let child = document.createElement('div')
// parent.appendChild(child)

// let image = document.createElement('img')
// image.setAttribute('src','./cat.jpg')
// image.style.width = "300px"
// child.appendChild(image)


// let child1 = document.createElement('div')
// parent.appendChild(child1)

// let image1 = document.createElement('img')
// image1.setAttribute('src','./cat1.avif')
// image1.style.width = "200px"
// child1.appendChild(image1)



// let myFav = ["Coffee","Tea","Mountain Dew","Travel","Books","Development"]

// let h2 = document.createElement('h2')
// h2.innerHTML = 'My Favourites are:'
// document.body.appendChild(h2)

// let ul = document.createElement('ul')

// for(let i = 0;i<myFav.length;i++)
// {
//     let li = document.createElement('li')
//     li.innerHTML=myFav[i]
//     ul.appendChild(li)
// }

// document.body.appendChild(ul)

// let items = document.querySelectorAll('li')
// console.log(items)

//.classname
//#id
//tag
//*

// let myWindow;
// function openWindow()
// {
//     let age = prompt('Enter Age to proceed:')
//     if(Number(age)>18)
//         myWindow = window.open('https://www.linkedin.com/',"_blank")
//     else
//         alert("Page is accessible for Adults Only")
// }

// function closeWindow(){
//     myWindow.close()
// }

// let button = document.createElement('button')
// button.innerHTML="LinkedIn"
// button.addEventListener('click',openWindow)
// document.body.appendChild(button)

// let btn = document.createElement('button')
// btn.innerHTML="Close Tab"
// btn.addEventListener('click',closeWindow)
// document.body.appendChild(btn)


//Counter

// let value = 0;
// let h1 = document.createElement('h1')
// h1.innerHTML = "Counter"
// h1.style.textAlign ="center"
// document.body.appendChild(h1)

// let parent = document.createElement('div')
// parent.setAttribute('class','parent')
// document.body.appendChild(parent)

// let btn1 = document.createElement('button')
// btn1.innerHTML = "-"
// btn1.addEventListener('click',()=>{
//     // document
//     // .getElementsByClassName('value')[0]
//     // .innerHTML = --value
//     document
//     .querySelector('.value')
//     .innerHTML = --value
// })
// parent.appendChild(btn1)

// let div = document.createElement('div')
// div.setAttribute('class','value')
// div.innerHTML = value
// parent.appendChild(div)

// let btn2 = document.createElement('button')
// btn2.innerHTML = "+"
// btn2.addEventListener('click',()=>{
//     console.log("Button Clicked")
//     setTimeout(()=>{
//         console.log("Action Done")
//         document
//         .getElementsByClassName('value')[0]
//         .innerHTML = ++value
//     },2000)
// })
// parent.appendChild(btn2)

// setInterval(()=>{
//     document.getElementsByClassName('value')[0].innerHTML = ++value
// },1000)



{/* <div>
    <button> - </button>
    <div> 0 </div>
    <button> + </button>
</div> */}


let input = document.createElement('input')
input.setAttribute('type',"text")
input.setAttribute('placeholder',"Name")
input.addEventListener('blur',(e)=>{
    if(! (e.target.value.length>3 && e.target.value.length<=10))
    {
        let error = document.getElementById('error')
        error.innerHTML = "* Name should be minimum of 3 character and maximum of 10 character"
    }
})
input.addEventListener('focus',()=>{
    document.getElementById('error').innerHTML=""
})
document.body.appendChild(input)

input.addEventListener('change',(e)=>{
    console.log(e.target.value)
})

input.addEventListener('keyup',(e)=>{
    console.log(e.target.value)
})

let div = document.createElement('div')
div.setAttribute('id','error')
div.style.fontSize='12px'
div.style.color='red'
input.after(div)


// input.addEventListener('focus',()=>{
//     console.log("Focus event called")
// })
