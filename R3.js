// Creamos las variables que nos permiten hacer funcionar el video modal
// El elemento modal
let modal = document.getElementById('simpleModal');
// el button del modal
let modalBtn = document.getElementById('modalBtn');
// button que nos permite el cierre
let closeBtn = document.getElementsByClassName('closeBtn')[0];

// Registramos el evento para cada variable
// para abrir
modalBtn.addEventListener('click', openModal);
// para cerrar
closeBtn.addEventListener('click', closeModal);


// Las acciones que queremos que realicen los botones al click
// abrir el modal
function openModal(){
    modal.style.display = 'block';
}
// cerrar el modal
function closeModal(){
    modal.style.display = 'none';
}

