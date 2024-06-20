import { Module } from '@nestjs/common';
import { QuantidadesDeDrenagemService } from './quantidades_de_drenagem.service';
import { QuantidadesDeDrenagemController } from './quantidades_de_drenagem.controller';

@Module({
  controllers: [QuantidadesDeDrenagemController],
  providers: [QuantidadesDeDrenagemService],
})
export class QuantidadesDeDrenagemModule {}
