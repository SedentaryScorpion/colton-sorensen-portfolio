const work = {
  performance: { eyebrow: "Onstage", title: "Acting with presence.", image: "acting.jpg", alt: "Colton acting in a theatrical production", description: "A performer with a strong physical instinct, a warm singing voice, and a fondness for the choices that make a character impossible to ignore.", detail: "Selected roles include Mayor Josiah Dobbs in Bright Star and Dr. Jim Bayliss in All My Sons.", link: "performance.html", label: "Visit the onstage page" },
  music: { eyebrow: "In the mix", title: "Every part of the arrangement.", image: "singer.jpg", alt: "Colton singing onstage", description: "From a cappella arrangements to conducting, commercial music, baritone lines, and vocal percussion, music is both a craft and a communal experience.", detail: "Southern Virginia University alumnus and former member of Accolade, Chamber Singers, and Men’s Chorus; recipient of an ICCA Outstanding Vocal Percussion award.", link: "music.html", label: "Visit the music page" },
  lighting: { eyebrow: "In the glow", title: "Light tells the story.", image: "fly.jpg", alt: "Fly cast under saturated red and violet lighting", description: "Lighting design turns a venue into a world. Colton creates atmosphere for theatre, choral work, commercial music, and everything between.", detail: "Professional lighting designer and operator for more than five years, including work at Southern Virginia University.", link: "lighting.html", label: "Visit the lighting page" },
  voice: { eyebrow: "Behind the mic", title: "Characters in close-up.", image: "portrait.jpg", alt: "Portrait of Colton Sorensen", description: "Voice performance is where character, rhythm, and imagination meet. Colton brings grounded, expressive work to monologues, reels, and original audio drama.", detail: "Featured as General Fon in an original audio drama and in character-performance showcases.", link: "voice.html", label: "Visit the voice page" },
  teaching: { eyebrow: "The teaching practice", title: "A wider view of the work.", image: "ensemble.jpg", alt: "Theatrical ensemble onstage", description: "Creative education works best when students understand more than their own corner of the room. Curiosity, connection, collaboration, and practical fluency guide Colton’s teaching philosophy.", detail: "Theatre and music education grounded in hands-on exploration and individual connection.", link: "teaching.html", label: "Visit the teaching page" },
  worlds: { eyebrow: "Worlds in the works", title: "Welcome to Vermillia.", image: "anvirya-map.png", alt: "Map of Vermillia", description: "Fate’s Crossing and Anvirya’s Chronicles are ongoing explorations of fantasy worlds, built for games, stories, and the pleasure of getting lost in a map.", detail: "An original TTRPG, campaign settings, a novelization, and a stage play are all in development.", link: "worlds.html", label: "Visit the worlds page" }
};

const dialog = document.querySelector(".work-dialog");
const dialogImage = document.querySelector("#dialog-image");
const dialogEyebrow = document.querySelector("#dialog-eyebrow");
const dialogTitle = document.querySelector("#dialog-title");
const dialogDescription = document.querySelector("#dialog-description");
const dialogDetail = document.querySelector("#dialog-detail");
const dialogLink = document.querySelector("#dialog-link");

document.querySelectorAll(".work-open").forEach((button) => {
  button.addEventListener("click", () => {
    const item = work[button.dataset.work];
    dialogImage.src = item.image;
    dialogImage.alt = item.alt;
    dialogEyebrow.textContent = item.eyebrow;
    dialogTitle.textContent = item.title;
    dialogDescription.textContent = item.description;
    dialogDetail.textContent = item.detail;
    dialogLink.href = item.link;
    dialogLink.firstChild.textContent = `${item.label} `;
    dialog.showModal();
  });
});

document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });

const menu = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#site-nav");
menu.addEventListener("click", () => {
  const open = navigation.classList.toggle("is-open");
  menu.setAttribute("aria-expanded", open);
  menu.textContent = open ? "Close" : "Menu";
});
navigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => { navigation.classList.remove("is-open"); menu.setAttribute("aria-expanded", "false"); menu.textContent = "Menu"; }));
document.querySelector("#year").textContent = new Date().getFullYear();
