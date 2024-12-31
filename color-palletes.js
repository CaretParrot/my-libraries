const colorPalletes = {
    paint: function (color = Math.floor(Math.random() * 360)) {
        document.documentElement.style.setProperty(`--dark-1`, `hsl(${color}, 10%, 10%)`);
        document.documentElement.style.setProperty(`--dark-2`, `hsl(${color}, 15%, 15%)`);
        document.documentElement.style.setProperty(`--dark-3`, `hsl(${color}, 25%, 25%)`);
        document.documentElement.style.setProperty(`--light-1`, `hsl(${color}, 90%, 90%)`);
        document.documentElement.style.setProperty(`--light-2`, `hsl(${color}, 80%, 80%)`);
        document.documentElement.style.setProperty(`--light-3`, `hsl(${color}, 75%, 75%)`);
    }
}