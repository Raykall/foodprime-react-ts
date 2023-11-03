import Buscador from 'pages/Buscador';
import styles from './Cardapio.module.scss';
import {ReactComponent as Logo} from 'assets/logofp.svg';
import { useState} from 'react';
export default  function Cardapio() {
    const [busca, setBusca] = useState("");
    return(
        <main>
            <nav className={styles.menu}>
                <Logo />
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A Loja Fit dos Sonhos!
                </div>
            </header>
            <section className={styles.cardapio}>
                <h3 className={styles.cardapio__text}>Cardápio</h3>
                <Buscador busca={busca} setBusca={setBusca}/>
            </section>
        </main>
    )
}