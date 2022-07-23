import styles from './Hero.module.scss';
import particleWave from './particlewave';

const Hero = () => {
    return (
        <div id='waves' className={styles['hero-waves']}>
            <div className={styles['hero-content']}>
                <h1 className={styles['hero-title']}>Hi I'm <span className='accent-highlight'>Abu</span></h1>
                <h2 className={styles['hero-title-secondary']}>
                    I make things for the{' '}
                    <span className='accent-highlight'> Web</span>
                </h2>
            </div>
        </div>
    );
};

export default Hero;
