import React from 'react';
import Section from '../UI/Section';
import styles from './TechSlider.module.scss';

import ReactLogo from './Assets/react-logo.png';
import LaravelLogo from './Assets/laravel-logo.png';
import SassLogo from './Assets/sass-logo.png';
import FigmaLogo from './Assets/figma-logo.png';
import AdobeLogo from './Assets/adobe-logo.png';
import JavascriptLogo from './Assets/javascript-logo.png';
import HtmlLogo from './Assets/html-logo.png';
import CssLogo from './Assets/css-logo.png';

const TECH_STACK_DATA = [
    {
        id: 1,
        class: '__react',
        name: 'React.js',
        logo: ReactLogo
    },
    {
        id: 2,
        class: '__laravel',
        name: 'Laravel',
        logo: LaravelLogo
    },
    {
        id: 3,
        class: '__sass',
        name: 'SASS',
        logo: SassLogo
    },
    {
        id: 4,
        class: '__figma',
        name: 'Figma',
        logo: FigmaLogo
    },
    {
        id: 5,
        class: '__adobe',
        name: 'Adobe',
        logo: AdobeLogo
    },
    {
        id: 6,
        class: '__js',
        name: 'JavaScript',
        logo: JavascriptLogo
    },
    {
        id: 7,
        class: '__html',
        name: 'HTML',
        logo: HtmlLogo
    },
    {
        id: 8,
        class: '__css',
        name: 'CSS',
        logo: CssLogo
    }
];

const TechSlider = () => {
    return (
        <>
            <Section onlyContainsTitle>
                <h2 className='section-title'> <span className='accent-highlight'>Tech</span> I Use</h2>
            </Section>
            <Section noPadding noMaxWidth>
                <div className={styles.slider}>
                    {TECH_STACK_DATA.map((tech) => {
                        return (
                            <React.Fragment key={tech.id}>
                                <div className={`${styles.element} ${styles[`${tech.class}`]}`}>
                                    <img
                                        src={tech.logo}
                                        alt={`${tech.name} Logos`}
                                    />
                                    <div>{tech.name}</div>
                                </div>
                            </React.Fragment>
                        );
                    })}
                </div>

            </Section>
        </>
    );
};
export default TechSlider;
