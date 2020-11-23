import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Bibliografia } from './Bibliografia';
import { UnidadAcademica } from './UnidadAcademica';

@Index('bib_ide', ['bibIde'], {})
@Index('uni_aca_ide', ['uniAcaIde'], {})
@Entity('Bibliografia_unidad')
export class BibliografiaUnidad extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'bib_uni_ide' })
  bibUniIde: number;

  @Column('int', { name: 'bib_ide', nullable: true })
  bibIde: number | null;

  @Column('int', { name: 'uni_aca_ide', nullable: true })
  uniAcaIde: number | null;

  @ManyToOne(() => Bibliografia, bibliografia => bibliografia.bibliografiaUnidads, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'bib_ide', referencedColumnName: 'bibIde' }])
  bibIde2: Bibliografia;

  @ManyToOne(
    () => UnidadAcademica,
    unidadAcademica => unidadAcademica.bibliografiaUnidads,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' }
  )
  @JoinColumn([{ name: 'uni_aca_ide', referencedColumnName: 'uniAcaIde' }])
  uniAcaIde2: UnidadAcademica;
}
