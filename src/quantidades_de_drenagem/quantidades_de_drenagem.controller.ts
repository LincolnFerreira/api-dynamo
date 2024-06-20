import { Controller, Get, Query } from '@nestjs/common';
import { QuantidadesDeDrenagemService } from './quantidades_de_drenagem.service';

@Controller('quantidades-de-drenagem')
export class QuantidadesDeDrenagemController {
  constructor(
    private readonly quantidadesDeDrenagemService: QuantidadesDeDrenagemService,
  ) {}

  @Get()
  findAll(@Query('data') data: any) {
    return this.quantidadesDeDrenagemService.calculateValue(data);
  }
}
