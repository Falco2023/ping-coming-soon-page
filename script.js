'use strict';
 document.querySelector('.notify').addEventListener('click', function(){
  const errorMsg = document.getElementById('valid')
  const input = document.getElementById("email");
const inputValue = input.value;
const pattern = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]/
if (inputValue.match(pattern)) {
    errorMsg.classList.toggle('hidden')
    errorMsg.textContent = 'Email address valid'
    errorMsg.style.color = 'green'

  }
  else if(!inputValue){
errorMsg.classList.toggle('hidden')
errorMsg.textContent = 'Please enter an email address!'
errorMsg.style.color = 'red'
}
else{
  errorMsg.classList.remove('hidden')
  errorMsg.textContent = 'Please enter a valid email address!'
  errorMsg.style.color = 'red'

  }
})

