import styles from './Cardapio.module.scss';
import {ReactComponent as Logo} from 'assets/logofp.svg';
export default  function Cardapio() {
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
        </main>
    )
}