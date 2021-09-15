import {IsString,IsNotEmpty} from 'class-validator';


export class signinDto{
    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}