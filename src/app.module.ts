import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './modules/quiz/quiz.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig, typeOrmConfig } from './config/typeorm.config';
import { UserModule } from './modules/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { dataSourceOptions } from '../db/data-source';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
     TypeOrmModule.forRoot(dataSourceOptions), 
     UserModule,
     QuizModule,
     AuthModule,
    //  ConfigModule.forRoot({
    //   isGlobal: true,
    //   envFilePath: '.env'
    // })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
