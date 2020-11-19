import { PrimaryGeneratedColumn, Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Sumilla } from './Sumilla';
import { Competencia } from './Competencia';
import { BibliografiaUnidadAc } from './BibliografiaUnidadAc';
import { Topico } from './Topico';

@Entity()
export class UnidadAcademica {
  @PrimaryGeneratedColumn()
  uni_aca_ide: number;

  @Column({ type: 'varchar', length: 50 })
  uni_aca_nom: string;

  @ManyToOne(() => Sumilla, sumilla => sumilla.unidadAcademica)
  sumilla: Sumilla;

  @ManyToOne(() => Competencia, competencia => competencia.unidadacademica)
  competencia: Competencia;

  @OneToMany(
    () => BibliografiaUnidadAc,
    bibliografiaUnidadAc => bibliografiaUnidadAc.unidadAcademica
  )
  bibliografiaUnidadAc: BibliografiaUnidadAc[];

  @OneToMany(() => Topico, topico => topico.unidadAcademica)
  topico: Topico[];
}
