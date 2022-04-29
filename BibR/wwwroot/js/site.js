
//mostrar senha
let mostrarsenha = document.querySelector('.mostrar');
let ocultarsenha = document.querySelector('.ocultar');
let mostrarsenha2 = document.querySelector('.mostrar2');
let ocultarsenha2 = document.querySelector('.ocultar2');
let input = document.getElementById('senha');
let inputs = document.getElementById('senha2');

mostrarsenha.addEventListener('click', (e) => {
    input.setAttribute('type', 'text');
    mostrarsenha.style.display = 'none';
    ocultarsenha.style.display = 'block';
});


ocultarsenha.addEventListener('click', (e) => {
    input.setAttribute('type', 'password');
    mostrarsenha.style.display = 'block';
    ocultarsenha.style.display = 'none';
});
mostrarsenha.addEventListener('click', (e) => {
    inputs.setAttribute('type', 'text');
    mostrarsenha.style.display = 'none';
    ocultarsenha.style.display = 'block';
});


ocultarsenha.addEventListener('click', (e) => {
    inputs.setAttribute('type', 'password');
    mostrarsenha.style.display = 'block';
    ocultarsenha.style.display = 'none';
});

mostrarsenha2.addEventListener('click', (e) => {
    input.setAttribute('type', 'text');
    mostrarsenha.style.display = 'none';
    ocultarsenha.style.display = 'block';
});


ocultarsenha2.addEventListener('click', (e) => {
    input.setAttribute('type', 'password');
    mostrarsenha.style.display = 'block';
    ocultarsenha.style.display = 'none';
});
mostrarsenha2.addEventListener('click', (e) => {
    inputs.setAttribute('type', 'text');
    mostrarsenha.style.display = 'none';
    ocultarsenha.style.display = 'block';
});


ocultarsenha2.addEventListener('click', (e) => {
    inputs.setAttribute('type', 'password');
    mostrarsenha.style.display = 'block';
    ocultarsenha.style.display = 'none';
});
//-----------------------------------