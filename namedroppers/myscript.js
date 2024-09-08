

//how many to open at a time

const OPEN = 5
const LINKS = document.querySelectorAll('a.domain')
let count = 0

///open links in new tabs
function openLinks() {
    for (let i = 0; i < OPEN; i++) {
        if (LINKS[count + i] != null) {

            window.open(LINKS[count + i])
            
        } else console.log("domainnnn not found")
    }
    count += OPEN
}


function usingInterval() {
    openLinks()

    let myInter = setInterval(() => {

        if (count >= LINKS.length) {
            clearInterval(myInter)
            console.log("interval stopped!!!!")
        } else {
            openLinks()
        }
    }, 10000)
}

usingInterval()