/*********JavaScript para listado****************/


function confirmar() {
    let text;
    if (confirm("Está seguro de querer eliminar este usuario") == true) {
      text = "Eliminando";
    } else {
      text = "Cancelado";
    }
}