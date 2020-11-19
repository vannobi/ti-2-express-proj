import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Autor } from './Autor';
import { Bibliografia } from './Bibliografia';

@Index('aut_ide', ['autIde'], {})
@Index('bib_ide', ['bibIde'], {})
@Entity('Autor_bibliografia', { schema: 'sumilla_db' })
export class AutorBibliografia {
  @Column('int', { primary: true, name: 'aut_bib_ide' })
  autBibIde: number;

  @Column('int', { name: 'aut_ide', nullable: true })
  autIde: number | null;

  @Column('int', { name: 'bib_ide', nullable: true })
  bibIde: number | null;

  @ManyToOne(() => Autor, autor => autor.autorBibliografias, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'aut_ide', referencedColumnName: 'autIde' }])
  autIde2: Autor;

  @ManyToOne(() => Bibliografia, bibliografia => bibliografia.autorBibliografias, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'bib_ide', referencedColumnName: 'bibIde' }])
  bibIde2: Bibliografia;
}
