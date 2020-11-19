import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BibliografiaUnidad } from "./BibliografiaUnidad";
import { Topico } from "./Topico";
import { Sumilla } from "./Sumilla";
import { Competencia } from "./Competencia";

@Index("com_ide", ["comIde"], {})
@Index("sum_ide", ["sumIde"], {})
@Entity("Unidad_academica", { schema: "sumilla_db" })
export class UnidadAcademica {
  @PrimaryGeneratedColumn({ type: "int", name: "uni_aca_ide" })
  uniAcaIde: number;

  @Column("int", { name: "com_ide", nullable: true })
  comIde: number | null;

  @Column("varchar", { name: "uni_aca_nom", nullable: true, length: 50 })
  uniAcaNom: string | null;

  @Column("int", { name: "sum_ide", nullable: true })
  sumIde: number | null;

  @OneToMany(
    () => BibliografiaUnidad,
    (bibliografiaUnidad) => bibliografiaUnidad.uniAcaIde2
  )
  bibliografiaUnidads: BibliografiaUnidad[];

  @OneToMany(() => Topico, (topico) => topico.uniAcaIde2)
  topicos: Topico[];

  @ManyToOne(() => Sumilla, (sumilla) => sumilla.unidadAcademicas, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "sum_ide", referencedColumnName: "sumIde" }])
  sumIde2: Sumilla;

  @ManyToOne(() => Competencia, (competencia) => competencia.unidadAcademicas, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "com_ide", referencedColumnName: "comIde" }])
  comIde2: Competencia;
}
