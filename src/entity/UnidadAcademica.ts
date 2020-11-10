import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class UnidadAcademica {
  @PrimaryGeneratedColumn()
  uni_aca_ide: number;

  @Column()
  com_ide: number;

  @Column({ type: 'varchar', length: 50 })
  uni_aca_nom: string;

  @Column()
  sum_ide: number;
}
