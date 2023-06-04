const url = 'https://647c291cc0bae2880ad06e00.mockapi.io/users'

//to construct the table after getting the data
function constructTable(data){
    let tbody = document.getElementById('table-body')
    tbody.innerHTML=""
    data.forEach(e => {
        let tr = document.createElement('tr')
        tr.innerHTML = `
        <td>${e.id}</td>
        <td>${e.name}</td>
        <td>${e.email}</td>
        <td>${e.mobile}</td>
        <td>${e.gender}</td>
        <td>${e.city}</td>
        <td>
            <label class="switch">
                <input type="checkbox" ${e.status?"checked":""} onchange="toggle(${e.id},${e.status})">
                <span class="slider round"></span>
            </label> 
        </td>
        <td>
            <button class="btn btn-primary" onclick="navigate(${e.id})">Edit</button>
            <button class="btn btn-danger" onclick="deleteData(${e.id})">Delete</button>
        </td>
        `

        tbody.appendChild(tr)
    });
}

async function toggle(id,status){
    let res = await fetch(`${url}/${id}`,{
        headers:{
            "Content-Type":"application/json"
        },
        method:"PUT",
        body:JSON.stringify({
            status:status?false:true
        })
    })

    getData()
}
function navigate(id){
    //navigate to view.html with Params
    window.location.href = `./../HTML/view.html?id=${id}`
}

async function deleteData(id)
{
    let res = await fetch(`${url}/${id}`,{
        method:'DELETE'
    })
    getData()
    // window.location.reload()
}

//to get the data from mockapi
async function getData(){
    try {
        let res = await fetch(url)
        let data = await res.json()
        constructTable(data)

    } catch (error) {
        console.log(error)
    }
}

getData()