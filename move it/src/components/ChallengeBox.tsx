import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css'
import { useContext } from 'react';

export function ChallengeBox() {
    const { activeChallenge } = useContext(ChallengesContext);

    return(
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>ganhe {activeChallenge.amount}xp</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>novo desafio</strong>
                        <p>{activeChallenge.description}</p>
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