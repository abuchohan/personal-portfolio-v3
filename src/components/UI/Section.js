import classes from './Section.module.scss';

const Section = (props) => {
    return (
        <section className={props.light && classes.background}>
            {props.children}
        </section>
    );
};
export default Section;
