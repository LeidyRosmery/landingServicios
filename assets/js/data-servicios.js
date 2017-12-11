var state = {

}



$(document).ready( function() {
  $.get("/static/categorias/contenidoEstatico/landings/Landing_footer_2017/mapa/tienda.json?v=1", function(data){
    state.tiendas = data;
    console.log(state.tiendas);
  });
});
