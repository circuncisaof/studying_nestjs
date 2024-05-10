import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableTreatment1715352918298 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        CREATE TABLE Treatment(
            id: character NOT NULL,
            type_treatment character NOT NULL,
            start_in character NOT NULL,
            concluded character NOT NULL,
        )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        drop table Treatment`);
  }
}
