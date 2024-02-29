/****************js de insercion****************/

/*Modal*/
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/************** Validaciones *************/

function validacion(){
  let nombre = document.getElementById('nombre').value;
  let usuario = document.getElementById('usuario').value;
  let numContacto = document.getElementById('numContacto').value;
  let email = document.getElementById('email').value;
  let provincia = document.getElementById('provincia').value;
  let terminos = document.getElementById('terminos');
  let tipoProfesor = document.getElementById('profesor');
  let tipoEstudiante= document.getElementById('estudiante');
  let numLocalizador = document.getElementById('numLocalizador').value;

  let correcto = true;

  if(usuario==""){
    document.getElementById('usuarioHelp').style.visibility="visible";
    document.getElementById('usuarioMarca').style.visibility="visible";
    correcto = false;
  }

  //Longitud mínima de 2 especificado en !/[a-zñ]{2,}/i.test(nombre))
  if (nombre==""|| /[0-9]/.test(nombre) || !/[a-zñ]{2,}/i.test(nombre)){
    document.getElementById('nombreHelp').style.visibility="visible";
    document.getElementById('nombreMarca').style.visibility="visible";
    correcto = false;
      
  }

  //Formato de 9 dígitos numéricos
  if(numContacto=="" || !/[0-9]{9}/.test(numContacto)){
    document.getElementById('numContactoHelp').style.visibility="visible";
    document.getElementById('numContactoMarca').style.visibility="visible";
    correcto = false;
  }

  //Número dividido en dos partes separados por/, la primera parte puede tomar valores 
  //entre 0-9, en la segunda el primer dígito puede tener valores entre 0-2 y el segundo entre 0-9
  if(numLocalizador=="" || !/^[0-9]{1}[/][0-2]{1}[0-9]{1}$/.test(numLocalizador)){
    document.getElementById('numLocalizadorHelp').style.visibility="visible";
    document.getElementById('numLocalizadorMarca').style.visibility="visible";
    correcto = false;
  }

  /**validacion email */
  if (email=="" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    document.getElementById('emailHelp').style.visibility="visible";
    document.getElementById('emailMarca').style.visibility="visible";
    correcto = false;
  }

  //Comprueba que se ha cambiado de la opción predeterminada
  if (provincia == 0){
      
    document.getElementById('provinciaHelp').style.visibility="visible";
    document.getElementById('provinciaMarca').style.visibility="visible";
    correcto = false;
  }

  //Comprueba que se ha elegido una opción u otra
  if((!tipoProfesor.checked)&&(!tipoEstudiante.checked)){
    document.getElementById('tipoHelp').style.visibility="visible";
    document.getElementById('tipoMarca').style.visibility="visible";
    correcto=false;
  }

  //Comprueba que se ha hecho check en terminos
  if (!terminos.checked){
    document.getElementById('terminosHelp').style.visibility="visible";
    document.getElementById('terminosMarca').style.visibility="visible";
    correcto = false;
  }

  return correcto;
    
}


//Vuelve a ocultar mensajes de error
function resetear(id){
  document.getElementById(id+'Help').style.visibility="hidden";
  document.getElementById(id+'Marca').style.visibility="hidden";  
  document.getElementById(id).style.borderColor="lightgray";
}