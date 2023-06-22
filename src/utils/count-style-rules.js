function countStyleRules(registry) {
    if (registry) {
        const rStyleSheets = registry.registry;

        let rStyleRulesCount = 0;

        for (let i = 0; i < rStyleSheets.length; i++) {
            const rStyleSheet = rStyleSheets[i];

            const rRules = rStyleSheet.rules;

            rStyleRulesCount += rRules.index.length;
        }

        return rStyleRulesCount;
    }

    const styleSheets = document.styleSheets;
    const styleRules = [];

    for (let i = 0; i < styleSheets.length; i++) {
        const styleSheet = styleSheets[i];

        if (styleSheet instanceof CSSStyleSheet) {
            const rules = styleSheet.cssRules;

            for (let j = 0; j < rules.length; j++) {
                const rule = rules[j];

                if (rule instanceof CSSStyleRule) {
                    styleRules.push(rule);
                }
            }
        }
    }

    return styleRules.length;
}

export {countStyleRules};
