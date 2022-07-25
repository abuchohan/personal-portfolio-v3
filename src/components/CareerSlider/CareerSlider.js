import React from 'react';
import Section from '../UI/Section';
import styles from './CareerSlider.module.scss'

import BT from './Assets/bt-logo.png'
import Falcon from './Assets/falcon-logo.png'
import MMU from './Assets/mmu-logo.png'
import Newable from './Assets/newable-logo.png'

const CAREER_DATA = [
    {
        'id': 1,
        'name': 'BT',
        'logo': BT,
        'isCurrent': 1,
        'year': 2022
    },
    {
        'id': 2,
        'name': 'Newable',
        'logo': Newable,
        'isCurrent': 0,
        'year': 2021
    },
    {
        'id': 3,
        'name': 'Falcon Group',
        'logo': Falcon,
        'isCurrent': 0,
        'year': 2019
    },
    {
        'id': 4,
        'name': 'Manchester Metropolitan University',
        'logo': MMU,
        'isCurrent': 0,
        'year': 2018
    },
];

const CareerSlider = () => {
    return (
        <>
            <Section>
                <h2 id="your-element-id" className='section-title'>Slider</h2>

            </Section>

            <Section noPadding noMaxWidth>
            <div>
                <div className={styles.slider}>
                    <div className={`${styles['slider__element__date__wrapper']} ${styles.flex}`}>
                        {CAREER_DATA.map(job => {
                            return (
                                <div className={` ${styles['slider__element__date']} ${job.isCurrent ? styles['slider__element__date--current'] : ''}`}>
                                    {job.year}
                                    <div className={styles['slider__element__date__line']}></div>
                                </div>
                            )
                        })}
                    </div>
                    <div className={`${styles['slider__element__cards']} ${styles.flex}`}>
                        {CAREER_DATA.map(job => {
                            return (
                                <>
                                    <div className={`${styles['slider__element']} ${job.isCurrent ? styles['slider__element--current'] : ''}`}>
                                        <img src={job.logo} alt={`${job.name} Logos`}/>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
            </Section>

        </>
    );
};

export default CareerSlider;
