import styles from './Banner.module.css';
import circuloColorido from 'src/assets/circulo_colorido.png';
import minhaFoto from 'src/assets/my_lofi.png';

export const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>
                <p className={styles.paragrafo}>
                    Hello Povo! Esse aqui é o meu espaço pessoal
                    Sou Deyvid Santos, sou desenvolvedor e aqui compartilho
                    meus conhecimentos e espero que aprende comigo. Let&apos;s bora!
                </p>
            </div>

            <div className={styles.imagens}>
                <img 
                  src={circuloColorido} 
                  alt="Um círculo colorido a mostra"
                  className={styles.circuloColorido} 
                  aria-hidden={true}
                />

                <img
                  src={minhaFoto}
                  className={styles.minhaFoto}
                  alt="Minha foto em Lo-fi"
                />

            </div>

        </div>
    );
};

export default Banner;