import {MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsersTable1637884886110 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table ({
            name: 'users',
            columns: [
              {
                name: 'id',  
                type: 'varchar',
                isPrimary: true,
                default: null
              },
              {
                name: 'email',
                type: 'varchar',
                isUnique: true, 
                default: null
              },
              {
                name: 'password',
                type: 'varchar',
                default: null
              }    
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }
}
