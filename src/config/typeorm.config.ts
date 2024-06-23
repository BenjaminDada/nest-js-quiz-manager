import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
    useFactory: async (): Promise<TypeOrmModuleOptions> => {
        console.log(process.env.DB_HOST)
        console.log(process.env.DB_HOST)
        console.log(process.env.DB_HOST)
        
        return {
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
            extra:{Charset: 'utf8mb4_unicode_ci'},
            synchronize: false,
            logging: true,
        }
    }
}
export const typeOrmConfig: TypeOrmModuleOptions ={
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



// export default class TypeOrmConfig{
//     static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions{

//         console.log('DB_HOST:', configService.get<string>('DB_HOST'));
//         console.log('DB_PORT:', configService.get<number>('DB_PORT'));
//         console.log('DB_USERNAME:', configService.get<string>('DB_USERNAME'));
//         console.log('DB_PASSWORD:', configService.get<string>('DB_PASSWORD'));
//         console.log('DB_NAME:', configService.get<string>('DB_NAME'));

//         return {
//             type: 'mysql',
//             host: configService.get<string>('DB_HOST'),
//             port: configService.get<number>('DB_PORT'),
//             username: configService.get<string>('DB_USERNAME'),
//             password: configService.get<string>('DB_PASSWORD'),
//             database: configService.get<string>('DB_NAME'),
//             entities: [
//                 __dirname + '/../**/*.entity{.ts,.js}',
//             ],
//             migrations: [__dirname + '/../migrations/*{.ts,.js}'],
//             migrationsTableName: "quiz_migration_table",
//             extra:{Charset: 'utf8mb4_unicode_ci'},
//             synchronize: false,
//             logging: true,
//             migrationsRun : false
//         }

       
//     }
// }

// export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
//     imports: [ConfigModule.forRoot({
//         isGlobal: true, 
//         envFilePath: '.env', 
//     })],
//     useFactory: async (configService: ConfigService): Promise<TypeOrmModuleOptions> => TypeOrmConfig.getOrmConfig(configService),
//     inject: [ConfigService]
// }