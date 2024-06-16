import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    const hashedPassword = await bcrypt.hash(registerDto.password, 10);
    const user = await this.prisma.user.create({
      data: {
        email: registerDto.email,
        password: hashedPassword,
        name: registerDto.name,
      },
    });
    return this.generateToken(user);
  }

  async login(loginDto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: loginDto.email },
    });
    if (!user || !(await bcrypt.compare(loginDto.password, user.password))) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
    if (
      user.secretParam == null &&
      this.isValidMACAddress(loginDto.secretParam)
    ) {
      await this.prisma.user.update({
        where: { id: user.id },
        data: { secretParam: loginDto.secretParam },
      });

      return this.generateToken(user);
    } else if (
      user.secretParam == loginDto.secretParam &&
      this.isValidMACAddress(loginDto.secretParam)
    ) {
      console.log(loginDto.secretParam);

      return this.generateToken(user);
    }
    throw new HttpException('Unauthorized', HttpStatus.FORBIDDEN);
  }

  private generateToken(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  isValidMACAddress(mac: string): boolean {
    // Expressões regulares para diferentes formatos de MAC address
    const macFormat1 = /^([0-9A-Fa-f]{2}:){5}[0-9A-Fa-f]{2}$/;
    const macFormat2 = /^([0-9A-Fa-f]{2}-){5}[0-9A-Fa-f]{2}$/;
    const macFormat3 = /^[0-9A-Fa-f]{12}$/;
    // Verifica se o MAC address corresponde a algum dos formatos válidos
    return macFormat1.test(mac) || macFormat2.test(mac) || macFormat3.test(mac);
  }
}
