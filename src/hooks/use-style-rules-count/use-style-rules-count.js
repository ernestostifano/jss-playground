import {countStyleRules} from '../../utils/count-style-rules/count-style-rules';
import {useEffect, useState, useRef} from 'react';

function useStyleRulesCount(registry) {
    const [value, setValue] = useState(null);

    const countRef = useRef(value);

    const timestamp = Date.now();

    useEffect(() => {
        const count = countStyleRules(registry);

        if (count !== countRef.current) {
            countRef.current = count;
            setValue(count);
        }
    }, [registry, timestamp]);

    return value;
}

export {useStyleRulesCount};
