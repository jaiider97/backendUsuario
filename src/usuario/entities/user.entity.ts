import { Entity, PrimaryGeneratedColumn, Column,BaseEntity} from "typeorm";



@Entity()
export class Usuario extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  edad: number;

  @Column()
  genero: string;

  @Column()
  telefono: string;

  @Column()
  ciudad: string;

  @Column()
  usuario: string;

  @Column()
  correo: string;

  @Column()
  contraseña: string;

  @Column({ default: false })
  completed: boolean;
}