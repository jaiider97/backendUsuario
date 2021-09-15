import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioService } from './services/usuario.service';
import { UsuariosController } from './controllers/usuarios.controller';
import { Usuario } from './entities/user.entity';


@Module({
  imports:[
    TypeOrmModule.forFeature([Usuario])
  ],
  providers: [UsuarioService],
  controllers: [UsuariosController]
})
export class UsuarioModule {}
