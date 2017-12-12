$(".img-servicio").on("click", function() {
  console.log("hol<s");
  $(this).find("img").attr('src', 'assets/img/icono-exterior.png');
  $(this).find("img").css('height', '98px');
  $(".lista-menu").css("display", "block");
});
