import styles from './Section.module.css';

function Section({ children, extraStyles }) {
    const classes = [styles.section, extraStyles].join(' ');
    return (
        <div className={classes}>{children}</div>
    );
}

export default Section;