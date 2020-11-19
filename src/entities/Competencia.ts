import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SumillaCompetencia } from './SumillaCompetencia';
import { UnidadAcademica } from './UnidadAcademica';

@Entity('Competencia', { schema: 'sumilla_db' })
export class Competencia {
  @PrimaryGeneratedColumn({ type: 'int', name: 'com_ide' })
  comIde: number;

  @Column('varchar', { name: 'com_nom', nullable: true, length: 100 })
  comNom: string | null;

  @Column('varchar', { name: 'com_des', nullable: true, length: 500 })
  comDes: string | null;

  @OneToMany(() => SumillaCompetencia, sumillaCompetencia => sumillaCompetencia.comIde2)
  sumillaCompetencias: SumillaCompetencia[];

  @OneToMany(() => UnidadAcademica, unidadAcademica => unidadAcademica.comIde2)
  unidadAcademicas: UnidadAcademica[];
}
