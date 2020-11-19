import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Curso } from "./Curso";
import { SumillaCompetencia } from "./SumillaCompetencia";
import { SumillaResultado } from "./SumillaResultado";
import { UnidadAcademica } from "./UnidadAcademica";

@Index("sum_curso", ["sumCurso"], {})
@Entity("Sumilla", { schema: "sumilla_db" })
export class Sumilla {
  @PrimaryGeneratedColumn({ type: "int", name: "sum_ide" })
  sumIde: number;

  @Column("int", { name: "sum_curso", nullable: true })
  sumCurso: number | null;

  @Column("varchar", { name: "sum_fund", nullable: true, length: 500 })
  sumFund: string | null;

  @ManyToOne(() => Curso, (curso) => curso.sumillas, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "sum_curso", referencedColumnName: "curIde" }])
  sumCurso2: Curso;

  @OneToMany(
    () => SumillaCompetencia,
    (sumillaCompetencia) => sumillaCompetencia.sumIde2
  )
  sumillaCompetencias: SumillaCompetencia[];

  @OneToMany(
    () => SumillaResultado,
    (sumillaResultado) => sumillaResultado.sumIde2
  )
  sumillaResultados: SumillaResultado[];

  @OneToMany(
    () => UnidadAcademica,
    (unidadAcademica) => unidadAcademica.sumIde2
  )
  unidadAcademicas: UnidadAcademica[];
}
