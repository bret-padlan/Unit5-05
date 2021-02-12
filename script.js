let number = 0

document.getElementById('button').addEventListener('click', calculatingButton)

function calculatingButton () {
  number = document.getElementById('table').value
  number = parseInt(number)
  number = number * 4
  alert(number)
}
