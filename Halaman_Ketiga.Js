document.addEventListener("DOMContentLoaded", function () {
    showLogin(); // Tampilkan login form saat halaman dimuat
});

function showLogin() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("registerForm").style.display = "none";
}

function showRegister() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "block";
}