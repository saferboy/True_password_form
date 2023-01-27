let btn = document.querySelector('button')
let M   = document.querySelector('#M')

M.addEventListener('input', ()=> {
    if (M.value == '1234') {
        M.classList.add('success')
        M.classList.remove('error')
    } else{
        M.classList.remove('success')
        M.classList.add('add')
    }
})

btn.addEventListener('mouseover', ()=> {
    if (M.value == '1234') {
        //good
    } else {
        if (btn.classList.contains('run')) {
            btn.classList.remove('run')
        } else {
            btn.classList.add('run')
        }
    }
})