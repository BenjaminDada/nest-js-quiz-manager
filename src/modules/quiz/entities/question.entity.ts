import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Quiz } from "./quiz.entity";
import {Option} from "./option.entity"

@Entity('questions')
export class Question extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
    })
    question: string;

    @Column()
    createdAt: Date;

    @ManyToOne(() => Quiz, (quiz) => quiz.questions)
    quiz: Quiz;
    
    @OneToMany(() => Option, (option) => option.questions)
    option: Option[];
}