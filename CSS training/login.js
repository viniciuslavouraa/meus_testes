var register = document.querySelector('.registro')
var btn_login = document.querySelector('#login')
var btn_register = document.querySelector('#registrar')
var class_register = document.querySelector ('.register')
btn_register.addEventListener('click',enviar)
class_register.addEventListener('click', voltar)
function enviar() {
    register.style.display = 'block'
    btn_login.style.display = 'none'
    btn_register.style.display = 'none'
}

function voltar() {
    register.style.display = 'none'
    btn_login.style.display = 'block'
    btn_register.style.display = 'block'
}