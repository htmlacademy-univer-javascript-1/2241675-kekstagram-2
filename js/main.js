function getRandomInt(from, before) {
if (from < 0 || before < 0) {
throw new RangeError('числа в диапазоне должны быть положительными')
}


if (typeof from === 'string' || typeof before === 'string') {
throw new RangeError ('Значение должно быть числовым, не строкой');
}
  if (from === before) { 
    return from;
  }
if (from > before) {
  [from, before]=[before, from];
}


  from= Math.ceil(from);
  before = Math.floor(before);
 return Math.floor(Math.random() * ( before - from + 1)) + from; //Максимум и минимум включаются
}

const isCorrectLenght = (str, maxLenght) => {
  if (typeof str !== 'string') {
   throw new RangeError('Значение str должно быть строкой');
  }

  return (str.lenght <= maxLenght);
};

  export {getRandomInt,isCorrectLenght};

  /* Используемый источник:https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random*/
