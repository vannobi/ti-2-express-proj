import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm';
import { Autor } from './Autor';
import { Bibliografia } from './Bibliografia';

@Entity()
export class AutorBibliografia {
  @PrimaryGeneratedColumn()
  aut_bib_ide: number;

  @ManyToOne(() => Autor, autor => autor.autorBibliografia)
  autor: Autor;

  @ManyToOne(() => Bibliografia, bibliografia => bibliografia.autorBibliografia)
  bibliografia: Bibliografia;
}
