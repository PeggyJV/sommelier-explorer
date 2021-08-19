import Box from '@material-ui/core/Box';
import { TextSm } from 'Components/Text/Text';
import { ReactComponent as Logo } from 'Assets/logo.svg';

export const Footer = (): JSX.Element => {
    return (
        <div
            css={{
                width: '100%',
                position: 'fixed',
                bottom: '0',
                padding: '1rem',
                backgroundColor: 'var(--bgPrimary)',
            }}
        >
            <div css={{ width: '800px', margin: '0 auto' }}>
                <Box
                    css={{
                        '> div': { flexGrow: 1 },
                        width: '100%',
                    }}
                    display='flex'
                    justifyContent='space-btween'
                    alignItems='center'
                >
                    <Box display='flex' alignItems='center'>
                        <TextSm>Powered by Sommelier</TextSm>&nbsp;
                        <Logo height='17' />
                    </Box>
                    <Box display='flex' justifyContent='space-between'>
                        <div>
                            <TextSm>Join our Community</TextSm>
                        </div>
                        <div>
                            <TextSm>Follow our Twitter</TextSm>
                        </div>
                        <div>
                            <TextSm>Read our Blog</TextSm>
                        </div>
                    </Box>
                </Box>
            </div>
        </div>
    );
};
