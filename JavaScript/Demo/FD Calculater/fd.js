function fd(){
    let month = Number(document.getElementById("input").value)
    let rate = 0
    if (month<3){
        rate = 5
    }
    else if(month>=3 && month<=6){
        rate = 6.5
    }
    else if(month>=7 && month<=9){
        rate=7
    }
    else{
        rate=8
    }
    
    let result = document.querySelector('#result')
    result.innerHTML ="Your FD Rate is " + rate + " % "


}