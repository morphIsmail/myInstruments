function borderRadius(top_left, top_right, bottom_left, bottom_right) {
   /*Функция для создания тени*/
   $('.result-box').css({'border-top-left-radius': top_left+'px'});
   $('.result-box').css('border-top-right-radius', top_right+'px');
   $('.result-box').css('border-bottom-left-radius', bottom_left+'px');
   $('.result-box').css('border-bottom-right-radius', bottom_right+'px');

   $('#resultRgba').val('border-top-left-radius: ' + top_left + 'px;' +
   '\nborder-top-right-radius: ' + top_right + 'px;' +
   '\nborder-bottom-left-radius: ' + bottom_left + 'px;' +
   '\nborder-bottom-right-radius: ' + bottom_right + 'px;');
}
borderRadius(75, 75, 0, 75);

$(document).on('input change', 'input', function () {
   /*Событие при изменении значений*/
   /*Новые значения переменных*/
   var top_left = $('#top_left').val(); //Смещение по x
   var top_right = $('#top_right').val(); //Смещение по y
   var bottom_left = $('#bottom_left').val(); //Размытие
   var bottom_right = $('#bottom_right').val(); //Растяжение

   borderRadius(top_left, top_right, bottom_left, bottom_right);
});