const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click',()=>{
    // alert('123')
    container.classList.add('right-panel-active')
})

signInButton.addEventListener('click',()=>{
    // alert('123')
    container.classList.remove('right-panel-active')
})

