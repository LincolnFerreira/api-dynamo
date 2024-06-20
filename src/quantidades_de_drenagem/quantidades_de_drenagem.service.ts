import { Injectable } from '@nestjs/common';

@Injectable()
export class QuantidadesDeDrenagemService {
  calculateValue(data: any) {
    if (!Array.isArray(data)) {
      data = [Number(data)];
    }

    const kmcheio: string[] = [];
    const kmquebrado: string[] = [];
    const Soma: string[] = [];

    const IN: any[] = [];

    let km: number[];

    if (Array.isArray(IN[0])) {
      km = IN[0] as number[];
    } else {
      km = [IN[0] as number];
    }

    for (const x of km) {
      try {
        kmcheio.push(Math.floor(x / 1000).toFixed(0));
        kmquebrado.push((x % 1000).toFixed(2).replace('.', ','));
        Soma.push('+');
      } catch (error) {
        kmcheio.push('');
        kmquebrado.push('');
        Soma.push('');
      }
    }

    const OUT: string[][] = [kmcheio, Soma, kmquebrado];

    return OUT;
  }
}
