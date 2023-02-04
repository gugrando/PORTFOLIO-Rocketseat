import { Modal } from "./modal.js"
import {AlertError} from "./error-alert.js"
import { calculateIMC, notNumber } from "./utils.js"

// variables
const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

form.onsubmit = (e) => {
  e.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value
  const weightOrHeightIsNaN = notNumber(height) || notNumber(weight)
  
  if(weightOrHeightIsNaN){
    AlertError.open()
    return;
  }
  AlertError.close()
  
  const result = calculateIMC(weight, height)
  displayResultMessage(result)
}
form.oninput = () =>{
  AlertError.close()
}

function displayResultMessage(result){
  const message = `Seu IMC é de ${result}`
  Modal.open()
  Modal.message.innerText = message
}
