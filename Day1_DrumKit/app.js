const audioMappings = {
    97: 'asset/sounds/bubbles.mp3',
    115: 'asset/sounds/clay.mp3',
    100: 'asset/sounds/corona.mp3',
    102: 'asset/sounds/glimmer.mp3',
    103: 'asset/sounds/moon.mp3',
    104: 'asset/sounds/pinwheel.mp3',
    106: 'asset/sounds/prism-2.mp3',
    107: 'asset/sounds/squiggle.mp3',
    108: 'asset/sounds/strike.mp3'
}

document.addEventListener('keypress', playSoundAndHighlight);

function playSoundAndHighlight(evt) {
    const selector = `#key${evt.which}`;
    const keyPressed = document.querySelector(selector);

    if (!keyPressed) return;

    keyPressed.classList.add("highlight");

    // play sound effect
    let sound = new Howl({
        src: [audioMappings[evt.which]]
    });

    sound.play();
}

const keys = document.querySelectorAll(".box");
for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener("transitionend", () => {
        keys[i].classList.remove("highlight");
    })
}