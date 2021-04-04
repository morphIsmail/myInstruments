// Border-radius generator
function borderRadius(top_left, top_right, bottom_left, bottom_right) {
  /*Функция для создания тени*/
  document.querySelector('.border-radius-generator .result_box').style.borderTopLeftRadius = top_left + 'px'
  document.querySelector('.border-radius-generator .result_box').style.borderTopRightRadius = top_right + 'px'
  document.querySelector('.border-radius-generator .result_box').style.borderBottomLeftRadius = bottom_left + 'px'
  document.querySelector('.border-radius-generator .result_box').style.borderBottomRightRadius = bottom_right + 'px'

  document.querySelector('#result_border_css').value = 'border-top-left-radius: ' + top_left + 'px;' +
    '\nborder-top-right-radius: ' + top_right + 'px;' +
    '\nborder-bottom-left-radius: ' + bottom_left + 'px;' +
    '\nborder-bottom-right-radius: ' + bottom_right + 'px;'
}
borderRadius(75, 75, 0, 75)

for (let item of document.querySelectorAll('.border-radius-generator input')) {
  item.addEventListener('input', function (e) {
    /*Событие при изменении значений*/
    /*Новые значения переменных*/
    let top_left = document.querySelector('.border-radius-generator #top_left').value; //Смещение по x
    let top_right = document.querySelector('.border-radius-generator #top_right').value; //Смещение по y
    let bottom_left = document.querySelector('.border-radius-generator #bottom_left').value; //Размытие
    let bottom_right = document.querySelector('.border-radius-generator #bottom_right').value; //Растяжение

    borderRadius(top_left, top_right, bottom_left, bottom_right);
  })
}

// Text-shadow generator
function tsxtShadow({
  offset_x,
  offset_y,
  blur,
  color,
  rgba
}) {
  /*Функция для создания тени*/
  let cssStyles = offset_x + 'px ' + offset_y + 'px ' + blur + 'px ' + rgba
  document.querySelector('.example').style.textShadow = cssStyles
  document.querySelector('.text-shadow-generator #result').value = 'text-shadow: ' + offset_x + 'px ' + offset_y + 'px ' + blur + 'px ' + color + '; /* Цвет в HEX*/\ntext-shadow: ' + cssStyles + '; /* Цвет в RGBA*/'
}

tsxtShadow({
  /*Вызов функции со значениями по умолчанию*/
  offset_x: 4,
  offset_y: -1,
  blur: 0,
  opacity: 1,
  color: '#ff0000',
  rgba: 'rgba(255, 0, 0, 1)'
});

for (let item of document.querySelectorAll('.text-shadow-generator input')) {
  item.addEventListener('input', function (e) {
    let offset_x = document.querySelector('.text-shadow-generator #offset_x').value; //Смещение по x
    let offset_y = document.querySelector('.text-shadow-generator #offset_y').value; //Смещение по y
    let blur = document.querySelector('.text-shadow-generator #blur').value; //Размытие
    let opacity = document.querySelector('.text-shadow-generator #opacity').value; //Прозрачность
    let color = document.querySelector('.text-shadow-generator input[type="color"]').value + ''; //Цвет
    let red16 = color[1] + '' + color[2]; //Доля красного цвета в 16 системе
    let green16 = color[3] + '' + color[4]; //Доля зеленого цвета в 16 системе
    let blue16 = color[5] + '' + color[6]; //Доля синего цвета в 16 системе
    let red10 = parseInt(red16, 16); //Доля красного цвета в 10 системе
    let green10 = parseInt(green16, 16); //Доля зеленого цвета в 10 системе
    let blue10 = parseInt(blue16, 16); //Доля синего цвета в 10 системе
    let rgba = 'rgba(' + red10 + ', ' + green10 + ', ' + blue10 + ', ' + opacity + ')';

    tsxtShadow({
      /*Вызвать функцию с новыми параметрами*/
      offset_x: offset_x,
      offset_y: offset_y,
      blur: blur,
      opacity: opacity,
      color: color,
      rgba: rgba
    });
  })
}

