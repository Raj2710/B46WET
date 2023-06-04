const url = 'https://647c291cc0bae2880ad06e00.mockapi.io/users'

// let myform = document.forms["createForm"]
let myform = document.getElementById('createForm')

myform.addEventListener('submit',async(e)=>{
    e.preventDefault()
    
    let data = {
        // name:myform.name.value,
        // email:myform.email.value,
        // mobile:myform.mobile.value,
        // gender:myform.gender.value,
        // city:myform.city.value

        name:document.getElementById('name').value,
        email:document.getElementById('email').value,
        mobile:document.getElementById('mobile').value,
        gender:document.getElementById('gender').value,
        city:document.getElementById('city').value
    }

    let res = await fetch(url,{
        headers:{
            "Content-Type":"application/json"
        },
        method:"POST",
        body:JSON.stringify(data)
    })

    // alert(data)
    window.location.href='/'

})