$(document).ready(function () {
$('#contenido').load('modulos/inicio/index.html');

$("#irInicio").click(function(e) {
  $('#contenido').load('modulos/inicio/index.html');
})
  $('#modulos').load('modulos/sesion/registrar.html');
});

$("#registro").click(function(e) {
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
  $('#modulos').load('modulos/sesion/registrar.html');
});

$("#inicio").click(function(e) {
  swal({
    confirmButtonText: 'ACEPTAR',
    showCancelButton: true,
    cancelButtonColor: '#DB2828',
    cancelButtonText: 'Cancelar',
    html: "<div id='modulos'></div>",
    allowOutsideClick: false
  }).then((result) => {
  if (result.value) {
  $('#contenido').load('modulos/usuario/index.html');
}
})
  $('#modulos').load('modulos/sesion/iniciar.html');
});


});
