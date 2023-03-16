const mainContainer = document.querySelector(".principal")
const thanksContainer = document.querySelector(".thanks")
const submitButton =  document.getElementById("submit")
const rateAgain =  document.getElementById("rate-again")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll('.btn')

submitButton.addEventListener("click", () => {
    thanksContainer.classList.remove("hidden")
    mainContainer.style.display = "none"
})

rateAgain.addEventListener("click", () => {
    thanksContainer.classList.add("hidden")
    mainContainer.style.display = "block"
})

rates.forEach ((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})