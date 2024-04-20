
let i = true

while(i){
    const name1 = prompt("Hola mi bro, ingresa tu nombre y dos apellidos").toLocaleLowerCase()
    let compleName = name1.split(" ")
    let threeLetters = compleName[0].slice(0,3) + compleName[1].slice(0,3) + compleName[2].slice(0,3)
    let usurname = `Tu nombre de usuario es ${threeLetters}`
    let userEmail = `Tu correo es ${threeLetters}@myDomain.com`

    const users =[{
        usuario : usurname,
        email: userEmail
    }]

    users.push({usuario:usurname},{email:userEmail})
    
    console.log(users)
    console.log(compleName)
    console.log(threeLetters)
    alert(usurname)
    alert(userEmail)
  

    
    if(users.hasOwnProperty([0]) || users.hasOwnProperty([1])){
        users.
        console.log(users)
        alert("el usuario ya es existente")
        alert("se cambiara tu usuario")
        let cont = 1
        newUser = threeLetters + cont
        newEmail = threeLetters +cont + "@myDomain.com"
        alert(`ahora tu usuario nuevo es ${newUser}`)
        alert(`ahora tu email nuevo es ${newEmail}`)
        
        users.push({usuario:newUser},{email:newEmail})
      
    }

    let opcion = prompt("quieres ingresar otro nuevo usuario si/no").toLocaleLowerCase()
    if (opcion == "si"){
        continue;
    }else{
        i = false
    }
}


