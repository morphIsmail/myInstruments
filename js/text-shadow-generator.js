function tsxtShadow({font_size, offset_x, offset_y, blur, opacity, color, rgba}) {
   /*Функция для создания тени*/
   var cssStyles = offset_x + 'px ' + offset_y + 'px ' + blur + 'px ' + rgba;
   $('h1').css('text-shadow', cssStyles);
   $('#resultHex').val('text-shadow: '+offset_x + 'px ' + offset_y + 'px ' + blur + 'px ' +color+';\nfont-size: '+font_size+'px;');
   $('#resultRgba').val('text-shadow: ' + cssStyles + ';\nfont-size: ' + font_size + 'px;');
}
tsxtShadow({
   /*Вызов функции со значениями по умолчанию*/
   font_size: 40,
   offset_x: 4,
   offset_y: -1,
   blur: 0,
   opacity: 1,
   color: '#ff0000',
   rgba: 'rgba(255, 0, 0, 1)'
});

$(document).on('input change', 'input', function () {
   /*Событие при изменении значений*/
   /*Новые значения переменных*/
   var font_size = $('#font_size').val();//Размер шрифта
   var offset_x = $('#offset_x').val();//Смещение по x
   var offset_y = $('#offset_y').val();//Смещение по y
   var blur = $('#blur').val();//Размытие
   var opacity = $('#opacity').val();//Прозрачность
   var color = $('input[type="color"]').val()+'';//Цвет
   var red16 = color[1]+''+color[2];//Доля красного цвета в 16 системе
   var green16 = color[3]+''+color[4];//Доля зеленого цвета в 16 системе
   var blue16 = color[5]+''+color[6];//Доля синего цвета в 16 системе
   var red10 = parseInt(red16,16);//Доля красного цвета в 10 системе
   var green10 = parseInt(green16,16);//Доля зеленого цвета в 10 системе
   var blue10 = parseInt(blue16,16);//Доля синего цвета в 10 системе
   var rgba = 'rgba('+red10+', '+green10+', '+blue10+', '+opacity+')';
   
   $('h1').css('fontSize', font_size+'px');//Изменить размер текста на примере

   tsxtShadow({
      /*Вызвать функцию с новыми параметрами*/
      font_size: font_size,
      offset_x: offset_x,
      offset_y: offset_y,
      blur: blur,
      opacity: opacity,
      color: color,
      rgba: rgba
   });
});