FROM node:18-alpine

WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Mettre à jour browserslist avant l'installation
RUN npx update-browserslist-db@latest

# Installer les dépendances
RUN npm ci --only=production=false

# Copier le code source
COPY . .

# Exposer le port
EXPOSE 5173

# Commande de démarrage avec configuration Vite pour Docker
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]