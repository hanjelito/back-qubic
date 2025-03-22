# Ejemplos JSON para la API de FanToken

Este documento proporciona ejemplos de solicitudes y respuestas JSON para los principales endpoints de la API de FanToken.

## 1. Gestión de Usuarios

### 1.1 Registro de Usuario (Fanático)

**Endpoint:** `POST /auth/register`

**Solicitud:**
```json
{
  "email": "fan@ejemplo.com",
  "password": "contraseña123",
  "firstName": "Juan",
  "lastName": "Pérez",
  "dateOfBirth": "1990-05-15",
  "country": "España",
  "favoriteTeam": "FC Barcelona",
  "phoneNumber": "+34600123456"
}
```

**Respuesta (200 OK):**
```json
{
  "status": "success",
  "message": "Usuario registrado correctamente",
  "data": {
    "userId": "u123456789",
    "email": "fan@ejemplo.com",
    "firstName": "Juan",
    "lastName": "Pérez",
    "kycStatus": "pending",
    "createdAt": "2025-03-22T18:00:00Z",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

### 1.2 Registro de Club

**Endpoint:** `POST /auth/register/club`

**Solicitud:**
```json
{
  "email": "club@realmadrid.com",
  "password": "contraseña123",
  "clubName": "Real Madrid CF",
  "country": "España",
  "league": "LaLiga",
  "foundationYear": 1902,
  "stadiumName": "Santiago Bernabéu",
  "contactPerson": {
    "name": "Carlos Martínez",
    "position": "Director Financiero",
    "phoneNumber": "+34600789123",
    "email": "carlos.martinez@realmadrid.com"
  },
  "taxId": "B12345678",
  "officialWebsite": "https://www.realmadrid.com"
}
```

**Respuesta (200 OK):**
```json
{
  "status": "success",
  "message": "Club registrado correctamente",
  "data": {
    "clubId": "c987654321",
    "clubName": "Real Madrid CF",
    "email": "club@realmadrid.com",
    "verificationStatus": "pending",
    "createdAt": "2025-03-22T18:05:00Z",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

### 1.3 Inicio de Sesión

**Endpoint:** `POST /auth/login`

**Solicitud:**
```json
{
  "email": "fan@ejemplo.com",
  "password": "contraseña123",
  "userType": "fan"
}
```

**Respuesta (200 OK):**
```json
{
  "status": "success",
  "message": "Inicio de sesión exitoso",
  "data": {
    "userId": "u123456789",
    "email": "fan@ejemplo.com",
    "firstName": "Juan",
    "lastName": "Pérez",
    "userType": "fan",
    "kycStatus": "verified",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "expiresIn": 86400
  }
}
```

## 2. Gestión de Jugadores

### 2.1 Listar Jugadores para Financiación

**Endpoint:** `GET /players`

**Parámetros de consulta:**
```
?page=1&limit=10&status=active&sortBy=fundingProgress&order=desc
```

**Respuesta (200 OK):**
```json
{
  "status": "success",
  "data": {
    "players": [
      {
        "playerId": "p123456789",
        "name": "Kylian Mbappé",
        "position": "Delantero",
        "age": 26,
        "nationality": "Francia",
        "currentClub": "Paris Saint-Germain",
        "targetClub": {
          "clubId": "c987654321",
          "name": "Real Madrid CF",
          "logo": "https://api.fantoken.io/images/clubs/realmadrid.png"
        },
        "contractValue": 180000000,
        "tokenPrice": 100,
        "totalTokens": 1800000,
        "soldTokens": 1200000,
        "fundingProgress": 66.7,
        "fundingDeadline": "2025-06-30T23:59:59Z",
        "status": "active",
        "image": "https://api.fantoken.io/images/players/mbappe.png"
      },
      {
        "playerId": "p987654321",
        "name": "Erling Haaland",
        "position": "Delantero",
        "age": 24,
        "nationality": "Noruega",
        "currentClub": "Manchester City",
        "targetClub": {
          "clubId": "c123456789",
          "name": "FC Barcelona",
          "logo": "https://api.fantoken.io/images/clubs/barcelona.png"
        },
        "contractValue": 150000000,
        "tokenPrice": 80,
        "totalTokens": 1875000,
        "soldTokens": 1125000,
        "fundingProgress": 60.0,
        "fundingDeadline": "2025-07-15T23:59:59Z",
        "status": "active",
        "image": "https://api.fantoken.io/images/players/haaland.png"
      }
    ],
    "pagination": {
      "totalItems": 24,
      "totalPages": 3,
      "currentPage": 1,
      "itemsPerPage": 10
    }
  }
}
```

### 2.2 Detalles de Jugador

**Endpoint:** `GET /players/{playerId}`

**Respuesta (200 OK):**
```json
{
  "status": "success",
  "data": {
    "playerId": "p123456789",
    "name": "Kylian Mbappé",
    "fullName": "Kylian Mbappé Lottin",
    "position": "Delantero",
    "age": 26,
    "dateOfBirth": "1998-12-20",
    "height": 178,
    "weight": 73,
    "nationality": "Francia",
    "currentClub": "Paris Saint-Germain",
    "currentLeague": "Ligue 1",
    "targetClub": {
      "clubId": "c987654321",
      "name": "Real Madrid CF",
      "logo": "https://api.fantoken.io/images/clubs/realmadrid.png",
      "league": "LaLiga",
      "country": "España"
    },
    "stats": {
      "appearances": 350,
      "goals": 280,
      "assists": 120,
      "yellowCards": 40,
      "redCards": 3
    },
    "contractDetails": {
      "totalValue": 180000000,
      "duration": "5 años",
      "salary": 25000000,
      "transferFee": 80000000,
      "bonuses": 20000000,
      "otherCosts": 5000000
    },
    "tokenization": {
      "tokenSymbol": "MBAP",
      "tokenPrice": 100,
      "totalTokens": 1800000,
      "soldTokens": 1200000,
      "fundingProgress": 66.7,
      "fundingGoal": 180000000,
      "fundingRaised": 120000000,
      "fundingDeadline": "2025-06-30T23:59:59Z",
      "minInvestment": 100,
      "maxInvestment": 1000000
    },
    "benefitsStructure": {
      "transferProfit": "30% de beneficio en venta futura",
      "imageRights": "10% de ingresos por derechos de imagen",
      "performanceBonuses": "Bonos por goles, asistencias y títulos"
    },
    "status": "active",
    "images": {
      "profile": "https://api.fantoken.io/images/players/mbappe.png",
      "action": "https://api.fantoken.io/images/players/mbappe_action.png",
      "celebration": "https://api.fantoken.io/images/players/mbappe_celebration.png"
    },
    "videos": {
      "highlights": "https://api.fantoken.io/videos/mbappe_highlights.mp4",
      "interview": "https://api.fantoken.io/videos/mbappe_interview.mp4"
    },
    "socialMedia": {
      "twitter": "https://twitter.com/KMbappe",
      "instagram": "https://instagram.com/k.mbappe",
      "facebook": "https://facebook.com/kylianmbappe"
    },
    "createdAt": "2025-03-01T10:00:00Z",
    "updatedAt": "2025-03-22T15:30:00Z"
  }
}
```

### 2.3 Publicar Jugador (Solo Clubes)

**Endpoint:** `POST /players`

**Solicitud:**
```json
{
  "name": "Jude Bellingham",
  "fullName": "Jude Victor William Bellingham",
  "position": "Centrocampista",
  "dateOfBirth": "2003-06-29",
  "height": 186,
  "weight": 75,
  "nationality": "Inglaterra",
  "currentClub": "Borussia Dortmund",
  "currentLeague": "Bundesliga",
  "stats": {
    "appearances": 150,
    "goals": 35,
    "assists": 40,
    "yellowCards": 20,
    "redCards": 1
  },
  "contractDetails": {
    "totalValue": 120000000,
    "duration": "5 años",
    "salary": 15000000,
    "transferFee": 90000000,
    "bonuses": 10000000,
    "otherCosts": 5000000
  },
  "tokenization": {
    "tokenSymbol": "BELL",
    "tokenPrice": 60,
    "totalTokens": 2000000,
    "fundingDeadline": "2025-08-15T23:59:59Z",
    "minInvestment": 60,
    "maxInvestment": 600000
  },
  "benefitsStructure": {
    "transferProfit": "25% de beneficio en venta futura",
    "imageRights": "8% de ingresos por derechos de imagen",
    "performanceBonuses": "Bonos por goles, asistencias y títulos"
  },
  "images": {
    "profile": "https://api.fantoken.io/images/players/bellingham.png",
    "action": "https://api.fantoken.io/images/players/bellingham_action.png"
  },
  "socialMedia": {
    "twitter": "https://twitter.com/BellinghamJude",
    "instagram": "https://instagram.com/judebellingham"
  }
}
```

**Respuesta (201 Created):**
```json
{
  "status": "success",
  "message": "Jugador publicado correctamente",
  "data": {
    "playerId": "p567890123",
    "name": "Jude Bellingham",
    "tokenSymbol": "BELL",
    "contractValue": 120000000,
    "fundingGoal": 120000000,
    "fundingDeadline": "2025-08-15T23:59:59Z",
    "status": "pending",
    "createdAt": "2025-03-22T18:15:00Z",
    "smartContractAddress": "0x1234567890abcdef1234567890abcdef12345678"
  }
}
```

## 3. Tokenización y Financiación

### 3.1 Comprar Tokens

**Endpoint:** `POST /tokens/{playerId}/buy`

**Solicitud:**
```json
{
  "amount": 500,
  "paymentMethod": "wallet",
  "agreeToTerms": true
}
```

**Respuesta (200 OK):**
```json
{
  "status": "success",
  "message": "Compra de tokens realizada correctamente",
  "data": {
    "transactionId": "t123456789",
    "playerId": "p123456789",
    "playerName": "Kylian Mbappé",
    "tokenSymbol": "MBAP",
    "tokenAmount": 500,
    "tokenPrice": 100,
    "totalCost": 50000,
    "paymentMethod": "wallet",
    "transactionHash": "0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890",
    "timestamp": "2025-03-22T18:20:00Z",
    "status": "completed"
  }
}
```

### 3.2 Estado de Financiación

**Endpoint:** `GET /funding/{playerId}/status`

**Respuesta (200 OK):**
```json
{
  "status": "success",
  "data": {
    "playerId": "p123456789",
    "playerName": "Kylian Mbappé",
    "tokenSymbol": "MBAP",
    "contractValue": 180000000,
    "fundingGoal": 180000000,
    "fundingRaised": 120000000,
    "fundingProgress": 66.7,
    "totalTokens": 1800000,
    "soldTokens": 1200000,
    "remainingTokens": 600000,
    "tokenPrice": 100,
    "fundingDeadline": "2025-06-30T23:59:59Z",
    "timeRemaining": {
      "days": 100,
      "hours": 5,
      "minutes": 39,
      "seconds": 59
    },
    "status": "active",
    "recentInvestors": [
      {
        "userId": "u123456789",
        "amount": 50000,
        "tokens": 500,
        "timestamp": "2025-03-22T18:20:00Z"
      },
      {
        "userId": "u234567890",
        "amount": 30000,
        "tokens": 300,
        "timestamp": "2025-03-22T17:45:00Z"
      },
      {
        "userId": "u345678901",
        "amount": 100000,
        "tokens": 1000,
        "timestamp": "2025-03-22T16:30:00Z"
      }
    ],
    "fundingTrend": [
      {
        "date": "2025-03-15",
        "amount": 60000000
      },
      {
        "date": "2025-03-16",
        "amount": 72000000
      },
      {
        "date": "2025-03-17",
        "amount": 85000000
      },
      {
        "date": "2025-03-18",
        "amount": 95000000
      },
      {
        "date": "2025-03-19",
        "amount": 105000000
      },
      {
        "date": "2025-03-20",
        "amount": 112000000
      },
      {
        "date": "2025-03-21",
        "amount": 118000000
      },
      {
        "date": "2025-03-22",
        "amount": 120000000
      }
    ]
  }
}
```

## 4. Cartera y Transacciones

### 4.1 Balance de Usuario

**Endpoint:** `GET /wallet/balance`

**Respuesta (200 OK):**
```json
{
  "status": "success",
  "data": {
    "userId": "u123456789",
    "fiatBalance": {
      "currency": "EUR",
      "amount": 25000.50
    },
    "tokenBalances": [
      {
        "tokenSymbol": "MBAP",
        "playerId": "p123456789",
        "playerName": "Kylian Mbappé",
        "amount": 500,
        "valuePerToken": 105.20,
        "totalValue": 52600.00,
        "profitLoss": {
          "amount": 2600.00,
          "percentage": 5.2
        }
      },
      {
        "tokenSymbol": "HAAL",
        "playerId": "p987654321",
        "playerName": "Erling Haaland",
        "amount": 300,
        "valuePerToken": 82.50,
        "totalValue": 24750.00,
        "profitLoss": {
          "amount": 750.00,
          "percentage": 3.125
        }
      }
    ],
    "totalPortfolioValue": 102350.50,
    "lastUpdated": "2025-03-22T18:25:00Z"
  }
}
```

### 4.2 Historial de Transacciones

**Endpoint:** `GET /wallet/transactions`

**Parámetros de consulta:**
```
?page=1&limit=10&type=all&sortBy=date&order=desc
```

**Respuesta (200 OK):**
```json
{
  "status": "success",
  "data": {
    "transactions": [
      {
        "transactionId": "t123456789",
        "type": "tokenPurchase",
        "playerId": "p123456789",
        "playerName": "Kylian Mbappé",
        "tokenSymbol": "MBAP",
        "tokenAmount": 500,
        "tokenPrice": 100,
        "totalAmount": 50000,
        "currency": "EUR",
        "paymentMethod": "wallet",
        "status": "completed",
        "transactionHash": "0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890",
        "timestamp": "2025-03-22T18:20:00Z"
      },
      {
        "transactionId": "t234567890",
        "type": "deposit",
        "amount": 75000,
        "currency": "EUR",
        "paymentMethod": "bankTransfer",
        "status": "completed",
        "timestamp": "2025-03-20T14:30:00Z"
      },
      {
        "transactionId": "t345678901",
        "type": "tokenPurchase",
        "playerId": "p987654321",
        "playerName": "Erling Haaland",
        "tokenSymbol": "HAAL",
        "tokenAmount": 300,
        "tokenPrice": 80,
        "totalAmount": 24000,
        "currency": "EUR",
        "paymentMethod": "wallet",
        "status": "completed",
        "transactionHash": "0x0987654321fedcba0987654321fedcba0987654321fedcba0987654321fedcba",
        "timestamp": "2025-03-18T10:15:00Z"
      }
    ],
    "pagination": {
      "totalItems": 8,
      "totalPages": 1,
      "currentPage": 1,
      "itemsPerPage": 10
    }
  }
}
```

## 5. Gestión de Inversiones

### 5.1 Portafolio de Inversiones

**Endpoint:** `GET /investments`

**Respuesta (200 OK):**
```json
{
  "status": "success",
  "data": {
    "userId": "u123456789",
    "totalInvested": 74000,
    "currentValue": 77350,
    "totalProfitLoss": {
      "amount": 3350,
      "percentage": 4.53
    },
    "investments": [
      {
        "playerId": "p123456789",
        "playerName": "Kylian Mbappé",
        "tokenSymbol": "MBAP",
        "tokenAmount": 500,
        "purchasePrice": 100,
        "currentPrice": 105.20,
        "invested": 50000,
        "currentValue": 52600,
        "profitLoss": {
          "amount": 2600,
          "percentage": 5.2
        },
        "purchaseDate": "2025-03-22T18:20:00Z",
        "playerStatus": "active",
        "fundingProgress": 66.7,
        "fundingDeadline": "2025-06-30T23:59:59Z"
      },
      {
        "playerId": "p987654321",
        "playerName": "Erling Haaland",
        "tokenSymbol": "HAAL",
        "tokenAmount": 300,
        "purchasePrice": 80,
        "currentPrice": 82.50,
        "invested": 24000,
        "currentValue": 24750,
        "profitLoss": {
          "amount": 750,
          "percentage": 3.125
        },
        "purchaseDate": "2025-03-18T10:15:00Z",
        "playerStatus": "active",
        "fundingProgress": 60.0,
        "fundingDeadline": "2025-07-15T23:59:59Z"
      }
    ],
    "portfolioDistribution": [
      {
        "tokenSymbol": "MBAP",
        "percentage": 67.57
      },
      {
        "tokenSymbol": "HAAL",
        "percentage": 32.43
      }
    ],
    "lastUpdated": "2025-03-22T18:30:00Z"
  }
}
```

## 6. Distribución de Beneficios

### 6.1 Beneficios Disponibles

**Endpoint:** `GET /benefits`

**Respuesta (200 OK):**
```json
{
  "status": "success",
  "data": {
    "userId": "u123456789",
    "totalBenefitsAvailable": 1250.75,
    "benefitsByPlayer": [
      {
        "playerId": "p123456789",
        "playerName": "Kylian Mbappé",
        "tokenSymbol": "MBAP",
        "tokenAmount": 500,
        "benefitsAvailable": 875.50,
        "benefitsSources": [
          {
            "type": "imageRights",
            "description": "Ingresos por derechos de imagen Q1 2025",
            "amount": 625.50,
            "date": "2025-03-15T00:00:00Z"
          },
          {
            "type": "performanceBonus",
            "description": "Bono por 5 goles en Champions League",
            "amount": 250.00,
            "date": "2025-03-10T00:00:00Z"
          }
        ]
      },
      {
        "playerId": "p987654321",
        "playerName": "Erling Haaland",
        "tokenSymbol": "HAAL",
        "tokenAmount": 300,
        "benefitsAvailable": 375.25,
        "benefitsSources": [
          {
            "type": "imageRights",
            "description": "Ingresos por derechos de imagen Q1 2025",
            "amount": 225.25,
            "date": "2025-03-15T00:00:00Z"
          },
          {
            "type": "performanceBonus",
            "description": "Bono por título de liga",
            "amount": 150.00,
            "date": "2025-03-05T00:00:00Z"
          }
        ]
      }
    ],
    "lastUpdated": "2025-03-22T18:35:00Z"
  }
}
```

## 7. Administración (Solo Sistema)

### 7.1 Estadísticas de Plataforma

**Endpoint:** `GET /admin/stats`

**Respuesta (200 OK):**
```json
{
  "status": "success",
  "data": {
    "userStats": {
      "totalUsers": 15000,
      "totalClubs": 25,
      "newUsersLast7Days": 1200,
      "activeUsersLast30Days": 8500
    },
    "financialStats": {
      "totalFundsRaised": 250000000,
      "totalTransactionVolume": 300000000,
      "averageInvestmentSize": 2500,
      "platformRevenue": 7500000
    },
    "playerStats": {
      "totalPlayersListed": 35,
      "activeFundraisings": 18,
      "completedFundraisings": 12,
      "cancelledFundraisings": 5
    },
    "tokenStats": {
      "totalTokensIssued": 25000000,
      "totalTokensSold": 18000000,
      "averageTokenPrice": 85.50,
      "averageTokenPriceChange": 4.2
    },
    "topPlayers": [
      {
        "playerId": "p123456789",
        "playerName": "Kylian Mbappé",
        "tokenSymbol": "MBAP",
        "fundingProgress": 66.7,
        "totalInvestors": 8500
      },
      {
        "playerId": "p987654321",
        "playerName": "Erling Haaland",
        "tokenSymbol": "HAAL",
        "fundingProgress": 60.0,
        "totalInvestors": 7200
      }
    ],
    "topClubs": [
      {
        "clubId": "c987654321",
        "clubName": "Real Madrid CF",
        "totalPlayersListed": 5,
        "totalFundsRaised": 85000000
      },
      {
        "clubId": "c123456789",
        "clubName": "FC Barcelona",
        "totalPlayersListed": 4,
        "totalFundsRaised": 70000000
      }
    ],
    "lastUpdated": "2025-03-22T18:40:00Z"
  }
}
```

## 8. Notificaciones

### 8.1 Listar Notificaciones

**Endpoint:** `GET /notifications`

**Parámetros de consulta:**
```
?page=1&limit=10&read=false
```

**Respuesta (200 OK):**
```json
{
  "status": "success",
  "data": {
    "notifications": [
      {
        "notificationId": "n123456789",
        "type": "fundingUpdate",
        "title": "¡Actualización de financiación!",
        "message": "La financiación de Kylian Mbappé ha alcanzado el 66.7%",
        "playerId": "p123456789",
        "playerName": "Kylian Mbappé",
        "read": false,
        "createdAt": "2025-03-22T18:00:00Z"
      },
      {
        "notificationId": "n234567890",
        "type": "benefitAvailable",
        "title": "¡Nuevos beneficios disponibles!",
        "message": "Tienes 875.50 EUR en beneficios disponibles para reclamar de Kylian Mbappé",
        "playerId": "p123456789",
        "playerName": "Kylian Mbappé",
        "read": false,
        "createdAt": "2025-03-22T15:30:00Z"
      },
      {
        "notificationId": "n345678901",
        "type": "tokenPriceChange",
        "title": "¡Cambio en el precio del token!",
        "message": "El precio del token MBAP ha aumentado un 5.2%",
        "playerId": "p123456789",
        "playerName": "Kylian Mbappé",
        "read": false,
        "createdAt": "2025-03-22T12:45:00Z"
      }
    ],
    "pagination": {
      "totalItems": 12,
      "totalPages": 2,
      "currentPage": 1,
      "itemsPerPage": 10
    },
    "unreadCount": 8
  }
}
```

## 9. Búsqueda y Filtrado

### 9.1 Búsqueda de Jugadores

**Endpoint:** `GET /search/players`

**Parámetros de consulta:**
```
?query=delantero&position=forward&nationality=francia&minAge=20&maxAge=30&minFundingProgress=50&maxFundingProgress=80&status=active&page=1&limit=10
```

**Respuesta (200 OK):**
```json
{
  "status": "success",
  "data": {
    "players": [
      {
        "playerId": "p123456789",
        "name": "Kylian Mbappé",
        "position": "Delantero",
        "age": 26,
        "nationality": "Francia",
        "currentClub": "Paris Saint-Germain",
        "targetClub": {
          "clubId": "c987654321",
          "name": "Real Madrid CF",
          "logo": "https://api.fantoken.io/images/clubs/realmadrid.png"
        },
        "contractValue": 180000000,
        "tokenPrice": 100,
        "fundingProgress": 66.7,
        "fundingDeadline": "2025-06-30T23:59:59Z",
        "status": "active",
        "image": "https://api.fantoken.io/images/players/mbappe.png"
      }
    ],
    "pagination": {
      "totalItems": 1,
      "totalPages": 1,
      "currentPage": 1,
      "itemsPerPage": 10
    }
  }
}
```

### 9.2 Filtrado Avanzado

**Endpoint:** `POST /search/advanced`

**Solicitud:**
```json
{
  "filters": {
    "positions": ["forward", "midfielder"],
    "nationalities": ["francia", "noruega", "inglaterra"],
    "ageRange": {
      "min": 20,
      "max": 30
    },
    "fundingProgressRange": {
      "min": 50,
      "max": 100
    },
    "tokenPriceRange": {
      "min": 50,
      "max": 150
    },
    "contractValueRange": {
      "min": 50000000,
      "max": 200000000
    },
    "targetClubs": ["c987654321", "c123456789"],
    "status": ["active", "pending"]
  },
  "sort": {
    "field": "fundingProgress",
    "order": "desc"
  },
  "pagination": {
    "page": 1,
    "limit": 10
  }
}
```

**Respuesta (200 OK):**
```json
{
  "status": "success",
  "data": {
    "players": [
      {
        "playerId": "p123456789",
        "name": "Kylian Mbappé",
        "position": "Delantero",
        "age": 26,
        "nationality": "Francia",
        "currentClub": "Paris Saint-Germain",
        "targetClub": {
          "clubId": "c987654321",
          "name": "Real Madrid CF",
          "logo": "https://api.fantoken.io/images/clubs/realmadrid.png"
        },
        "contractValue": 180000000,
        "tokenPrice": 100,
        "fundingProgress": 66.7,
        "fundingDeadline": "2025-06-30T23:59:59Z",
        "status": "active",
        "image": "https://api.fantoken.io/images/players/mbappe.png"
      },
      {
        "playerId": "p987654321",
        "name": "Erling Haaland",
        "position": "Delantero",
        "age": 24,
        "nationality": "Noruega",
        "currentClub": "Manchester City",
        "targetClub": {
          "clubId": "c123456789",
          "name": "FC Barcelona",
          "logo": "https://api.fantoken.io/images/clubs/barcelona.png"
        },
        "contractValue": 150000000,
        "tokenPrice": 80,
        "fundingProgress": 60.0,
        "fundingDeadline": "2025-07-15T23:59:59Z",
        "status": "active",
        "image": "https://api.fantoken.io/images/players/haaland.png"
      }
    ],
    "pagination": {
      "totalItems": 2,
      "totalPages": 1,
      "currentPage": 1,
      "itemsPerPage": 10
    }
  }
}
```
