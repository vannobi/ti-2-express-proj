import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm';
import { UnidadAcademica } from './UnidadAcademica';

@Entity()
export class Topico {
  @PrimaryGeneratedColumn()
  top_ide: number;

  @Column({ type: 'varchar', length: 500 })
  top_des: string;

  @ManyToOne(() => UnidadAcademica, unidadAcademica => unidadAcademica.topico)
  unidadAcademica: UnidadAcademica;
}
