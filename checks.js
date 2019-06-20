// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var getHashTags = require('./index.js');

assert.deepEqual(
    getHashTags('Прохожу курс на #pravo по #javascript'),
    ['pravo', 'javascript'],
    'Строка "Прохожу курс на #pravo по #javascript"' +
    ' должна содержать хэштеги "pravo, javascript"'
);
assert.deepEqual(
    getHashTags('Прохожу курс на pravo по javascript'),
    [],
    'Строка "Прохожу курс на pravo по javascript"' +
    ' не должны содержаться хэштеги'
);
assert.deepEqual(
    getHashTags('Прохожу курс ##на #pravo #по #javascript'),
    ['#на', 'pravo', 'по', 'javascript'],
    'Строка "Прохожу курс ##на #pravo #по #javascript"' +
    ' должна содержать хэштеги "#на, pravo, по, javascript"'
);
assert.deepEqual(
    getHashTags('Прохожу курс на # #pravo по #javascript'),
    ['', 'pravo', 'javascript'],
    'Строка "Прохожу курс на # #pravo по #javascript"' +
    ' должна содержать хэштеги " , pravo, javascript"'
);
console.info('OK!');
