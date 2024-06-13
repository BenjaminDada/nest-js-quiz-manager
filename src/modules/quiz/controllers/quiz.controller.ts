import { Body, Controller,Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { QuizService } from '../services/quiz.service';
import { CreateQuizDto } from '../dto/createQuizDto';
import { Quiz } from '../entities/quiz.entity';

@Controller('quiz')
export class QuizController {
    constructor(private readonly quizService: QuizService) {}
    @Get('/')
    async getAllQuiz(): Promise<Quiz[]>{
        return await this.quizService.getAllQuiz();
    }

    @Post('/create')
    @HttpCode(200)
    @UsePipes(ValidationPipe)

    async createQuiz(@Body() quizData: CreateQuizDto){
        return await this.quizService.createNewQuiz(quizData);
    }

    @Get('/:id')
    async getQuizById(@Param('id',ParseIntPipe) id: number): Promise<Quiz>{
        return await this.quizService.getQuizById(id);
    }
}
