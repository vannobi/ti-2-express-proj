import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Topico {
  @PrimaryGeneratedColumn()
  top_ide: number;

  @Column({ type: 'varchar', length: 500 })
  top_des: string;

  @Column()
  uni_aca_ide: number;
}
