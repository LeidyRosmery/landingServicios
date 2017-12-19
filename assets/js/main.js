var pisos = [
  "Instalación de alfombra y/o tapizón",
  "Instalación de cerámico y/o porcelanato",
  "Instalación de piso laminado",
  "Instalación de piso Vinílico o lg"

];
var cocina = [
  "Instalación de griferías",
  "Instalación de termas eléctricas",
  "Instalación de cabinas de ducha y columnas de duchas",
  "Instalación de aparatos sanitarios",
  "Instalación de campana",
  "Instalación de tendales de techo y pared",
  "Armado de estufas a gas"
];
var exterior = [
  "Instalación de piscinas estructuradas",
  "Armado de camas elásticas y trampolines",
  "Armado de casas jardín - ergo bodega",
  "Armado de parrillas a carbón",
  "Armado de pérgolas y toldos",
  "Armado de parrilla a gas"
];
var electricidad = [
  "Instalación de intercomunicadores y video porteros",
  "Instalación básica de aires acondicionados",
  "Instalación de lámparas de techo y ventiladores"
];
var puertas = [
  "Instalación de puertas de madera - interior y exterior",
  "Instalación de cerraduras",
  "Instalación de persianas y cortinas"
];
var deco = [
  "Armado de muebles italinea, roperos, centro de TV, escritorios, sillas, lockers, zapateras, estantes, cómodas, veladores, estantes",
  "Instalación de racks",
  "Servicio de pintura Latex interior y exterior"
];

$('.pisos').data('categoria', pisos);
$('.exterior').data('categoria', exterior);
$('.electricidad').data('categoria', electricidad);
$('.puertas').data('categoria', puertas);
$('.cocina').data('categoria', cocina);
$('.deco').data('categoria', deco);


const genMenu = (array) => {
  const colLista = $('<div class="add col-xs-12 col-md-12 col-lg-12">');
  const contLista = $('<div class="lista-menu">');
  const lista = $('<ul style="padding-left: 0;"></ul>');
  $.each(array, function(indice, elemento) {
    console.log(array.length);
    if (array.length - 1 == indice) {
      const item = $(' <li class="item-menu" style="float:none"><div class=cont-item><span class="txt-menu" >' + elemento + '</span><i class="icon-arrow glyphicon glyphicon-chevron-right "></i></div></li>');
      lista.append(item);
    } else {
      const item = $(' <li class="item-menu"><div class=cont-item><span class="txt-menu">' + elemento + '</span><i class="icon-arrow glyphicon glyphicon-chevron-right "></i></div></li>');
      lista.append(item);
    }
  });
  contLista.append(lista);
  colLista.append(contLista);

  return colLista;
}

const activator = (valor) => {
  valor.addClass('active');
  valor.find("img").css('display', 'inline');
  valor.css('background', '#0079d7');
  $(".lista-menu").fadeIn('fast');
}

const desactivator = (valor) => {
  valor.removeClass('active');
  valor.find("img").css('display', 'none');
  valor.css('background', '');
  $(".lista-menu").fadeOut('fast');
  $('.add').remove();
}

var current;


$(".img-servicio").on("click", function() {
  if ($(window).width() < 993) {
    if ($(this).data('id') == current) {
      desactivator($(this));
    } else {
      desactivator($(".img-servicio"));
      activator($(this));
      current = $(this).data('id');
      /*code posicion list menu*/
      //  if ($(window).width() < 993) {
      if ($(this).data('id') == 4 || $(this).data('id') == 3) {
        $('.col-cont:nth-child(4)').after(genMenu($(this).data('categoria')));
      }
      if ($(this).data('id') == 1 || $(this).data('id') == 2) {
        $('.col-cont:nth-child(2)').after(genMenu($(this).data('categoria')));

      }
      if ($(this).data('id') == 5 || $(this).data('id') == 6) {
        $('.col-cont:nth-child(6)').after(genMenu($(this).data('categoria')));
      }
    }
  } else {
    if ($(this).data('id') == current) {
      $(".img-servicio").removeClass('desactive-item');
      $(".img-servicio").find('span').css('font-size', '3em');
      $(".lista-menu").fadeOut('fast');
      $('.add').remove();
      $(".lista-menu").fadeIn('fast');
    } else {
      $(".img-servicio").find('span').css('font-size', '3em');
      $(this).find('span').css('font-size', '4.5em');
      $(".img-servicio").addClass('desactive-item');
      $(this).removeClass('desactive-item');
      $(".lista-menu").fadeOut('fast');
      $('.add').remove();
      current = $(this).data('id');
      if ($(this).data('id') == 4 || $(this).data('id') == 5 || $(this).data('id') == 6) {
        $('.col-cont:nth-child(6)').after(genMenu($(this).data('categoria')));
      }
      if ($(this).data('id') == 1 || $(this).data('id') == 2 || $(this).data('id') == 3) {
        $('.col-cont:nth-child(3)').after(genMenu($(this).data('categoria')));
      }

      $(document).ready(function() {
        var heights = $(".item-menu").map(function() {
            return $(this).height();
          }).get(),
          maxHeight = Math.max.apply(null, heights);
        $(".item-menu").height(maxHeight);
      });
      $('.item-menu').on('click', function() {
        console.log("holisss");
        $('.item-menu').removeClass('active-item');
        $(this).addClass('active-item');
      });
    }
  }
});
