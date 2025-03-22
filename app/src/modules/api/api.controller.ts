import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiService } from './api.service';
import { CreateApiDto } from './dto/create-api.dto';
import { UpdateApiDto } from './dto/update-api.dto';
import { lastValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';

@Controller('api')
export class ApiController {
  private readonly webhookUrl =
    'http://n8n:5678/webhook-test/02a7af67-e473-46a4-a294-ebb0c534546c';
  // 'http://n8n:5678/webhook/02a7af67-e473-46a4-a294-ebb0c534546c';
  constructor(
    private readonly apiService: ApiService,
    private readonly httpService: HttpService,
  ) {}

  @Post()
  async create(@Body() createApiDto: CreateApiDto) {
    try {
      // Llamada al webhook externo con tipado explícito
      const response: AxiosResponse = await lastValueFrom(
        this.httpService.post(this.webhookUrl, createApiDto),
      );
      console.log(response.data);
      // Devolver la respuesta del webhook junto con información adicional
      return {
        success: true,
        message: 'Datos reenviados al webhook con éxito',
        webhookResponse: response.data,
        statusCode: response.status,
      };
    } catch (error) {
      // Manejar errores en la llamada al webhook
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

  @Get()
  findAll() {
    return this.apiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.apiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApiDto: UpdateApiDto) {
    return this.apiService.update(+id, updateApiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apiService.remove(+id);
  }
}