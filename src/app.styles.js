import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    root: {
        height: '100vh',
        width: '100vw',
        backgroundColor: '#fefefe'
    },
    buttons: {
        marginBottom: 10
    },
    button: {
        margin: 10,
        padding: 10,
        cursor: 'pointer'
    },
    counter: {
        fontSize: 24,
        marginBottom: 10
    },
    components: {}
});

export {useStyles};
