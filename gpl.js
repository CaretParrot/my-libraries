let p;
let o;
let randomCardNumber;
let randomSuit;
let newElement;
let textNode;
let newAttribute;
let idTree;
let classTree;
let vw = window.innerWidth / 100;
let vh = window.innerHeight / 100;

function changePage(pageId, pageClass, displayType) {
    allPages = document.getElementsByClassName(pageClass);
    for (let i = 0; i < allPages.length; i++) {
        allPages[i].style.display = "none";
        document.getElementById(pageId).classList.remove("open");
    }
    document.getElementById(pageId).style.display = displayType;
    document.getElementById(pageId).classList.add("open");
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
        element.onmousedown = function (event) {
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

    setInterval(function () {
        p++;

        if (p == slidesHTML.length) {
            p = 0;
        }

        element.innerHTML = slidesHTML[p];
    }, delay * 1000);
}

function createElement(elementName, text, id, appendTo) {
    newElement = document.createElement(elementName);
    textNode = document.createTextNode(text);
    newElement.appendChild(textNode);
    appendTo.appendChild(newElement);
    newAttribute = document.createAttribute("id");
    newAttribute.value = id;
    newElement.setAttributeNode(newAttribute);
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

    switch (randomCardNumber) {
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

    switch (randomSuit) {
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

