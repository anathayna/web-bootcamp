import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'
import { useContext } from 'react';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/anathayna.png" alt="anathayna"/>
            <div>
                <strong>Ana Thayna</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    level {level}
                </p>
            </div>
        </div>
    );
}