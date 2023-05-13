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



let myFav = ["Coffee","Tea","Mountain Dew","Travel","Books","Development"]

let h2 = document.createElement('h2')
h2.innerHTML = 'My Favourites are:'
document.body.appendChild(h2)

let ul = document.createElement('ul')

for(let i = 0;i<myFav.length;i++)
{
    let li = document.createElement('li')
    li.innerHTML=myFav[i]
    ul.appendChild(li)
}

document.body.appendChild(ul)

let items = document.querySelectorAll('li')
console.log(items)

//.classname
//#id
//tag
//*