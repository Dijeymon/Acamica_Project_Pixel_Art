var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

/*GUIA PARTE 1*/

/*PASO   1*/

var $paleta = $('#paleta');
var $grillaPixeles = $('#grilla-pixeles');

/* ESTAS VARIABLES NO HICIERON FALTA */

/*PASO 2 : GENERAR PALETA DE COLORES*/

function paletaColores() {
  for (var i = 0; i < nombreColores.length; i++) {
    var color = nombreColores[i];
    $("<div/>", {
      "class": "color-paleta",
      css: {
        "background-color": color
      }
    }).appendTo('#paleta');
  }
}

/*PASO 3: GRILLA DE PIXELES*/

function grillaPixeles() {
  for (var i = 0; i < 1750; i++) {
    $("<div/>").appendTo("#grilla-pixeles");
  }
}

/*LLAMANDO A LAS FUNCIONES*/

paletaColores();
grillaPixeles();

/*GUIA PARTE 2

PASO 1 : CAMBIAR INDICADOR DE COLOR*/

$('.color-paleta').click(cambiarIndicador);

function cambiarIndicador() {
  var $color = $(this).css('background-color');
  $('#indicador-de-color').css('background-color', $color);
  $('#indicador-de-color-mensaje').text('Pincel: ' + $color);
}

/* PASO 2 : PINTAR GRILLA */

$('#grilla-pixeles div').click(pintarGrilla);

function pintarGrilla() {
  var $color = $('#indicador-de-color').css('background-color');
  $(this).css('background-color', $color);
}

/*PASO 3 : RUEDA DE COLORES*/

colorPersonalizado.addEventListener('change',
  (function () {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    $('#indicador-de-color').css('background-color', colorActual);
    $('#indicador-de-color-mensaje').text('Pincel: ' + colorActual);
  })
);

/*PASO 4 : MOUSE APRETADO O NO */

var ClickDown = false;

/*PASO 5 : PINTAR EN MOVIMIENTO */

$('#grilla-pixeles div').mousedown(clickPress);
$('#grilla-pixeles div').mouseup(clickRelease);
$('#grilla-pixeles div').mouseover(dragBrush);
$('#grilla-pixeles').mouseleave(clickRelease);

function clickPress(e) {
  ClickDown = true;
  e.preventDefault(); //prevents any unwanted behavior in the page.
  e.stopImmediatePropagation(); //makes sure that no other event listeners fire from this one event.
}

function clickRelease() {
  ClickDown = false;
}

function dragBrush() {
  if (ClickDown) {
    var $color = $('#indicador-de-color').css('background-color');
    $(this).css('background-color', $color);
  }
}

/* GUIA PARTE 3

PASO 1 : BORRAR TODO CON EL BOTÓN*/

$('#borrar').click(function () {
  $('#grilla-pixeles div').each(function () {
    $(this).animate({
      backgroundColor: 'white',
    }, 1800);
  });
});

/* PASO 2 : CARGAR SUPERHÉROES */

/* Batman */
$('#batman').click(function () {
  cargarSuperheroe(batman);
});

/* Flash */
$('#flash').click(function () {
  cargarSuperheroe(flash);
});

/* Wonder */
$('#wonder').click(function () {
  cargarSuperheroe(wonder);
});

/* Invisible */
$('#invisible').click(function () {
  cargarSuperheroe(invisible);
});

/* PASO 3 : DESCARGA */

$('#guardar').click(function () {
  guardarPixelArt();
});
