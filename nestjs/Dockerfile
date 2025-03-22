FROM node:20-slim AS develop

# Establece el directorio de trabajo
WORKDIR /app

# Instala dependencias del sistema necesarias
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    poppler-utils \
    curl \
    procps \
    pkg-config \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Copia el package.json y el package-lock.json para instalar dependencias
COPY package.json package-lock.json ./

# Instala las dependencias de Node.js
RUN npm install

# Instala globalmente el CLI de NestJS
RUN npm install -g @nestjs/cli

# Copia los archivos de configuración de TypeScript
COPY tsconfig.json tsconfig.build.json ./

# Copia el código fuente
COPY . .

# Construye el proyecto
RUN npm run build

# Expone el puerto 3000
EXPOSE 3000

# Comando por defecto para iniciar en modo desarrollo
CMD ["npm", "run", "start:dev"]
