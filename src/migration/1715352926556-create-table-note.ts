import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableNote1715352926556 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        CREATE TABLE Note(
            id character NOT NULL,
            note character NOT NULL,
            primary key (id)
        );
    
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
    drop table Note`);
  }
}
