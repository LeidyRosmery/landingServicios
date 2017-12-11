$(window).load( function() {
  //width: 100% mobile container
  var width = window.innerWidth || document.body.clientWidth || window.outerWidth;
  if(width < 992) { //mobile
    document.querySelector('#main.newMainSection > .container > .col-md-12').style.paddingLeft="0px";
    document.querySelector('#main.newMainSection > .container > .col-md-12').style.paddingRight="0px";
  }
  else { //desktop
    document.querySelector('#main.newMainSection > .container > .col-md-12').style.paddingLeft="15px";
    document.querySelector('#main.newMainSection > .container > .col-md-12').style.paddingRight="15px";
  }
});

$(window).resize( function() {
  //width: 100% mobile container
  var width = window.innerWidth || document.body.clientWidth || window.outerWidth;
  if(width < 992) {
    document.querySelector('#main.newMainSection > .container > .col-md-12').style.paddingLeft="0px";
    document.querySelector('#main.newMainSection > .container > .col-md-12').style.paddingRight="0px";
  }
  else {
    document.querySelector('#main.newMainSection > .container > .col-md-12').style.paddingLeft="15px";
    document.querySelector('#main.newMainSection > .container > .col-md-12').style.paddingRight="15px";
  }
});
