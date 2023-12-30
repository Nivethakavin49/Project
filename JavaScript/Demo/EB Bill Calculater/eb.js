function eb(){
    let units = Number(document.getElementById("input").value)
    let rate = 0
    if(units<=50){
        rate=0.75*units
    }
    else if(units<=150){
        rate=0.75*50 + (units-50)*1
    }
    else if(units<=250){
        rate=0.75*50 + 100*1 +(units-150)
    }
    else(units>250);{
        rate=0.75*50 + 100*1 + 150*1.30 + (units-250)*1.50
    }
    let result = document.getElementById("result")
    result.innerHTML=rate + " units"
}
