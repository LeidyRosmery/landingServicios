const activator = (valor) => {
    valor.addClass('active');
    valor.find("img").css('display', 'block');
    valor.find('span').css('display', 'none');
    valor.css('background', '#0079d7');
}

const desactivator = (valor) => {
    valor.removeClass('active');
    valor.find("img").css('display', 'none');
    valor.find('span').css('display', 'block');
    valor.css('background', '');
}

$(".img-servicio").on("click", function() {
  let valor = false;
    if (valor == false) {
        desactivator($(".img-servicio"));
        activator($(this));
        valor=true;
    } else {
        desactivator($(this));
        valor=false;
    }
});




var piso = ['Instalacion de alfombra o tapizon', 'Instalacion de ceramico y/o porcelanato', 'Instalacion de piso laminado', 'Instalacion de piso Vinilico o LG'];
