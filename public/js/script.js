const scriptURL = 'https://script.google.com/macros/s/AKfycbxczHPWVMEqVjme0M7uheyq7NimalafC9BJP-zVhwKKVleT8lenUAsu-416MJY_Ig1x/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')
form.addEventListener('submit', e => {
    e.preventDefault()
    alert('Su mensaje fue enviado con exito!')
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Gracias por su mensaje!"
            setTimeout(function() {
                msg.innerHTML = ""
            }, 5000)
            form.reset
        })
        .catch(error => console.error('Error!', error.message))
})