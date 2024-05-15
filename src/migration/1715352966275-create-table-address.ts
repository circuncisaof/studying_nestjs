import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableAddress1715352966275 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        CREATE TABLE public.address(
            id character NOT NULL,
            address character varying NOT NULL,
            n_address  character varying NOT NULL unique,
            complement  character varying NOT NULL,
            city  character varying NOT NULL,
            state character NOT NULL,
            cep  character varying NOT NULL,
            primary key (id)
        );`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
    drop table  public.address;
    `);
  }
}
