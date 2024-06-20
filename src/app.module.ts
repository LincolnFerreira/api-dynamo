import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { AuthenticateModule } from './authenticate/authenticate.module';
import { QuantidadesDeDrenagemModule } from './quantidades_de_drenagem/quantidades_de_drenagem.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    AuthenticateModule,
    QuantidadesDeDrenagemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
