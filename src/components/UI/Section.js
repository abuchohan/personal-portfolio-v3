import styles from './Section.module.scss';

const Section = (props) => {
    return (
        <section className={`${'spacing'} ${props.light ? styles.background : null}`}>
            <div className={styles['section-content']}>
                {props.children}
            </div>
        </section>
    );
};
export default Section;
