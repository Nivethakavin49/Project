function convert(){
    const celval = Number(document. getElementById("input").value)
    const fahval = celval*9/5+32
    const result = document.getElementById("result")
    result.innerHTML =fahval+ " F"
}