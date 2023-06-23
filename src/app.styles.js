import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    buttons: {
        margin: 10
    },
    button: {
        margin: 10,
        padding: 10
    },
    counter: {
        fontSize: 24,
        margin: 10
    },
    components: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: 24
    }
});

export {useStyles};
