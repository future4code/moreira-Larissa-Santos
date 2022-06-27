import knex from 'knex';
import { Knex } from 'knex';
import * as dotenv from 'dotenv';

dotenv.config();

export abstract class BaseDatabase {
    protected static connection: Knex | null

    protected connectionData(): Knex {
        if(!BaseDatabase.connection) {
            BaseDatabase.connection = knex({
            	client: "mysql",
	            connection: {
                host: process.env.DB_HOST,
                port: 3306,
                user: process.env.DB_USER,
                password: process.env.DB_PASS,
                database: process.env.DB_NAME,
                multipleStatements: true
                }
            })
        }
        return BaseDatabase.connection
    }
}