import {Usuario} from "../../usuario/entities/user.entity"
import { EntityRepository, Repository } from "typeorm"

@EntityRepository(Usuario)
export class AuthRepository extends Repository<Usuario> {

}