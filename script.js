document.addEventListener("DOMContentLoaded", () => {

    /* ===================== 9 PHOTOS ===================== */

    const photos = [
        "images/photo1.jpeg",
        "images/photo2.jpeg",
        "images/photo3.jpeg",
        "images/photo4.jpeg",
        "images/photo5.jpeg",
        "images/photo6.jpeg",
        "images/photo7.jpeg",
        "images/photo8.jpeg",
        "images/photo9.jpeg"
    ];

    const colors = [
        "#ff4d6d", "#ffb3c1", "#f72585",
        "#7209b7", "#b5179e", "#ff758f",
        "#ff85a1", "#4895ef", "#ff4d6d"
    ];

    let i = 0;
    const img = document.getElementById("slideshow");

    /* ===================== SLIDESHOW ===================== */

    function slide() {
        if (!img) return;

        img.style.opacity = 0;
        img.style.transform = "scale(1.1)";

        setTimeout(() => {
            img.src = photos[i];

            document.body.style.background =
                `linear-gradient(135deg, ${colors[i]}, #ffd1dc)`;

            img.style.opacity = 1;
            img.style.transform = "scale(1)";

            i = (i + 1) % photos.length;
        }, 500);
    }

    setInterval(slide, 3000);
    slide();


    /* ===================== HEARTS (BIG) ===================== */

    function heart() {
        const h = document.createElement("div");
        h.className = "heart";
        h.innerHTML = "💖";

        h.style.left = Math.random() * 100 + "vw";
        h.style.fontSize = (25 + Math.random() * 30) + "px";

        document.body.appendChild(h);
        setTimeout(() => h.remove(), 6000);
    }

    setInterval(heart, 250);


    /* ===================== ROSES (BIG) ===================== */

    function rose() {
        const r = document.createElement("div");
        r.className = "rose";
        r.innerHTML = "🌹";

        r.style.left = Math.random() * 100 + "vw";
        r.style.fontSize = (25 + Math.random() * 25) + "px";

        document.body.appendChild(r);
        setTimeout(() => r.remove(), 7000);
    }

    setInterval(rose, 800);


    /* ===================== FIREWORKS ===================== */

    function fire() {
        if (!window.confetti) return;

        confetti({
            particleCount: 60,
            spread: 80,
            origin: { y: 0.6 }
        });
    }

    document.body.addEventListener("click", fire);


    /* ===================== TYPING MESSAGE ===================== */

    const text = `*Hey Triash, happy birthday to you*.
*Achive your all goals. Always dream big you are very strong
women*
ebar ar aktu kharap english skill dekhano jag😂😂 
I love your *little angry face*. I love your cute little smile.
I want to see that smile every time on your face. I love the
way you take my name. I love the *immature part of you*. I love the cute little fights 
which we have. I love the small talks which we share with each other. 
I know I'm not good at giving proposals, and I'm not good at many more 
things except that  😏😏🤣 I think you got it. Ok, now come to the point.
 I have an overthinking issue and many more. I'm not perfect as a person,
  but I know I'm perfect for you. *I will take care of you*. If you ever
   think that I'm ignoring you or if you feel that I'm not loving you anymore,
    I will always explain everything to you with all my 💕💕😘😘.
     *I will never give you any reason to be upset🫂🫂*. *If you ever 
     feel bad about anything, just come to me and tell me*🫂✌️.
I know that sometimes I'm not able to text you, but that doesn't mean
 my love for you is decreasing. Maybe I have some important work to do,
  but please never overthink before texting me. No matter how busy my 
  schedule is, I will always make time for you.*I will understand you*. Okeyyy
  , enjoy your day. 😘😘😘
I love you, *puchke* 🫂😘

*From yours, Niraj Da*`;

    let idx = 0;
    let isGlowing = false; // Tracks if we are currently inside a highlighted phrase
    const typing = document.getElementById("typing");

    function type() {
        if (!typing) return;

        if (idx < text.length) {
            let currentChar = text.charAt(idx);

            // If engine hits a '*', toggle the glowing span wrapper
            if (currentChar === "*") {
                isGlowing = !isGlowing;
                idx++; // Skip printing the actual '*' character
                type(); // Immediately move to the next letter
                return;
            }

            // Target content destination container
            let targetContainer = typing;

            // If inside a glow phase, create/append to a span inside the main paragraph
            if (isGlowing) {
                let activeGlowSpan = typing.querySelector("span.glow-text:last-child");
                if (!activeGlowSpan) {
                    activeGlowSpan = document.createElement("span");
                    activeGlowSpan.className = "glow-text";
                    typing.appendChild(activeGlowSpan);
                }
                targetContainer = activeGlowSpan;
            }

            // Inject line-breaks or characters safely
            if (currentChar === "\n") {
                typing.innerHTML += "<br>";
                // Reset span reference after linebreaks so a new paragraph stays clean
                if (isGlowing) {
                    let freshGlowSpan = document.createElement("span");
                    freshGlowSpan.className = "glow-text";
                    typing.appendChild(freshGlowSpan);
                }
            } else {
                targetContainer.innerHTML += currentChar;
            }

            idx++;
            setTimeout(type, 45);
        }
    }


    /* ===================== GIFT BOX ===================== */

    const gift = document.getElementById("giftBox");
    const surprise = document.getElementById("surprise");
    const music = document.getElementById("bgMusic");

    if (gift) {
        gift.addEventListener("click", () => {

            if (surprise) {
                surprise.style.display = "block";
            }
            if (gift) {
                gift.style.display = "none";
            }

            if (music) {
                /* music fade in logic */
                music.volume = 0;
                music.play().catch((err) => console.log("Audio play blocked: ", err));

                let vol = 0;
                let fade = setInterval(() => {
                    if (vol < 1) {
                        vol += 0.05;
                        music.volume = vol;
                    } else {
                        clearInterval(fade);
                    }
                }, 150);
            }

            /* starts typing sequence */
            type();

            /* triggers celebratory firework blast */
            fire();
        });
    }

});