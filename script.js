(function() {

    let playing = false;
    const power = new Audio("./assets/power.mp3");

    power.addEventListener("ended", () => {
        playing = false;
    });

    power.addEventListener("play", () => {
        playing = true;
    });

    window.addEventListener("load", () => {
        let target = document.getElementById("power-button");
        target.addEventListener("click", () => {
            power.play()
        });
    })
})();