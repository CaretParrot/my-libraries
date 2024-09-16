let randomColor = {
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