document.getElementById("toggle-color").addEventListener("click", function () {
    const body = document.body;
    const isInverted = body.classList.toggle("color-inverted");

    const buttons = document.querySelectorAll(".responsive-button");
    const toggleButton = document.getElementById("toggle-color");

    const currentBackground = isInverted ? "white" : "black";
    const currentColor = isInverted ? "black" : "white";

    body.style.backgroundColor = currentBackground;
    body.style.color = currentColor;

    buttons.forEach((button) => {
        button.style.borderColor = "";
    });

    toggleButton.textContent = isInverted ? "DARK" : "LIGHT";
});
