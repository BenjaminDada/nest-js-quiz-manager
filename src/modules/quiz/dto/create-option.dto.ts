import { IsNotEmpty, Length } from "class-validator";

export class CreateOptionDto{

    @IsNotEmpty()
    text: string;

    @IsNotEmpty()
    isCorrect: boolean
    
    @IsNotEmpty()
    questionId: number;
}