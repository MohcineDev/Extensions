const targetEmail = "info@ueberall-e-check.de"




let emailByPlaceholder = document.querySelectorAll('input[placeholder~="email"]')
let emailByName = document.querySelectorAll('input[name~="email"]')
let emailByType = document.querySelectorAll('input[type="email"]')
let emailByType0 = document.querySelectorAll('input[type="text"]')



function fillForm() {

    if (emailByPlaceholder.length) {

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
    }


    if (emailByType.length) {

        emailByType.forEach(elem => {
            return (elem.value = targetEmail,
                elem.scrollIntoView()
            )
        })
        console.log('------------------ emailByType')
    }
    else if (emailByType0.length) {

        emailByType0.forEach(elem => {
            return (elem.value = targetEmail,
                elem.scrollIntoView()
            )
        })
        console.log('------------------ emailByType0')
    }


    Array.from(document.querySelectorAll('[type=checkbox]'), i => i.checked = true)

}

setTimeout(() => {
    fillForm()
}, 1500)