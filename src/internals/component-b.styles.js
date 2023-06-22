import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    root: () => {
        return {
            height: 100,
            backgroundColor: '#0000fe',
            color: '#ffffff',
            fontSize: 20
        };
    }
});

export {useStyles};
