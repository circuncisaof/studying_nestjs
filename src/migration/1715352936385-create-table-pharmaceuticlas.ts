import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTablePharmaceuticlas1715352936385
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        CREATE TABLE Pharmaceuticals(
            id: character NOT NULL,
            Pharmaceuticals character NOT NULL,
        )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
    drop table Pharmaceuticals;
    `);
  }
}
