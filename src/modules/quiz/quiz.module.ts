import { Module } from '@nestjs/common';
import { QuizController } from './controllers/quiz.controller';
import { QuizService } from './services/quiz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizRepository } from './repositories/quiz.repository';
import { Quiz } from './entities/quiz.entity';
import { QuestionController } from './controllers/question.controller';
import { QuestionService } from './services/question.service';
import { Question } from './entities/question.entity';
import { QuestionRepository } from './repositories/question.repository';
import { OptionRepository } from './repositories/option.repository';
import { OptionService } from './services/option.service';
import { OptionController } from './controllers/option.controller';
import { Option } from './entities/option.entity';

@Module({
  controllers: [QuizController,QuestionController,OptionController],
  imports: [TypeOrmModule.forFeature([
    Quiz,QuizRepository,
    Question,QuestionRepository,
    Option, OptionRepository
  ])],
  providers: [QuizService,QuestionService,OptionService]
})
export class QuizModule {}
