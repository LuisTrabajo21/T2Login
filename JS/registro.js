import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { auth } from './firebase.js';
import { showMessage } from './mensaje.js';

const logueo = document.querySelector('.login-form');

logueo.addEventListener('submit', async (e) => {
    e.preventDefault();

    const correo = document.querySelector('#email').value;
    const contraseña = document.querySelector('#password').value;

    console.log(correo, contraseña);

    try {
        // Crear un nuevo usuario con Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, correo, contraseña);
        const user = userCredential.user;
        console.log('Usuario creado:', user);

        // Limpiar los campos del formulario
        logueo.reset(); // Esto limpia todos los campos del formulario

        // Mostrar mensaje de bienvenida
        showMessage("Bienvenido " + userCredential.user.email);

        // Redirigir a la página principal
        window.location.href = '../principal.html'; // Asegúrate de que la ruta sea correcta según tu estructura de archivos

    } catch (error) {
        console.log(error.message);
        console.log(error.code);
        if (error.code === 'auth/email-already-in-use') {
            showMessage("Este correo ya existe", "error");
        } else if (error.code === 'auth/invalid-email') {
            showMessage("El correo electrónico no es válido", "error");
        } else if (error.code === 'auth/weak-password') {
            showMessage("Tu contraseña es incorrecta, debe ser de al menos 6 dígitos", "error");
        } else if (error.code) {
            showMessage("Ha sucedido un error inesperado", "error");
        }
    }
});
