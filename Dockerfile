# Usa una imagen base de Node.js
FROM node:16-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Instala nodemon globalmente
RUN npm install -g nodemon

# Copia el package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el código fuente
COPY . .

# Exponer el puerto en el contenedor
EXPOSE 3000

# Comando para ejecutar la aplicación con nodemon
CMD ["nodemon", "index.js"]