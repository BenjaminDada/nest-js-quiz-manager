import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigrations1718724331413 implements MigrationInterface {
    name = 'NewMigrations1718724331413'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`options\` (\`id\` int NOT NULL AUTO_INCREMENT COMMENT 'The quiz unique identifier', \`text\` varchar(255) NOT NULL, \`isCorrect\` tinyint NOT NULL DEFAULT '1', \`createdAt\` datetime NOT NULL, \`updatedAt\` datetime NOT NULL, \`questionsId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`questions\` (\`id\` int NOT NULL AUTO_INCREMENT, \`question\` varchar(255) NOT NULL, \`createdAt\` datetime NOT NULL, \`quizId\` int NULL COMMENT 'The quiz unique identifier', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`quizes\` (\`id\` int NOT NULL AUTO_INCREMENT COMMENT 'The quiz unique identifier', \`title\` varchar(255) NOT NULL, \`description\` text NOT NULL, \`isActive\` tinyint NOT NULL DEFAULT '1', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`options\` ADD CONSTRAINT \`FK_c56c77ccf310a9ff4e40e9facb2\` FOREIGN KEY (\`questionsId\`) REFERENCES \`questions\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`questions\` ADD CONSTRAINT \`FK_35d54f06d12ea78d4842aed6b6d\` FOREIGN KEY (\`quizId\`) REFERENCES \`quizes\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`questions\` DROP FOREIGN KEY \`FK_35d54f06d12ea78d4842aed6b6d\``);
        await queryRunner.query(`ALTER TABLE \`options\` DROP FOREIGN KEY \`FK_c56c77ccf310a9ff4e40e9facb2\``);
        await queryRunner.query(`DROP TABLE \`quizes\``);
        await queryRunner.query(`DROP TABLE \`questions\``);
        await queryRunner.query(`DROP TABLE \`options\``);
        await queryRunner.query(`DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
    }

}
