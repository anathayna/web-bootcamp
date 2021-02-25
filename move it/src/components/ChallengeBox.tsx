import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
    const hasActiveChallenge = true;
    return(
        <div className={styles.challengeBoxContainer}>
            { hasActiveChallenge ? (
                <div className={styles.challengeActive}>
                    <header>ganhe 400xp</header>
                    <main>
                        <img src="icons/body.svg" />
                        <strong>novo desafio</strong>
                        <p>levante e faça uma caminhada de 3 minutos!</p>
                    </main>
                    <footer>
                        <button type="button" className={styles.challengeFailedButton}>
                            falhei :(
                        </button>
                        <button type="button" className={styles.challengeSucceededButton}>
                            completei \o/
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up" />
                        avance de level completando desafios
                    </p>
                </div>
            ) }
        </div>
    );
}