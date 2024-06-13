import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { OptionRepository } from "../repositories/option.repository";
import { Option } from "../entities/option.entity";
import { CreateOptionDto } from "../dto/create-option.dto";
import { CreateQuestionDto } from "../dto/create-question.dto";
import { Question } from "../entities/question.entity";

@Injectable()
export class OptionService{
    constructor(@InjectRepository(Option) private optionRepository: OptionRepository){}

    async creationQuestionOption(option: CreateOptionDto, question: Question):Promise<Option>{
        const newOption = await this.optionRepository.save({text: option.text,isCorrect: option.isCorrect});
        
        question.option = [...question.option,newOption]
        question.save()
        return newOption;
    }
}