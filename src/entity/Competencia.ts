import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Competencia {
  @PrimaryGeneratedColumn()
  com_ide: number;

  @Column({ type: 'varchar', length: 100 })
  com_nom: string;

  @Column({ type: 'varchar', length: 500 })
  com_des: string;
}
