import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm';
import { AutorBibliografia } from './AutorBibliografia';
import { BibliografiaUnidadAc } from './BibliografiaUnidadAc';

@Entity()
export class Bibliografia {
  @PrimaryGeneratedColumn()
  bib_ide: number;

  @Column({ type: 'varchar', length: 100 })
  bib_nom: string;

  @Column({ type: 'varchar', length: 100 })
  bib_edito: string;

  @Column({ type: 'varchar', length: 100 })
  bib_edici: string;

  @Column()
  bib_anio: number;

  @OneToMany(() => AutorBibliografia, autorBibliografia => autorBibliografia.bibliografia)
  autorBibliografia: AutorBibliografia[];

  @OneToMany(
    () => BibliografiaUnidadAc,
    bibliografiaUnidadAc => bibliografiaUnidadAc.bibliografia
  )
  bibliografiaUnidadAc: BibliografiaUnidadAc[];
}
