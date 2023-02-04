let attempts = 1
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")


function handleTryClick(e){
  e.preventDefault()
  const randomNumber = Math.round(Math.random() * 10)
  console.log(randomNumber)
  const inputNumber = document.querySelector("#inputNumber")
  
  if(Number(inputNumber.value)== randomNumber){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")

    const screenh2 = document.querySelector(".screen2 h2")
    
    if(attempts == 1){
      screenh2.innerText = `Acertou em ${attempts} Tentativa!`
    }else{
      screenh2.innerText = `Acertou em ${attempts} Tentativas!`
    }
  }
  inputNumber.value = ""
  attempts++
} 

// Events
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

btnTry.addEventListener("click", handleTryClick)

btnReset.addEventListener("click", () =>{
  document.querySelector(".screen1").classList.toggle("hide")
  document.querySelector(".screen2").classList.toggle("hide")
  attempts = 1
})