
export interface IJwtToken{

    id:number;
    usuario:string;
    email:string;
    nombre:string;
    apellido:string;

    iat?:Date;//fecha de expiracion del token

}