import Box from '@material-ui/core/Box';
import { css } from '@emotion/react';
import { TextTitle } from 'Components/Text/Text';

export const Cellars = (): JSX.Element => (
    <div
        css={{
            display: 'flex',
            justifyContent: 'center',
        }}
    >
        <Box
            css={{
                width: '100%',
                minWidth: '400px',
                border: '1px solid var(--borderDefault)',
                borderRadius: '4px',
                backgroundColor: 'var(--bgPrimary)',
                padding: '1rem',
            }}
        >
            <TextTitle>Cellars</TextTitle>
        </Box>
    </div>
);
