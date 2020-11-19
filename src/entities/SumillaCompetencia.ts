import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Sumilla } from './Sumilla';
import { Competencia } from './Competencia';

@Index('com_ide', ['comIde'], {})
@Index('sum_ide', ['sumIde'], {})
@Entity('Sumilla_competencia')
export class SumillaCompetencia {
  @PrimaryGeneratedColumn({ type: 'int', name: 'sum_com_ide' })
  sumComIde: number;

  @Column('int', { name: 'com_ide', nullable: true })
  comIde: number | null;

  @Column('int', { name: 'sum_ide', nullable: true })
  sumIde: number | null;

  @ManyToOne(() => Sumilla, sumilla => sumilla.sumillaCompetencias, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'sum_ide', referencedColumnName: 'sumIde' }])
  sumIde2: Sumilla;

  @ManyToOne(() => Competencia, competencia => competencia.sumillaCompetencias, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'com_ide', referencedColumnName: 'comIde' }])
  comIde2: Competencia;
}
