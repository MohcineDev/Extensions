const targetEmail = "info@ueberall-e-check.de"


let emailByType = document.querySelectorAll('input[type="email"]') 
let emailByPlaceholder = document.querySelectorAll('input[placeholder~="email"]')
let emailByName = document.querySelectorAll('input[name~="email"]')
let emailByName0 = document.querySelectorAll('input[name~="subscriber"]')
let emailByName1 = document.querySelectorAll('input[name~="Email"]')
  

//NAME

let nameByName = document.querySelectorAll('input[name="name"]')

///First Name

let firstNameByplaceholder = document.querySelectorAll('input[placeholder="First Name"]')
let firstNameByName = document.querySelectorAll('input[name="FirstName"]')
 
///Last Name
let LastNameByplaceholder = document.querySelectorAll('input[placeholder="Last Name"]')
let LastNameByName = document.querySelectorAll('input[name="LastName"]')

///PostCode

let PostCode = document.querySelectorAll('input[name="PostCode"]')

function fillForm() {
    if (emailByType.length) {

        emailByType.forEach(elem => {
            return (elem.value = targetEmail,
                elem.scrollIntoView()
            )
        })
        console.clear()
        console.log('------------------ emailByType')
    }
   

   else if (emailByPlaceholder.length) {

        emailByPlaceholder.forEach(elem => {
            return (elem.value = targetEmail,
                elem.scrollIntoView()
            )
        })
        console.log('------------------ emailByPlaceholder')
    }

    ///// email By Name
    if (emailByName.length) {
        emailByName.forEach(elem => {
            return (elem.value = targetEmail,
                elem.scrollIntoView()
            )
        })

        console.log('------------------ emailByName')
    }else if (emailByName0.length) {
        emailByName0.forEach(elem => {
            return (elem.value = targetEmail, elem.scrollIntoView() )
        })
        console.log('------------------ emailByName')
    }  else if (emailByName1.length) {
        emailByName1.forEach(elem => {
            return (elem.value = targetEmail, elem.scrollIntoView() )
        })
    }  
    


    //name
    
    if (nameByName.length) {
        nameByName.forEach(elem => { elem.value ="John Doe"         })
        console.log('------------------ nameByName')
    }  

    ////firstName
    
    if (firstNameByplaceholder.length) {
        firstNameByplaceholder.forEach(elem => { elem.value ="John"         })
        console.log('------------------ firstNameByplaceholder')
    }  
    else if (firstNameByName.length) {
        firstNameByName.forEach(elem => { elem.value ="John"         })
        console.log('------------------ firstNameByName')
    }  
    
    ////Last Name
    if (LastNameByplaceholder.length) {
        LastNameByplaceholder.forEach(elem => { elem.value ="Doe"         })
        console.log('------------------ LastNameByplaceholder')
    }  
    else if (LastNameByName.length) {
        LastNameByName.forEach(elem => { elem.value ="Doe"         })
        console.log('------------------ LastNameByName')
    }  


    ////PostCode
    if (PostCode.length) {
        PostCode.forEach(elem => { elem.value =50000         })
    }   


    Array.from(document.querySelectorAll('[type=checkbox]'), i => i.checked = true)

}

setTimeout(() => {
    fillForm()
}, 3000)
