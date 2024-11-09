const colorPalletes = {
    query: window.matchMedia("(prefers-color-scheme: dark)"),
    updateColors: function (color) {
        let allElements = document.querySelectorAll("* :not(.noPaint)");
        let activeElements = document.getElementsByClassName("active");
        colorPalletes.query = window.matchMedia("(prefers-color-scheme: dark)");
        if (colorPalletes.query.matches) {
            for (let i = 0; i < allElements.length; i++) {
                allElements[i].style.color = `hsl(${color}, 90%, 90%)`;
                allElements[i].style.backgroundColor = `hsl(${color}, 10%, 10%)`;
            }
            for (let i = 0; i < activeElements.length; i++) {
                activeElements[i].style.backgroundColor = `hsl(${color}, 20%, 20%)`;
            }
            document.body.style.backgroundColor = "black";
            document.documentElement.style.backgroundColor = "transparent";
        } else {
            for (let i = 0; i < allElements.length; i++) {
                allElements[i].style.color = `hsl(${color}, 10%, 10%)`;
                allElements[i].style.backgroundColor = `hsl(${color}, 90%, 90%)`;
            }
            for (let i = 0; i < activeElements.length; i++) {
                activeElements[i].style.backgroundColor = `hsl(${color}, 80%, 80%)`;
            }
            document.body.style.backgroundColor = "white";
            document.documentElement.style.backgroundColor = "transparent";
        }
    },
    paint: function (color) {
        colorPalletes.updateColors(color);

        colorPalletes.query.onchange = function () {
            colorPalletes.updateColors(color);
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