const generatorBtn = document.getElementById("generator-btn");
const paletteContainer = document.querySelector(".palette-container");

generatorBtn.addEventListener("click", generatorPalette);

function generatorPalette() {
    const colors = [];

    for(let i = 0; 1<5;i++){
        colors.push(generatorRandomColor());
    }

    updatePaletteDisplay(colors)
}

function generatorRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    } 
    return color
}

function updatePaletteDisplay(colors) {
    const colorBoxes = document.querySelectorAll(".color-box");

    colorBoxes.forEach((box, index) => {
        const color = colors(index);
        const colorDiv = box.querySelector(".color");
        const hexValue = box.querySelector(".hex-value");

        colorDiv.style.backgroundColor = color;
        hexValue.textContent = color;
    })
}

generatorPalette();

