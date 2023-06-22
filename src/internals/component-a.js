import {useStyles} from './component-a.styles';

const ComponentA = () => {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            {'This component does not contain dynamic rules'}
        </div>
    );
};

export {ComponentA};
