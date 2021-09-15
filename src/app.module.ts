import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
require('dotenv').config();


console.log("variable global",process.env.JWT_SECRET);
console.log("variable global",process.env.HOST);

@Module({
  imports: [
    
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'user',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize:false,
      retryAttempts: 10,
      retryDelay: 3000

    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    
  UsuarioModule,
  AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
