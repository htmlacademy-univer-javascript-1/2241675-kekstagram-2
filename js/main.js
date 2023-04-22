

const NUMBER_PHOTOS= 25;


const NAMES= ['Максим', 'Андрей', 'Евгений', 'Марат', 'Эдуард','Сергей', 'Алексей', 'Владимир', 'Святослав', 'Аркадий'
];

const DESCRIPTIONS = Array.from({length: NUMBER_PHOTOS},(_,i )  => 'Описание $ {i}');

const MESSAGES= [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.', 
   'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const COMMENT_ID = [];
const isExactLenght = (str, maxLenght) => str. length <= maxLength ;
const getRandomLikes =() => getRandomInt(15, 200);
const getRandomElements=(arr) =>  arr [getRandomInt(0, arr.lenght -1)];

 
function getRandomInt(from, before) {
  if (from < 0 || before < 0) {
    throw new RangeError ('числа в диапазоне должны быть положительными');
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
 

const getId = (() =>{
  let id = 1;
  return () =>id++;
})();

function getCommentId (){
  let id = getRandomInt (1, 1000);
  while (COMMENT_ID. includes(id)) {
    id= getRandomInt (1,1000);
  }
  return id
}

function generateComment(){
const messageTexts = [];
for (let i = 0; i < getRandomInt(1,2); i++) {
messageTexts.push(getRandomElements(MESSAGES));
}
return {
  id: getCommentId (),
  avatar:'img/avatar-${getRandomInt (1,6)}.svg',
  message: messageTexts.join (''),
  name:getRandomElements(NAMES)
};
}

function generateDiscription() {
  const comments = Array.from ({length:getRandomInt(0,3)},generateComment);
  const id = getId();
  return {
    id:id,
    url: 'photos/${id}.jpg',
    discription: DESCRIPTIONS[id - 1],
    likes:getRandomLikes(),
    comments: comments
  };
}

const description = Array. from ({length: NUMBER_PHOTOS},generateDiscription);

isCorrectLenght (discription, NUMBER_PHOTOS);

/*const isCorrectLenght = (str, maxLenght) => {
  if (typeof str !== 'string') {
    throw new RangeError('Значение str должно быть строкой');
  }

  return (str.lenght <= maxLenght);
};

export {getRandomInt,isCorrectLenght}; */

/* Используемый источник:https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random*/
