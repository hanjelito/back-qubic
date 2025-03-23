import { ApiProperty } from '@nestjs/swagger';

export class CreateTokenDto {
  @ApiProperty({
    description: 'ID único de la transacción',
    example: 'tx-123456',
  })
  transactionId: string;

  @ApiProperty({ description: 'ID del jugador', example: 'player-007' })
  playerId: string;

  @ApiProperty({ description: 'Nombre del jugador', example: 'John Doe' })
  playerName: string;

  @ApiProperty({ description: 'Símbolo del token', example: 'BTC' })
  tokenSymbol: string;

  @ApiProperty({ description: 'Cantidad de tokens', example: 0.5 })
  tokenAmount: number;

  @ApiProperty({ description: 'Precio por token', example: 40000 })
  tokenPrice: number;

  @ApiProperty({ description: 'Costo total de la transacción', example: 20000 })
  totalCost: number;

  @ApiProperty({
    description: 'Método de pago utilizado',
    example: 'credit_card',
  })
  paymentMethod: string;

  @ApiProperty({
    description: 'Hash de la transacción blockchain',
    example: '0x1234...',
  })
  transactionHash: string;

  @ApiProperty({
    description: 'Fecha y hora de la transacción',
    example: '2025-03-23T09:45:00Z',
  })
  timestamp: Date;

  @ApiProperty({
    description: 'Estado de la transacción',
    example: 'completed',
    enum: ['pending', 'completed', 'failed'],
  })
  status: string;
}
