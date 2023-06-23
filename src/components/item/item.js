import {useStyles} from './item.styles';

const Item = () => {
    const styles = useStyles({bg: '#000000'});

    return (
        <span>
            <span className={`${styles.static} ${styles.dynamic}`} />
            <span>{'label'}</span>
        </span>
    );
};

export {Item};
