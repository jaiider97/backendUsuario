import {Usuario} from "../../usuario/entities/user.entity"
import { EntityRepository, Repository } from "typeorm"
import SignupDto from "./dtos/sigupDto";
import {genSalt, hash} from 'bcryptjs';



@EntityRepository(Usuario)
export class AuthRepository extends Repository<Usuario> {


    async signup (signupDto:SignupDto){

      const {usuario,contraseña,correo,nombre,apellido,edad,telefono,genero,ciudad,completed} =signupDto;
     const user=new Usuario;

     user.nombre=nombre;
     user.apellido=apellido;
     user.edad=edad;
     user.telefono=telefono;
     user.genero=genero;
     user.ciudad=ciudad;
     user.usuario=usuario;
     user.correo=correo;
     user.completed=completed;
    
     const salt = await genSalt(10);
     user.contraseña= await hash(contraseña,salt);

    await user.save();

    }
    
  
    

}


