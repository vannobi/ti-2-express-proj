# ti-2-express-js

Steps to run this project:

1. Install nodejs, minimun version `12`
2. After installing node, install yarn. Run: `npm i -g yarn`
3. Run: `yarn` command
4. Run: `docker-compose up` command
5. Run: `yarn build` command
5. Run: `yarn start` command

* [ORM documentation](https://github.com/typeorm/typeorm/tree/master/docs)

```sql
CREATE TABLE Autor(
    aut_ide INTEGER AUTO_INCREMENT PRIMARY KEY,
    aut_nom VARCHAR(50),
    aut_ape VARCHAR(50)
);

CREATE TABLE Bibliografia(
    bib_ide INTEGER AUTO_INCREMENT PRIMARY KEY,
    bib_nom VARCHAR(100),
    bib_edici VARCHAR(100),
    bib_edito VARCHAR(100),
    bib_anio INTEGER
);

CREATE TABLE Autor_bibliografia(
    aut_bib_ide INTEGER AUTO_INCREMENT PRIMARY KEY,
    aut_ide INTEGER,
    bib_ide INTEGER,
    FOREIGN KEY (aut_ide) REFERENCES Autor(aut_ide),
    FOREIGN KEY (bib_ide) REFERENCES Bibliografia(bib_ide)
);

CREATE TABLE Curso(
    cur_ide INTEGER AUTO_INCREMENT PRIMARY KEY,
    cur_credi INTEGER,
    cur_sem INTEGER,
    cur_hor_teo INTEGER,
    cur_hor_pra INTEGER,
    cur_hor_lab INTEGER,
    cur_nom VARCHAR(80),
    cur_cod VARCHAR(15)
);

CREATE TABLE Competencia(
    com_ide INTEGER AUTO_INCREMENT PRIMARY KEY,
    com_nom VARCHAR(100),
    com_des VARCHAR(500)
);

CREATE TABLE Sumilla(
    sum_ide INTEGER AUTO_INCREMENT PRIMARY KEY,
    sum_version INTEGER,
    sum_curso INTEGER,
    sum_fund VARCHAR(500),
    FOREIGN KEY (sum_curso) REFERENCES Curso(cur_ide)
);

CREATE TABLE Unidad_academica(
    uni_aca_ide INTEGER AUTO_INCREMENT PRIMARY KEY,
    com_ide INTEGER,
    uni_aca_nom VARCHAR(50),
    uni_aca_horas INTEGER,
    sum_ide INTEGER,
    FOREIGN KEY (sum_ide) REFERENCES Sumilla(sum_ide),
    FOREIGN KEY (com_ide) REFERENCES Competencia(com_ide)
);

CREATE TABLE Bibliografia_unidad(
    bib_uni_ide INTEGER AUTO_INCREMENT PRIMARY KEY,
    bib_ide INTEGER,
    uni_aca_ide INTEGER,
    FOREIGN KEY (bib_ide) REFERENCES Bibliografia(bib_ide),
    FOREIGN KEY (uni_aca_ide) REFERENCES Unidad_academica(uni_aca_ide)
);

CREATE TABLE Topico(
    top_ide INTEGER AUTO_INCREMENT PRIMARY KEY,
    top_des VARCHAR(500),
    uni_aca_ide INTEGER,
    FOREIGN KEY (uni_aca_ide) REFERENCES Unidad_academica(uni_aca_ide)
);

CREATE TABLE Sumilla_competencia(
    sum_com_ide INTEGER AUTO_INCREMENT PRIMARY KEY,
    com_ide INTEGER,
    sum_ide INTEGER,
    FOREIGN KEY (sum_ide) REFERENCES Sumilla(sum_ide),
    FOREIGN KEY (com_ide) REFERENCES Competencia(com_ide)
);

CREATE TABLE Resultados_estudiante(
    res_est_ide INTEGER AUTO_INCREMENT PRIMARY KEY,
    rest_est_cod VARCHAR(10),
    res_est_nom VARCHAR(50),
    res_est_des VARCHAR(300)
);

CREATE TABLE Sumilla_resultado(
    sum_res_ide INTEGER AUTO_INCREMENT PRIMARY KEY,
    sum_ide INTEGER,
    res_est_ide INTEGER,
    sum_res_nivel INTEGER,
    FOREIGN KEY (sum_ide) REFERENCES Sumilla(sum_ide),
    FOREIGN KEY (res_est_ide) REFERENCES Resultados_estudiante(res_est_ide)
);

CREATE TABLE prerequisitos(
    prere_ide INTEGER AUTO_INCREMENT PRIMARY KEY,
    cur_ide INTEGER,
    cur_ide_pre INTEGER,
    FOREIGN KEY (cur_ide) REFERENCES Curso(cur_ide),
    FOREIGN KEY (cur_ide_pre) REFERENCES Curso(cur_ide)
);
```

## POST http requests:
### Curso & prerequisitos
Para insertar un Curso con sus prerequisitos, se necesitan los Cursos IDs de los prerequisitos

```json
{
  "curCredi": 1,
  "curSem": 1,
  "curHorTeo": 1,
  "curHorPra": 1,
  "curHorLab": 1,
  "curNom": "Math II",
  "curCod": "X1XOLAP",
  "prerequisitos": [4]
}
```
### Competencias
```json
[
  {
    "comNom": "C1",
    "comDes": "La comprensión intelectual y la capacidad de aplicar las bases matemáticas y la teoria de la informática (Computer Science)"
  },
  {
    "comNom": "C2",
    "comDes": "Capacidad para tener una perspectiva crítica y creativa para identificar y resolver problemas utilizando el pensamiento computacional."
  }
]
```

### Resultados del Estudiante
```json
[
  {
    "restEstCod": "a",
    "resEstNom": "Conocimientos de Computación",
    "resEstDes": "La capacidad de aplicar conocimientos de matemáticas, ciencias, computación y una especialidad de computación apropiados para los resultados del estudiante y la disciplina del programa"
  },
  {
    "restEstCod": "b",
    "resEstNom": "Análisis de problemas",
    "resEstDes": "La capacidad de identificar, formular, investigar literatura y resolver problemas complejos de computación y otras disciplinas relevantes en el dominio"
  },
  {
    "restEstCod": "c",
    "resEstNom": "Diseño y Desarrollo de Soluciones",
    "resEstDes": "La capacidad de diseñar, implementar y evaluar soluciones a problemas complejos de computación. Diseña y evalúa sistemas, componentes o procesos que satisfacen las necesidades específicas"
  }
]
```


### Sumilla & Unidad Academica & Bibtex & Autor & Bibliografia
```json
{
  "curIde": 2,
  "sumFund": "Para entender las técnicas computacionales avanzadas, los estudiantes deberán de tener un fuerte conocimiento de las diversas estructuras discretas y algebraicas, estructuras que serán implementadas y en algunos casos aplicadas en criptografía.",
	"sumVersion": 2020,
  "sumResultados": [
    {
      "resEstIde": 1,
      "sumResNivel": 0
    },
    {
      "resEstIde": 2,
      "sumResNivel": 1
    }
  ],
  "sumCompetencias": [
		1, 2
  ],
  "sumContenidos": [
    {
      "unidadAcademica": {
        "uniAcaNom": "Grafos, Árboles, Optimización y Emparejamiento",
        "uniAcaHoras": 15,
        "comIde": 1
      },
      "topicos": [
				{
        "uniAcaIde": null,
        "topDes": "text"
      	}
			],
      "bibliografiaUnidad": {
        "uniAcaIde": null,
        "bibliografia": [
          {
            "new": true,
            "bibIde": null,
            "bibtex": "@book{feynman2011six,title={Six Not-So-Easy Pieces: Einstein's Relativity, Symmetry, and Space-Time},author={Feynman, R.P. and Leighton, R.B. and Sands, M.},isbn={9780465025282},series={Helix Books},edition={Fourth Edition},url={https://books.google.com.pe/books?id=gkjDYs100mgC},year={2011},publisher={Basic Books}}"
          }
        ]
      }
    }
  ]
}
```
...
