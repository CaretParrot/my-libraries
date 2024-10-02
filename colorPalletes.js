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
    paint: function (color, darkMode) {
        let backgroundShade1;
        let backgroundShade2;
        let textShade1;
        let textShade2;

        if (darkMode) {
            backgroundShade1 = 10;
            backgroundShade2 = 20;
            textShade1 = 90;
            textShade2 = 80;
        } else {
            backgroundShade1 = 90;
            backgroundShade2 = 80;
            textShade1 = 10;
            textShade2 = 20;
        }
        let allElements = document.querySelectorAll(":not(body, script, .noPaint)");
        for (let i = 0; i < allElements.length; i++) {
            allElements[i].style.backgroundColor = colorPalletes[color][10];
            allElements[i].style.color = colorPalletes[color][90];
        }

        if (darkMode) {
            document.body.style.backgroundColor = "Black";
        } else {
            document.body.style.backgroundColor = "White";
        }
    }
}

