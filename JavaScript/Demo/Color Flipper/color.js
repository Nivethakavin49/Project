const color = document.getElementById('color')
const button = document.getElementById('btn')
const button1 = document.getElementById('button')
const tx = document.getElementById('text')
console.log(tx)
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E','F']

button1.addEventListener('click',changebg)
function changebg(){
    let hexcode = '#'
    for (i=1; i<=6; i++){
        hexcode = hexcode + rand()
    }
    button.style.backgroundColor = hexcode
    color.innerHTML = hexcode
    color.style.color = hexcode
    tx.style.color = hexcode
}

function rand() {
    let random = Math.floor(Math.random()*16)
    return hex[random] 
}