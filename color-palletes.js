const colorPalletes = {
    paint: function (color = Math.floor(Math.random() * 360)) {
        document.documentElement.style.setProperty(`--dark-1`, `hsl(${color}, 5%, 10%)`);
        document.documentElement.style.setProperty(`--dark-2`, `hsl(${color}, 10%, 20%)`);
        document.documentElement.style.setProperty(`--dark-3`, `hsl(${color}, 15%, 30%)`);
        document.documentElement.style.setProperty(`--light-1`, `hsl(${color}, 45%, 90%)`);
        document.documentElement.style.setProperty(`--light-2`, `hsl(${color}, 40%, 80%)`);
        document.documentElement.style.setProperty(`--light-3`, `hsl(${color}, 35%, 70%)`);
    }
}