// Box-shadow generator
function boxShadow({
  inset,
  offset_x,
  offset_y,
  blur,
  size,
  rgba
}) {
  /*Функция для создания тени*/
  let cssStyles = inset + offset_x + 'px ' + offset_y + 'px ' + blur + 'px ' + size + 'px ' + rgba;
  document.querySelector('.box-shadow-generator .result_box').style.boxShadow = cssStyles
  document.querySelector('.box-shadow-generator #resultRgba').value = 'box-shadow: ' + cssStyles + ';'
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

for (let item of document.querySelectorAll('.box-shadow-generator input')) {
  item.addEventListener('input', function (e) {
    /*Событие при изменении значений*/
    /*Новые значения переменных*/
    let offset_x = document.querySelector('.box-shadow-generator #offset_x').value; //Смещение по x
    let offset_y = document.querySelector('.box-shadow-generator #offset_y').value; //Смещение по y
    let blur = document.querySelector('.box-shadow-generator #blur').value; //Размытие
    let size = document.querySelector('.box-shadow-generator #size').value; //Растяжение
    let opacity = document.querySelector('.box-shadow-generator #opacity').value; //Прозрачность
    let color = document.querySelector('.box-shadow-generator input[type="color"]').value + ''; //Цвет
    let red16 = color[1] + '' + color[2]; //Доля красного цвета в 16 системе
    let green16 = color[3] + '' + color[4]; //Доля зеленого цвета в 16 системе
    let blue16 = color[5] + '' + color[6]; //Доля синего цвета в 16 системе
    let red10 = parseInt(red16, 16); //Доля красного цвета в 10 системе
    let green10 = parseInt(green16, 16); //Доля зеленого цвета в 10 системе
    let blue10 = parseInt(blue16, 16); //Доля синего цвета в 10 системе
    let rgba = 'rgba(' + red10 + ', ' + green10 + ', ' + blue10 + ', ' + opacity + ')';

    let inset = '';
    if (document.querySelector('.box-shadow-generator #inset').checked) {
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
  })
}

// Triangle generator
function triangleGenerator(position, color, width) {
  let general = `width: 0;
    height: 0;
    border-style: solid;`
  let result
  switch(position) {
    case 'top_left':
      result = `${general}
    border-width: ${width}px ${width}px 0 0;
    border-color: ${color} transparent transparent transparent;`
      break
    case 'top':
      result = `${general}
    border-width: 0 ${width/2}px ${width}px ${width/2}px;
    border-color: transparent transparent ${color} transparent;`
      break
    case 'top_right':
      result = `${general}
    border-width: 0 ${width}px ${width}px 0;
    border-color: transparent ${color} transparent transparent;`
      break
    case 'left':
      result = `${general}
    border-width: ${width/2}px ${width}px ${width/2}px 0;
    border-color: transparent ${color} transparent transparent;`
      break
    case 'right':
      result = `${general}
    border-width: ${width/2}px 0 ${width/2}px ${width}px;
    border-color: transparent transparent transparent ${color};`
      break
    case 'bottom_left':
      result = `${general}
    border-width: ${width}px 0 0 ${width}px;
    border-color: transparent transparent transparent ${color};`
      break
    case 'bottom':
      result = `${general}
    border-width: ${width}px ${width/2}px 0 ${width/2}px;
    border-color: ${color} transparent transparent transparent;`
      break
    case 'bottom_right':
      result = `${general}
    border-width: 0 0 ${width}px ${width}px;
    border-color: transparent transparent ${color} transparent;`
      break
  }
  let textarea = `.triangle {
    ${result}
  }`
  document.querySelector('.triangle-generator #result').value = textarea
  document.querySelector('.triangle').style = result
}

for(let item of document.querySelectorAll('.triangle-generator input')) {
  item.addEventListener('input', function(e) {
    let position = document.querySelector('input[name="triangle"]:checked').value
    let color = document.querySelector('.triangle-generator input[type="color"]').value
    let width = document.querySelector('.triangle-generator input[type="range"]').value
    triangleGenerator(position, color, width)
  })
}
triangleGenerator('top_left', '#ff7700', '50')
