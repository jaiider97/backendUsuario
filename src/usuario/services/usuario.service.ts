import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Usuario} from '../entities/user.entity';;

@Injectable()
export class UsuarioService {

constructor(@InjectRepository(Usuario) private UsuRepo: Repository<Usuario>) { }


    findAll() {

        return this.UsuRepo.find();
    }

    findOne(id: number) {
        return this.UsuRepo.findOne(id);
    }

    create(body: any) {
        const Usu = new Usuario();
        Usu.nombre = body.nombre;
        Usu.apellido = body.apellido;
        Usu.edad = body.edad;
        Usu.genero = body.genero;
        Usu.telefono= body.telefono;
        Usu.ciudad = body.ciudad;
        Usu.usuario= body.usuario;
        Usu.correo= body.correo;
        Usu.contraseña = body.contraseña;

        return this.UsuRepo.save(Usu);


    }

  async  update(id:number,Body:any){

        const usu = await this.UsuRepo.findOne(id);
       this.UsuRepo.merge(usu,Body);

       return this.UsuRepo.save(usu);


    }
    async removed(id:number){

        await this.UsuRepo.delete(id);
        return true;
    }
}
