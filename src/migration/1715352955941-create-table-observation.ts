import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableObservation1715352955941 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        CREATE TABLE Observation(
            id character NOT NULL,
            observatio character varying NOT NULL,
           
            primary key (id)
        );`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
    drop table Observation;
    `);
  }
}
