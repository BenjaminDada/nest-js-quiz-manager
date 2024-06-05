import { Controller,Get } from '@nestjs/common';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
    constructor(private readonly QuizService: QuizService) {}
    @Get('/')
    getAllQuiz(){
        return this.QuizService.getAllQuiz();
    }
}
