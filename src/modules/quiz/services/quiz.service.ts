import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { QuizRepository } from "../repositories/quiz.repository";
import { CreateQuizDto } from "../dto/createQuizDto";
import { Quiz } from "../entities/quiz.entity";

@Injectable()
export class QuizService{
    constructor(@InjectRepository(Quiz) private quizRepository: QuizRepository){}
    
    async getAllQuiz(): Promise<Quiz[]>{
        return await this.quizRepository.createQueryBuilder('q')
        .leftJoinAndSelect('q.questions', 'qt')
        .leftJoinAndSelect('qt.option', 'o')
        .getMany()
    }

    async getQuizById(id: number): Promise<Quiz>{
        return await this.quizRepository.findOne({where:{id},  relations: ['questions','questions.option'] })
    }
    
    async createNewQuiz(quiz: CreateQuizDto){
        return await this.quizRepository.save(quiz);
    }
}