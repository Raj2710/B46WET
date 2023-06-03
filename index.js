// let data = fetch('https://restcountries.com/v3.1/all')
//             .then(res=>res.json())
//             .then(data=>console.log(data))
//             .catch(error=>console.log(error))
let divRoot = document.getElementById('root')

async function getData(){
    try {
        let res = await fetch('https://restcountries.com/v3.1/all')
        let data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
    finally{
        console.log("I am Finally")
    }
}

async function construct(){
    let data = await getData()

    data.forEach(e => {
        let div = document.createElement('div')
        div.innerHTML = `<div class="card cardWrapper" style="width: 18rem;">
        <img src="${e.flags.svg}" class="card-img-top" alt="${e.flags.alt}">
        <div class="card-body">
          <h4 class="card-title">${e.name.common}</h4>
          <h6 class="card-text">${e.capital?e.capital[0]:""}</h6>
        </div>
      </div>`
      divRoot.appendChild(div)
    });
}

construct()