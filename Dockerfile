# Utiliza una imagen base de Node.js
FROM node:18

# Configura el directorio de trabajo
WORKDIR /usr/src/app

# Instala nodemon globalmente
RUN npm install -g nodemon

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Expone el puerto en el que la aplicación escuchará (cambia el número de puerto si es necesario)
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["nodemon", "index.js"]
