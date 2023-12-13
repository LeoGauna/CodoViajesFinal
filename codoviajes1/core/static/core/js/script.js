// const formulario = document.getElementById('formulario');
// const inputs = document.querySelectorAll('#formulario input');

// const expresiones = {
// 	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
// 	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
// 	password: /^.{4,12}$/, // 4 a 12 digitos.
// 	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
// 	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
// }

// const campos = {
// 	usuario: false,
// 	nombre: false,
// 	password: false,
// 	correo: false,
// 	telefono: false
// }

// const validarFormulario = (e) => {
// 	switch (e.target.name) {
// 		case "usuario":
// 			validarCampo(expresiones.usuario, e.target, 'usuario');
// 		break;
// 		case "nombre":
// 			validarCampo(expresiones.nombre, e.target, 'nombre');
// 		break;
// 		case "password":
// 			validarCampo(expresiones.password, e.target, 'password');
// 			validarPassword2();
// 		break;
// 		case "password2":
// 			validarPassword2();
// 		break;
// 		case "correo":
// 			validarCampo(expresiones.correo, e.target, 'correo');
// 		break;
// 		case "telefono":
// 			validarCampo(expresiones.telefono, e.target, 'telefono');
// 		break;
// 	}
// }

// const validarCampo = (expresion, input, campo) => {
// 	if(expresion.test(input.value)){
// 		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
// 		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
// 		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
// 		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
// 		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
// 		campos[campo] = true;
// 	} else {
// 		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
// 		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
// 		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
// 		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
// 		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
// 		campos[campo] = false;
// 	}
// }

// const validarPassword2 = () => {
// 	const inputPassword1 = document.getElementById('password');
// 	const inputPassword2 = document.getElementById('password2');

// 	if(inputPassword1.value !== inputPassword2.value){
// 		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
// 		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
// 		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
// 		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
// 		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
// 		campos['password'] = false;
// 	} else {
// 		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
// 		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
// 		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
// 		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
// 		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
// 		campos['password'] = true;
// 	}
// }

// inputs.forEach((input) => {
// 	input.addEventListener('keyup', validarFormulario);
// 	input.addEventListener('blur', validarFormulario);
// });

// formulario.addEventListener('submit', (e) => {
// 	e.preventDefault();

// 	const terminos = document.getElementById('terminos');
// 	if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked ){
// 		formulario.reset();

// 		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
// 		setTimeout(() => {
// 			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
// 		}, 5000);

// 		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
// 			icono.classList.remove('formulario__grupo-correcto');
// 		});
// 	} else {
// 		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
// 	}
// });


const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");

nombre.addEventListener("input", validarNombre);
correo.addEventListener("input", validarCorreo);

function validarNombre() {
    const nombreError = document.getElementById("nombre-error");
    const nombre = document.getElementById("nombre");

    const nombrePattern = /^[a-zA-Z\s]+$/;

    if (nombre.value.length < 3 || !nombrePattern.test(nombre.value)) {
        nombreError.style.display = "block";
    } else {
        nombreError.style.display = "none";
    }
}
function validarCorreo() {
    const correoError = document.getElementById("correo-error");
    const correoPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!correoPattern.test(correo.value)) {
        correoError.style.display = "block";
    } else {
        correoError.style.display = "none";
    }
}

function validarFormulario() {
    validarNombre();
    validarCorreo();


    return !document.querySelectorAll(".error-message:visible").length;
}
let slideIndex = 0;
let commentsData = [];

// Hacer una solicitud para obtener los comentarios desde la API
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(data => {
        commentsData = data;
        showSlide(slideIndex);
    })
    .catch(error => console.error('Error al obtener comentarios:', error));

function changeSlide(n) {
    slideIndex += n;
    if (slideIndex < 0) {
        slideIndex = commentsData.length - 1;
    } else if (slideIndex >= commentsData.length) {
        slideIndex = 0;
    }
    showSlide(slideIndex);
}

function showSlide(n) {
    if (commentsData.length === 0) {
        return;
    }

    const comment = commentsData[n];
    const commentElement = document.querySelector('.comment p');
    commentElement.textContent = comment.body;
}

showSlide(slideIndex);
