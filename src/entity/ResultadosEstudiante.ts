import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm';
import { SumillaResultado } from './SumillaResultado';

@Entity()
export class ResultadosEstudiante {
  @PrimaryGeneratedColumn()
  rest_est_ide: number;

  @Column({ type: 'varchar', length: 10 })
  rest_est_cod: string;

  @Column({ type: 'varchar', length: 50 })
  rest_est_nom: string;

  @Column({ type: 'varchar', length: 300 })
  rest_est_des: string;

  @OneToMany(
    () => SumillaResultado,
    sumillaResultado => sumillaResultado.resultadosEstudiante
  )
  sumillaResultado: SumillaResultado[];
}
