/* =================================
   SCROLL PROGRESS
================================= */

window.addEventListener(
  "scroll",
  () => {

    const scrollTop =
      window.scrollY;

    const documentHeight =
      document.documentElement
        .scrollHeight -
      window.innerHeight;

    const progress =
      (scrollTop /
        documentHeight) *
      100;

    const bar =
      document.getElementById(
        "scroll-progress"
      );

    if (bar) {

      bar.style.width =
        progress + "%";

    }

  }
);


/* =================================
   PARTICLES
================================= */

const particles =
  document.getElementById(
    "particles"
  );


if (particles) {

  for (
    let i = 0;
    i < 35;
    i++
  ) {

    const dot =
      document.createElement(
        "span"
      );


    dot.style.position =
      "absolute";

    dot.style.width =
      Math.random() * 3 + 1 + "px";

    dot.style.height =
      dot.style.width;

    dot.style.borderRadius =
      "50%";

    dot.style.background =
      "rgba(255,255,255,.5)";

    dot.style.left =
      Math.random() * 100 + "%";

    dot.style.top =
      Math.random() * 100 + "%";

    dot.style.animation =
      `particleFloat ${
        5 + Math.random() * 10
      }s infinite alternate ease-in-out`;

    dot.style.animationDelay =
      Math.random() * 5 + "s";


    particles.appendChild(dot);

  }

}


/* =================================
   PARTICLE ANIMATION
================================= */

const style =
  document.createElement("style");


style.innerHTML = `

@keyframes particleFloat {

  0% {
    transform:
      translate(0,0);
    opacity:.2;
  }

  50% {
    opacity:.8;
  }

  100% {
    transform:
      translate(
        ${Math.random() * 100 - 50}px,
        ${Math.random() * 100 - 50}px
      );
    opacity:.2;
  }

}

`;


document.head.appendChild(style);


/* =================================
   MOUSE GLOW
================================= */

const mouseGlow =
  document.createElement("div");


mouseGlow.style.position =
  "fixed";

mouseGlow.style.width =
  "250px";

mouseGlow.style.height =
  "250px";

mouseGlow.style.borderRadius =
  "50%";

mouseGlow.style.pointerEvents =
  "none";

mouseGlow.style.background =
  "radial-gradient(circle, rgba(99,102,241,.10), transparent 70%)";

mouseGlow.style.transform =
  "translate(-50%, -50%)";

mouseGlow.style.zIndex =
  "-1";


document.body.appendChild(
  mouseGlow
);


document.addEventListener(
  "mousemove",
  (event) => {

    mouseGlow.style.left =
      event.clientX + "px";

    mouseGlow.style.top =
      event.clientY + "px";

  }
);