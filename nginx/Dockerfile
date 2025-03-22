FROM nginx:latest

# Copiar la configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Crear directorio para Certbot (Let's Encrypt)
RUN mkdir -p /var/www/certbot

# Exponer los puertos 80 y 443
EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]