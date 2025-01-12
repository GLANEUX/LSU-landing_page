# Utiliser une image Node.js
FROM node:lts-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le projet
COPY . .

# Exposer le port utilisé par Next.js
EXPOSE 3000

# Lancer l'application en mode développement
CMD ["npm", "run", "dev"]
