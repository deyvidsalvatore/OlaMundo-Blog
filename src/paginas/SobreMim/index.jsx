import styles from "./SobreMim.module.css";

import PostModelo from "src/componentes/PostModelo";
import fotoCapa from "src/assets/sobre_mim_capa.jpg";
import fotoSobreMim from "src/assets/minha_foto.jpg";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá, eu sou o Deyvid!</h3>

      <img
        src={fotoSobreMim}
        alt="Foto do Deyvid"
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
        Olá, tudo bem? Eu sou desenvolvedor e estou feliz em te ver aqui.
      </p>
      <p className={styles.paragrafo}>
        Minha história com programação começou no Centro Universitário dos
        Guararapes (UNIFG), quando fiz o ensino superior no curso de Ciência da
        computação. Eu aprendi lógica de programação e o básico de várias
        linguagens, como C, Python, Java, mas sem aprofundar muito em cada uma
        delas. Eu gostava muito de estudar programação, mas na época não fazia
        ideia de que trabalharia com isso hoje. Tanto que teve um projeto de
        campo, onde tive a experiência de ser instrutor com Java/Spring, então
        ela é o meu xodó.
      </p>
      <p className={styles.paragrafo}>
        Ainda na UNIFG tive minha experiência estágiando em um programa de
        bolsas usando Java, Spring, AWS e entre outras tecnologias. Com isso
        consegui minha primeira certificação AWS com muito esforço e ajuda dos
        meus colegas e superiores.
      </p>
      <p className={styles.paragrafo}>
        Na minha pós graduação, escolhi cursar Engenharia de Software na
        Descomplica. Então fui aprofundar meus conhecimentos usando arquitetura
        de sistemas e a tão famosa big data, queria construir softwares em larga
        escala e demânda para futuramente trabalhar em outros objetivos.
      </p>
      <p className={styles.paragrafo}>
        Durante minha trajetória profissional, tive a oportunidade de trabalhar
        em diversos projetos desafiadores que ampliaram meu conhecimento em
        desenvolvimento web usando Angular. Com o Programa ONE busquei aprimorar minhas
        habilidades em tecnologias como React e Node.js, sempre com o objetivo
        de entregar soluções eficientes e escaláveis.
      </p>
      <p className={styles.paragrafo}>
        Atualmente, estou focado em aprimorar minhas habilidades em cloud
        computing, especialmente com a plataforma Oracle. Acredito que a nuvem é
        essencial para o futuro da tecnologia e estou animado para explorar seu
        potencial, visando sempre oferecer soluções inovadoras que atendam às
        necessidades do mercado.
      </p>
    </PostModelo>
  );
}
