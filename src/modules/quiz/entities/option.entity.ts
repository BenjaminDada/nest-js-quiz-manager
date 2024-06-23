import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Question } from "./question.entity";

@Entity('options')
export class Option extends BaseEntity{

    @PrimaryGeneratedColumn({comment: 'The quiz unique identifier'})
    id: number;

    @Column({ type: 'varchar' })
    text: string;

    @Column({type: 'boolean',default: 1})
    isCorrect: boolean;

    @Column()
    createdAt: Date;
    
    @Column()
    updatedAt: Date;

    @ManyToOne(() => Question, (question) => question.option)
    questions: Question
}