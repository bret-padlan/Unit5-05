let number = 0
let sentence = 'hello, this is number 4.'

document.getElementById('button').addEventListener('click', calculatingButton)

function calculatingButton () {
  number = document.getElementById('table').value

  number = parseInt(number)

  number = number * 4
  
  alert(number)
}
