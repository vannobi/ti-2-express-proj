import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AutorBibliografia } from './AutorBibliografia';
import { BibliografiaUnidad } from './BibliografiaUnidad';

@Entity('Bibliografia')
export class Bibliografia extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'bib_ide' })
  bibIde: number;

  @Column('varchar', { name: 'bib_nom', nullable: true, length: 100 })
  bibNom: string | null;

  @Column('varchar', { name: 'bib_edici', nullable: true, length: 100 })
  bibEdici: string | null;

  @Column('varchar', { name: 'bib_edito', nullable: true, length: 100 })
  bibEdito: string | null;

  @Column('int', { name: 'bib_anio', nullable: true })
  bibAnio: number | null;

  @OneToMany(() => AutorBibliografia, autorBibliografia => autorBibliografia.bibIde2)
  autorBibliografias: AutorBibliografia[];

  @OneToMany(() => BibliografiaUnidad, bibliografiaUnidad => bibliografiaUnidad.bibIde2)
  bibliografiaUnidads: BibliografiaUnidad[];
}
