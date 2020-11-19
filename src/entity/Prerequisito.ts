import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm';
import { Curso } from './Curso';

@Entity()
export class Prerequisito {
  @PrimaryGeneratedColumn()
  sum_res_ide: number;

  @Column()
  sum_res_nivel: number;

  @ManyToOne(() => Curso, curso => curso.prerequisito)
  curso: Curso;

  // @ManyToOne(() => Curso, curso => curso.prerequisito)
  // curso_pre: Curso;
}
