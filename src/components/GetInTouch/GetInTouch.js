import Button from '../UI/Button';
import Section from '../UI/Section';
import styles from './GetInTouch.module.css';

const GetInTouch = () => {
    return (
        <Section light>
            <h3 className={`section-title ${styles['title']}`}>
                Intrested in working with me or perhaps just{' '}
                <span className='accent-highlight'>talk?</span>
            </h3>
            <p className={'paragraph'}>
                Reach me by dropping me a email -{' '}
                <a href='mailto:abuchohan@hotmail.co.uk'>
                    <span className='accent-highlight'>
                        abuchohan@hotmail.co.uk
                    </span>
                </a>
            </p>
            <a href="mailto:abuchohan@hotmail.co.uk">
                <Button>Get in touch</Button>
            </a>
        </Section>
    );
};
export default GetInTouch;
