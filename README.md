# Imamhusen Akbar Kalibai — Apple-Style Portfolio

> **"White room with a single blue switch."**  
> An immersive, interactive personal portfolio website for **Imamhusen Akbar Kalibai**, built strictly according to Apple's design language, spatial hierarchy, typography scales, negative tracking, and surface shift tokens.

---

##  Design System Implementation

This portfolio implements Apple's exact restrained design language:

- **Theme**: Light (`#f5f5f7` Canvas alternating with `#f4f8fb` Elevated Wash).
- **Color Philosophy**:
  - `Apple Blue (#0071e3)`: The single filled interactive color used exclusively for primary action buttons (`btn-pill-filled`).
  - `Link Blue (#0066cc)`: Outlined action borders (`btn-pill-outlined`) and inline links (`link-ghost`).
  - `Signal Blue (#2997ff)`: Subtle decorative borders, highlights, and icon strokes.
  - `Carbon (#1d1d1f)`: Dominant ink color for display titles and primary text.
  - `Pebble (#e2e2e5)`: Subdued fills for tags and disabled states.
- **Typography**: SF Pro Display & SF Pro Text metrics paired with Inter fallback, implementing proportional negative tracking:
  - Display (56px, line-height 1.07, tracking +0.616px)
  - Headings (40px, line-height 1.14, tracking +0.44px)
  - Subheading (21px, line-height 1.24, tracking -0.105px, weight 300)
  - Body (17px, line-height 1.47, tracking -0.272px, weight 400)
  - Caption (12px, line-height 1.33, tracking -0.264px)
- **Border Radius**: Strictly **980px** for interactive buttons/tags/pills and **8px** for cards/images/inputs.
- **Elevation**: Completely flat canvas. Drop shadows are strictly omitted from buttons, cards, and navigation. The only shadow permitted is `--shadow-xl: rgba(0, 0, 0, 0.22) 3px 5px 30px 0px` to ground product and device renders against the white canvas.

---

## 🚀 Live Preview & Running Locally

### Option 1: Direct File Open
You can open `index.html` directly in Google Chrome, Microsoft Edge, Safari, or Firefox without any server.

```sh
# In Windows PowerShell:
Start-Process "C:\Users\ac\.gemini\antigravity\scratch\imamhusen-apple-portfolio\index.html"
```

### Option 2: Local Built-in Server (PHP / Python / Node)
Using PHP (available on your machine at `C:\xampp\php\php.exe`):

```powershell
cd C:\Users\ac\.gemini\antigravity\scratch\imamhusen-apple-portfolio
& "C:\xampp\php\php.exe" -S localhost:8000
```
Then visit [http://localhost:8000](http://localhost:8000) in your browser.

---

## 🌐 Deployment Guide

### Deploying to GitHub Pages (`imamhusenkalibai-3109.github.io`)

Because this project is built with native semantic HTML5, CSS3, and ES6 modules, it has **zero build steps** and can be deployed directly to your GitHub repository:

1. Initialize git in this directory (if git is installed) or copy the files into your local clone of `imamhusenkalibai-3109.github.io`:
   ```sh
   git init
   git remote add origin https://github.com/imamhusenkalibai-3109/imamhusenkalibai-3109.github.io.git
   git add .
   git commit -m "Deploy Apple-style personal portfolio"
   git branch -M main
   git push -u origin main
   ```
2. In GitHub repository settings under **Pages**, ensure the Source is set to **Deploy from a branch (`main` / root)**.
3. Your site will immediately be live at `https://imamhusenkalibai-3109.github.io`.

### Deploying to Vercel or Netlify
Simply drag and drop this project folder into the Vercel or Netlify dashboard, or connect your GitHub repository. No build command or output directory configuration is needed.

---

## 📁 File Structure

```
imamhusen-apple-portfolio/
├── index.html            # Main semantic HTML5 document with all resume sections
├── README.md             # Project documentation & deployment guides
├── css/
│   ├── tokens.css        # Exact CSS variables and tokens from design.md
│   ├── components.css    # Apple UI components (pills, nav, mockups, grids)
│   └── animations.css    # 60fps hardware-accelerated animations & keyframes
└── js/
    ├── icons.js          # Vector SVG icons for Java, Spring, React Native, etc.
    ├── interactive.js    # Device tabs, skill filter, copy micro-interactions
    └── main.js           # Scroll observer, sticky mini-nav, smooth links
```

---

## 💼 Included Portfolio Sections

1. **Global Navigation Bar**: Fixed `#1d1d1f` glass bar with Apple logo monogram, navigation links, and GitHub action.
2. **Sticky Mini-Nav**: Emerges below the hero on scroll with live availability status and quick contact trigger.
3. **Hero Section**: 56px SF Pro display headline, paired primary and secondary pills, and interactive Apple Studio Display workstation.
4. **Flagship Projects**:
   - **Nexus Personal AI Assistant**: Local LLaMA 3.2 Ollama inference, Spring AI, interactive code tabs, 0ms cloud egress.
   - **KSRTC Smart Transit**: Live corridor GPS telemetry simulation (Belagavi–Dharwad), LSTM-inspired prediction, iPhone 16 Pro mockup, EAS APK release.
5. **Skills Ecosystem**: Dynamic category filtering (`All`, `Languages`, `Frameworks`, `Databases`, `AI`, `Core CS`) with official vector tech logos and micro-interaction hover states.
6. **Work Experience**: Tap Academy Java Full Stack Trainee timeline with algorithmic workouts and enterprise MVC architecture highlights.
7. **Achievements & Honors**: 4-card Apple service grid covering Claude Code 101, Anthropic AI Fluency, Google Analytics 2026, and Applied AI Engineering.
8. **Academic Education**: PeopleTree BCA (CGPA 6.59) & Government PU College (57.17%).
9. **Interactive Contact & CTA**: Typographic callout block, one-click copy pills for email and phone with toast feedback, and Apple-styled message modal.
10. **Apple Footer**: 4-column link directory, legal notice, and back-to-top navigation.
