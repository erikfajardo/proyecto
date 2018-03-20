$(document).ready(function () {
$('#contenido').load('modulos/inicio/index.html');

$("#irInicio").click(function(e) {
  $('#contenido').load('modulos/inicio/index.html');
});

$("#busqueda").click(function(e) {
  $('#contenido').load('modulos/busqueda/index.html');
  $('#buscador').val('');
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
 $('#usuarioPanel').html("<input type='search' name='' value='' placeholder='Buscar...' class='buscardorPanel' id='buscador'><input type='submit' value='Buscar' class='botonBuscar' id='busqueda'><a class='blanco' href='#' id='registro'>Bienvenido USUARIO</a> / <a class='blanco' href='#' id='cerrarSesion'>Cerrar Sesión</a>");


}
})
  $('#modulos').load('modulos/sesion/iniciar.html');
});

$("#cerrarSesion").click(function(e) {
  swal({
    title: 'Seguro de Cerrar Sesión',
    confirmButtonText: 'ACEPTAR',
    showCancelButton: true,
    cancelButtonColor: '#DB2828',
    cancelButtonText: 'Cancelar',
    allowOutsideClick: false
  }).then((result) => {
  if (result.value) {
  $('#contenido').load('modulos/inicio/index.html');
 $('#usuarioPanel').html("<input type='search' name='' value='' placeholder='Buscar...' class='buscardorPanel' id='buscador'><input type='submit' value='Buscar' class='botonBuscar' id='busqueda'><a class='blanco' href='#' id='registro'>Registrarse</a> / <a class='blanco' href='#' id='inicio'>Iniciar Sesión</a>");


}
})
});

});
