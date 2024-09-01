import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { auth } from './firebase.js';

document.addEventListener('DOMContentLoaded', () => {
    const logout = document.querySelector('#logout-btn');
    const welcomeMessage = document.querySelector('#welcome-message');
    const userPhoto = document.querySelector('#user-photo'); // Selecciona el elemento de la foto del usuario

    // Verificar el estado de autenticación del usuario
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // Si el usuario está autenticado, mostrar su nombre y foto de perfil
            const displayName = user.displayName || user.email; // Usar el nombre mostrado o el correo electrónico si no hay nombre
            const photoURL = user.photoURL; // Obtener la URL de la foto de perfil del usuario

            welcomeMessage.textContent = `¡Hola, ${displayName}! Bienvenido a la Aplicación`;
            
            if (photoURL) {
                userPhoto.src = photoURL; // Asignar la URL de la foto al atributo src de la imagen
                userPhoto.alt = `Foto de perfil de ${displayName}`; // Añadir un alt para accesibilidad
            } else {
                // Si no hay foto de perfil, mostrar una imagen predeterminada
                userPhoto.src = '/path/to/default-image.png';
                userPhoto.alt = 'Foto de perfil predeterminada';
            }
        } else {
            // Si no hay usuario autenticado, redirigir al inicio de sesión
            window.location.href = '../index.html';
        }
    });

    if (logout) {
        logout.addEventListener('click', async () => {
            console.log('Cerrar sesión');
            try {
                await signOut(auth);
                console.log('Usuario ha cerrado sesión');
                window.location.href = '../index.html'; // Redirige al usuario a la página de inicio de sesión
            } catch (error) {
                console.error('Error al cerrar sesión:', error);
            }
        });
    } else {
        console.error('El botón de cerrar sesión no se encontró.');
    }
});
