import { IsNotEmpty, Length, isNotEmpty } from "class-validator";

export class CreateQuizDto{
    
    @IsNotEmpty({message: 'quiz should not be empty'})
    @Length(3,255)
    title: string;

    @IsNotEmpty()
    @Length(3)
    description: string;
}