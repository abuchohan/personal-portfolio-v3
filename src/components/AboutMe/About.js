import Button from '../UI/Button';
import Section from '../UI/Section';

import CV from './Assets/Abu CV v3.3.pdf';

const About = () => {
    return (
        <Section>
            <h1 className='section-title'>
                About <span className='accent-highlight'> Me</span>
            </h1>
            <p className={'paragraph'}>
                A Web Developer on the journey to become a full developer.
                Focusing on a logical and accessible approach to current
                problems. Technologically competent and fascinated with current
                strides in the industry.  
                <br />
                <br />
                Outside of work i&#39;m a bit of a thrill
                seeker, i love the outdoors and the gym. Currently training for
                a <a href="https://toughmudder.co.uk/">tough mudder</a> challenge!
            </p>
            <a href={CV} target='_blank' rel='noreferrer'>
                <Button>My CV</Button>
            </a>
        </Section>
    );
};
export default About;
