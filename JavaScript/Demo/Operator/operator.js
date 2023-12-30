const button1 = document.querySelector('button')
console.log(button)
button.addEventListener('click',dispalystats)
console.log('clicked')
function dispalystats(){
    let val = document.getElementById("input").value
    console.log(val)
    op = /[+\-*\/]/
    let sp = val.split(op)
    const ops = val.match(op)[0]
    const first = parseFloat(sp[0])
    const last = parseFloat(sp[1])

    
    
    switch (ops){
        case '+':
            let add = first + last
            console.log(add)
            document.getElementById('result').innerHTML=add
            break
        case '-':
            let sub = first - last
            console.log(sub)
            document.getElementById('result').innerHTML=sub
            break    
        case '*':
            let mul = first * last
            console.log(mul)
            document.getElementById('result').innerHTML=mul
            break 
        case '/':
            let divi = first / last
            console.log(divi)
            document.getElementById('result').innerHTML=divi
            break 
    }
     
}
