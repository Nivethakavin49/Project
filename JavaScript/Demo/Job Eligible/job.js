let button = document.getElementById('button')
button.addEventListener('click',dispalystats)
console.log('click')
function dispalystats(){
    let clk = document.querySelector('input[name="sch"]:checked').value
    console.log(clk)
    
    switch (clk){
        
        case 'Illiterate':
            tx="Not Eligible Illiterate"
            document.getElementById('result').innerHTML = tx
            break
        case 'Highschool':
            tx1="Eligible Highschool"
            document.getElementById('result').innerHTML = tx1
            break
        case 'Ug':
            tx2="Eligible UG"
            document.getElementById('result').innerHTML = tx2
            break
        case 'PG':
            tx3="Not Eligible PG"
            document.getElementById('result').innerHTML = tx3
            break
        case 'Dotorate':
            tx4="Not Eligible Dotorate"
            document.getElementById('result').innerHTML = tx4
            break
    }
}