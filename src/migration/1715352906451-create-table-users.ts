import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableUsers1715352906451 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
    CREATE TABLE User(
        id character NOT NULL,
        name character varying NOT NULL,
        email  character varying NOT NULL unique,
        cpf  character varying NOT NULL,
        rg  character varying NOT NULL,
        birth_day character NOT NULL,
        phone  character varying NOT NULL,
        password  character varying NOT NULL,
        created_at timestamp without time zone DEFAULT now() NOT NULL,
        updated_at timestamp without time zone DEFAULT now() NOT NULL,
        primary key (id)
    );

        
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
    drop table User;
    `);
  }
}
