const colorPalletes = {
    black: `hsl(0, 0%, 0%)`,
    white: `hsl(0, 100%, 100%)`,
    red: {
        10: `hsl(0, 10%, 10%)`,
        20: `hsl(0, 20%, 20%)`,
        80: `hsl(0, 80%, 80%)`,
        90: `hsl(0, 90%, 90%)`
    },
    orange: {
        10: `hsl(30, 10%, 10%)`,
        20: `hsl(30, 20%, 20%)`,
        80: `hsl(30, 80%, 80%)`,
        90: `hsl(30, 90%, 90%)`
    },
    yellow: {
        10: `hsl(60, 10%, 10%)`,
        20: `hsl(60, 20%, 20%)`,
        80: `hsl(60, 80%, 80%)`,
        90: `hsl(60, 90%, 90%)`
    },
    lime: {
        10: `hsl(90, 10%, 10%)`,
        20: `hsl(90, 20%, 20%)`,
        80: `hsl(90, 80%, 80%)`,
        90: `hsl(90, 90%, 90%)`
    },
    green: {
        10: `hsl(120, 10%, 10%)`,
        20: `hsl(120, 20%, 20%)`,
        80: `hsl(120, 80%, 80%)`,
        90: `hsl(120, 90%, 90%)`
    },
    seafoam: {
        10: `hsl(150, 10%, 10%)`,
        20: `hsl(150, 20%, 20%)`,
        80: `hsl(150, 80%, 80%)`,
        90: `hsl(150, 90%, 90%)`
    },
    teal: {
        10: `hsl(180, 10%, 10%)`,
        20: `hsl(180, 20%, 20%)`,
        80: `hsl(180, 80%, 80%)`,
        90: `hsl(180, 90%, 90%)`
    },
    sky: {
        10: `hsl(210, 10%, 10%)`,
        20: `hsl(210, 20%, 20%)`,
        80: `hsl(210, 80%, 80%)`,
        90: `hsl(210, 90%, 90%)`
    },
    blue: {
        10: `hsl(240, 10%, 10%)`,
        20: `hsl(240, 20%, 20%)`,
        80: `hsl(240, 80%, 80%)`,
        90: `hsl(240, 90%, 90%)`
    },
    purple: {
        10: `hsl(270, 10%, 10%)`,
        20: `hsl(270, 20%, 20%)`,
        80: `hsl(270, 80%, 80%)`,
        90: `hsl(270, 90%, 90%)`
    },
    pink: {
        10: `hsl(300, 10%, 10%)`,
        20: `hsl(300, 20%, 20%)`,
        80: `hsl(300, 80%, 80%)`,
        90: `hsl(300, 90%, 90%)`
    },
    rose: {
        10: `hsl(330, 10%, 10%)`,
        20: `hsl(330, 20%, 20%)`,
        80: `hsl(330, 80%, 80%)`,
        90: `hsl(330, 90%, 90%)`
    },
    query: window.matchMedia("prefers-color-scheme: dark"),
    paint: function (color) {
        let allElements = document.querySelectorAll("*");
        let activeElements = document.getElementsByClassName("active");

        updateColors();

        colorPalletes.query.onchange = function () {
            updateColors();
        }
        
    },
    updateColors: function () {
        if (colorPalletes.query.matches) {
            for (let i = 0; i < allElements.length; i++) {
                allElements[i].style.color = `hsl(${color}, 90%, 90%)`;
                allElements[i].style.backgroundColor = `hsl(${color}, 10%, 10%)`;
            }
            for (let i = 0; i < activeElements.length; i++) {
                activeElements[i].style.backgroundColor = `hsl(${color}, 20%, 20%)`;
            }
            document.body.backgroundColor = "black";
        } else {
            for (let i = 0; i < allElements.length; i++) {
                allElements[i].style.color = `hsl(${color}, 10%, 10%)`;
                allElements[i].style.backgroundColor = `hsl(${color}, 90%, 90%)`;
            }
            for (let i = 0; i < activeElements.length; i++) {
                activeElements[i].style.backgroundColor = `hsl(${color}, 80%, 80%)`;
            }
            document.body.backgroundColor = "white";
        }
    }
}

const randomColor = {
    randomHue: 0,
    elements: document.body.querySelectorAll("*"),

    paint: function (backgroundShade, elementsShade) {
        this.randomHue = Math.floor(Math.random() * 360);
        this.elements = document.body.querySelectorAll("*");

        for (let k = 0; k < this.elements.length; k++) {
            this.elements[k].style.backgroundColor = `hsl(${this.randomHue}, ${elementsShade}%, ${elementsShade}%)`;
        }
        document.body.style.backgroundColor = `hsl(${this.randomHue}, ${backgroundShade}%, ${backgroundShade}%)`;
        document.documentElement.style.backgroundColor = "transparent";
    }
}