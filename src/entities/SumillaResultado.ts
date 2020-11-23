import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Sumilla } from './Sumilla';
import { ResultadosEstudiante } from './ResultadosEstudiante';

@Index('res_est_ide', ['resEstIde'], {})
@Index('sum_ide', ['sumIde'], {})
@Entity('Sumilla_resultado')
export class SumillaResultado extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'sum_res_ide' })
  sumResIde: number;

  @Column('int', { name: 'sum_ide', nullable: true })
  sumIde: number | null;

  @Column('int', { name: 'res_est_ide', nullable: true })
  resEstIde: number | null;

  @Column('int', { name: 'sum_res_nivel', nullable: true })
  sumResNivel: number | null;

  @ManyToOne(() => Sumilla, sumilla => sumilla.sumillaResultados, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'sum_ide', referencedColumnName: 'sumIde' }])
  sumIde2: Sumilla;

  @ManyToOne(
    () => ResultadosEstudiante,
    resultadosEstudiante => resultadosEstudiante.sumillaResultados,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' }
  )
  @JoinColumn([{ name: 'res_est_ide', referencedColumnName: 'resEstIde' }])
  resEstIde2: ResultadosEstudiante;
}
