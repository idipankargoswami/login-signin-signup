/*===== LOGIN SHOW and HIDDEN =====*/
const 
signUp = document.getElementById('sign-up'), 
signIn = document.getElementById('sign-in'), 
loginUp = document.getElementById('login-up') 
loginIn = document.getElementById('login-in'), 


signUp.addEventListener('click', ()=>{
    // // Remove classes first if they exist
    // loginIn.classList.remove('block')
    // loginUp.classList.remove('none')

    // // Add classes
    // loginIn.classList.toggle('none')
    // loginUp.classList.toggle('block')
    loginIn.style.display = 'none';
    loginUp.style.display = 'block';

})

signIn.addEventListener('click', ()=>{
    // // Remove classes first if they exist
    // loginIn.classList.remove('none')
    // loginUp.classList.remove('block')

    // // Add classes
    // loginIn.classList.toggle('block')
    // loginUp.classList.toggle('none')
    loginUp.style.display = 'none';
    loginIn.style.display = 'block';

})


 // Signup Functionality
 const signupFormElement = document.getElementById('login-up');
 signupFormElement.addEventListener('submit', (e) => {
     e.preventDefault();
     const username = document.getElementById('signupUsername').value;
     const email = document.getElementById('signupEmail').value;
     const password = document.getElementById('signupPassword').value;

     const users = JSON.parse(localStorage.getItem('users')) || [];

     const userExists = users.find(user => user.username === username);

     if (userExists) {
         alert('Username already taken!');
     } else {
         users.push({ username, email, password });
         localStorage.setItem('users', JSON.stringify(users));
         alert('Signup successful! You can now login.');
         signupFormElement.reset();
         loginUp.style.display = 'none';
         loginIn.style.display = 'block';
     }
 });

 // Login Functionality
 const loginFormElement = document.getElementById('login-in');
 loginFormElement.addEventListener('submit', (e) => {
     e.preventDefault();
     const username = document.getElementById('loginUsername').value;
     const password = document.getElementById('loginPassword').value;

     const users = JSON.parse(localStorage.getItem('users')) || [];
     const user = users.find(user => user.username === username && user.password === password);

     if (user) {
         alert('Login successful!');
         loginFormElement.reset();
     } else {
         alert('Invalid username or password!');
     }
 });