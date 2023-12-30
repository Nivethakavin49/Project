function convert(){
    const cmval = Number(document. getElementById("input").value)
    const inchval = cmval/2.54
    const result = document.getElementById("result")
    result.innerHTML =inchval.toFixed(2) + " inches"
}