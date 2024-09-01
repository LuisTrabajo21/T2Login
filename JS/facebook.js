import { FacebookAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { auth } from './firebase.js';
import { showMessage } from './mensaje.js';

const facebook = document.querySelector('#facebook-sign-in');
facebook.addEventListener('click', async () => {
    const provider = new FacebookAuthProvider();

    try {
        const credentials = await signInWithPopup(auth, provider);
        console.log(credentials);

        // Obtener el nombre y la foto de perfil del usuario
        const displayName = credentials.user.displayName;
        const photoURL = credentials.user.photoURL;

        // Mostrar el mensaje de bienvenida con el nombre del usuario
        showMessage('Bienvenido ' + displayName, 'success');

        localStorage.setItem('userPhotoURL', photoURL);

        // Redirigir después de un pequeño retraso para que el usuario vea el mensaje
        setTimeout(() => {
            window.location.href = 'principal.html'; // Asegúrate de que la ruta sea correcta
        }, 1000); // 1 segundo de retraso
    } catch (error) {
        console.log(error);
        showMessage('Error al iniciar sesión: ' + error.message, 'error');
    }
});
