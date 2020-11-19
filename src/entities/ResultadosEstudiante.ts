import { Column, Entity, OneToMany } from "typeorm";
import { SumillaResultado } from "./SumillaResultado";

@Entity("Resultados_estudiante", { schema: "sumilla_db" })
export class ResultadosEstudiante {
  @Column("int", { primary: true, name: "res_est_ide" })
  resEstIde: number;

  @Column("varchar", { name: "rest_est_cod", nullable: true, length: 10 })
  restEstCod: string | null;

  @Column("varchar", { name: "res_est_nom", nullable: true, length: 50 })
  resEstNom: string | null;

  @Column("varchar", { name: "res_est_des", nullable: true, length: 300 })
  resEstDes: string | null;

  @OneToMany(
    () => SumillaResultado,
    (sumillaResultado) => sumillaResultado.resEstIde2
  )
  sumillaResultados: SumillaResultado[];
}
