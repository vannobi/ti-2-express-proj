import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm';
import { Bibliografia } from './Bibliografia';
import { UnidadAcademica } from './UnidadAcademica';

@Entity()
export class BibliografiaUnidadAc {
  @PrimaryGeneratedColumn()
  bib_uni_ide: number;

  @ManyToOne(() => Bibliografia, bibliografia => bibliografia.bibliografiaUnidadAc)
  bibliografia: Bibliografia;

  @ManyToOne(
    () => UnidadAcademica,
    unidadAcademica => unidadAcademica.bibliografiaUnidadAc
  )
  unidadAcademica: UnidadAcademica;
}
