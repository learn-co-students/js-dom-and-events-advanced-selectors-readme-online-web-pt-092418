// declare your functions here...

function paragraphSelector() {
  // return document.getElementsByTagName('p')
  return $('p')
}

function lastImageSelector() {
  return $('img:last');
}

function ninjaBabySelector() {
  // return document.getElementById('#baby-ninja')
  return $('#baby-ninja');
}

function divSelector() {
  return $('.pics');
}

function firstListItem() {
  return $('ul li:first-child')
}
