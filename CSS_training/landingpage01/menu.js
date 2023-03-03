let btn = document.querySelector('#btn')
let menu_open = document.querySelector('#content-menu')

btn.addEventListener('click', function() {
    if (menu_open.style.display == 'none') {
        menu_open.style.display = 'flex'
        menu_open.style.position = 'absolute'
        btn.style.transform = 'rotate(90deg)'
        btn.style.transition = '600ms'
    } else {
        menu_open.style.display = 'none'
        btn.style.transform = ''
    }
})

function mudarContent(index) {
    let content = document.querySelectorAll('.content')[index]
    if (content.style.top == '0px' || content.style.top == '') {
        content.style.top = '-100px'
        content.style.boxShadow = '4px 8px 3px #00000070'
    } else {
        content.style.top = '0px'
        content.style.boxShadow = '2px 3px 3px #00000070'
    }
}
let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
let btn3 = document.querySelector('#btn3')
btn1.addEventListener('click', function() {mudarContent(0)})
btn2.addEventListener('click', function() {mudarContent(1)})
btn3.addEventListener('click', function() {mudarContent(2)})

let talk = document.querySelector('#talk')
let interview = document.querySelector('#inter')
let exib = document.querySelector('exib')
talk.addEventListener('click',showTalk)
interview.addEventListener ('click', interV)
let paises = document.querySelector('#paises')

function showTalk() {
    if (paises.style.visibility == 'hidden') {
        paises.style.visibility = 'visible' 
        talk.style.backgroundColor = 'white'
        talk.style.color = '#f5523c'
        interview.style.backgroundColor = ''
        interview.style.color = ''
    } else {
        paises.style.visibility = 'hidden'
        talk.style.backgroundColor = ''
        talk.style.color = ''
    }
}
function interV() {
    interview.style.backgroundColor = 'white'
    interview.style.color = '#f5523c'
    talk.style.backgroundColor = ''
    talk.style.color = ''
}