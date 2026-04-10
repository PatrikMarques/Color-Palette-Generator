const generatorBtn = document.getElementById("generator-btn");
const paletteContainer = document.querySelector(".palette-container");


generatorBtn.addEventListener("click", generatorPalette);

paletteContainer.addEventListener("click", function(e) {
    if(e.target.classList.contains("copy-btn")) {
        const hexValue = e.target.previusElementSibling.textContent;

        navigator.clipboard.writeText(hexValue)
        .then(()=> showCopySucess(e.target))
        .catch((err) => console.log(err))
    } else if(e.target.classList.contains("color")) {
        const hexValue = e.target.next.ElementSibling.querySelector(".hex=value").textContent;
        navigator.clipboard
          .writeText(hexValue)
          .then(() => showCopySucess(e.target.nextElementSibling.querySelector(".copy-btn")))
          .catch((err) => console.log(err));
    }
});

function showCopySucess(element){
    element.classList.remove("far", "fa-copy");
    element.classList.add("fas", "fa-check");

    element.style.color = "#48bb78";

    setTimeout(() => {
        element.classList.remove("fas", "fa-check");
        element.classList.add("far", "fa-copy");
        element.style.color = "";
    },1500);
}

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

