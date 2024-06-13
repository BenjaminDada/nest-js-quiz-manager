import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { Validator } from "class-validator";
import { OptionService } from "../services/option.service";
import { Option } from "../entities/option.entity";
import { CreateOptionDto } from "../dto/create-option.dto";
import { QuestionService } from "../services/question.service";

@Controller('question/option')
export class OptionController{
    constructor(private optionService: OptionService, private questionService: QuestionService){}

    @Post('/create')
    @UsePipes(ValidationPipe)

    async getQuestionOption(@Body() createOption: CreateOptionDto){
        const question = await this.questionService.getQuestionById(createOption.questionId)
       const option = await this.optionService.creationQuestionOption(createOption,question);
        return {question,createOption,option};
    }
}
