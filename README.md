# Elie Mahutin TOGBE — Portfolio Développeur Web Full-Stack

Portfolio officiel de **Elie Mahutin TOGBE**, Développeur Web Full-Stack & Solutions Digitales.  
Étudiant en Master Directeur de Projet SI (INSTA Paris) et actuellement en recherche active d'une **alternance de 24 mois** en Île-de-France (rythme : 3 semaines en entreprise / 1 semaine à l'école).

---

## 🚀 Stack & Technologies du Portfolio

- **Front-End :** HTML5 Sémantique, CSS3 Moderne (Variables, Glassmorphism, Animations), Vanilla JavaScript (ES6+).
- **Thèmes :** Dark Mode & Light Mode avec détection automatique du système et mémorisation locale (`localStorage`).
- **Performance & SEO :** 100% responsive, score Lighthouse optimal, balises Open Graph complètes.
- **Zéro dépendance :** Chargement instantané, ultra léger (< 150 KB sans assets lourds).

---

## 📁 Architecture du Projet

```text
portfolio-dev/
├── assets/
│   └── elie-togbe.jpg        # Photo de profil professionnelle
├── index.html                # Structure sémantique & contenu complet
├── style.css                 # Système de design, thèmes dark/light, responsive
├── script.js                 # Thème toggle, menu mobile, copy email, scrollspy
├── vercel.json               # Configuration des headers de sécurité & routing
└── README.md                 # Documentation du projet
```

---

## ⚡ Prévisualisation Locale

Il suffit d'ouvrir le fichier `index.html` directement dans votre navigateur :
- Soit par double-clic sur `index.html`.
- Soit via une extension type **Live Server** sur VS Code / Cursor.
- Soit en ligne de commande :
  ```bash
  # Python 3
  python -m http.server 3000
  ```
  Puis ouvrir `http://localhost:3000`.

---

## 🌐 Déploiement sur GitHub & Vercel

### Étape 1 : Créer le dépôt sur GitHub
1. Rendez-vous sur [github.com/new](https://github.com/new).
2. Nommez le repository : `portfolio` (ou `portfolio-dev`).
3. Laissez-le en **Public**.
4. Ne cochez ni README, ni .gitignore (ils sont déjà présents dans le dossier).
5. Cliquez sur **Create repository**.

### Étape 2 : Initialiser Git et pousser le code
Dans le terminal (depuis le dossier `portfolio-dev`) :
```bash
git init
git add .
git commit -m "feat: initial commit - modern full-stack developer portfolio"
git branch -M main
git remote add origin https://github.com/escrivetogbe/portfolio.git
git push -u origin main
```

### Étape 3 : Déployer en 1 clic sur Vercel
1. Connectez-vous sur [vercel.com](https://vercel.com).
2. Cliquez sur **Add New...** > **Project**.
3. Importez le repository `escrivetogbe/portfolio`.
4. Laissez les réglages par défaut (Framework Preset: **Other** / Root Directory: `./`).
5. Cliquez sur **Deploy**.
6. En moins de 30 secondes, votre portfolio est en ligne avec un lien `https://portfolio-escrivetogbe.vercel.app` (ou nom personnalisé) et HTTPS automatique !

---

## 📬 Contact & Liens Utiles

- **Email :** [escrivetogbe@gmail.com](mailto:escrivetogbe@gmail.com)
- **Téléphone :** +33 7 59 33 45 11
- **GitHub :** [github.com/escrivetogbe](https://github.com/escrivetogbe)
- **Projet Live :** [Journalist Research Workspace (Vercel)](https://journalist-research-workspace.vercel.app)
