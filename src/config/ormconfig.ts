
export const dataSourceOptions = {

    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT,10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
    ],
    migrations: [__dirname + '/../migrations/*{.ts,.js}'],
    migrationsTableName: "quiz_migration_table",
    logging: true,
}