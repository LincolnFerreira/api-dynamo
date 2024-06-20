import { Test, TestingModule } from '@nestjs/testing';
import { QuantidadesDeDrenagemController } from './quantidades_de_drenagem.controller';
import { QuantidadesDeDrenagemService } from './quantidades_de_drenagem.service';

describe('QuantidadesDeDrenagemController', () => {
  let controller: QuantidadesDeDrenagemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuantidadesDeDrenagemController],
      providers: [QuantidadesDeDrenagemService],
    }).compile();

    controller = module.get<QuantidadesDeDrenagemController>(QuantidadesDeDrenagemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
