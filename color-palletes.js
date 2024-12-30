const colorPalletes = {
    paint: function (color) {
        document.documentElement.style.setProperty(`--dark-1`, `hsl(${color}, 10%, 10%)`);
        document.documentElement.style.setProperty(`--dark-2`, `hsl(${color}, 15%, 15%)`);
        document.documentElement.style.setProperty(`--dark-3`, `hsl(${color}, 25%, 25%)`);
        document.documentElement.style.setProperty(`--light-1`, `hsl(${color}, 90%, 90%)`);
        document.documentElement.style.setProperty(`--light-2`, `hsl(${color}, 80%, 80%)`);
        document.documentElement.style.setProperty(`--light-3`, `hsl(${color}, 75%, 75%)`);
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
            if (elementsShade < 50) {
                this.elements[k].style.color = `hsl(${this.randomHue}, 90%, 90%)`;
            } else {
                this.elements[k].style.color = `hsl(${this.randomHue}, 10%, 10%)`;
            }
        }
        document.body.style.backgroundColor = `hsl(${this.randomHue}, ${backgroundShade}%, ${backgroundShade}%)`;
        document.documentElement.style.backgroundColor = "transparent";
    }
}