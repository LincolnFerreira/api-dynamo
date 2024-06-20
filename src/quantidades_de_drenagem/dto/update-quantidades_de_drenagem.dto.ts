import { PartialType } from '@nestjs/mapped-types';
import { CreateQuantidadesDeDrenagemDto } from './create-quantidades_de_drenagem.dto';

export class UpdateQuantidadesDeDrenagemDto extends PartialType(CreateQuantidadesDeDrenagemDto) {}
