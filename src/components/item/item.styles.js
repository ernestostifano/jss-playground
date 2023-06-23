import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    static: {
        display: 'inline-block',
        width: '50px',
        height: '50px',
        border: '5px solid #ff0000'
    },
    dynamic: ({bg}) => ({
        border: '5px solid #996699',
        '&': {
            border: '5px solid #00ff00'
        },
        '& + span': {
            color: '#ffffff',
            backgroundColor: bg
        }
    })
});

export {useStyles};
