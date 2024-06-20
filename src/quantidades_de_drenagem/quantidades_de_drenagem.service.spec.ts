import { Test, TestingModule } from '@nestjs/testing';
import { QuantidadesDeDrenagemService } from './quantidades_de_drenagem.service';

describe('QuantidadesDeDrenagemService', () => {
  let service: QuantidadesDeDrenagemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuantidadesDeDrenagemService],
    }).compile();

    service = module.get<QuantidadesDeDrenagemService>(QuantidadesDeDrenagemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
