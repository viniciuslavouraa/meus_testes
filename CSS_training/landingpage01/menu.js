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

let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
let btn3 = document.querySelector('#btn3')

btn1.addEventListener('click',mudar), btn2.addEventListener('click',mudar2), btn3.addEventListener('click',mudar3)

function mudar() {
    let content = document.querySelectorAll('.content')[0];
    if (content.style.top == '0px' || content.style.top == '') {
        content.style.top = '-100px'
    } else {
        content.style.top = '0px'
    }
}

function mudar2() {
     let content = document.querySelectorAll('.content')[1]
     if (content.style.top == '0px' || content.style.top == '') {
        content.style.top = '-100px'
     } else {
        content.style  = '0px'
     }
}

function mudar3() {
    let content = document.querySelectorAll('.content')[2]
    if (content.style.top == '0px' || content.style.top == '') {
       content.style.top = '-100px'
    } else {
       content.style  = '0px'
    }
}




