import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Curso } from './Curso';
import { UnidadAcademica } from './UnidadAcademica';
import { SumillaCompetencia } from './SumillaCompetencia';
import { SumillaResultado } from './SumillaResultado';

@Entity()
export class Sumilla {
  @PrimaryGeneratedColumn()
  sum_id: number;

  @OneToOne(() => Curso)
  @JoinColumn()
  sum_curso: Curso;

  @Column({ type: 'varchar', length: 500 })
  sum_fund: string;

  @OneToMany(() => UnidadAcademica, unidadAcademica => unidadAcademica.sumilla)
  unidadAcademica: UnidadAcademica[];

  @OneToMany(() => SumillaCompetencia, sumillaCompetencia => sumillaCompetencia.sumilla)
  sumillaCompetencia: SumillaCompetencia[];

  @OneToMany(
    () => SumillaResultado,
    sumillaResultado => sumillaResultado.resultadosEstudiante
  )
  sumillaResultado: SumillaResultado[];
}
