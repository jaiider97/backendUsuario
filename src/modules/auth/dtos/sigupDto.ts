import {IsString,IsNotEmpty} from 'class-validator'


class SignupDto{
    
    @IsNotEmpty()
    @IsString()
    usuario: string;

    @IsNotEmpty()
    @IsString()
    contraseña: string;

    @IsNotEmpty()
    @IsString()
    correo: string;

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




    completed: boolean;

}

export default SignupDto;



