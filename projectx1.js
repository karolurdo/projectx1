const input = document.getElementById('pass'); //getElementById from HTML
const message = "password accept";
const messageBad = "wrong password";
const passwords = ["admin", "user", "noob"]; // password

input.addEventListener('input', (e) => {
    console.log(e.target.value)
    if (password === e.target.value) {
        document.querySelector('div').textContent= message;
        e.target.value =""; // invisible password when correct
    } else {
        document.querySelector('div').textContent=messageBad;
    }
})

//FOCUS
input.addEventListener('focus', (e) => { //change backgroud color when write password
    e.target.classList.add('active');
})

//BLUR
input.addEventListener('blur', (e) => { 
    e.target.classList.remove('active');
})