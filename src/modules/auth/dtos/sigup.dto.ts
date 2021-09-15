import {IsString,IsNotEmpty} from 'class-validator'


export class signupDto{
    
    @IsNotEmpty()
    @IsString()
    usuario: string;

    @IsNotEmpty()
    @IsString()
    contraseña: string;

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsNotEmpty()
    @IsString()
    apellido: string;

    
    @IsNotEmpty()
    @IsString()
    edad: number;

    @IsNotEmpty()
    @IsString()
    genero: string;

    @IsNotEmpty()
    @IsString()
    telefono: string;

    @IsNotEmpty()
    @IsString()
    ciudad: string;


    @IsNotEmpty()
    @IsString()
    correo: string;

 
  completed: boolean;

}