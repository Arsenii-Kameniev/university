import styles from './Tests.module.css';
import Menu from '../../Department/Menu/Menu';

export function Tests() {
    return (<>
        <Menu></Menu>
        <div className={styles.body}>
            <div className={styles.upperRow}>

            </div>
            <div className={styles.left}>
                <div className={styles.leftColumn}>

                </div>
                <div className={styles.page}>
                    {/* <div className={}>

                    </div> */}
                </div>
            </div>
        </div>
    </>);
}