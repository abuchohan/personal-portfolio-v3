import styles from './Section.module.scss';

const Section = (props) => {
    return (
        <section
            className={`
                ${styles.spacing} ${props.light ? styles.background: ''}
                ${props.isHero ? styles.hero : ''} ${props.noPadding ? styles.noPadding : ''} 
                ${props.onlyContainsTitle  ? styles.onlyTitle : '' }
            `}
        >
            <div
                className={`${styles['section-content']} ${props.noMaxWidth
                    ? styles.maxWidth
                    : ''}`}
            >
                {props.children}
            </div>
        </section>
    );
};
export default Section;
