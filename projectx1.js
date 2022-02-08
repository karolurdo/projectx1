const input = document.getElementById('pass'); //getElementById from HTML

input.addEventListener('input', (e)=> {
    console.log(e.target.value)
})