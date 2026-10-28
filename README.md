# Mon e-portfolio

Site statique (HTML / CSS / JavaScript) hébergé gratuitement avec **GitHub Pages**.

## Structure

```
eportfolio/
├── index.html      ← le contenu (textes, projets, contact)
├── style.css       ← l'apparence (couleurs, mise en page)
├── script.js       ← menu mobile, thème sombre, filtres de projets
├── images/         ← photo.jpg, projet1.jpg, ... (à ajouter)
└── documents/      ← cv.pdf, rapports, ... (à ajouter)
```

## Personnaliser

1. Ouvrez `index.html` et remplacez tous les textes « Prénom Nom », « Titre du projet »… par les vôtres.
2. Ajoutez votre photo dans `images/photo.jpg`, vos visuels de projets dans `images/`, votre CV dans `documents/cv.pdf`.
3. Changez les couleurs dans `style.css` (variable `--accent` en haut du fichier).
4. Pour tester en local : double-cliquez sur `index.html` (ou utilisez l'extension *Live Server* de VS Code).

## Publier sur GitHub Pages

1. Créez un compte sur https://github.com si ce n'est pas déjà fait.
2. Cliquez sur **New repository**.
   - Nom : `votre-pseudo.github.io` → l'adresse sera `https://votre-pseudo.github.io`
   - (ou n'importe quel autre nom, ex. `eportfolio` → `https://votre-pseudo.github.io/eportfolio`)
   - Visibilité : **Public**.
3. Envoyez les fichiers :
   - **Sans ligne de commande** : dans le dépôt, **Add file → Upload files**, glissez tout le contenu du dossier (y compris `images/` et `documents/`), puis **Commit changes**.
   - **Avec Git** :
     ```bash
     git init
     git add .
     git commit -m "Premier jet de mon e-portfolio"
     git branch -M main
     git remote add origin https://github.com/votre-pseudo/votre-depot.git
     git push -u origin main
     ```
4. Dans le dépôt : **Settings → Pages**.
   - *Source* : **Deploy from a branch**
   - *Branch* : `main` / dossier `/ (root)` → **Save**
5. Attendez 1 à 2 minutes : l'adresse du site s'affiche en haut de la page Pages.

## Mettre à jour

Modifiez un fichier (directement sur GitHub avec l'icône ✏️, ou en local puis `git push`) : le site se met à jour automatiquement.

## Conseils pour un bon e-portfolio

- Pour chaque projet : contexte, objectif, votre rôle, résultat, ce que vous en retirez.
- Gardez une section de réflexion personnelle : c'est ce qui distingue un portfolio d'un simple CV.
- Vérifiez l'affichage sur téléphone.
- Ne publiez pas d'informations personnelles sensibles (adresse, téléphone) ni de documents confidentiels (rapports de stage soumis à confidentialité).
