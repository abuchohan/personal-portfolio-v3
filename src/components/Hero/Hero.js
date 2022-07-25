import Section from '../UI/Section';
import styles from './Hero.module.scss';

const Hero = () => {
    return (
        <Section light isHero>
            <div className={styles.hero}>
                <div className={styles['hero__title__container']}>
                    <h1 className={styles['hero__title']}>Hi I'm <span className='accent-highlight'>Abu</span></h1>
                    <h2 className={styles['hero__title__secondary']}>
                        I make things for the{' '}
                       <span className='accent-highlight'> Web</span>
                    </h2>
                </div>

                <div className={`${styles['shapes__container']} ${styles['shapes__container__one']}`}>
                <div />
                <div />
                </div>

                <div className={`${styles['shapes__container']} ${styles['shapes__container__two']}`}>
                <div />
                <div />
                </div>

                <div className={`${styles['shapes__container']} ${styles['shapes__container__three']}`}>
                <div />
                <div />
                </div>

            </div>
        </Section>
    );
};

export default Hero;
