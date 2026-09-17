import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPresentacion1789600000000 implements MigrationInterface {
    name = 'AddPresentacion1789600000000'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`presentacion\` (\`id\` int NOT NULL AUTO_INCREMENT, \`denominacion\` varchar(255) NOT NULL, \`observacion\` text NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`usuarioCreatedId\` int NULL, \`usuarioDeletedId\` int NULL, \`usuarioUpdatedId\` int NULL, \`sistema\` int NOT NULL DEFAULT '0', UNIQUE INDEX \`IDX_presentacion_denominacion_deletedAt\` (\`denominacion\`, \`deletedAt\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`producto\` ADD \`presentacion_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`producto\` ADD \`presentacionId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`producto\` ADD INDEX \`IDX_producto_presentacion_id\` (\`presentacion_id\`)`);
        await queryRunner.query(`ALTER TABLE \`producto\` ADD CONSTRAINT \`FK_producto_presentacion_id\` FOREIGN KEY (\`presentacion_id\`) REFERENCES \`presentacion\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`producto\` DROP FOREIGN KEY \`FK_producto_presentacion_id\``);
        await queryRunner.query(`ALTER TABLE \`producto\` DROP INDEX \`IDX_producto_presentacion_id\``);
        await queryRunner.query(`ALTER TABLE \`producto\` DROP COLUMN \`presentacion_id\``);
        await queryRunner.query(`ALTER TABLE \`producto\` DROP COLUMN \`presentacionId\``);
        await queryRunner.query(`DROP INDEX \`IDX_presentacion_denominacion_deletedAt\` ON \`presentacion\``);
        await queryRunner.query(`DROP TABLE \`presentacion\``);
    }

}
