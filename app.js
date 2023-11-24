let $ = document;
let buttons = $.querySelectorAll('.btn')
let inputValue = $.querySelector('.input-value')
let clear = $.querySelector('.clear')
let equal = $.querySelector('.equal')
let showResult = $.querySelector('.calc__result')
let resultWrapper = $.querySelector('.calc__result-wrapper')
let undo = $.querySelector('.undo')
let calculator = $.querySelector('.calc')
let darkModeBtn = $.querySelector('.circle')
let switchDarkMode = $.querySelector('.switch-light')
let darkModeIcon = $.querySelector('.moon-sun')
let flag = true

// value with mouse
buttons.forEach(btn => {
    btn.addEventListener('click', e => {
        let val = e.target.dataset.num
        inputValue.value += val
    })
})

clear.addEventListener('click', () => {
    removeValue()
})

undo.addEventListener('click', () => {
    undoBtn()
})



// Error Handling Start //

// With Mouse
equal.addEventListener('click', () => {
    if(inputValue.value === '') {
        alert('Please enter a value :)')
    } else {
        showFinalValue()
    }    
})
// With Keyboard
window.addEventListener('keydown', e => {
    if (e.key === 'Enter' && inputValue.value === '') {
        alert('Please enter a value :)')
    } else if(e.key === 'Enter' && !inputValue.value == '') {
        showFinalValue()
    } else if(e.key === 'Backspace') {
        undoBtn()
    }
})

// Error Handling End //






// Function //

// For show value in screen
function showFinalValue() {
    let answer = eval(inputValue.value)
    inputValue.value = answer
    showResult.innerHTML = inputValue.value
    resultWrapper.classList.add('active')
}

// for remove value in screen 
function removeValue() {
    inputValue.value = ''
    resultWrapper.classList.remove('active')
}

// for Backspace key 
function undoBtn() {
    let undoVal = inputValue.value.substring(0, inputValue.value.length - 1)
    inputValue.value = undoVal
}



// DARK MODE //

darkModeBtn.addEventListener('click', () => {
    if(flag) {
        // icon design
        localStorage.setItem('theme','dark') 
        darkMode()   
        flag = false
    } else {
        // icon design
        localStorage.setItem('theme','light')
        lightMode()
        flag = true
    }
    
})


window.onload = function () {
    let localStorageTheme = localStorage.getItem('theme')
    
    if (localStorageTheme === 'dark') {
        darkMode()
    } 
}



function darkMode() {
    darkModeBtn.style.animation = 'darkModeOn 1s forwards'
    darkModeBtn.style.backgroundColor = '#f9fbff'
    darkModeIcon.style.color = '#333'
    switchDarkMode.style.backgroundColor = '#333'
    // background design
    document.body.style.backgroundColor = '#121212'
    calculator.style.backgroundColor = '#1212126c'
    inputValue.style.boxShadow = 'none'
}

function lightMode() {
     darkModeBtn.style.animation = 'darkModeOff 1s forwards'
        darkModeBtn.style.backgroundColor = '#333'
        darkModeIcon.style.color = '#f9fbff'
        switchDarkMode.style.backgroundColor = '#f9fbff'
        // background design
        document.body.style.backgroundColor = '#0086f3'
        calculator.style.backgroundColor = '#f9fbff'
}