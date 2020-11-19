import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm';
import { ResultadosEstudiante } from './ResultadosEstudiante';
import { Sumilla } from './Sumilla';

@Entity()
export class SumillaResultado {
  @PrimaryGeneratedColumn()
  sum_res_ide: number;

  @Column()
  sum_res_nivel: number;

  @ManyToOne(() => Sumilla, sumilla => sumilla.sumillaResultado)
  sumilla: Sumilla;

  @ManyToOne(
    () => ResultadosEstudiante,
    resultadosEstudiante => resultadosEstudiante.sumillaResultado
  )
  resultadosEstudiante: ResultadosEstudiante;
}
