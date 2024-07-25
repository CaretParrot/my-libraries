let randomColor = {
    randomHue: 0,
    elements: document.body.querySelectorAll("*"),
    pickedElementShade: "",
    pickedBackgroundShade: "",

    paint: function (backgroundShade, elementsShade) {
        this.randomHue = Math.floor(Math.random() * 360);
        this.elements = document.body.querySelectorAll("*");

        for (let k = 0; k < this.elements.length; k++) {
            this.pickedElementShade = `hsl(${this.randomHue}, ${elementsShade}%, ${elementsShade}%)`;
            this.elements[k].style.backgroundColor = this.pickedElementShade;
        }

        this.pickedBackgroundShade = `hsl(${this.randomHue}, ${backgroundShade}%, ${backgroundShade}%)`;
        document.body.style.backgroundColor = this.pickedBackgroundShade;
        document.documentElement.style.backgroundColor = "transparent";
    }
}