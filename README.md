```markdown
# TLCP@Games 🎮

> Free, open-source educational browser games mapped to CEFR language proficiency benchmarks (English & Mandarin Chinese). Currently in open beta, please feel free to report any bugs/issues you find.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Support on Ko-fi](https://img.shields.io/badge/Ko--fi-Support%20Project-F16061?logo=ko-fi&logoColor=white)](https://ko-fi.com/YOUR_KOFI_HANDLE)
[![GitHub Pages](https://img.shields.io/badge/Play%20Online-GitHub%20Pages-2ea44f?logo=github)](https://YOUR_GITHUB_USERNAME.github.io/tlcp-games/)

---

## 🌟 Overview

**TLCP@Games** is an open-access interactive game portal designed to bridge communicative language teaching with lightweight browser game mechanics. Built around an Apple-inspired minimalist aesthetic, every game is calibrated against the **Common European Framework of Reference for Languages (CEFR)** to give learners and educators targeted, stress-free practice without logins, paywalls, or ads.

All games run entirely client-side in standard web browsers on both desktop and mobile devices.

---

## 🎯 CEFR Curricular Alignment

Games are grouped by linguistic competency tiers rather than arbitrary age brackets:

| Tier | CEFR Band | Target Linguistic Skills | Example Gameplay Mechanics |
| :--- | :--- | :--- | :--- |
| **Pre-A1** | **Foundations** | Sound-letter correspondence, Pinyin initials/finals, high-frequency sight words | Audio-matching memory pairs, phonics bubble-popper |
| **A1 – B1** | **Emerging & Independent** | Mandarin tonal contours, verb aspect/conjugation, everyday conversational lexical chunks | Rhythm runners, tone pitch tracking, sentence scrambles |
| **B2+** | **Advanced & Fluency** | Metaphorical competence, nuanced idioms (*chengyu* / collocations), discourse markers | Contextual branching interactive fiction, speed cloze puzzles |

---

## 🛠️ Tech Stack & Architecture

Built with zero backend dependencies for maximum portability, security, and low-latency client rendering:

* **Hub Frontend:** Semantic HTML5, modern CSS3 (flexbox, grid, glassmorphism, responsive segmented controls), and vanilla ES6+ JavaScript.
* **Game Engines & Libraries:** HTML5 Canvas API, [Phaser 3](https://phaser.io/), and [Three.js](https://threejs.org/) for modular 2D and 3D web environments.
* **Audio & Assets:** Web Audio API, compressed royalty-free audio formats (`.mp3`/`.ogg`), and optimized SVG/WebP vector sprites.
* **Hosting & CI/CD:** Hosted via **GitHub Pages** with immediate continuous deployment from the `main` branch.

---

## 📁 Repository Structure

Each game is an isolated, self-contained sub-application located in the `games/` directory to prevent asset collisions and make modular contributions simple:

```text
tlcp-games/
├── index.html                  # Main portal landing page with CEFR filter pills
├── LICENSE                     # MIT License
├── README.md                   # Project documentation
├── preview-card.png            # Open Graph social preview banner
├── games/
│   ├── Example_Game/           # Pre-A1: Phonics and auditory recognition
│   │   ├── index.html
│   │   ├── game.js
│   │   └── assets/
│   ├── Example_Game2/           # A1–B1: Tone contours and lexical speed
│   │   ├── index.html
│   │   ├── game.js
│   │   └── assets/
│   └── Example_Game3/       # B2+: Advanced pragmatics & idioms
│       ├── index.html
│       ├── game.js
│       └── assets/
└── shared/                     # Global UI sounds and base utility helpers

```

---

## 🚀 Running Locally

No compilers, Node packages, or server runtimes required. To run and test locally:

1. **Clone the repository:**
```bash
git clone [https://github.com/YOUR_GITHUB_USERNAME/tlcp-games.git](https://github.com/YOUR_GITHUB_USERNAME/tlcp-games.git)
cd tlcp-games

```


2. **Serve locally:**
Because modern browsers restrict asset loading (`fetch`, Web Audio, canvas images) over `file://` protocols due to CORS, run a local development server:
*Using Python 3:*
```bash
python -m http.server 8000

```


*Using VS Code:*
Install the **Live Server** extension and click **"Go Live"** from `index.html`.
3. Open `http://localhost:8000` in your browser.

---

## 🤝 Contributing

Contributions from language teachers, linguists, game designers, and frontend developers are warmly welcomed.

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/NewGame`).
3. Commit your Changes (`git commit -m "Add A2 vocabulary matching mini-game"`).
4. Push to the Branch (`git push origin feature/NewGame`).
5. Open a Pull Request detailing the pedagogical objective and CEFR target.

---

## ☕ Support & Donations

TLCP@Games is an independent, non-profit open-source initiative (currently solo-dev, but if you'd like to join the team, please feel free to contact me). If you find these games helpful in your classroom or self-study, please consider a donation:

All donations go directly toward game design, vector illustrations, and keeping the games 100% ad-free.

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](https://www.google.com/search?q=LICENSE) for full details. Anyone is free to adapt, extend, and fork this codebase for their own educational projects.

```
## 🔒 Privacy & Analytics

TLCP@Games respects learner privacy—especially in classroom settings.

* **No Cookies & No Personal Data:** We do not collect names, emails, IP addresses, or browser fingerprinting.
* **Privacy-Friendly Metrics:** We use [GoatCounter](https://www.goatcounter.com/), an open-source web analytics platform, solely to monitor aggregate page views (e.g., game popularity and total visits).
* **Classroom-Safe:** 100% compliant with GDPR, CCPA, and school privacy standards. No tracking cookies or advertising networks are used.
---

### Setup Checklist

1. Replace every instance of `YOUR_GITHUB_USERNAME` and `YOUR_KOFI_HANDLE` with your actual handles.
2. Add a `preview-card.png` (1200×630 px) into your root directory so the social link cards match the GitHub banner.

<ElicitationsGroup message="To help complete the repository setup:">
  <Elicitation label="Draft a minimal starter game in the sound-safari folder" query="Create a complete starter template index.html and game.js for the games/sound-safari subfolder."/>
  <Elicitation label="Create a GitHub issue template for community game ideas" query="Generate a GitHub issue template (game-submission.md) for educators submitting new game concepts."/>
  <Elicitation label="Add a minimalist MIT license footer snippet to index.html" query="Provide the exact HTML snippet to add an MIT license and copyright footer to the TLCP@Games index.html."/>
</ElicitationsGroup>

```
