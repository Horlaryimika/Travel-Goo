let myLead = []
console.log(myLead)
const inputEl = document.getElementById("input-el")
let ulEl = document.getElementById("ul-el")


const inputBtn = document.getElementById("input-btn")
inputBtn.addEventListener("click", function(){
    myLead.push(inputEl.value)
    inputEl.value = ""
    renderLead()
 })

 function renderLead() {
    let listItems = ""
    for (let i = 0; i < myLead.length; i++) {
      //listItems += "<li><a target='_blank' href='" + myLead[i] + "'>" + myLead[i] + "</a></li>"   
      listItems += `
        <li>
            <a target="_blank" href="${myLead[i]}">
                ${myLead[i]}
            </a>
        </li>`
        //ulEl.innerHTML += "<li>" + myLead[i] + "</li>"
    /*  const li = document.createElement('li')
        li.textContent = myLead[i]
        ulEl.append(li)*/
    }
    ulEl.innerHTML = listItems
 }

const containerEl = document.getElementById("container-el")
containerEl.innerHTML = "<button onclick='buy()'>BUY!</button>"

function buy() {
    containerEl.innerHTML += "<p>Thank you for the patronage</p>"
}

console.log(containerEl)

const recipient = "James"
const sender = "Abdulhakeem"
const email = `
Hey ${recipient}! 
How is it going?
cheers ${sender}`
console.log(email)

