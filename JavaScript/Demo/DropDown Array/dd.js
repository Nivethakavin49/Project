const list = document.getElementById('dda')
let arr = ['ECE', 'CSE', 'IT', 'EEE', 'MECH', 'CIVIL']

for (i=0; i<arr.length; i++){
    optiondiv = document.createElement('option')
    optiondiv.value=arr[i]
    optiondiv.text = arr[i]
    list.appendChild(optiondiv)
}



    


