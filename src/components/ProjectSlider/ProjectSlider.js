import Button from '../UI/Button';
import Section from '../UI/Section';
import styles from './ProjectSlider.module.scss';
import Video from './Assets/Imagineear-Website.a03e1cb97e41f0553794.mp4';
import { CSSTransition } from 'react-transition-group';

import ReactIcon from './Assets/react-icon.png';
import FigmaIcon from './Assets/figma-icon.png';
import SassIcon from './Assets/sass-icon.png';
import LaravelIcon from './Assets/laravel-icon.png'
import { useEffect, useState, useRef } from 'react';

const ProjectSlider = () => {
    const [index, setIndex] = useState(1);
    const intervalRef = useRef(null);
    const [inProp, setInProp] = useState(true);
    const [animationFowards, setAnimationFowards] = useState(true);
    // const [loadingBar, setLoadingBar] = useState(0)

    useEffect(() => {

        intervalRef.current = setInterval(() => {
          setIndex((prevState) => {
            if (prevState === 3) { return 1 } else { return prevState + 1 }
          }); 
        }, 10000);
        
        return () => {
            clearInterval(intervalRef.current)
            console.log('Cleared')
        };
      }, [intervalRef])


    const DUMMY_PROJECTS = [
        {
            id: 1,
            title: 'Expenses Portal',
            subTitle: 'Newable',
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            icons: [
                {
                    id: '1',
                    iconName: ReactIcon 
                },
                {
                    id: '2',
                    iconName: FigmaIcon 
                },
                {
                    id: '3',
                    iconName: SassIcon 
                },
                {
                    id: '4',
                    iconName: LaravelIcon 
                }
            ],
            videoText: 'www.expensesportal.com',
            video: Video,
        },
        {
            id: 2,
            title: 'Testing Portal',
            subTitle: 'Google',
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            icons: [
                {
                    id: '1',
                    iconName: ReactIcon 
                },
                {
                    id: '2',
                    iconName: FigmaIcon 
                },
                {
                    id: '3',
                    iconName: SassIcon 
                },
                {
                    id: '4',
                    iconName: LaravelIcon 
                }
            ],
            videoText: 'www.testingportal.com',
            video: Video,
        },
        {
            id: 3,
            title: 'Item 3',
            subTitle: 'Meta',
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            icons: [
                {
                    id: '1',
                    iconName: ReactIcon 
                },
                {
                    id: '2',
                    iconName: FigmaIcon 
                },
                {
                    id: '3',
                    iconName: SassIcon 
                },
                {
                    id: '4',
                    iconName: LaravelIcon 
                }
            ],
            videoText: 'www.meta.com',
            video: Video,
        }
    ]

    const nextProjectHandler = (e) => {
        clearInterval(intervalRef.current);

        if (DUMMY_PROJECTS.length <= index) {
            setIndex(1)
        } else {
            setInProp(false)
            setIndex(prevState => {
                return prevState + 1;
            })
            setTimeout(() => {
                setInProp(true)
            }, 500);
        }
    }

    const prevProjectHandler = (e) => {
        if (index === 1) {
            setIndex(3)
        } else {
            setIndex(prevState => {
                return prevState - 1;
            })
        }
    }



    return (
        <>
        <Section light={true}>      
            <h2 className='section-title'>
                Here are some hand picked projects
            </h2>

            <div className={styles['project-grid']}>
                <div className={styles['project-grid__left']}>
                    {DUMMY_PROJECTS.map(filteredProject => {
                        return (
                                <CSSTransition 
                                    mountOnEnter 
                                    unmountOnExit 
                                    in={filteredProject.id === index} 
                                    timeout={1000} 
                                    classNames={{
                                        enter: styles['project-content-enter'],
                                        enterActive: styles['project-content-enter-active'],
                                        enterDone: styles['project-content-enter-done'],
                                        exit: styles['project-content-exit'],
                                        exitActive: styles['project-content-exit-active'],
                                        exitDone: styles['project-content-exit-done'],
                                    }}
                                    >
                                    <div className={styles['project-content']} key={filteredProject.id}>
                                        <h3 className={styles['project__title']}>{filteredProject.title}</h3>
                                        <h4 className={styles['project__sub-title']}>{filteredProject.subTitle}</h4>
                                        <p className={styles['project__paragraph']}>{filteredProject.excerpt}
                                        </p>
                                        <div className={styles['project-icons']} >
                                            {filteredProject.icons.map(icons => {
                                                    return <img key={icons.id} className={styles['project-icons__icon']} src={icons.iconName} alt="" />
                                                })
                                            }
                                        </div>
                                        <Button> View Project</Button>
                                    </div>
                                </CSSTransition>

                        )
                    })}
                </div>
                <div className={styles['project-grid__right']}>
                {DUMMY_PROJECTS.map((project) => {
                            return (
                                <CSSTransition 
                                    mountOnEnter 
                                    unmountOnExit 
                                    in={project.id === index} 
                                    timeout={1000} 
                                    classNames={{
                                        enter: styles['window-enter'],
                                        enterActive: styles['window-enter-active'],
                                        enterDone: styles['window-enter-done'],
                                        exit: styles['window-exit'],
                                        exitActive: styles['window-exit-active'],
                                        exitDone: styles['window-exit-done'],
                                    }}
                                    >
                                <div key={project.id} className={styles['window']}>
                                    <div className={styles['window-top-bar']}>
                                        <div className={styles['window-top-bar__buttons']}>
                                            <div />
                                            <div />
                                            <div />
                                        </div>
                                        <div className={styles['window-top-bar__text-wrapper']}>
                                            <span className={styles['window-top-bar__text']}>
                                                {project.videoText}
                                            </span>
                                            <svg
                                                width='10'
                                                height='12'
                                                viewBox='0 0 10 12'
                                                fill='none'
                                                xmlns='http://www.w3.org/2000/svg'
                                            >
                                                <path
                                                    d='M3.50602 4.59082L4.89809 2.73472L3.04199 1.34265'
                                                    strokeLinecap='round'
                                                />
                                                <path
                                                    d='M9.07412 6.91096C9.07412 9.21742 7.20436 11.0872 4.8979 11.0872C2.59144 11.0872 0.72168 9.21742 0.72168 6.91096C0.72168 4.6045 2.59144 2.73474 4.8979 2.73474'
                                                    strokeLinecap='round'
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <video src={project.video} muted controls/>
                                </div>
                                </CSSTransition>
                            )
                        })
                    }
                </div>
            </div>

            <div className={styles['project__control']}>
                <button onClick={prevProjectHandler} className={`${styles['project__control__left']} ${styles['project__control__arrow']}`}>
                    <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5542 20.7185C10.9447 21.109 11.5779 21.109 11.9684 20.7185C12.3589 20.3279 12.3589 19.6948 11.9684 19.3042L10.5542 20.7185ZM1.76129 10.5114L1.05418 9.80425C0.66366 10.1948 0.66366 10.8279 1.05418 11.2185L1.76129 10.5114ZM11.9684 1.71846C12.3589 1.32794 12.3589 0.69477 11.9684 0.304246C11.5779 -0.0862786 10.9447 -0.0862786 10.5542 0.304246L11.9684 1.71846ZM11.9684 19.3042L2.4684 9.80425L1.05418 11.2185L10.5542 20.7185L11.9684 19.3042ZM2.4684 11.2185L11.9684 1.71846L10.5542 0.304246L1.05418 9.80425L2.4684 11.2185Z" fill="white"/>
                    </svg>
                </button>
                <button onClick={nextProjectHandler} className={`${styles['project__control__right']} ${styles['project__control__arrow']}`}>
                    <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.81709 0.304122C1.42657 -0.0864018 0.793404 -0.0864018 0.40288 0.304122C0.0123556 0.694648 0.0123555 1.32781 0.40288 1.71834L1.81709 0.304122ZM10.61 10.5112L11.3171 11.2183C11.7076 10.8278 11.7076 10.1946 11.3171 9.80412L10.61 10.5112ZM0.402879 19.3041C0.0123539 19.6946 0.0123539 20.3278 0.402879 20.7183C0.793403 21.1089 1.42657 21.1089 1.81709 20.7183L0.402879 19.3041ZM0.40288 1.71834L9.90288 11.2183L11.3171 9.80412L1.81709 0.304122L0.40288 1.71834ZM9.90288 9.80412L0.402879 19.3041L1.81709 20.7183L11.3171 11.2183L9.90288 9.80412Z" fill="white"/>
                    </svg>

                </button>
                <div className={styles['project__control__counter']}>
                    <p> {index}/{DUMMY_PROJECTS.length}</p>
                </div>

            </div>
        </Section>
            {/* Loading bar */}
            {/* <div className={styles['loading-bar']}>
                <div className={styles['loading-bar__outer']}>
                    <div className={styles['loading-bar__inner']} style={{width: `${loadingBar}%`}}></div>
                </div>
            </div>   */}
    </>
    );
};
export default ProjectSlider;
