import {useState} from 'react';
import {useStyles} from './app.styles';
import {ComponentA} from './internals/component-a/component-a';
import {ComponentB} from './internals/component-b/component-b';
import {useStyleRulesCount} from './hooks/use-style-rules-count/use-style-rules-count';

const App = ({registry}) => {
    const styles = useStyles();

    const [state, setState] = useState('a');

    const styleRulesCount = useStyleRulesCount(registry);

    return (
        <div>
            <div className={styles.buttons}>
                <button
                    type={'button'}
                    onClick={() => setState('a')}
                    className={styles.button}
                >
                    {'Component A'}
                </button>

                <button
                    type={'button'}
                    onClick={() => setState('b')}
                    className={styles.button}
                >
                    {'Component B'}
                </button>
            </div>

            <div
                className={styles.counter}
            >{`Current Number of Styles Rules: ${styleRulesCount}`}</div>

            <div className={styles.components}>
                {state === 'a' ? <ComponentA /> : <ComponentB />}
            </div>
        </div>
    );
};

export {App};
