import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { auth } from './firebase.js';
import { showMessage } from './mensaje.js';

const logueo = document.querySelector('.login-form');

logueo.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Seleccionar los campos de entrada
    const correo = document.querySelector('#email').value;
    const contraseña = document.querySelector('#password').value;

    try {
        // Intentar iniciar sesión con Firebase Authentication
        const credentials = await signInWithEmailAndPassword(auth, correo, contraseña);
        console.log(credentials);
        showMessage('Bienvenido ' + credentials.user.displayName, 'success' )
        // Redirigir al usuario a la página principal después del inicio de sesión
        window.location.href = 'principal.html'; // Asegúrate de que la ruta sea correcta
    } catch (error) {
        if (error.code === "auth/user-not-found") {
            showMessage("Usuario no encontrado", "error");
        } else if (error.code === "auth/wrong-password", "error") {
            showMessage("Contraseña incorrecta", "error");
        } else if (error.code === "auth/invalid-email") {
            showMessage("Correo electrónico no válido", "error");
        } else {
            showMessage(error.message, 'error');
        }
    }
});
