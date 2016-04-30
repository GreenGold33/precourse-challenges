'use strict';
const readlineSync = require('readline-sync');

function readline(){
  console.log('Enter problem input');
  let input = readlineSync.question('Input: ');
  return input;
}

exports = module.exports = {
  readline: readline
};
