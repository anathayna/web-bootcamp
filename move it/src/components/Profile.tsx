import styles from '../styles/pages/Profile.module.css'

export function Profile() {
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/anathayna.png" alt="anathayna"/>
            <div>
                <strong>Ana Thayna</strong>
                <p>level 1</p>
            </div>
        </div>
    );
}