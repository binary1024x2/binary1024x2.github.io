(function() {

    const looking = [ 
        "front",
        "top",
        "right",
        "bottom",
        "left"
    ]

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
        setInterval(() => {
            const next = Math.floor(Math.random() * looking.length);
            console.log(next)
            document.querySelectorAll(".tv-eye").forEach(eye => {
                eye.setAttribute("data-looking", looking[next]);
            })
        }, 3000)
    })
})();