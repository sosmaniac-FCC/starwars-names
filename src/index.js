import uniqueRandomArray from 'unique-random-array';
import starWarsNames from './starwars-names.json';

const getRandomItem = uniqueRandomArray(starWarsNames);

module.exports = {
  all: starWarsNames,
  random: random,
  doSomething: doSomething
};

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  }
  var randomItems = [];
  for (var i = 0; i < number; i++) {
    randomItems.push(getRandomItem());
  }
  return randomItems;
}

function doSomething() {
  console.log('Hi!');
}
