import { IsNotEmpty, Length, isNotEmpty } from "class-validator";

export class CreateQuestionDto{

    @IsNotEmpty()
    @Length(3,255)
    question: string;

    @IsNotEmpty()
    quizId: number;
}