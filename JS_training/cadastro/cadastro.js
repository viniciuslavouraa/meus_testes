let infoBox = document.querySelector('.info')
let regisBox = document.querySelector('.cadastro')
let rBtn =document.querySelector('#register')
rBtn.addEventListener('click', () => {
    const cadastro = {
        name: nomeComplet.value, 
        address: address.value, 
        numero: num.value, 
        bairro: bairro.value, 
        city: cidade.value, 
        state: estado.value
    }
    console.log(cadastro)
    regisBox.style.display = 'none'
    infoBox.style.display = 'flex'
    res.innerHTML = ''
    res.innerHTML = `<p>Olá, ${cadastro.name} <br> ${cadastro.address}, ${cadastro.numero} <br> ${cadastro.bairro} <br> ${cadastro.city}, ${cadastro.state}</p>`
})
let nomeComplet = document.querySelector('#name')
let address = document.querySelector('#endereço')
let num = document.querySelector('#numero')
let bairro = document.querySelector('#bairro')
let cidade = document.querySelector('#cidade')
let estado = document.querySelector('#estado')

// Alterar informações
let btnAlt = document.querySelector('#btn-alterar')
let res = document.querySelector('#res')
btnAlt.addEventListener('click', () => {
    const cadastro = {
        name: nomeComplet.value, 
        address: address.value, 
        numero: num.value, 
        bairro: bairro.value, 
        city: cidade.value, 
        state: estado.value
    }
    infoBox.style.display = 'none'
    regisBox.style.display = 'flex'
    nomeComplet.value =  cadastro.name
    address.value = cadastro.address
    numero.value = cadastro.numero
    bairro.value = cadastro.bairro
    cidade.value = cadastro.city
    estado.value = cadastro.state
})

