const easyTree = {
    setupTree: function () {
        let allElements = document.querySelectorAll("*");

        for (let i = 0; i < allElements.length; i++) {
            if (allElements[i].id === "setupTree") {
                console.error("setupTree is already used by easyTree. Please use a different id.")
            } else {
                easyTree[allElements[i].id] = allElements[i];
            }
        }
    }
}

const pages = {
    changePage: function (pageId, pageClass, displayType) {
        allPages = document.getElementsByClassName(pageClass);
        for (let i = 0; i < allPages.length; i++) {
            allPages[i].style.display = "none";
            document.getElementById(pageId).classList.remove("open");
        }
        document.getElementById(pageId).style.display = displayType;
        document.getElementById(pageId).classList.add("open");
    }
}

const slideShow = {
    nextSlide: function (element, slidesHTML) {
        i++;

        if (i === slidesHTML.length) {
            i = 0;
        }

        element.innerHTML = slidesHTML[i];
    },
    clickable: function (element, slidesHTML) {
        let i = 0;
        element.innerHTML = slidesHTML[i];
        
        element.onmousedown = function (event) {
            if (event.button === "0") {
                this.nextSlide(element, slidesHTML);
            }
        }
    },
    auto: function (element, slidesHTML, delay = 3) {
        let i = 0;
        element.innerHTML = slidesHTML[i];

        setInterval(function () {
            this.nextSlide(element, slidesHTML);
        }, delay * 1000);
    }
}

const randomPlus = {
    randomInteger: function (min, max) {
        return Math.floor(Math.random() * max) + min;
    },
    randomNumber: function (min, max) {
        return Math.random() * max + min;
    },
    randomCard: function () {
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
}

const colorPalletes = {
    savedColor: 0,
    paint: function (color = Math.floor(Math.random() * 360)) {
        document.documentElement.style.setProperty(`--dark-1`, `hsl(${color}, 5%, 10%)`);
        document.documentElement.style.setProperty(`--dark-2`, `hsl(${color}, 10%, 20%)`);
        document.documentElement.style.setProperty(`--dark-3`, `hsl(${color}, 15%, 30%)`);
        document.documentElement.style.setProperty(`--light-1`, `hsl(${color}, 45%, 90%)`);
        document.documentElement.style.setProperty(`--light-2`, `hsl(${color}, 40%, 80%)`);
        document.documentElement.style.setProperty(`--light-3`, `hsl(${color}, 35%, 70%)`);
        colorPalletes.savedColor = color;
    }
}