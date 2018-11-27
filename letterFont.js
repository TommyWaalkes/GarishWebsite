$(document).ready(function () {
    let text = $("p").text().split("");
    let output = [{}];
    for (i = 0; i < text.length; i++) {
        if (output[i] !== "") {
            output[i] = `<span style='font-family: ${getRandomFont()}; color: ${getRandomColor()}' > ${text[i]} </span>`;
        }
    }

    $("p").html(output);
});

function getRandomFont() {
    let fonts = ["Arial", "Tahoma", "Comic Sans MS", "Impact", "Verdana", "Papyrus", "Trajan", "Serif", "Sans-Serif", "Georgia", "Trebuchet MS", "Courier New", "Times New Roman"];

    let index = Math.floor(Math.random() * fonts.length);
    return fonts[index];
}

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    return `rgb(${red},${green},${blue})`;
}