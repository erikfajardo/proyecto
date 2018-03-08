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
      title:'Registro Exitoso',
      type:'success'
    })
}
})
  $('#modulos').load('modulos/usuario/editar.html');
});

});
