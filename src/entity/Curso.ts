import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Curso {
  @PrimaryGeneratedColumn()
  cur_ide: number;

  @Column()
  cur_credi: number;

  @Column()
  cur_hor_teo: number;

  @Column()
  cur_hor_pra: number;

  @Column()
  cur_hor_lab: number;

  @Column({ type: 'varchar', length: 80 })
  cur_nom: string;

  @Column({ type: 'varchar', length: 15 })
  cur_cod: string;
}
