const input = document.getElementById('pass'); //getElementById from HTML
const message = "password accept";
const messageBad = "wrong password";
const password = "admin";

input.addEventListener('input', (e)=> {
    console.log(e.target.value)
    if (password === e.target.value) {
        document.querySelector('div').textContent= message;
    } else {
        document.querySelector('div').textContent=messageBad;
    }
})