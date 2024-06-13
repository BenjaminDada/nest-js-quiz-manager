import { Injectable } from "@nestjs/common";
import { QuestionRepository } from "../repositories/question.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateQuestionDto } from "../dto/create-question.dto";
import { Question } from "../entities/question.entity";
import { Quiz } from "../entities/quiz.entity";

@Injectable()
export class QuestionService {
    constructor(@InjectRepository(Question) private questionRepository: QuestionRepository){}

    async createQuestion(question: CreateQuestionDto,quiz: Quiz): Promise<Question> {
        const newQuestion = await this.questionRepository.save({question: question.question});
        quiz.questions = [...quiz.questions, newQuestion]

        await quiz.save();

        return newQuestion;
    }
    async getQuestionById(id: number){
        return await this.questionRepository.findOne({where: {id},relations: ['quiz','option']})
    }
}