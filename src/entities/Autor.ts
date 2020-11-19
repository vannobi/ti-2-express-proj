import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AutorBibliografia } from './AutorBibliografia';

@Entity('Autor', { schema: 'sumilla_db' })
export class Autor {
  @PrimaryGeneratedColumn({ type: 'int', name: 'aut_ide' })
  autIde: number;

  @Column('varchar', { name: 'aut_nom', nullable: true, length: 50 })
  autNom: string | null;

  @Column('varchar', { name: 'aut_ape', nullable: true, length: 50 })
  autApe: string | null;

  @OneToMany(() => AutorBibliografia, autorBibliografia => autorBibliografia.autIde2)
  autorBibliografias: AutorBibliografia[];
}
