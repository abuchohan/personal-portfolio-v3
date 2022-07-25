import styles from './Section.module.scss';


const Section = (props) => {

    return (
        <section className={`${'spacing'} ${props.light ? styles.background : ''} ${props.isHero ? styles.hero : ''} ${props.noPadding? styles.noPadding : ''}`}>
            <div className={`${styles['section-content']} ${props.noMaxWidth ? styles.maxWidth : ''}`}>
                {props.children}
            </div>
        </section>
    );
};
export default Section;
