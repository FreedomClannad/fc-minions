import styles from "./double.module.scss";

const DoubleWingLayout = () => {
    return <div className={styles["g-container"]}>
        <div className={styles['g-middle']}>
            <div className={styles['g-middle-inner']}>middle-inner</div>
        </div>
        <div className={styles['g-left']}>left</div>
        <div className={styles['g-right']}>right</div>
    </div>
}

export default DoubleWingLayout;