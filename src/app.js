import {useState} from 'react';
import {useStyles} from './app.styles';
import {ComponentA} from './internals/component-a';
import {ComponentB} from './internals/component-b';
import {useStyleRulesCount} from './hooks/use-style-rules-count';

const App = ({registry}) => {
    const components = {
        a: {
            label: 'Component A',
            node: <ComponentA />
        },
        b: {
            label: 'Component B',
            node: <ComponentB />
        }
    };

    const [current, setCurrent] = useState('a');

    const styles = useStyles();

    const stylesRulesCount = useStyleRulesCount(registry);

    return (
        <div className={styles.root}>
            <div className={styles.buttons}>
                {Object.entries(components).map(([key, {label}]) => {
                    return (
                        <button
                            type={'button'}
                            key={key}
                            onClick={() => setCurrent(key)}
                            className={styles.button}
                        >
                            {label}
                        </button>
                    );
                })}
            </div>

            <div
                className={styles.counter}
            >{`Current Number of Styles Rules: ${stylesRulesCount}`}</div>

            <div className={styles.components}>{components[current].node}</div>
        </div>
    );
};

export {App};
