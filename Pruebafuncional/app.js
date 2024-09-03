// app.js

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDXNT0MJoVrml7N3Q-Oo-uq4TL8xY_8ltQ",
    authDomain: "usc-eventos-bd.firebaseapp.com",
    projectId: "usc-eventos-bd",
    storageBucket: "usc-eventos-bd.appspot.com",
    messagingSenderId: "880771289840",
    appId: "1:880771289840:web:c41af0f1ccfac2ed9ba835",
    measurementId: "G-YDE8R38T01"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Referencias a Firebase services
const auth = firebase.auth();
const db = firebase.firestore();

// Función para iniciar sesión con Google
function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then((result) => {
            const user = result.user;
            // Obtener el rol del usuario desde Firestore
            return db.collection('users').doc(user.uid).get();
        })
        .then((doc) => {
            if (doc.exists) {
                const role = doc.data().role;
                if (role === "admin") {
                    window.location.href = "admin.html";
                } else if (role === "coordinator") {
                    window.location.href = "coordinator.html";
                } else {
                    window.location.href = "user.html";
                }
            } else {
                alert("No se encontró el documento del usuario.");
            }
        })
        .catch((error) => {
            alert("Error en el inicio de sesión: " + error.message);
        });
}

// Manejo del formulario de inicio de sesión
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            // Obtener el rol del usuario desde Firestore
            return db.collection('users').doc(user.uid).get();
        })
        .then((doc) => {
            if (doc.exists) {
                const role = doc.data().role;
                if (role === "admin") {
                    window.location.href = "admin.html";
                } else if (role === "coordinator") {
                    window.location.href = "coordinator.html";
                } else {
                    window.location.href = "user.html";
                }
            } else {
                alert("No se encontró el documento del usuario.");
            }
        })
        .catch((error) => {
            alert("Error en el inicio de sesión: " + error.message);
        });
});

// Manejo del botón de Google Sign-In
const googleSignInButton = document.getElementById('google-signin-btn');
googleSignInButton.addEventListener('click', signInWithGoogle);


