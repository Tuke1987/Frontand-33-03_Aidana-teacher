var array = [45, 56, 6, 74, 88, 90]
var getPositionElement = (arr, elem) => {
    for (var i = 0; i < array.length; i++) {
        if (arr[i] === elem) {
            return console.log(i)
        }
    }
    return console.log('not found')
}
getPositionElement(array, 74)

//sort
var example = [3, 4, 5, 6, 6]
console.log(example.sort())

function findMax (array){
    var max = array[0]
    for (var num of array){
        if (max < num){
            max = num
        }
    }
    return console.log(max)
}

findMax([2,5,80])

var anyNumber = (findMax) =>{
    var sum = 0
    for (var i = 0; i < anyNumber.length; i ++){
        sum += anyNumber[i]
    }
    return console.log(sum)
}


//DOm
console.dir(document.body.style.backgroundColor = 'gray')
var text = document.getElementsByClassName('text')
text[1].style.color = 'red'
text[0].innerHTML
console.log(text)
var text2 = document.querySelectorAll('.text')
//id
var button = document.getElementById('btn')
// button.style.width = '300px'
//tag
var button2 = document.querySelectorAll('button')
// button2.style.width = '600px'
// button2.addEventListner('click', function () => console.log('Клик по консоле')
)
//lambda -функция в одну строку

//Обработка событий

document.querySelector('#btn').onclick = () => {
    var wrapper = document.createElement('div')
    wrapper.setAttribute('class', 'block')
    wrapper.style.width='100px'
    wrapper.style.height='100px'
    wrapper.style.backgroundColor='green'
    document.body.append(wrapper)
}

button2.add
