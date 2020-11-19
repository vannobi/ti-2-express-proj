import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Sumilla } from './Sumilla';
import { Prerequisito } from './Prerequisito';

@Entity('Curso', { schema: 'sumilla_db' })
export class Curso {
  @PrimaryGeneratedColumn({ type: 'int', name: 'cur_ide' })
  curIde: number;

  @Column('int', { name: 'cur_credi', nullable: true })
  curCredi: number | null;

  @Column('int', { name: 'cur_sem', nullable: true })
  curSem: number | null;

  @Column('int', { name: 'cur_hor_teo', nullable: true })
  curHorTeo: number | null;

  @Column('int', { name: 'cur_hor_pra', nullable: true })
  curHorPra: number | null;

  @Column('int', { name: 'cur_hor_lab', nullable: true })
  curHorLab: number | null;

  @Column('varchar', { name: 'cur_nom', nullable: true, length: 80 })
  curNom: string | null;

  @Column('varchar', { name: 'cur_cod', nullable: true, length: 15 })
  curCod: string | null;

  @OneToMany(() => Sumilla, sumilla => sumilla.sumCurso2)
  sumillas: Sumilla[];

  @OneToMany(() => Prerequisito, prerequisito => prerequisito.curIde2)
  prerequisitos: Prerequisito[];

  @OneToMany(() => Prerequisito, prerequisito => prerequisito.curIdePre2)
  prerequisitos2: Prerequisito[];
}
