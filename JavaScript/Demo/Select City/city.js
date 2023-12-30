/*
Chennai :   population = 4646732
            literacyRate = 90.20
            language = 'Tamil'
Bengaluru : population = 84467335
            literacyRate = 88.71
            language = 'Kannada'
Mumbai :    population = 12447365
            literacyRate = 89.73
            language = 'Marathi'
Delhi  :    population = 16787636
            literacyRate = 86.30
            language = 'Hindi'

            The Indian city of Chennai has a population of 4646732. Language spoken is Tamil and literacy rate is 90.2%
*/

const button= document.querySelector('button')
let resultdiv = document.createElement('div')
resultdiv.id='result'
document.getElementById('outer').appendChild(resultdiv)
button.addEventListener('click',dispalystats)
function dispalystats(){
    console.log('click')
    const input = document.getElementById("input")
    let city = input.options[input.selectedIndex].value
    let population = 0 , literacyRate = 0 , language=''
    switch(city){
        case 'Bangalore':
            population = 84467335
            literacyRate = 88.71
            language = 'Kannada'
            break
        case 'Chennai':
            population = 4646732
            literacyRate = 90.20
            language = 'Tamil'
            break
        case 'Madurai':
            population = 12447365
            literacyRate = 89.73
            language = 'Tamil'
            break
        case 'Karur':
            population = 16787636
            literacyRate = 86.30
            language = 'Tamil'
            break        
    }
    let text = `The Indian city of ${city} has a population of ${population}. Language spoken is ${language} and literacy rate is ${literacyRate}%.`
    console.log(text)
    document.getElementById('result').innerHTML=text
}
