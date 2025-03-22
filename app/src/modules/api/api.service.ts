import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { CreateApiDto } from './dto/create-api.dto';
import { UpdateApiDto } from './dto/update-api.dto';
import { lastValueFrom } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class ApiService {
  private readonly webhookUrl =
    'http://localhost:5678/webhook-test/02a7af67-e473-46a4-a294-ebb0c534546c';

  constructor(private readonly httpService: HttpService) {}

  async sendToWebhook(data: any) {
    try {
      const response: AxiosResponse = await lastValueFrom(
        this.httpService.post<any>(this.webhookUrl, data),
      );
      return {
        success: true,
        message: 'Datos reenviados al webhook con éxito',
        webhookResponse: response.data,
        statusCode: response.status,
      };
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Error desconocido';
      console.error('Error al reenviar datos al webhook:', errorMessage);
      return {
        success: false,
        message: 'Error al reenviar datos al webhook',
        error: errorMessage,
      };
    }
  }

  create(createApiDto: CreateApiDto) {
    // Lógica para crear un registro
    return this.sendToWebhook(createApiDto);
  }

  findAll() {
    return `This action returns all api`;
  }

  findOne(id: number) {
    return `This action returns a #${id} api`;
  }

  update(id: number, updateApiDto: UpdateApiDto) {
    return `This action updates a #${id} api`;
  }

  remove(id: number) {
    return `This action removes a #${id} api`;
  }
}