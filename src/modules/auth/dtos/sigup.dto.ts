import {IsString,IsNotEmpty} from 'class-validator'


export class sigupDto{
    
    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsString()
    email: string;

}