/****************js de login****************/

/*Validaciones*/

function validacion(){
    let usuario = document.getElementById('usuario').value;
    let password = document.getElementById('password').value;

    let correcto = true;


    if (usuario=="" || !/^[\S]{8,12}$/.test(usuario)){
        document.getElementById('usuarioHelp').style.visibility="visible";
        correcto = false;
    }

    if (password=="" || !/^[\S]{8,15}$/.test(password)){
        document.getElementById('passwordHelp').style.visibility="visible";
        
        correcto = false;
    }

    if(!/[A-ZÑ]+/.test(password) || !/[a-zñ]+/.test(password) || !/[0-9]+/.test(password)){
        document.getElementById('passwordHelp2').style.visibility="visible";
        correcto = false;
    }

    return correcto
}


function resetear(id){
    document.getElementById(id+'Help').style.visibility="hidden"; 
    document.getElementById(id+'Help2').style.visibility="hidden"; 
    document.getElementById(id).style.borderColor="lightgray";
}