import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { showMessage } from './mensaje.js'; // Asegúrate de que esta función esté correctamente implementada para mostrar mensajes

const auth = getAuth();

// Selecciona el formulario de recuperación de contraseña
const form = document.querySelector('.login-form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.querySelector('#email').value;

    try {
        // Envía el correo electrónico de restablecimiento de contraseña
        await sendPasswordResetEmail(auth, email);
        showMessage('Se ha enviado un correo electrónico con instrucciones para recuperar tu contraseña.', 'success');
    } catch (error) {
        console.error('Error al enviar el correo de recuperación de contraseña:', error);
        if (error.code === 'auth/user-not-found') {
            showMessage('No se encontró un usuario con ese correo electrónico.', 'error');
        } else if (error.code === 'auth/invalid-email') {
            showMessage('Por favor, ingresa un correo electrónico válido.', 'error');
        } else {
            showMessage('Error inesperado, por favor intenta de nuevo más tarde.', 'error');
        }
    }
});
