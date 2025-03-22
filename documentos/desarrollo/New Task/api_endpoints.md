# Diseño de API para FanToken

## Descripción General
Esta API proporciona los endpoints necesarios para la plataforma FanToken, un sistema de financiación colectiva para jugadores de fútbol mediante tokenización de contratos.

## Base URL
```
https://api.fantoken.io/v1
```

## Autenticación
Todos los endpoints requieren autenticación mediante token JWT en el encabezado:
```
Authorization: Bearer {token}
```

## Endpoints

### 1. Gestión de Usuarios

#### 1.1 Registro de Usuario
```
POST /auth/register
```
Permite el registro de nuevos usuarios (fanáticos) en la plataforma.

#### 1.2 Registro de Club
```
POST /auth/register/club
```
Permite el registro de clubes de fútbol en la plataforma.

#### 1.3 Inicio de Sesión
```
POST /auth/login
```
Autenticación de usuarios y clubes.

#### 1.4 Verificación KYC
```
POST /users/kyc/verify
```
Envío de documentación para verificación KYC.

#### 1.5 Perfil de Usuario
```
GET /users/profile
```
Obtiene información del perfil del usuario autenticado.

```
PUT /users/profile
```
Actualiza información del perfil del usuario.

#### 1.6 Perfil de Club
```
GET /clubs/profile
```
Obtiene información del perfil del club autenticado.

```
PUT /clubs/profile
```
Actualiza información del perfil del club.

### 2. Gestión de Jugadores

#### 2.1 Listar Jugadores para Financiación
```
GET /players
```
Obtiene lista de jugadores disponibles para financiación.

#### 2.2 Detalles de Jugador
```
GET /players/{playerId}
```
Obtiene detalles completos de un jugador específico.

#### 2.3 Publicar Jugador (Solo Clubes)
```
POST /players
```
Permite a un club publicar un nuevo jugador para financiación.

#### 2.4 Actualizar Información de Jugador (Solo Clubes)
```
PUT /players/{playerId}
```
Actualiza información de un jugador publicado.

#### 2.5 Cancelar Financiación (Solo Clubes)
```
DELETE /players/{playerId}
```
Cancela la financiación de un jugador.

### 3. Tokenización y Financiación

#### 3.1 Crear Tokens para Jugador (Solo Sistema)
```
POST /tokens/create
```
Crea tokens para un jugador específico (uso interno).

#### 3.2 Obtener Información de Tokens
```
GET /tokens/{playerId}
```
Obtiene información sobre los tokens de un jugador.

#### 3.3 Comprar Tokens
```
POST /tokens/{playerId}/buy
```
Permite a un fanático comprar tokens de un jugador.

#### 3.4 Vender Tokens (Mercado Secundario)
```
POST /tokens/{playerId}/sell
```
Permite a un fanático vender tokens en el mercado secundario.

#### 3.5 Estado de Financiación
```
GET /funding/{playerId}/status
```
Obtiene el estado actual de la financiación de un jugador.

### 4. Cartera y Transacciones

#### 4.1 Balance de Usuario
```
GET /wallet/balance
```
Obtiene el balance de la cartera del usuario.

#### 4.2 Historial de Transacciones
```
GET /wallet/transactions
```
Obtiene el historial de transacciones del usuario.

#### 4.3 Depositar Fondos
```
POST /wallet/deposit
```
Permite al usuario depositar fondos en su cartera.

#### 4.4 Retirar Fondos
```
POST /wallet/withdraw
```
Permite al usuario retirar fondos de su cartera.

### 5. Gestión de Inversiones

#### 5.1 Portafolio de Inversiones
```
GET /investments
```
Obtiene el portafolio de inversiones del usuario.

#### 5.2 Detalles de Inversión
```
GET /investments/{playerId}
```
Obtiene detalles de la inversión en un jugador específico.

#### 5.3 Rendimiento de Inversiones
```
GET /investments/performance
```
Obtiene métricas de rendimiento de las inversiones del usuario.

### 6. Distribución de Beneficios

#### 6.1 Beneficios Disponibles
```
GET /benefits
```
Obtiene información sobre beneficios disponibles para el usuario.

#### 6.2 Reclamar Beneficios
```
POST /benefits/claim
```
Permite al usuario reclamar beneficios disponibles.

#### 6.3 Historial de Beneficios
```
GET /benefits/history
```
Obtiene el historial de beneficios reclamados.

### 7. Administración (Solo Sistema)

#### 7.1 Estadísticas de Plataforma
```
GET /admin/stats
```
Obtiene estadísticas generales de la plataforma.

#### 7.2 Gestión de Contratos Inteligentes
```
POST /admin/contracts/deploy
```
Despliega nuevos contratos inteligentes.

#### 7.3 Actualización de Precios (Oráculos)
```
POST /admin/oracle/update
```
Actualiza precios y valores de activos mediante oráculos.

### 8. Notificaciones

#### 8.1 Listar Notificaciones
```
GET /notifications
```
Obtiene notificaciones para el usuario.

#### 8.2 Marcar Notificación como Leída
```
PUT /notifications/{notificationId}
```
Marca una notificación como leída.

### 9. Búsqueda y Filtrado

#### 9.1 Búsqueda de Jugadores
```
GET /search/players
```
Busca jugadores por diversos criterios.

#### 9.2 Filtrado Avanzado
```
POST /search/advanced
```
Realiza búsquedas avanzadas con múltiples criterios.
