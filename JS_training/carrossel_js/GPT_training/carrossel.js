const controls = document.querySelectorAll ('.control');
let currentitem = 0
const items =  document.querySelectorAll ('.items')
const maxitems = items.length

controls.forEach(control => {
    control.addEventListener ('click', () => {
       const isLeft = control.classList.contains('prev')
        if (isLeft) {
            currentitem -= 1
        } else {
            currentitem += 1
        }

        if (currentitem >= maxitems) {
            currentitem = 0
        } else if (currentitem < 0) {
            currentitem = maxitems - 1 
        }
        items.forEach(item => item.classList.remove ('current-item') )

        items[currentitem].scrollIntoView ({
            inline: 'center',
            behavior: 'smooth'
        })
        items[currentitem].classList.add ('current-item')
    })
})
