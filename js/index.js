$(document).ready(function () {
$('#contenido').load('modulos/inicio/index.html');

$("#boton").click(function(e) {
  swal({
    confirmButtonText: 'ACEPTAR',
    showCancelButton: true,
    cancelButtonColor: '#DB2828',
    cancelButtonText: 'Cancelar',
    html: "<div id='modulos'></div>",
    allowOutsideClick: false
  }).then((result) => {
  if (result.value) {
}
})
  $('#modulos').load('modulos/sesion/registrar.html');
});
});
