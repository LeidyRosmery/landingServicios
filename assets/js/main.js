var pisos = [
  "INSTALACIÓN DE ALFOMBRA O TAPIZÓN",
  "INSTALACIÓN DE CERÁMICO Y/O PORCELANATO",
  "INSTALACIÓN DE PISO LAMINADO",
  "INSTALACIÓN DE PISO VINÍLICO O LG"
];
var cocina = ['INSTALACIÓN DE GRIFERÍAS',
  'INSTALACIÓN DE TERMAS ELÉCTRICAS',
  'INSTALACIÓN DE CABINAS DE DUCHA Y COLUMNAS DE DUCHAS',
  'INSTALACIÓN DE APARATOS SANITARIOS',
  'INSTALACIÓN DE CAMPANA',
  'INSTALACIÓN DE TENDALES DE TECHO Y PARED',
  'ARMADO DE ESTUFAS A GAS'
];
var exterior = [
  " INSTALACIÓN DE PISCINAS ESTRUCTURADAS",
  " ARMADO DE CAMAS ELÁSTICAS Y TRAMPOLINES",
  " ARMADO DE CASAS JARDÍN - ERGO BOGEDA",
  " ARMADO DE PARRILLAS A CARBÓN",
  " ARMADO DE PÉRGOLAS Y TOLDOS",
  " ARMADO DE PARRILLA A GAS"
];
var electricidad = [
  "INSTALACIÓN DE INTERCOMUNICADORES Y VIDEO PORTEROS",
  "INSTALACIÓN BÁSICA DE AIRES ACONDICIONADOS",
  "INSTALACIÓN DE LÁMPARAS DE TECHO Y VENTILADORES"
];
var puertas = [
  "INSTALACIÓN DE PUERTAS DE MADERA - INTERIOR Y EXTERIOR",
  "INSTALACIÓN DE CERRADURAS",
  "INSTALACIÓN DE PERSIANAS Y CORTINAS"
];
var deco = [
  "ARMADO DE MUEBLES ITALINEA",
  "ARMADO DE MUEBLES: ROPEROS ",
  " ARMADO DE MUEBLES: CENTROS DE TV",
  " ARMADO DE MUEBLES: ESCRITORIOS",
  " ARMADO DE MUEBLES: SILLAS",
  " ARMADO DE MUEBLES: LOCKERS",
  " ARMADO DE MUEBLES: ZAPATERAS",
  " ARMADO DE MUEBLES: ESTANTES",
  " ARMADO DE MUEBLES: CÓMODAS",
  " ARMADO DE MUEBLES: VELADORES",
  "  ARMADO DE MUEBLES: ESTANTES",
  "INSTALACIÓN DE RACKS",
  "SERVICIO DE PINTURA LATEX INTERIOR Y EXTERIOR"
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

      const item = $(' <li class="item-menu" ><span class="txt-menu" >' + elemento + '</span><i class="icon-arrow glyphicon glyphicon-chevron-right "></i></li>');
      lista.append(item);
    } else {

      const item = $(' <li class="item-menu"><span class="txt-menu">' + elemento + '</span><i class="icon-arrow glyphicon glyphicon-chevron-right "></i></li>');
      lista.append(item);
    }


  });
  contLista.append(lista);
  colLista.append(contLista);

  return colLista;
}

const activator = (valor) => {
  valor.addClass('active');
  valor.find("img").css('display', 'block');
  valor.find('span').css('display', 'none');
  valor.css('background', '#0079d7');
  $(".lista-menu").fadeIn('fast');
}

const desactivator = (valor) => {
  valor.removeClass('active');
  valor.find("img").css('display', 'none');
  valor.find('span').css('display', 'block');
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
    }

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
});
