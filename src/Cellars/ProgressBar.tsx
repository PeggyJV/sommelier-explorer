import { css } from '@emotion/react';

export const ProgressBar = ({ percent }: { percent: string }): JSX.Element => {
    const percentNumber = parseInt(percent) || 5;
    let variant = 'Positive';

    if (percentNumber >= 90) {
        variant = 'Accent';
    } else if (percentNumber >= 60 && percentNumber < 90) {
        variant = 'Warn';
    }

    const outer = {
        border: '1px solid var(--borderSecondary)',
        background: 'var(--bgSecondary)',
        borderRadius: '8px',
        height: '8px',
    };

    const inner = {
        background: `var(--obj${variant})`,
        width: percentNumber <= 5 ? '5%' : `${percent}%`,
        height: '10px',
        borderRadius: '8px',
        top: '-1px',
        left: '-1px',
        border: `1px solid var(--border${variant})`,
    };

    return (
        <div css={outer} style={{ position: 'relative' }}>
            {/*emotion doesnot understand position and boxsizing with css prop*/}
            <div
                css={inner}
                style={{ position: 'absolute', boxSizing: 'border-box' }}
            ></div>
        </div>
    );
};
