let p;
let o;
let randomCardNumber;
let randomSuit;
let newElement;
let textNode;
let newAttribute;
let idTree;
let classTree;

function setupTree() {
  idTree = {};
  classTree = {};
  
  let allElements = document.querySelectorAll("*");;

  for (o = 0; o < allElements.length; o++) {
    if (allElements[o].id) {
      idTree[`${allElements[o].id}`] = allElements[o];
    }
  }

  for (o = 0; o < allElements.length; o++) {
    if (allElements[o].className) {
      classTree[`${allElements[o].className}`] = allElements[o];
    }
  }
}


function slideShow(element, slidesHTML, triggerKey, triggerMouse) {
  p = 0;
  element.innerHTML = slidesHTML[p];
  element.onkeydown = function (event) {
    if (event.key == triggerKey) {
      p++;

      if (p == slidesHTML.length) {
        p = 0;
      }

      element.innerHTML = slidesHTML[p];
    }
  }

  if (triggerMouse == true) {
    element.onmousedown = function(event) {
      if (event.button == "0") {
        p++;

        if (p == slidesHTML.length) {
          p = 0;
        }

        element.innerHTML = slidesHTML[p];
      }
    };
  }
}

function autoSlideShow(element, slidesHTML, delay) {
  p = 0;
  element.innerHTML = slidesHTML[p];

  setInterval(function() {
    p++;

    if (p == slidesHTML.length) {
      p = 0;
    }

    element.innerHTML = slidesHTML[p];
  }, delay * 1000);
}

function detectKey(key, callBackFunction) {
  onkeydown = function(event) {
    if (event.key == key) {
      callBackFunction();
    }
  };
}

function detectMouseButton(button, callBackFunction) {
  onmousedown = function(event) {
    if (event.button == button) {
      callBackFunction();
    }
  };
}

function createElement(elementName, text, appendTo) {
  newElement = document.createElement(elementName);
  textNode = document.createTextNode(text);
  newElement.appendChild(textNode);
  appendTo.appendChild(newElement);
}

function createAttribute(attributeName, val, appendTo) {
  newAttribute = document.createAttribute(attributeName);
  newAttribute.value = val;
  appendTo.setAttributeNode(newAttribute);
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * max) + min;
}

function randomNumber(min, max) {
  return Math.random() * max + min;
}

function randomCardName() {
  let randomCardNumber = randomInteger(1, 13);
  let randomSuit = randomInteger(1, 4);

  switch(randomCardNumber) {
    case 1:
      randomCardNumber = "Ace";
      break;
    case 11:
      randomCardNumber = "Jack";
      break;
    case 12:
      randomCardNumber = "Queen";
      break;
    case 13:
      randomCardNumber = "King";
      break;
    default:
      break;
  }

  switch(randomSuit) {
    case 1:
      randomSuit = "Spades";
      break;
    case 2:
      randomSuit = "Diamonds";
      break;
    case 3:
      randomSuit = "Clubs";
      break;
    case 4:
      randomSuit = "Hearts";
      break;
    default:
      break;
  }

  return `${randomCardNumber} of ${randomSuit}`;
}

function id(id) {
  return document.getElementById(id);
}

function elementsOf(classGroup) {
  return document.getElementsByClassName(classGroup);
}

function hide(id) {
  id.style.display = "none";
}

function show(id) {
  id.style.display = "initial";
}

let vw = window.innerWidth / 100;
let vh = window.innerHeight / 100;
