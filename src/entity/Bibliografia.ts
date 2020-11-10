import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import { Autor } from './Autor';

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

  @ManyToMany(() => Autor)
  @JoinTable()
  autors: Autor[];
}
