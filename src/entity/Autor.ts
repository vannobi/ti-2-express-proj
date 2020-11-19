import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm';
import { AutorBibliografia } from './AutorBibliografia';

@Entity()
export class Autor {
  @PrimaryGeneratedColumn()
  auto_ide: number;

  @Column({ type: 'varchar', length: 50 })
  auto_nom: string;

  @Column({ type: 'varchar', length: 50 })
  auto_ape: string;

  @OneToMany(() => AutorBibliografia, autorBibliografia => autorBibliografia.autor)
  autorBibliografia: AutorBibliografia[];
}
