import styles from '../styles/components/CompletedChallenges.module.css'
import { ChallengesContext } from '../contexts/ChallengesContext';
import { useContext } from 'react';

export function CompletedChallenges() {
    const { challegesCompleted } = useContext(ChallengesContext);

    return(
        <div className={styles.completedChallengesContainer}>
            <span>desafios completos</span>
            <span>{challegesCompleted}</span>
        </div>
    );
}