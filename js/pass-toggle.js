document.querySelector('.toggle-password').addEventListener('click', function (e) {
    // Toggle the type attribute using getAttribute() and setAttribute()
    var passwordInput = document.getElementById('password');
    var passwordIcon = e.target;
    var type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    // Toggle the eye / eye-slash icon
    passwordIcon.classList.toggle('fa-eye');
    passwordIcon.classList.toggle('fa-eye-slash');
});
