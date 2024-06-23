import { DataSource, DataSourceOptions } from "typeorm";
import * as dotenv from 'dotenv';

dotenv.config();

// if (process.env.NODE_ENV !== 'production') {
//   require('dotenv').config();
// }

// console.log(process.env.DB_HOST)
// console.log(process.env.DB_HOST)
// console.log(process.env.DB_HOST)

export const dataSourceOptions: DataSourceOptions = {

    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT,10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
    ],
    migrations: ['dist/db/migrations/*.js'],
    logging: true,
}

const dataSourse = new DataSource(dataSourceOptions);
export default dataSourse;