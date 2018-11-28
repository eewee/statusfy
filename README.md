STATIC

**This directory is not required, you can delete it if you don't want to use it.**

This directory contains your static files.
Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/assets#static).
=======
# Statusfy.co

## But : 
Générer une page de statut pour visualiser l’état des services d’une solution (site web, API, CDN, DNS, …).

## Installation  : 

### Install global :
sudo npm install -g statusfy

### change the working directory
cd existing_folder

### run the initialization command
npx statusfy init

### and install your local dependencies
npm install  # OR yarn install

## Déclarer incident :

https://docs.statusfy.co/guide/incidents.html#naming-convention

### Créer un nouvel incident :
npm run new-incident # OR yarn new-incident

### Checker en dev (cela va indiquer une IP pour voir le rendu) : 
npm run dev # OR yarn dev

### Générer les pages statiques :
npm run generate # OR yarn generate OR statusfy generate (si statusfy présent en global).

## Déploiement sur GitHub :

https://docs.statusfy.co/guide/deploy.html#github-pages 
