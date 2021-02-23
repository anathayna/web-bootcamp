import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/anathayna.png" alt="anathayna"/>
            <div>
                <strong>Ana Thayna</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    level 1
                </p>
            </div>
        </div>
    );
}