import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Curso } from './Curso';

@Entity()
export class Sumilla {
  @PrimaryGeneratedColumn()
  sum_id: number;

  @OneToOne(() => Curso)
  @JoinColumn()
  sum_curso: Curso;

  @Column({ type: 'varchar', length: 500 })
  sum_fund: string;
}
