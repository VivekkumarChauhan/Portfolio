# 🚀 Vivekkumar Chauhan — Portfolio Website

A sleek, animated portfolio with **Dark & Light themes**, responsive design, and interactive UI.

---

## 📁 Project Structure

```
portfolio/
│
├── index.html              ← Main HTML (all sections)
│
├── css/
│   └── style.css           ← All styles, themes, animations
│
├── js/
│   └── main.js             ← All interactivity & logic
│
├── assets/                 ← (add your photo here)
│   └── vivek-photo.jpg     ← Replace the placeholder
│
└── README.md               ← This file
```

---

## ✨ Features

| Feature | Detail |
|---|---|
| 🌙 Dark / ☀️ Light Theme | Toggle via navbar button — persists in localStorage |
| 🎯 Custom Cursor | Animated dot + ring follower |
| 📦 Skills Bento Grid | Filterable by category tabs |
| 🔢 Animated Counters | Hero stats count up on scroll |
| 👁️ Scroll Reveal | Staggered entrance animations |
| 📱 Fully Responsive | Mobile hamburger menu |
| ✉️ Contact Form | Feedback button with success state |
| ⚡ Smooth Scrolling | Offset-aware anchor navigation |

---

## 🎨 Theme Colors

### Dark Theme
| Variable | Value | Use |
|---|---|---|
| `--bg` | `#09090e` | Page background |
| `--gold` | `#c9a84c` | Primary accent |
| `--text` | `#e9e4d8` | Body text |

### Light Theme
| Variable | Value | Use |
|---|---|---|
| `--bg` | `#f7f4ee` | Page background |
| `--gold` | `#a07820` | Primary accent |
| `--text` | `#1a1710` | Body text |

---

## 🔧 How to Use

1. **Open** `index.html` in any browser — no build step needed
2. **Add your photo**: Place `vivek-photo.jpg` in `/assets/` then update the About section in `index.html`:
   ```html
   <!-- Replace this div: -->
   <div class="about-photo-placeholder">...</div>
   
   <!-- With: -->
   <img src="assets/vivek-photo.jpg" alt="Vivekkumar Chauhan" 
        style="width:360px;height:440px;object-fit:cover;border:1px solid var(--border);position:relative;z-index:1;" />
   ```
3. **Update links**: Replace GitHub username and LinkedIn URL in `index.html`
4. **Deploy**: Upload the entire folder to GitHub Pages, Netlify, or Vercel

---

## 🚢 Deploy to GitHub Pages

```bash
# 1. Create repo: vivekkumarchauhan.github.io
# 2. Push all files
git init
git add .
git commit -m "Portfolio launch 🚀"
git remote add origin https://github.com/VivekkumarChauhan/vivekkumarchauhan.github.io.git
git push -u origin main
# 3. Go to repo Settings → Pages → Deploy from main branch
```

---

## 📞 Contact

- 📧 vivekchauhan2385@gmail.com
- 💼 [linkedin.com/in/vivek92](https://linkedin.com/in/vivek92)
- 🐙 [github.com/VivekkumarChauhan](https://github.com/VivekkumarChauhan)