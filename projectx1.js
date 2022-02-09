const input = document.getElementById('pass'); //getElementById from HTML
const message = "password accept";
const messageBad = "wrong password";
const passwords = ["admin", "user", "noob"]; // password

input.addEventListener('input', (e) => {
    
    const text = e.target.value;
    document.querySelector('div').textContent=messageBad;
    
passwords.forEach(password=> {
    if (password === text) {
        document.querySelector('div').textContent= message;
        e.target.value='';
}

});
});


//FOCUS
 input.addEventListener('focus', (e) => { //change backgroud color when write password
 e.target.classList.add('active');
 });

//BLUR
input.addEventListener('blur', (e) => { 
e.target.classList.remove('active');
});