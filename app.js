
var getHashTags = require('./index.js');

console.info(getHashTags('Прохожу курс на #pravo по #jsvascript'));
console.info(getHashTags('Прохожу курс на pravo по jsvascript'));
console.info(getHashTags('Прохожу курс ##на #pravo #по #jsvascript'));
console.info(getHashTags('Прохожу курс на # #pravo по #jsvascript'));