FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# ne pas exécuter en tant que root
USER node
EXPOSE 8080
CMD ["npm", "start"]