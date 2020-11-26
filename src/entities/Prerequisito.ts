import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Curso } from './Curso';

@Index('cur_ide', ['curIde'], {})
@Index('cur_ide_pre', ['curIdePre'], {})
@Entity('prerequisito')
export class Prerequisito extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'prere_ide' })
  prereIde: number;

  @Column('int', { name: 'cur_ide', nullable: true })
  curIde: number | null;

  @Column('int', { name: 'cur_ide_pre', nullable: true })
  curIdePre: number | null;

  @ManyToOne(() => Curso, curso => curso.prerequisitos, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'cur_ide', referencedColumnName: 'curIde' }])
  curIde2: Curso;

  @ManyToOne(() => Curso, curso => curso.prerequisitos2, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'cur_ide_pre', referencedColumnName: 'curIde' }])
  curIdePre2: Curso;
}
