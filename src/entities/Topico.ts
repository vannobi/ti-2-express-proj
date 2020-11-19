import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { UnidadAcademica } from "./UnidadAcademica";

@Index("uni_aca_ide", ["uniAcaIde"], {})
@Entity("Topico", { schema: "sumilla_db" })
export class Topico {
  @PrimaryGeneratedColumn({ type: "int", name: "top_ide" })
  topIde: number;

  @Column("varchar", { name: "top_des", nullable: true, length: 500 })
  topDes: string | null;

  @Column("int", { name: "uni_aca_ide", nullable: true })
  uniAcaIde: number | null;

  @ManyToOne(
    () => UnidadAcademica,
    (unidadAcademica) => unidadAcademica.topicos,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "uni_aca_ide", referencedColumnName: "uniAcaIde" }])
  uniAcaIde2: UnidadAcademica;
}
