let randomColor = {
    randomIndex: 0,
    elements: document.body.querySelectorAll("*"),
    pickedColor: {},
    colors: ["red", "orange", "yellow", "lime", "green", "seafoam", "teal", "sky", "blue", "purple", "magenta", "pink"],
    
    paint: function (backgroundShade, elementsShade) {
        this.randomIndex = Math.floor(Math.random() * 12);
        this.pickedColor = {
            50: `var(--${this.colors[Math.floor(this.randomIndex)]}-50)`,
            60: `var(--${this.colors[Math.floor(this.randomIndex)]}-60)`,
            70: `var(--${this.colors[Math.floor(this.randomIndex)]}-70)`,
            80: `var(--${this.colors[Math.floor(this.randomIndex)]}-80)`,
            90: `var(--${this.colors[Math.floor(this.randomIndex)]}-90)`,
        }

        for (let k = 0; k < elements.length; k++) {
            elements[k].style.backgroundColor = pickedColor.elementsShade;
        }

        document.body.style.backgroundColor = backgroundShade;
        document.documentElement.style.backgroundColor = "transparent";
    }
}