$(document).ready(function () {


$("#editarPerfil").click(function(e) {
  swal({
    confirmButtonText: 'ACEPTAR',
    showCancelButton: true,
    cancelButtonColor: '#DB2828',
    cancelButtonText: 'Cancelar',
    html: "<div id='modulos'></div>",
    allowOutsideClick: false
  }).then((result) => {
  if (result.value) {
    swal({
      confirmButtonText: 'ACEPTAR',
      title:'Cambio Exitoso',
      type:'success'
    })
}
})
  $('#modulos').load('modulos/usuario/editar.html');
});

$("#subirVideo").click(function(e) {
  swal({
    confirmButtonText: 'ACEPTAR',
    showCancelButton: true,
    cancelButtonColor: '#DB2828',
    cancelButtonText: 'Cancelar',
    html: "<div id='modulos'></div>",
    allowOutsideClick: false
  }).then((result) => {
  if (result.value) {
    swal({
      confirmButtonText: 'ACEPTAR',
      title:'Video Subido con Exito',
      type:'success'
    })
}
})
  $('#modulos').load('modulos/subirVideo/index.html');
});

});
