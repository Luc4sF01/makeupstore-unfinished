document.addEventListener('DOMContentLoaded', function () {
    const loginToggle = document.getElementById('login-toggle');
    const signupToggle = document.getElementById('signup-toggle');
    const loginLink = document.getElementById('login-link');
    const container = document.querySelector('.container');
    
    loginToggle.addEventListener('click', function () {
        container.classList.remove('show-signup');
        loginToggle.classList.add('active');
        signupToggle.classList.remove('active');
        document.body.classList.add('login-bg');
        document.body.classList.remove('signup-bg');
    });
    
    signupToggle.addEventListener('click', function () {
        container.classList.add('show-signup');
        loginToggle.classList.remove('active');
        signupToggle.classList.add('active');
        document.body.classList.add('signup-bg');
        document.body.classList.remove('login-bg');
    });
    
    loginLink.addEventListener('click', function (e) {
        e.preventDefault();
        container.classList.remove('show-signup');
        loginToggle.classList.add('active');
        signupToggle.classList.remove('active');
        document.body.classList.add('login-bg');
        document.body.classList.remove('signup-bg');
    });
});
