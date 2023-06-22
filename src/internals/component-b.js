import {useStyles} from './component-b.styles';

const ComponentB = () => {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            {'This component contains one dynamic rule'}
        </div>
    );
};

export {ComponentB};
