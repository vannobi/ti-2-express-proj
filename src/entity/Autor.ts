import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Autor {
  @PrimaryGeneratedColumn()
  auto_ide: number;

  @Column({ type: 'varchar', length: 50 })
  auto_nom: string;

  @Column({ type: 'varchar', length: 50 })
  auto_ape: string;
}
