import {MigrationInterface, QueryRunner} from "typeorm";

export class init1631045540159 implements MigrationInterface {
    name = 'init1631045540159'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "usuario" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "apellido" character varying NOT NULL, "edad" integer NOT NULL, "genero" character varying NOT NULL, "telefono" character varying NOT NULL, "ciudad" character varying NOT NULL, "usuario" character varying NOT NULL, "correo" character varying NOT NULL, "contraseña" character varying NOT NULL, "completed" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_a56c58e5cabaa04fb2c98d2d7e2" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "usuario"`);
    }

}
