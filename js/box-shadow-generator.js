function boxShadow({
   inset,
   offset_x,
   offset_y,
   blur,
   size,
   rgba
}) {
   /*Функция для создания тени*/
   var cssStyles = inset + offset_x + 'px ' + offset_y + 'px ' + blur + 'px ' + size + 'px ' + rgba;
   $('.result-box').css('box-shadow', cssStyles);
   $('#resultRgba').val('box-shadow: ' + cssStyles + ';');
}
boxShadow({
   /*Вызов функции со значениями по умолчанию*/
   inset: '',
   offset_x: 0,
   offset_y: 0,
   blur: 8,
   size: 6,
   rgba: 'rgba(0, 0, 0, 0.5)'
});

$(document).on('input change', 'input', function () {
   /*Событие при изменении значений*/
   /*Новые значения переменных*/
   var offset_x = $('#offset_x').val(); //Смещение по x
   var offset_y = $('#offset_y').val(); //Смещение по y
   var blur = $('#blur').val(); //Размытие
   var size = $('#size').val(); //Растяжение
   var opacity = $('#opacity').val(); //Прозрачность
   var color = $('input[type="color"]').val() + ''; //Цвет
   var red16 = color[1] + '' + color[2]; //Доля красного цвета в 16 системе
   var green16 = color[3] + '' + color[4]; //Доля зеленого цвета в 16 системе
   var blue16 = color[5] + '' + color[6]; //Доля синего цвета в 16 системе
   var red10 = parseInt(red16, 16); //Доля красного цвета в 10 системе
   var green10 = parseInt(green16, 16); //Доля зеленого цвета в 10 системе
   var blue10 = parseInt(blue16, 16); //Доля синего цвета в 10 системе
   var rgba = 'rgba(' + red10 + ', ' + green10 + ', ' + blue10 + ', ' + opacity + ')';

   var inset = '';
   if ($('#inset').prop("checked")) {
      inset = 'inset '
   } else {
      inset = ''
   }
   boxShadow({
      /*Вызвать функцию с новыми параметрами*/
      inset: inset,
      offset_x: offset_x,
      offset_y: offset_y,
      blur: blur,
      size: size,
      rgba: rgba
   });
});