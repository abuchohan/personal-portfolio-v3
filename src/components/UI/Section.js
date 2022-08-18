import styles from './Section.module.scss';

const Section = ({ isHero, light, noPadding, onlyContainsTitle, children, noMaxWidth }) => {
    return (
        <section
            className={`
                ${styles.spacing} ${light ? styles.background: ''}
                ${isHero ? styles.hero : ''} ${noPadding ? styles.noPadding : ''} 
                ${onlyContainsTitle  ? styles.onlyTitle : '' }
            `}
        >
            <div
                className={`${styles['section-content']} ${noMaxWidth
                    ? styles.maxWidth
                    : ''}`}
            >
                {children}
            </div>
        </section>
    );
};
export default Section;
