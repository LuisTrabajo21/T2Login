import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { auth } from './firebase.js';
import { showMessage } from './mensaje.js';

const google = document.querySelector('#google-sign-in');
google.addEventListener('click', async () => {
    const provider = new GoogleAuthProvider();

    try {
        const credentials = await signInWithPopup(auth, provider);
        console.log(credentials);

        // Mostrar el mensaje de bienvenida antes de redirigir
        showMessage('Bienvenido ' + credentials.user.displayName, 'success');

        // Redirigir después de un pequeño retraso para que el usuario vea el mensaje
        setTimeout(() => {
            window.location.href = 'principal.html'; // Asegúrate de que la ruta sea correcta
        }, 1000); // 2 segundos de retraso
    } catch (error) {
        console.log(error);
        showMessage('Error al iniciar sesión: ' + error.message, 'error');
    }
});
