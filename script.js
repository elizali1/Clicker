console.log('testing...')

//1. Create a new varible called 'total' and assign it the div with the id of 'total'
    var total = document.getElementById('total')
    let num=0
    console.log(total)
//2. Create Six Functions (add, subtract, multiplyBy2, divideBy2, multiplyBy5, divideBy5)
// Example: 
    function add(){
    //update the value of the total variable textContent
    // use an alert to alert the user
    let addNum=total.textContent=("The total is now: " + (num+=1))
    console.log(`${addNum}`)
        alert("You just added 1!")}

    function subtract(){
        let subNum=total.textContent=("The total is now: " + (num-=1))
        console.log(`${subNum}`)
        alert("You just subtracted 1!")
    }

    function multiplyBy2(){
        let multTwoNum=total.textContent=("The total is now: " + (num*=2))
        console.log(`${multTwoNum}`)
        alert("You just multiplied by 2!")
    }

    function multiplyBy5(){
        let multFiveNum=total.textContent=("The total is now: " + (num*=5))
        console.log(`${multFiveNum}`)
        alert("You just multiplied by 5!")
    }

    function divideBy2(){
        let divTwoNum=total.textContent=("The total is now: " + (num/=2))
        console.log(`${divTwoNum}`)
        alert("You just divided by 2!")
    }

    function divideBy5(){
        let divFiveNum=total.textContent=("The total is now: " + (num/=5))
        console.log(`${divFiveNum}`)
        alert("You just divided by 5!")
    }

//3. Attach Functions to Buttons
document.getElementById('add').addEventListener('click', add)
document.getElementById('subtract').addEventListener('click', subtract)
document.getElementById('mult-2').addEventListener('click', multiplyBy2)
document.getElementById('mult-5').addEventListener('click', multiplyBy5)
document.getElementById('div-2').addEventListener('click',divideBy2)
document.getElementById('div-5').addEventListener('click', divideBy5)