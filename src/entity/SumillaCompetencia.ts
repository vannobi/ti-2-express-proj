import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm';
import { Competencia } from './Competencia';
import { Sumilla } from './Sumilla';

@Entity()
export class SumillaCompetencia {
  @PrimaryGeneratedColumn()
  sum_com_ide: number;

  @OneToMany(() => Competencia, competencia => competencia.sumillaCompetencia)
  competencia: Competencia;

  @OneToMany(() => Sumilla, sumilla => sumilla.sumillaCompetencia)
  sumilla: Sumilla;
}
