import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm';
import { UnidadAcademica } from './UnidadAcademica';
import { SumillaCompetencia } from './SumillaCompetencia';

@Entity()
export class Competencia {
  @PrimaryGeneratedColumn()
  com_ide: number;

  @Column({ type: 'varchar', length: 100 })
  com_nom: string;

  @Column({ type: 'varchar', length: 500 })
  com_des: string;

  @OneToMany(() => UnidadAcademica, unidadAcademica => unidadAcademica.competencia)
  unidadacademica: UnidadAcademica[];

  @OneToMany(
    () => SumillaCompetencia,
    sumillaCompetencia => sumillaCompetencia.competencia
  )
  sumillaCompetencia: SumillaCompetencia[];
}
