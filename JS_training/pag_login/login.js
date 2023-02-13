
 var login = document.querySelector ('#login_box')
 var l_tittle = document.querySelector ('#login_tittle')
 var btn = document.querySelector ('#botao')
 login.addEventListener ('click', hidde)
 btn.addEventListener ('click', clicar)
 function clicar () {
    l_tittle.style.display = 'none'
    l_tittle.style.transition = 'all 3s'
 }
 function hidde(){
    var l_box = document.querySelector ('#login_box')
    var email = document.querySelector ('#email')
    var senha = document.querySelector ('#senha')
    l_box.style.background = '#111111'
 }
 document.body.addEventListener ('load', carregar)
 function carregar () {

 }